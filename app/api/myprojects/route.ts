import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const user = await getUser();

  try {
    const myProjects = await prisma.project.findMany({
      where: {
        clientId: user?.id,
      },
    });

    return NextResponse.json(
      {
        myProjects: myProjects,
        user: user,
      },
      {
        status: 200,
      }
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
