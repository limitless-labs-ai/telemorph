import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobItem } from "@/types";

interface JobCardProps {
  job: JobItem;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-medium">{job.title}</h3>
          <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
            <span>{job.department}</span>
            <span>•</span>
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.employmentType}</span>
          </div>
        </div>
        <Link className="cursor-pointer" href={`/careers/${job.id}`}>
          <Button>Apply Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
