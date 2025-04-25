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

import {
  Home,
  DollarSign,
  BarChart3,
  Users,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  { name: "Features", path: "/#features", icon: BarChart3 },
  { name: "Pricing", path: "/pricing", icon: DollarSign },
  { name: "Community", path: "/community", icon: MessageCircle },
  { name: "Affiliates", path: "/affiliates", icon: Users },
];

const App = "/dashboard";

export { navLinks, App };
