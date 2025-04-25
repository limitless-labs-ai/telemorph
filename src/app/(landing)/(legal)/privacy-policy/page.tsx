import { Metadata } from "next";
import PageLayout from "@/components/Utilities/PageLayout";
import LegalContent from "@/components/Legal Documents/LegalContent";
import { privacyPolicy, defaultMetadata } from "@/config/legal/privacy";

export const metadata: Metadata = defaultMetadata;

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <LegalContent
          sections={privacyPolicy.sections}
          lastUpdated={privacyPolicy.lastUpdated}
        />
      </div>
    </PageLayout>
  );
}
