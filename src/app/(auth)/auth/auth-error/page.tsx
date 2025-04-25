import PageLayout from "@/components/Utilities/PageLayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AuthError() {
  const router = useRouter();

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Authentication Error</h2>
        <Button onClick={() => router.push("/")}>Go to home</Button>
      </div>
    </PageLayout>
  );
}
