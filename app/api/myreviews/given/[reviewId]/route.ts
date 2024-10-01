import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const reviewSchema = z.object({
  rating: z.number().positive(),
  feedback: z.string().min(1, { message: "Feedback is required" }),
});

export async function GET(
  req: Request,
  { params }: { params: { reviewId: string } }
) {
  const { reviewId } = params;

  try {
    const review = await prisma.review.findUnique({
      where: {
        id: reviewId,
      },
    });

    return NextResponse.json(
      {
        review: review,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error getting reviews given: ", error);
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

export async function PUT(
  req: Request,
  { params }: { params: { reviewId: string } }
) {
  const user = await getUser();
  const review = await req.json();
  const parsedReview = reviewSchema.safeParse(review);

  if (!user) {
    return NextResponse.json(
      {
        error: "User not authenticated to update review",
      },
      {
        status: 404,
      }
    );
  }

  if (!parsedReview.success) {
    return NextResponse.json(
      {
        error: "Invalid review data",
        details: parsedReview.error,
      },
      {
        status: 400,
      }
    );
  }

  try {
    const review = await prisma.review.findUnique({
      where: {
        id: params.reviewId,
      },
    });

    if (!review) {
      return NextResponse.json(
        {
          error: "Review not found",
        },
        {
          status: 404,
        }
      );
    }

    if (review.reviewGiverId !== user.id) {
      return NextResponse.json(
        {
          error: "User not authorized to update review",
        },
        {
          status: 403,
        }
      );
    }

    const updatedReview = await prisma.review.update({
      where: {
        id: params.reviewId,
      },
      data: {
        rating: parsedReview.data.rating,
        feedback: parsedReview.data.feedback,
      },
    });

    return NextResponse.json(
      {
        review: updatedReview,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating review: ", error);
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

export async function DELETE(
  req: Request,
  { params }: { params: { reviewId: string } }
) {
  const user = await getUser();

  if (!user) {
    return NextResponse.json(
      {
        error: "User not authenticated to delete review",
      },
      {
        status: 404,
      }
    );
  }

  try {
    const review = await prisma.review.findUnique({
      where: {
        id: params.reviewId,
      },
    });

    if (!review) {
      return NextResponse.json(
        {
          error: "Review not found",
        },
        {
          status: 404,
        }
      );
    }

    if (review.reviewGiverId !== user.id) {
      return NextResponse.json(
        {
          error: "User not authorized to delete review",
        },
        {
          status: 403,
        }
      );
    }

    await prisma.review.delete({
      where: {
        id: params.reviewId,
      },
    });

    return NextResponse.json(
      {
        message: "Review deleted successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error deleting review: ", error);
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
