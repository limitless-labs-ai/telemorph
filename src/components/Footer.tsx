"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/landing/navlinks";
import footerConfig from "@/config/landing/footer";

export function Footer() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.footer
      className="bg-card/40 backdrop-blur-lg border-t border-border/50 mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4 col-span-1"
          >
            <motion.div variants={fadeInUp}>
              <Link href="/">
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-sidebar-primary bg-clip-text text-transparent">
                  {footerConfig.company.name}
                </span>
              </Link>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-xs"
            >
              {footerConfig.company.description}
            </motion.p>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex space-x-2 pt-2">
              {footerConfig.socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-accent/80 rounded-full p-2 transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Link Groups */}
          {footerConfig.linkGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.h3 variants={fadeInUp} className="font-semibold">
                {group.title}
              </motion.h3>
              <motion.ul variants={staggerContainer} className="space-y-2">
                {group.links.map((link) => (
                  <motion.li key={link.name} variants={fadeInUp}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center group"
                    >
                      {link.name}
                      <motion.span
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="inline-block ml-1"
                      >
                        <ArrowUpRight className="h-3 w-3" />
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom area with nav links */}
        <motion.div
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeInUp}
            className="text-sm text-muted-foreground"
          >
            {footerConfig.copyright}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <link.icon className="h-3 w-3" />
                {link.name}
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Back to top button */}
        <motion.div
          className="flex justify-center mt-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="outline"
            size="sm"
            className="rounded-full bg-sidebar-primary/10 hover:bg-sidebar-primary/20 border-sidebar-primary/30"
          >
            Back to top
          </Button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
