/**
 * @file footer.ts
 * @description Configuration file for the application footer component
 *
 * This file contains all configuration options for the site-wide footer, including:
 * - Company information (name, logo, description)
 * - Navigation link groups organized by category
 * - Social media links with associated icons
 * - Copyright information
 *
 * The exported types (FooterLink, FooterLinkGroup, FooterConfig) define the structure
 * of the footer data, and the default export provides the actual configuration values.
 *
 * Update this file to customize the footer content across the application.
 */

import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Brand from "@/config/landing/logo";
import React from "react";

export type FooterLink = {
  name: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterConfig = {
  company: {
    name: string;
    logo: string;
    description: string;
  };
  linkGroups: FooterLinkGroup[];
  socialLinks: {
    name: string;
    href: string;
    icon: React.ElementType;
  }[];
  copyright: string;
};

const footerConfig: FooterConfig = {
  // DO NOT EDIT THIS SECTION
  company: {
    name: Brand.name_half1 + Brand.name_half2,
    logo: "/tmlong_white.png",
    description: Brand.description,
  },
  // ------------------------------
  linkGroups: [
    {
      title: "Products",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Solutions", href: "/solutions" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Support", href: "/support" },
        { name: "FAQ", href: "/#faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        // { name: "Refund Policy", href: "/refund-policy" },
        // { name: "Affiliate Terms", href: "/affiliate-terms" },
      ],
    },
  ],
  socialLinks: [
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      name: "Email",
      href: "mailto:contact@acme.com",
      icon: Mail,
    },
  ],
  copyright: `© ${new Date().getFullYear()} TeleMorph. All rights reserved.`,
};

export default footerConfig;
