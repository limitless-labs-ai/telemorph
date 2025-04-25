"use client";
import PageLayout from "@/components/Utilities/PageLayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function ErrorPage() {
  const router = useRouter();
  return (
    <PageLayout>
      <div className="space-y-4">
        <p className="text-xl font-semibold">Sorry, something went wrong...</p>

        <div className="py-4">
          <h2 className="text-lg font-medium">Error might be due to:</h2>
          <ul className="text-muted-foreground">
            <li>You are not authorized to access this page</li>
            <li>You have not verified your email</li>
            <li>You have not signed up</li>
            <li>You have already confirmed your email</li>
          </ul>
        </div>
      </div>
      <Button onClick={() => router.push("/")} className="cursor-pointer">
        Go to home
      </Button>
    </PageLayout>
  );
}
