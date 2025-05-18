export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
};

export type JobItem = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  date: string;
};

export type JobDetail = JobItem & {
  contentHtml: string;
};
