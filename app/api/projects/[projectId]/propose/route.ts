import prisma from "@/db/prisma";
import { proposalSchema } from "@/schemas/proposalSchema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { projectId: string } }
) {
  const { projectId } = params;
  const proposal = await req.json();
  const parsedProposal = proposalSchema.safeParse(proposal);

  if (!parsedProposal.success) {
    const errors = parsedProposal.error.errors.map((err) => err.message);
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId,
      },
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found." },
        { status: 404 }
      );
    }

    if (project.clientId === parsedProposal.data.freelancerId) {
      return NextResponse.json(
        { error: "You can't propose to your own project." },
        { status: 400 }
      );
    }

    //checking if the project is already proposed by the freelancer
    const existingProposal = await prisma.proposal.findFirst({
      where: {
        projectId,
        freelancerId: parsedProposal.data.freelancerId,
      },
    });

    if (existingProposal) {
      return NextResponse.json(
        { error: "You have already proposed to this project." },
        { status: 400 }
      );
    }

    const updatedProject = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        proposals: {
          create: parsedProposal.data,
        },
      },
    });

    return NextResponse.json({ data: updatedProject }, { status: 201 });
  } catch (error) {
    console.error("Error proposing project:", error);
    return NextResponse.json(
      { error: "Failed to propose project." },
      { status: 500 }
    );
  }
}
