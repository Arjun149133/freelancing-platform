import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        freelancers: true,
        proposals: true,
      },
    });

    return NextResponse.json({ project: project }, { status: 200 });
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
