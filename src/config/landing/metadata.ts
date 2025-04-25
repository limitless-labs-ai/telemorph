/**
 * @file metadata.ts
 * @description Configuration file for application metadata and SEO optimization
 *
 * This file provides a centralized configuration for all metadata-related settings used across the application.
 * It exports:
 * - siteConfig: Core configuration for site identity, social media, and SEO
 * - generateMetadata: Helper function for creating page-specific metadata
 * - defaultMetadata: Pre-configured metadata object ready for use in layout files
 *
 * Use this file to customize site-wide metadata settings and to generate consistent
 * metadata for individual pages throughout the application.
 */

import type { Metadata } from "next";

// Site URL configuration
export const siteConfig = {
  name: "Limitless Labs Framework",
  url: "https://limitlesslabs.ai",
  ogImage: "https://limitlesslabs.ai/og-image.jpg",
  description:
    "A comprehensive description of your project that will appear in search results and social shares",
  twitter: {
    handle: "@limitlesslabs",
    site: "@limitlesslabs",
    cardType: "summary_large_image" as const,
  },
  keywords: [
    "Limitless Labs",
    "Framework",
    "AI",
    "Machine Learning",
    "Data Science",
    "Artificial Intelligence",
    "Data Analysis",
    "Data Visualization",
    "Data Engineering",
    "DataOps",
    "DataOps Framework",
  ],
  authors: [
    {
      name: "Limitless Labs",
      url: "https://limitlesslabs.ai",
    },
  ],
};

// Helper function to generate metadata for pages
// DO NOT EDIT THIS FUNCTION
export function generateMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "",
  excludeTitleSuffix = true, // YOU CAN EDIT THIS
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  excludeTitleSuffix?: boolean;
} = {}): Metadata {
  const titleWithSuffix = excludeTitleSuffix
    ? title
    : `${title} | ${siteConfig.name}`; // YOU CAN EDIT THIS
  const url = `${siteConfig.url}${path}`;

  return {
    title: titleWithSuffix,
    description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.authors[0]?.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: titleWithSuffix,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      title: titleWithSuffix,
      description,
      images: [image],
      creator: siteConfig.twitter.handle,
      site: siteConfig.twitter.site,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Default metadata export for the app
export const defaultMetadata = generateMetadata();
