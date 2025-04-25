/**
 * @file feature.ts
 * @description Configuration file for features section content and layout
 *
 * This file defines the content and layout for the Features component.
 * It contains:
 * - Features section title and description
 * - Feature cards configuration for the bento grid layout
 * - Size and position definitions for each feature card
 *
 * Update this file to modify the features content displayed in the application.
 */

import {
  Zap,
  Shield,
  LineChart,
  Users,
  Smartphone,
  Code,
  Globe,
  Clock,
  CloudCog,
} from "lucide-react";

export type FeatureCardSize = "sm" | "md" | "lg";

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ElementType;
  size: FeatureCardSize;
  colorAccent?: string;
  className?: string;
}

export interface FeaturesConfig {
  title: string;
  subtitle: string;
  description: string;
  cards: FeatureCard[];
}

const featuresConfig: FeaturesConfig = {
  title: "Powerful Features",
  subtitle: "Everything you need",
  description:
    "Our platform provides all the tools and capabilities needed to build, scale, and manage your business effectively.",
  cards: [
    {
      title: "Lightning Fast",
      description:
        "Experience industry-leading performance with optimized infrastructure and real-time processing.",
      icon: Zap,
      size: "lg",
      colorAccent: "from-yellow-500 to-orange-500",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Enterprise Security",
      description:
        "Bank-grade security with end-to-end encryption, multi-factor authentication, and compliance tools.",
      icon: Shield,
      size: "md",
      colorAccent: "from-blue-500 to-cyan-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with comprehensive analytics tools and customizable dashboards.",
      icon: LineChart,
      size: "md",
      colorAccent: "from-purple-500 to-violet-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Team Collaboration",
      description:
        "Seamless collaboration features for teams of any size with granular permission controls.",
      icon: Users,
      size: "sm",
      colorAccent: "from-green-500 to-emerald-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Mobile Optimized",
      description:
        "Full-featured mobile applications for iOS and Android with offline capabilities.",
      icon: Smartphone,
      size: "sm",
      colorAccent: "from-red-500 to-pink-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Extensive API",
      description:
        "Powerful and well-documented APIs for seamless integration with your existing systems.",
      icon: Code,
      size: "md",
      colorAccent: "from-amber-500 to-yellow-500",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Global Infrastructure",
      description:
        "Worldwide data centers ensuring low latency and high availability for users everywhere.",
      icon: Globe,
      size: "md",
      colorAccent: "from-blue-500 to-indigo-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock expert support via multiple channels to help you succeed.",
      icon: Clock,
      size: "md",
      colorAccent: "from-teal-500 to-green-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Cloud Architecture",
      description:
        "Modern cloud-native architecture that scales automatically based on your needs.",
      icon: CloudCog,
      size: "lg",
      colorAccent: "from-indigo-500 to-purple-500",
      className: "md:col-span-2 md:row-span-1",
    },
  ],
};

export default featuresConfig;
