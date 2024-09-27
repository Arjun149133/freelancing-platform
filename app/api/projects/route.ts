import prisma from "@/db/prisma";
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().min(1, { message: "Description is required." }),
  budget: z.number().positive("Budget must be a positive number."),
  jobCategory: z.enum([
    "WEB_DEVELOPMENT",
    "MOBILE_DEVELOPMENT",
    "GRAPHIC_DESIGN",
    "DIGITAL_MARKETING",
    "WRITING",
    "VIDEO_EDITING",
    "OTHER",
  ]),
});

const requestSchema = z.object({
  project: projectSchema,
  userRole: z.enum(["CLIENT", "FREELANCER"]),
  userId: z.string({ message: "User ID is required." }),
});

export async function GET(req: NextRequest) {
  // Handle GET requests if needed
  return NextResponse.json({ message: "GET request not implemented." });
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
