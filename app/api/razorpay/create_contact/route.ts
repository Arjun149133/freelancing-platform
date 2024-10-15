import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email." }),
  contact: z.string().min(10, { message: "Invalid contact number." }),
  type: z.string().min(1, { message: "Type is required." }),
  reference_id: z.string().min(1, { message: "Reference ID is required." }),
});
export async function POST(req: NextRequest) {
  const { name, email, contact, type, reference_id } = await req.json();
  const parsedSchema = contactSchema.safeParse({
    name,
    email,
    contact,
    type,
    reference_id,
  });
  const user = await getUser();
  if (!user) {
    return NextResponse.json(
      { error: "User not Authenticated." },
      { status: 404 }
    );
  }

  if (!parsedSchema.success) {
    const errors = parsedSchema.error.errors.map((err) => err.message);
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    const res = await axios.post(
      "https://api.razorpay.com/v1/contacts",
      {
        name,
        email,
        contact,
        type,
        reference_id,
      },
      {
        auth: {
          username: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
          password: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
        },
      }
    );

    if (res.data.error) {
      return NextResponse.json(
        { error: "An error occurred." },
        { status: 500 }
      );
    }

    const razorpayAccount = await prisma.razorpay_Account.create({
      data: {
        userId: user.id,
        contact_details: {
          create: {
            name,
            email,
            contact,
            type,
            referenceId: reference_id,
            contactId: res.data.id,
          },
        },
      },
      include: {
        contact_details: true,
      },
    });

    return NextResponse.json(
      { razorpayAccount: razorpayAccount },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error Creating Contact: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
