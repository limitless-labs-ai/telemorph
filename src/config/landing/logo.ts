/**
 * @file logo.ts
 * @description Configuration file for brand identity and logo settings
 *
 * This file centralizes the application's brand identity configuration including:
 * - Brand name
 * - Logo path
 * - Text styling for the brand name display
 * - Brand description/tagline
 *
 * The exported Brand object is used across components that need to display
 * consistent branding information.
 */

const Brand = {
  name: "Acme",
  logo: "/logo.svg",
  nameStyle:
    "text-xl font-bold bg-gradient-to-r from-primary to-sidebar-primary bg-clip-text text-transparent",
  description:
    "Streamline operations, boost productivity, and drive growth with our comprehensive platform.",
};

export default Brand;
