"use client";

import React, { useState, useRef } from "react";
import { faqItems, faqTitles } from "@/config/landing/faq";
import { motion, AnimatePresence, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" ref={sectionRef}>
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
          {faqTitles.title}
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
          {faqTitles.subtitle}
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
          {faqTitles.text}
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={item.question}
            variants={itemVariants}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className={cn(
              "bg-card/40 backdrop-blur-sm rounded-xl border border-border/50",
              "hover:border-sidebar-primary/40 transition-all duration-500",
              "shadow-lg hover:shadow-xl will-change-transform transform-gpu",
              openIndex === index && "border-sidebar-primary/30 shadow-xl"
            )}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left group"
              whileHover={{
                backgroundColor: "rgba(var(--sidebar-primary-rgb), 0.02)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.995 }}
            >
              <motion.h3
                className="text-xl font-bold group-hover:text-sidebar-primary transition-colors duration-300 pr-4"
                animate={{
                  color:
                    openIndex === index
                      ? "var(--sidebar-primary)"
                      : "var(--foreground)",
                }}
                transition={{ duration: 0.3 }}
              >
                {item.question}
              </motion.h3>
              <motion.div
                animate={{
                  rotate: openIndex === index ? 180 : 0,
                  scale: openIndex === index ? 1.1 : 1,
                  color:
                    openIndex === index
                      ? "var(--sidebar-primary)"
                      : "var(--muted-foreground)",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="flex-shrink-0"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <AnimatePresence mode="wait">
              {openIndex === index && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    y: -10,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.3, delay: 0.1 },
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    className="p-6 pt-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="prose prose-invert prose-primary max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          h2: ({ ...props }) => (
                            <h2
                              className="text-2xl font-bold mb-4 text-foreground"
                              {...props}
                            />
                          ),
                          h3: ({ ...props }) => (
                            <h3
                              className="text-xl font-bold mb-3 text-foreground"
                              {...props}
                            />
                          ),
                          ul: ({ ...props }) => (
                            <ul className="space-y-2 mb-4" {...props} />
                          ),
                          ol: ({ ...props }) => (
                            <ol
                              className="space-y-2 mb-4 list-decimal pl-4"
                              {...props}
                            />
                          ),
                          li: ({ ...props }) => (
                            <li className="text-muted-foreground" {...props} />
                          ),
                          p: ({ ...props }) => (
                            <p
                              className="text-muted-foreground mb-4"
                              {...props}
                            />
                          ),
                          blockquote: ({ ...props }) => (
                            <blockquote
                              className="border-l-4 border-[var(--brand-primary)] pl-4 italic text-muted-foreground my-4"
                              {...props}
                            />
                          ),
                          strong: ({ ...props }) => (
                            <strong
                              className="font-bold text-foreground"
                              {...props}
                            />
                          ),
                        }}
                      >
                        {item.answer}
                      </ReactMarkdown>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FAQ;
