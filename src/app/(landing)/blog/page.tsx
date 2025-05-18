import React from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import BlogListItem from "@/components/Blog/BlogListItem";
import { getCategorisedArticles } from "@/lib/articles";

async function Blog() {
  const categorisedArticles = await getCategorisedArticles();
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Explore our latest articles and insights
          </p>
        </div>

        <div className="grid gap-8">
          {Object.entries(categorisedArticles).map(([category, articles]) => (
            <BlogListItem
              key={category}
              category={category}
              articles={articles}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
export default Blog;
