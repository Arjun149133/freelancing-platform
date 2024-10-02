import prisma from "@/db/prisma";
import { NextResponse, type NextRequest } from "next/server";
import { profileSchema } from "@/schemas/profileSchema";

export async function POST(req: NextRequest) {
  const profile = await req.json();
  const parsedProfile = profileSchema.safeParse(profile);

  if (!parsedProfile.success) {
    const errors = parsedProfile.error.errors.map((err) => err.message);
    return NextResponse.json({ errors }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: parsedProfile.data.userId,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  try {
    const data = await prisma.profile.create({
      data: {
        userId: parsedProfile.data.userId,
        bio: parsedProfile.data.bio,
        profilePictureUrl: parsedProfile.data.profilePictureUrl,
        skills: {
          create: parsedProfile.data.skills || [],
        },
        experience: {
          create: parsedProfile.data.experience || [],
        },
        education: {
          create: parsedProfile.data.education || [],
        },
        certificates: {
          create: parsedProfile.data.certificates || [],
        },
      },
    });

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.log("Error Creating Profile: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
