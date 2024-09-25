import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const user = await request.json();
  const { email, user_metadata } = user;
  const first_name = user_metadata.full_name.split(" ")[0];
  const last_name = user_metadata.full_name.split(" ")[1];

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return NextResponse.json({
      success: false,
      message: "User already exists",
    });
  }

  try {
    await prisma.user.create({
      data: {
        email,
        first_name,
        last_name,
      },
    });

    return NextResponse.json({
      success: true,
      message: "User created",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Error creating user " + error,
    });
  }
}
