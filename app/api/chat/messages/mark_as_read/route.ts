import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { chatId } = await req.json();
  const user = await getUser();
  if (!user) {
    return NextResponse.json(
      { error: "User not authenticated." },
      { status: 404 }
    );
  }

  try {
    const chat = await prisma.chat.findFirst({
      where: {
        id: chatId,
      },
    });

    if (!chat) {
      return NextResponse.json({ error: "Chat not found." }, { status: 404 });
    }

    const messages = await prisma.message.findMany({
      where: {
        chatId: chat.id,
      },
    });

    const res = await prisma.message.updateMany({
      where: {
        chatId: chat.id,
        senderId: {
          not: user.id,
        },
      },
      data: {
        isRead: true,
      },
    });

    return NextResponse.json(
      { messages, res: res, chat, user },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in marking as read: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
