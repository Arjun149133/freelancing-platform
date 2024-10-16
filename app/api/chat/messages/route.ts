import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  content: z.string().min(1, { message: "Content is required." }),
  receiverId: z.string().min(1, { message: "Receiver ID is required." }),
});
export async function POST(req: NextRequest) {
  const { content, receiverId } = await req.json();
  const safeContent = schema.safeParse({ content, receiverId });
  if (!safeContent.success) {
    return NextResponse.json(
      { error: "Content is required." },
      { status: 400 }
    );
  }
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
        OR: [
          {
            user1Id: user.id,
            user2Id: receiverId,
          },
          {
            user1Id: receiverId,
            user2Id: user.id,
          },
        ],
      },
    });

    if (!chat) {
      return NextResponse.json({ error: "Chat not found." }, { status: 404 });
    }

    const message = await prisma.message.create({
      data: {
        content,
        chatId: chat.id,
        senderId: user.id,
      },
    });

    return NextResponse.json({ messageSent: message }, { status: 200 });
  } catch (error) {
    console.log("Error in sending message: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { messageId } = await req.json();
  const parsedMessageId = z.string().safeParse(messageId);
  if (!parsedMessageId.success) {
    return NextResponse.json(
      { error: "Message ID is required." },
      { status: 400 }
    );
  }
  const user = await getUser();
  if (!user) {
    return NextResponse.json(
      { error: "User not authenticated." },
      { status: 404 }
    );
  }

  try {
    const message = await prisma.message.findUnique({
      where: {
        id: messageId,
      },
    });

    if (!message) {
      return NextResponse.json(
        { error: "Message not found." },
        { status: 404 }
      );
    }

    if (message.senderId !== user.id) {
      return NextResponse.json(
        { error: "You are not authorized to delete this message." },
        { status: 403 }
      );
    }

    await prisma.message.delete({
      where: {
        id: messageId,
      },
    });

    return NextResponse.json({ messageDeleted: message }, { status: 200 });
  } catch (error) {
    console.log("Error in deleting message: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { messageId, content } = await req.json();
  const parsedMessageId = z.string().safeParse(messageId);
  const parsedContent = z.string().safeParse(content);
  if (!parsedMessageId.success || !parsedContent.success) {
    return NextResponse.json(
      { error: "Message ID and Content are required." },
      { status: 400 }
    );
  }
  const user = await getUser();
  if (!user) {
    return NextResponse.json(
      { error: "User not authenticated." },
      { status: 404 }
    );
  }

  try {
    const message = await prisma.message.findUnique({
      where: {
        id: messageId,
      },
    });

    if (!message) {
      return NextResponse.json(
        { error: "Message not found." },
        { status: 404 }
      );
    }

    if (message.senderId !== user.id) {
      return NextResponse.json(
        { error: "You are not authorized to edit this message." },
        { status: 403 }
      );
    }

    const updatedMessage = await prisma.message.update({
      where: {
        id: messageId,
      },
      data: {
        content,
      },
    });

    return NextResponse.json(
      { messageUpdated: updatedMessage },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error in updating message: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
