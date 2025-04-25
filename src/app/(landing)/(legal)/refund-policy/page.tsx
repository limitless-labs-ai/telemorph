import { Metadata } from "next";
import PageLayout from "@/components/Utilities/PageLayout";
import LegalContent from "@/components/Legal Documents/LegalContent";
import { refundPolicy, defaultMetadata } from "@/config/legal/refund";

export const metadata: Metadata = defaultMetadata;

export default function RefundPolicy() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <LegalContent
          sections={refundPolicy.sections}
          lastUpdated={refundPolicy.lastUpdated}
        />
      </div>
    </PageLayout>
  );
}
