"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isValidEmail, isValidPassword } from "@/utils/validate";
import { createClient } from "@/utils/supabase/server";

export async function signin() {
  redirect("/sign-in");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const devToken = formData.get("devToken") as string;

  // Get the admin developer token from environment variables
  const adminDevToken = process.env.ADMIN_DEV_TOKEN;

  try {
    // Validate developer token
    if (!devToken || devToken !== adminDevToken) {
      throw new Error(
        "Invalid developer token. You are not authorized to create an admin account."
      );
    }

    // Validate email format
    if (!email || !isValidEmail(email)) {
      throw new Error("Please enter a valid email address");
    }

    // Validate password
    if (!password || !isValidPassword(password)) {
      throw new Error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
    }

    // Validate names
    if (!firstName || !lastName) {
      throw new Error("Please enter both first and last name");
    }

    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`,
          role: "admin", // Set the user role to admin
        },
      },
    });

    if (authError) {
      console.error("Authentication error:", authError.message);
      redirect(`/sign-up/error?error=${encodeURIComponent(authError.message)}`);
    }

    // If auth was successful, we can also add this user to an admin group or set admin claims
    // This depends on your Supabase setup - you might need to use RLS policies or custom claims
    try {
      // Add user to the admin group or set admin role in a separate table if needed
      // Example if you have an admins table:
      const { error: dbError } = await supabase.from("user_roles").insert({
        user_id: authData?.user?.id,
        role: "admin",
      });

      if (dbError) {
        console.error("Database error:", dbError.message);
        // Continue despite error - the user is created but role assignment failed
      }
    } catch (error) {
      console.error("Failed to set admin role:", error);
      // Continue despite error
    }

    revalidatePath("/", "layout");
    redirect("/sign-up/sent");
  } catch (error) {
    // Handle any errors that occurred during the process
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Signup error:", errorMessage);

    // Redirect to the error page with the error message
    redirect(`/sign-up/error?error=${encodeURIComponent(errorMessage)}`);
  }
}
