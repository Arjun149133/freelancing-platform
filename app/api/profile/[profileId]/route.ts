import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { profileId: string } }
) {
  const { profileId } = params;

  const profile = await prisma.profile.findUnique({
    where: {
      userId: profileId,
    },
    include: {
      skills: true,
      experience: true,
      education: true,
      certificates: true,
    },
  });

  if (!profile) {
    return NextResponse.json({ error: "Profile not found." }, { status: 404 });
  }

  return NextResponse.json({ data: profile }, { status: 200 });
}
