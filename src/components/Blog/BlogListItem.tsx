import Link from "next/link";
import { ArticleItem } from "@/types";

interface BlogListItemProps {
  category: string;
  articles: ArticleItem[];
}

const BlogListItem: React.FC<BlogListItemProps> = ({ category, articles }) => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-lg border border-border bg-card">
      <h2 className="text-2xl font-bold text-primary">{category}</h2>
      <ul className="grid gap-4">
        {articles.map((article, index) => (
          <li key={index} className="transition-all hover:translate-x-1">
            <Link
              href={`/blog/${article.id}`}
              className="flex flex-col gap-1 group"
            >
              <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </span>
              <span className="text-sm text-muted-foreground">
                {formatDate(article.date)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Format date to prevent timezone issues causing date to appear one day earlier
const formatDate = (dateString: string) => {
  // Parse DD-MM-YYYY format
  const [day, month, year] = dateString.split("-").map(Number);

  // Create date with local timezone (using local year, month, day)
  // Month is 0-indexed in JavaScript Date
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default BlogListItem;
