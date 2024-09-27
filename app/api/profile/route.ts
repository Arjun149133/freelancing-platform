import prisma from "@/db/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const profile = await req.json();

  // Get the user from Supabase
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) {
    return NextResponse.json(
      { error: "Authentication failed." },
      { status: 401 }
    );
  }

  // Ensure user is authenticated
  if (!user) {
    return NextResponse.json(
      { error: "User not authenticated." },
      { status: 401 }
    );
  }

  try {
    const data = await prisma.profile.create({
      data: {
        ...profile,
        userId: user.id,
      },
    });

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { error: "Failed to create profile." },
      { status: 500 }
    );
  }
}
