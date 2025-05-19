import React from "react";
import Link from "next/link";
import PageLayout from "@/components/Utilities/PageLayout";
// import { Button } from "@/components/ui/button";
import { getJobData } from "@/lib/jobs";
import { notFound } from "next/navigation";
import ApplicationForm from "@/components/Careers/ApplicationForm";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import { supabaseServer } from "@/utils/supabase/server";
// import { Metadata } from "next";

interface JobPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Removed: export const revalidate = 60;

// Removed: async function getCareer(id: string) { ... }

export default async function JobPage({ params }: JobPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  try {
    const job = await getJobData(id);

    return (
      <PageLayout>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to all jobs
          </Link>

          <div className="border-b pb-6">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>{job.department}</span>
              <span>•</span>
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.employmentType}</span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <article
              className="article"
              dangerouslySetInnerHTML={{ __html: job.contentHtml }}
            />
          </div>

          <ApplicationForm jobTitle={job.title} />
        </div>
      </PageLayout>
    );
  } catch /* Removed: (error) */ {
    notFound();
  }
}
