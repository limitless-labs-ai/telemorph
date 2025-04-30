"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { solutions } from "@/config/landing/solutions";

export function Solutions() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-[var(--brand-primary)] text-lg font-medium tracking-wider uppercase mb-3">
            SOLUTIONS
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Innovative Problem-Solving for Your
            <br />
            Business Needs
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative flex flex-col h-full bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand-primary)]/5 overflow-hidden">
                <div className="aspect-square w-full relative bg-[var(--brand-primary)]/5">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover p-8"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[var(--brand-primary)]">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
