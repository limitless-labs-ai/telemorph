"use client";

import React, { useState } from "react";
import { faqItems, faqTitles } from "@/config/landing/faq";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl font-medium text-sidebar-primary mb-2">
          {faqTitles.title}
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {faqTitles.subtitle}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {faqTitles.text}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqItems.map((item, index) => (
          <motion.div
            key={item.question}
            variants={itemVariants}
            className={cn(
              "bg-card/40 backdrop-blur-sm rounded-xl border border-border/50",
              "hover:border-sidebar-primary/30 transition-all duration-200",
              "shadow-lg hover:shadow-xl will-change-transform transform-gpu"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="text-xl font-bold group-hover:text-sidebar-primary transition-colors duration-200">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
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
                  </div>
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
