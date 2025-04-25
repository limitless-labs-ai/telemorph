"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function resetPassword(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    throw new Error("Email is required");
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm?next=/auth/update-password`,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/reset-password/confirmation");
}
