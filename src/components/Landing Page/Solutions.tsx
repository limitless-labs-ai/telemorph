"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { solutions } from "@/config/landing/solutions";

export function Solutions() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        delayChildren: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-16 will-change-transform"
        >
          <motion.h2
            className="text-[var(--brand-primary)] text-lg font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            SOLUTIONS
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Innovative Problem-Solving for Your
            <br />
            Business Needs
          </motion.h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                rotateX: -2,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.2 },
              }}
              className="relative group cursor-pointer will-change-transform transform-gpu"
              style={{ perspective: "1000px" }}
            >
              <div className="relative flex flex-col h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10 overflow-hidden group-hover:border-[var(--brand-primary)]/20">
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-[var(--brand-primary)] to-[var(--brand-secondary)] transition-opacity duration-500"
                  initial={false}
                />

                <div className="aspect-square w-full relative bg-[var(--brand-primary)]/5 overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeOut" },
                    }}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                  </motion.div>

                  {/* Overlay gradient that appears on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="text-[var(--brand-primary)] transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--brand-primary-dark)]"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {solution.icon}
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-semibold group-hover:text-[var(--brand-primary)] transition-colors duration-300"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {solution.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {solution.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
