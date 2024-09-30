import prisma from "@/db/prisma";
import { requestSchema } from "@/schemas/projectSchema";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Handle GET requests if needed
  return NextResponse.json({
    message: "GET request not implemented(for this route not required).",
  });
}

export async function POST(req: NextRequest) {
  const { project, userRole, userId } = await req.json();

  const parsedResult = requestSchema.safeParse({ project, userRole, userId });

  if (!parsedResult.success) {
    const errors = parsedResult.error.errors.map((err) => err.message);
    return NextResponse.json({ errors }, { status: 400 });
  }

  if (parsedResult.data.userRole === "FREELANCER") {
    return NextResponse.json(
      {
        error: "Freelancers cannot create projects.",
      },
      {
        status: 403,
      }
    );
  }

  try {
    const data = await prisma.project.create({
      data: {
        ...parsedResult.data.project,
        clientId: parsedResult.data.userId,
      },
    });

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project." },
      { status: 500 }
    );
  }
}
