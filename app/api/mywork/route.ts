import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await getUser();

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  try {
    const myContracts = await prisma.contract.findMany({
      where: {
        freelancerId: user.id,
      },
    });

    //fetching all the works based on the contracts
    const myWork = await Promise.all(
      myContracts.map(async (contract) => {
        return await prisma.project.findFirst({
          where: {
            id: contract.projectId,
          },
        });
      })
    );

    return NextResponse.json(
      { myWork: myWork },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error getting prev work: ", error);
    return NextResponse.json(
      { error: "Error getting previous work" },
      { status: 500 }
    );
  }
}
