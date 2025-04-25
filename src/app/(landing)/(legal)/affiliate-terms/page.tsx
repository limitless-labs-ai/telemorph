import { Metadata } from "next";
import PageLayout from "@/components/Utilities/PageLayout";
import LegalContent from "@/components/Legal Documents/LegalContent";
import { affiliateTerms, defaultMetadata } from "@/config/legal/affiliate";

export const metadata: Metadata = defaultMetadata;

export default function AffiliateTerms() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Affiliate Terms</h1>
        <LegalContent
          sections={affiliateTerms.sections}
          lastUpdated={affiliateTerms.lastUpdated}
        />
      </div>
    </PageLayout>
  );
}
