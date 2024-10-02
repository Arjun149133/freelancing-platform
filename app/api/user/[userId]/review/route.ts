import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const reviewSchema = z.object({
  projectId: z.string(),
  rating: z.number().positive(),
  feedback: z.string().min(1, { message: "Feedback is required" }),
});

export async function POST(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const review = await req.json();
  const userId = params.userId;
  const parsedReview = reviewSchema.safeParse(review);
  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      { error: "User not authenticated to give review" },
      { status: 404 }
    );
  }

  if (!parsedReview.success) {
    return NextResponse.json(
      { error: "Invalid review data", details: parsedReview.error },
      { status: 400 }
    );
  }

  try {
    const projectId = parsedReview.data.projectId;

    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return NextResponse.json(
        { error: "There is no such project to give review" },
        { status: 404 }
      );
    }

    const review = await prisma.review.create({
      data: {
        ...parsedReview.data,
        reviewGiverId: user.id,
        reviewReceiverId: userId,
      },
    });

    return NextResponse.json({ review }, { status: 201 });
  } catch (error) {
    console.error("Error in creating review: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
