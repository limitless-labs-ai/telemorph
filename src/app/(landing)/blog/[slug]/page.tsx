import React from "react";
import { getArticleData } from "@/lib/articles";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import PageLayout from "@/components/Utilities/PageLayout";

async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const article = await getArticleData(slug);
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-8">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to blog</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>

          <div className="border-b border-border pb-6">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              {article.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">{article.date}</span>
              <span className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                {article.category}
              </span>
            </div>
          </div>

          <article
            className="article"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />
        </div>
      </div>
    </PageLayout>
  );
}

export default BlogPage;
