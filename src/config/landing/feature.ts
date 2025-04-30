/**
 * @file feature.ts
 * @description Configuration file for services section content and layout
 *
 * This file defines the content and layout for the Services component.
 * It contains:
 * - Services section title and description
 * - Service cards configuration for the bento grid layout
 * - Size and position definitions for each service card
 *
 * Update this file to modify the services content displayed in the application.
 */

import {
  PackageCheck,
  ShieldCheck,
  Wrench,
  FileBarChart2,
  DollarSign,
  Plus,
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
  title: "Our Services",
  subtitle: "What We Offer",
  description:
    "We provide a comprehensive suite of services to help your business manage, secure, and optimize your IT and telecom infrastructure.",
  cards: [
    {
      title: "Procurement & Management",
      description:
        "Device procurement and management involves acquiring, setting up, and maintaining business IT equipment like smartphones and tablets. It ensures employees have secure, cost-effective tools to work efficiently.",
      icon: PackageCheck,
      size: "md",
      colorAccent: "from-green-500 to-emerald-500",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Data Management & Security",
      description:
        "Device security and data management protects sensitive information on IT devices through encryption, access controls, monitoring, and backups. It aims to prevent data breaches while maintaining confidentiality through strong policies, training, and security tools.",
      icon: ShieldCheck,
      size: "md",
      colorAccent: "from-blue-500 to-cyan-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Maintenance & Support",
      description:
        "Maintenance and support involve fixing hardware and software issues to keep devices running efficiently. This helps extend device lifespan, reduce downtime, and maintain user productivity.",
      icon: Wrench,
      size: "md",
      colorAccent: "from-yellow-500 to-orange-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "ELD Solutions",
      description:
        "ELD software development helps trucking companies boost productivity by creating apps for log management and providing guidance on using ELD devices and meeting legal requirements.",
      icon: FileBarChart2,
      size: "md",
      colorAccent: "from-purple-500 to-violet-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Expense Management",
      description:
        "Expense management focuses on controlling and reducing business costs by tracking usage, setting policies, and securing better service rates.",
      icon: DollarSign,
      size: "md",
      colorAccent: "from-amber-500 to-yellow-500",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "And More",
      description:
        "We offer a wide range of services to help your business manage, secure, and optimize your IT and telecom infrastructure. We are always looking for new ways to help you grow your business.",
      icon: Plus,
      size: "md",
      colorAccent: "from-green-500 to-emerald-500",
      className: "md:col-span-1 md:row-span-1",
    },
  ],
};

export default featuresConfig;
