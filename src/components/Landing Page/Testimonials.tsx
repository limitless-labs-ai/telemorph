"use client";

import React, { useEffect, useRef } from "react";
import { testimonials, testimonialTitles } from "@/config/landing/testimonials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion, useInView } from "motion/react";

function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Optimize the animation duration for smoother performance
    if (containerRef.current && isInView) {
      const scrollerElement = containerRef.current.querySelector(".scroller");
      if (scrollerElement) {
        const element = scrollerElement as HTMLElement;
        // Use faster duration for better performance
        element.style.setProperty("--animation-duration", "30s");
        // Add GPU acceleration
        element.style.willChange = "transform";
        element.style.backfaceVisibility = "hidden";
        element.style.perspective = "1000px";
      }
    }
  }, [isInView]);

  return (
    <section className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl font-medium text-sidebar-primary mb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{
              duration: 0.6,
              delay: 0.1,
              type: "spring",
              stiffness: 120,
            }}
          >
            {testimonialTitles.title}
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {testimonialTitles.subtitle}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            {testimonialTitles.text}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full"
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{
          duration: 0.8,
          delay: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Enhanced gradient overlays for better blending */}
        <motion.div
          className="absolute pointer-events-none inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-background via-background/90 to-transparent z-40"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        <motion.div
          className="absolute pointer-events-none inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-background via-background/90 to-transparent z-40"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        {/* Additional subtle gradients for depth */}
        <motion.div
          className="absolute pointer-events-none inset-y-0 left-0 w-[8vw] bg-gradient-to-r from-background to-transparent z-50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
        <motion.div
          className="absolute pointer-events-none inset-y-0 right-0 w-[8vw] bg-gradient-to-l from-background to-transparent z-50"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="fast"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
