import React from "react";
import { JobItem } from "@/types";
import JobCard from "./JobCard";

interface DepartmentSectionProps {
  department: string;
  jobs: JobItem[];
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({
  department,
  jobs,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">{department}</h2>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentSection;
