import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUser();

  try {
    const reviewsReceived = await prisma.review.findMany({
      where: {
        reviewReceiverId: user?.id,
      },
    });

    return NextResponse.json(
      {
        reviewsReceived: reviewsReceived,
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
