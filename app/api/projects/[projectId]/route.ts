import prisma from "@/db/prisma";
import { updatedProjectSchema } from "@/schemas/projectSchema";
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

export async function PUT(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  const { project, userId } = await req.json();

  const parsedProject = updatedProjectSchema.safeParse({ project, userId });

  if (!parsedProject.success) {
    const errors = parsedProject.error.errors.map((err) => err.message);
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    const existingProject = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (existingProject?.clientId !== parsedProject.data.userId) {
      return NextResponse.json(
        {
          error: "You are not authorized to update this project.",
        },
        {
          status: 403,
        }
      );
    }
  } catch (error) {
    console.error("Error finding the project:", error);
    return NextResponse.json(
      { error: "Failed to find the project." },
      { status: 500 }
    );
  }

  try {
    const updatedProject = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        ...parsedProject.data.project,
      },
    });

    return NextResponse.json({ data: updatedProject }, { status: 200 });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Failed to update project." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  const { userId } = await req.json();

  try {
    const existingProject = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!existingProject) {
      return NextResponse.json(
        {
          error: "Project not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (existingProject?.clientId !== userId) {
      return NextResponse.json(
        {
          error: "You are not authorized to delete this project.",
        },
        {
          status: 403,
        }
      );
    }
  } catch (error) {
    console.error("Error finding the project:", error);
    return NextResponse.json(
      { error: "Failed to find the project." },
      { status: 500 }
    );
  }

  try {
    await prisma.project.delete({
      where: {
        id: projectId,
      },
    });

    return NextResponse.json(
      { message: "Project deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project." },
      { status: 500 }
    );
  }
}
