"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowButton } from "@/components/ui/arrow-button";

export default function SignUpErrorPage() {
  const searchParams = useSearchParams();
  const error =
    searchParams.get("error") || "An error occurred during sign up.";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-[400px] space-y-8">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign Up Error
            </h1>
            <div className="p-4 my-4 bg-red-50 border border-red-200 rounded-md text-red-700">
              {error}
            </div>
            <p className="text-sm text-muted-foreground">
              Please try again or contact an administrator for assistance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/sign-up" className="w-full">
              <ArrowButton className="w-full" variant="outline">
                Back to Sign Up
              </ArrowButton>
            </Link>

            <Link href="/sign-in" className="w-full">
              <ArrowButton className="w-full" variant="outline">
                Go to Sign In
              </ArrowButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
