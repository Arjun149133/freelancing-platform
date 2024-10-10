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

const statusSchema = z.object({
  status: z.enum(["ACCEPTED", "REJECTED", "PENDING"]).optional(),
  orderCreationId: z.string(),
  razorpayPaymentId: z.string(),
  razorpaySignature: z.string(),
});

export async function POST(
  req: Request,
  { params }: { params: { proposalId: string; projectId: string } }
) {
  const { proposalId, projectId } = params;
  const schema = await req.json();
  const parsedSchema = statusSchema.safeParse(schema);
  const user = await getUser();

  if (!parsedSchema.success) {
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
        status: parsedSchema.data.status || "PENDING",
      },
    });

    if (parsedSchema.data.status !== "ACCEPTED") {
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

    const payment = await prisma.payment.create({
      data: {
        contractId: newContract.id,
        userId: project.clientId,
        amount: updatedProposal.price,
      },
    });

    const razorpay = await prisma.razorpay.create({
      data: {
        orderId: parsedSchema.data.orderCreationId,
        paymentId: parsedSchema.data.razorpayPaymentId,
        signature: parsedSchema.data.razorpaySignature,
      },
    });

    await prisma.payment.update({
      where: {
        id: payment.id,
      },
      data: {
        razorpayId: razorpay.id,
        status: "COMPLETED",
      },
    });

    const escrow = await prisma.escrow.create({
      data: {
        contractId: newContract.id,
        amount: updatedProposal.price,
        status: "FUNDED",
      },
    });

    return NextResponse.json(
      {
        proposal: updatedProposal,
        contract: newContract,
        payment: payment,
        escrow: escrow,
      },
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
