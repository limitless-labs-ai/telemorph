import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return <div className="container mx-auto px-4 pt-32">{children}</div>;
}

export default PageLayout;
