import { getUser } from "@/actions/user";
import prisma from "@/db/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

//****CURRENTLY UNSAFE ROUTE, DUE TO INCOMPLETE KYC */

export async function POST(req: NextRequest) {
  const { amount } = await req.json();
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
      include: {
        account_details: true,
      },
    });

    if (!razorpayAccount) {
      return NextResponse.json(
        {
          error:
            "Razorpay Account not found. Create a razorpay funds account first!",
        },
        { status: 404 }
      );
    }

    const res = await axios.post(
      "https://api.razorpay.com/v1/payouts",
      {
        account_number: process.env.NEXT_PUBLIC_ACCOUNT_NUMBER!,
        fund_account_id: razorpayAccount.account_details?.fund_account_id,
        amount,
        currency: "INR",
        mode: "IMPS",
        purpose: "payout",
        queue_if_low_balance: true,
        reference_id: "Test Mode Transactions",
      },
      {
        auth: {
          username: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
          password: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
        },
      }
    );

    if (res.data.error) {
      return NextResponse.json({ error: res.data.error }, { status: 500 });
    }

    return NextResponse.json({
      success: "Payout created successfully.",
      res: res.data,
    });
  } catch (error) {
    console.log("Error creating payout: ", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
