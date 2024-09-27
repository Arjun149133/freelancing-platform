"use server";
import prisma from "@/db/prisma";
import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const data = await prisma.user.findUnique({
    where: {
      email: user?.email,
    },
  });

  return data;
}
