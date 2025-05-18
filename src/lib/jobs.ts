import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { createClient } from "@/utils/supabase/server";

import type { JobItem, JobDetail } from "@/types";

const bucketName = "jobs";

export const getAllJobs = async (): Promise<JobItem[]> => {
  const supabase = await createClient();
  const { data: files, error } = await supabase.storage.from(bucketName).list();

  if (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }

  // Filter only markdown files
  const markdownFiles = files
    ? files.filter((file) => file.name.endsWith(".md"))
    : [];

  // Process all files
  const jobsPromises = markdownFiles.map(async (file) => {
    const id = file.name.replace(/\.md$/, "");

    const { data, error: downloadError } = await supabase.storage
      .from(bucketName)
      .download(file.name);

    if (downloadError) {
      console.error(`Error downloading file ${file.name}:`, downloadError);
      return null;
    }

    const fileContents = await data.text();
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      department: matterResult.data.department,
      location: matterResult.data.location,
      employmentType: matterResult.data.employmentType,
      date: matterResult.data.date,
    };
  });

  const allJobs = (await Promise.all(jobsPromises)).filter(
    Boolean
  ) as JobItem[];

  // Sort jobs by date (newest first)
  return allJobs.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    } else {
      return 1;
    }
  });
};

export const getJobsByDepartment = async (): Promise<
  Record<string, JobItem[]>
> => {
  const allJobs = await getAllJobs();
  const jobsByDepartment: Record<string, JobItem[]> = {};

  allJobs.forEach((job) => {
    if (!jobsByDepartment[job.department]) {
      jobsByDepartment[job.department] = [];
    }

    jobsByDepartment[job.department].push(job);
  });

  return jobsByDepartment;
};

export const getJobData = async (id: string): Promise<JobDetail> => {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(`${id}.md`);

  if (error) {
    console.error(`Error downloading job ${id}:`, error);
    throw new Error(`Failed to fetch job: ${id}`);
  }

  const fileContents = await data.text();
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    department: matterResult.data.department,
    location: matterResult.data.location,
    employmentType: matterResult.data.employmentType,
    date: matterResult.data.date,
  };
};
