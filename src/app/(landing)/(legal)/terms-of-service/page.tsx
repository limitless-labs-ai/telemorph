import { Metadata } from "next";
import PageLayout from "@/components/Utilities/PageLayout";
import LegalContent from "@/components/Legal Documents/LegalContent";
import { termsOfService, defaultMetadata } from "@/config/legal/terms";

export const metadata: Metadata = defaultMetadata;

export default function TermsOfService() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <LegalContent
          sections={termsOfService.sections}
          lastUpdated={termsOfService.lastUpdated}
        />
      </div>
    </PageLayout>
  );
}
