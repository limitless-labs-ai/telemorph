"use client";

import React from "react";
import { testimonials, testimonialTitles } from "@/config/landing/testimonials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";
function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-medium text-sidebar-primary mb-2">
          {testimonialTitles.title}
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {testimonialTitles.subtitle}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {testimonialTitles.text}
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute pointer-events-none inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-40" />
        <div className="absolute pointer-events-none inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-40" />
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>
    </section>
  );
}

export default Testimonials;
