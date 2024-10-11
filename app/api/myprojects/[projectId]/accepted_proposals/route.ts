import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  try {
    const acceptedProposals = await prisma.proposal.findMany({
      where: {
        projectId: projectId,
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
