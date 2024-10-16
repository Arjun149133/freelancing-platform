import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const { receiverId: user2Id } = await req.json();
  const parsedUser2Id = z.string().safeParse(user2Id);

  if (!parsedUser2Id.success) {
    return NextResponse.json(
      { error: "User2 ID is required. and it should be a String!" },
      { status: 400 }
    );
  }

  const user = await getUser();

  if (!user) {
    return NextResponse.json("User not authenticated", { status: 404 });
  }

  try {
    const user2 = await prisma.user.findUnique({
      where: {
        id: user2Id,
      },
    });

    if (!user2) {
      return NextResponse.json("User2 not found", { status: 404 });
    }

    const existingChat = await prisma.chat.findFirst({
      where: {
        OR: [
          {
            user1Id: user.id,
            user2Id,
          },
          {
            user1Id: user2Id,
            user2Id: user.id,
          },
        ],
      },
      include: {
        messages: true,
      },
    });

    if (existingChat) {
      return NextResponse.json(
        {
          existingChat: existingChat,
        },
        {
          status: 200,
        }
      );
    }

    const chat = await prisma.chat.create({
      data: {
        user1Id: user.id,
        user2Id,
      },
      include: {
        messages: true,
      },
    });

    return NextResponse.json(
      {
        chat,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json("Error creating chat", { status: 500 });
  }
}
