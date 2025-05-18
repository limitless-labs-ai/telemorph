import React from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import { getJobsByDepartment } from "@/lib/jobs";
import DepartmentSection from "@/components/Careers/DepartmentSection";

export default async function Careers() {
  const jobsByDepartment = await getJobsByDepartment();
  const hasJobs = Object.keys(jobsByDepartment).length > 0;

  return (
    <PageLayout>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Careers at Telemorph</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Join our team and help shape the future of telecommunications. We're
            looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {hasJobs ? (
          <>
            <div className="grid gap-8">
              {Object.entries(jobsByDepartment).map(([department, jobs]) => (
                <DepartmentSection
                  key={department}
                  department={department}
                  jobs={jobs}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              No positions currently available
            </h2>
            <p className="text-muted-foreground mb-6">
              Check back soon for new opportunities.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
