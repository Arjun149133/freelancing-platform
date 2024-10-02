import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

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

    if (!proposal) {
      return NextResponse.json(
        { error: "Proposal not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ proposal }, { status: 200 });
  } catch (error) {
    console.error("Error fetching proposal: ", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { proposalId: string } }
) {
  const { proposalId } = params;
  const user = await getUser();

  try {
    const proposal = await prisma.proposal.findUnique({
      where: {
        id: proposalId,
      },
    });

    if (!proposal) {
      return NextResponse.json(
        { error: "Proposal not found." },
        { status: 404 }
      );
    }

    if (proposal.freelancerId !== user?.id) {
      return NextResponse.json(
        { error: "You are not authorized to delete this proposal." },
        { status: 403 }
      );
    }

    await prisma.proposal.delete({
      where: {
        id: proposalId,
      },
    });

    return NextResponse.json(
      { message: "Proposal deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting proposal: ", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
