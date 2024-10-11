import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { proposalId: string } }
) {
  const { proposalId } = params;
  try {
    const acceptedProposals = await prisma.proposal.findMany({
      where: {
        id: proposalId,
        status: "ACCEPTED",
      },
    });

    return NextResponse.json({ acceptedProposals }, { status: 200 });
  } catch (error) {
    console.error("Error fetching accepted Proposals: ", error);
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
