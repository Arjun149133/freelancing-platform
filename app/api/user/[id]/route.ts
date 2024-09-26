import prisma from "@/db/prisma";
import { createClient } from "@/utils/supabase/server";
import { cookies, headers } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const header = headers();
  const userr = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    id: id,
    userr: userr,
    header: header,
    user: user,
  });
}
