import prisma from "@/db/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const Category = z.enum([
  "WEB_DEVELOPMENT",
  "MOBILE_DEVELOPMENT",
  "GRAPHIC_DESIGN",
  "DIGITAL_MARKETING",
  "WRITING",
  "VIDEO_EDITING",
  "OTHER",
]);

export async function GET(
  req: Request,
  { params }: { params: { category: string } }
) {
  const category = params.category;
  const upperCaseCategory = category.toUpperCase();

  const parsedCategory = Category.safeParse(upperCaseCategory);

  if (!parsedCategory.success) {
    return NextResponse.json({ error: "Invalid category." }, { status: 400 });
  }

  try {
    const jobs = await prisma.project.findMany({
      where: {
        jobCategory: parsedCategory.data,
      },
    });

    return NextResponse.json({ jobs: jobs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching jobs." },
      { status: 500 }
    );
  }
}
