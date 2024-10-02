import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getUser();

  try {
    const reviewsGiven = await prisma.review.findMany({
      where: {
        reviewGiverId: user?.id,
      },
    });

    return NextResponse.json(
      {
        reviewsGiven: reviewsGiven,
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
