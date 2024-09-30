import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await getUser();
  try {
    const proposals = await prisma.proposal.findMany({
      where: {
        freelancerId: user?.id,
      },
    });

    return NextResponse.json(
      { myProposals: proposals, userId: user?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching proposals: ", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
