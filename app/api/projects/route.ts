import prisma from "@/db/prisma";
import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Handle GET requests if needed
  return NextResponse.json({ message: "GET request not implemented." });
}

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const project = await req.json();

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
    const data = await prisma.project.create({
      data: {
        ...project,
        clientId: user.id, // Use user.id directly since it's guaranteed to exist now
      },
    });

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error); // Log the error for debugging
    return NextResponse.json(
      { error: "Failed to create project." },
      { status: 500 }
    );
  }
}
