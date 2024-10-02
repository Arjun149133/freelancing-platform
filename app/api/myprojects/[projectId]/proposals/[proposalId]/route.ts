import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { proposalId: string } }
) {
  const { proposalId } = params;
  try {
    const proposal = await prisma.proposal.findUnique({
      where: {
        id: proposalId,
      },
    });

    return NextResponse.json({ proposal }, { status: 200 });
  } catch (error) {
    console.error("Error handling user: ", error);
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}

const statusSchema = z.enum(["ACCEPTED", "REJECTED", "PENDING"]);

export async function POST(
  req: Request,
  { params }: { params: { proposalId: string; projectId: string } }
) {
  const { proposalId, projectId } = params;
  const status = await req.json();
  const parsedStatus = statusSchema.safeParse(status);
  const user = await getUser();

  if (!parsedStatus.success) {
    return NextResponse.json(
      {
        error: "Invalid status.",
      },
      {
        status: 400,
      }
    );
  }
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });
    if (!project) {
      return NextResponse.json(
        {
          error: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (project?.clientId !== user?.id) {
      return NextResponse.json(
        {
          error: "You are not authorized to accept this proposal.",
        },
        {
          status: 403,
        }
      );
    }

    const updatedProposal = await prisma.proposal.update({
      where: {
        id: proposalId,
      },
      data: {
        status: parsedStatus.data,
      },
    });

    if (parsedStatus.data !== "ACCEPTED") {
      return NextResponse.json({ proposal: updatedProposal }, { status: 200 });
    }

    const newContract = await prisma.contract.create({
      data: {
        projectId: projectId,
        freelancerId: updatedProposal.freelancerId,
        clientId: project?.clientId,
        amount: updatedProposal.price,
        status: "ACTIVE",
      },
    });

    return NextResponse.json(
      { proposal: updatedProposal, contract: newContract },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling user: ", error);
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 500,
      }
    );
  }
}
