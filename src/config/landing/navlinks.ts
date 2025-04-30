/**
 * @file navlinks.ts
 * @description Configuration file for navigation links in the application
 *
 * This file defines the primary navigation structure used in the navbar component.
 * Each navigation item includes:
 * - Display name
 * - Target path
 * - Associated icon from Lucide React
 *
 * Update this file to modify the main navigation structure of the application.
 */

import { User, Briefcase, Book, BrainCircuit } from "lucide-react";

const navLinks = [
  { name: "About Us", path: "/about", icon: User },
  { name: "Solutions", path: "/solutions", icon: BrainCircuit },
  { name: "Blog", path: "/blog", icon: Book },
  { name: "Careers", path: "/careers", icon: Briefcase },
];

const ButtonText = "Contact Us";

const App = "/contact";

export { navLinks, App, ButtonText };
