import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import { createClient } from "@/utils/supabase/server";

import type { ArticleItem } from "@/types";

const bucketName = "articles";

const getSortedArticles = async (): Promise<ArticleItem[]> => {
  const supabase = await createClient();
  const { data: files, error } = await supabase.storage.from(bucketName).list();

  if (error) {
    console.error("Error fetching articles:", error);
    return [];
  }

  // Filter only markdown files
  const markdownFiles = files.filter((file) => file.name.endsWith(".md"));

  // Process all files
  const articlesPromises = markdownFiles.map(async (file) => {
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
      date: matterResult.data.date,
      category: matterResult.data.category,
    };
  });

  const allArticles = (await Promise.all(articlesPromises)).filter(
    Boolean
  ) as ArticleItem[];

  return allArticles.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);

    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const getCategorisedArticles = async (): Promise<
  Record<string, ArticleItem[]>
> => {
  const sortedArticles = await getSortedArticles();
  const categorisedArticles: Record<string, ArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorisedArticles[article.category]) {
      categorisedArticles[article.category] = [];
    }

    categorisedArticles[article.category].push(article);
  });

  return categorisedArticles;
};

export const getArticleData = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from(bucketName)
    .download(`${id}.md`);

  if (error) {
    console.error(`Error downloading article ${id}:`, error);
    throw new Error(`Failed to fetch article: ${id}`);
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
    category: matterResult.data.category,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do, YYYY"),
  };
};
