import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  const user = await getUser();

  try {
    const existingProject = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!existingProject) {
      return NextResponse.json(
        {
          error: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (existingProject.clientId !== user?.id) {
      return NextResponse.json(
        {
          error: "You are not authorized to release funds for this project.",
        },
        {
          status: 403,
        }
      );
    }

    const existingContract = await prisma.contract.findFirst({
      where: {
        projectId: projectId,
      },
    });

    if (!existingContract) {
      return NextResponse.json(
        {
          error: "No contract found for this project.",
        },
        {
          status: 404,
        }
      );
    }

    if (existingContract.status === "COMPLETED") {
      return NextResponse.json(
        {
          error: "Funds have already been released for this project.",
        },
        {
          status: 403,
        }
      );
    }

    const updatedContract = await prisma.contract.update({
      where: {
        id: existingContract.id,
      },
      data: {
        status: "COMPLETED",
      },
    });
    console.log("hello: ", existingContract.id);
    const existingEscrow = await prisma.escrow.findFirst({
      where: {
        contractId: existingContract.id,
      },
    });

    if (!existingEscrow) {
      return NextResponse.json(
        {
          error: "No escrow found for this contract.",
        },
        {
          status: 404,
        }
      );
    }

    const freelancer = await prisma.user.findUnique({
      where: {
        id: existingContract.freelancerId,
      },
    });

    if (!freelancer) {
      return NextResponse.json(
        {
          error: "Freelancer not found.",
        },
        {
          status: 404,
        }
      );
    }

    const updatedFreelancer = await prisma.user.update({
      where: {
        id: freelancer.id,
      },
      data: {
        balance: freelancer.balance + existingEscrow.amount,
      },
    });

    const updatedEscrow = await prisma.escrow.update({
      where: {
        id: existingEscrow.id,
      },
      data: {
        status: "RELEASED",
      },
    });

    return NextResponse.json(
      {
        contract: updatedContract,
        escrow: updatedEscrow,
        freelancer: updatedFreelancer,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project." },
      { status: 500 }
    );
  }
}
