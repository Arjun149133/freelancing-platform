import prisma from "@/db/prisma";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;

  try {
    const data = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
      include: {
        freelancers: true,
        proposals: true,
      },
    });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Failed to fetch project." },
      { status: 500 }
    );
  }
}
