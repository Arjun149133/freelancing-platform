import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  ifsc: z.string().min(1, { message: "IFSC is required." }),
  bank_name: z.string().min(1, { message: "Bank name is required." }),
  account_number: z.string().min(1, { message: "Account number is required." }),
});

export async function POST(req: NextRequest) {
  const { name, ifsc, bank_name, account_number } = await req.json();
  const parsedSchema = schema.safeParse({
    name,
    ifsc,
    bank_name,
    account_number,
  });

  if (!parsedSchema.success) {
    const errors = parsedSchema.error.errors.map((err) => err.message);
    return { errors };
  }

  const user = await getUser();
  if (!user) {
    return NextResponse.json(
      { error: "User not Authenticated." },
      { status: 404 }
    );
  }

  try {
    const razorpayAccount = await prisma.razorpay_Account.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!razorpayAccount) {
      return NextResponse.json(
        { error: "Razorpay Account not found." },
        { status: 404 }
      );
    }

    const contact_details = await prisma.contact_Details.findUnique({
      where: {
        razorpayId: razorpayAccount?.id,
      },
    });

    if (!contact_details) {
      return NextResponse.json(
        { error: "Contact details not found." },
        { status: 404 }
      );
    }

    console.log("Contact Details: ", contact_details);

    const res = await axios.post(
      "https://api.razorpay.com/v1/fund_accounts",
      {
        contact_id: contact_details.contactId,
        account_type: "bank_account",
        bank_account: {
          name,
          ifsc,
          account_number,
        },
      },
      {
        auth: {
          username: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
          password: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
        },
      }
    );

    if (res.data.error) {
      return { error: "An error occurred." };
    }

    console.log("Razorpay Funds Account: ", res.data);

    const account = await prisma.razorpay_Account.update({
      where: {
        id: razorpayAccount.id,
      },
      data: {
        account_details: {
          create: {
            account_type: res.data.account_type,
            contactId: contact_details.contactId,
            bank_account: {
              create: {
                bank_name: res.data.bank_account.bank_name,
                ifsc_code: res.data.bank_account.ifsc,
                name: res.data.bank_account.name,
                account_number: res.data.bank_account.account_number,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ account: account }, { status: 201 });
  } catch (error) {
    console.log("Error Creating Funds Account: ", error);
    return { error: "An error occurred." };
  }
}
