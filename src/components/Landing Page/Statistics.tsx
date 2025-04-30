"use client";
import { motion } from "framer-motion";
import stats from "@/config/landing/stats";
export function Statistics() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider">
            IN NUMBER
          </span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            At TeleMorph, we are dedicated to providing innovative software
            solutions and IT services that empower businesses.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center">
                <span className="text-6xl md:text-7xl font-bold tracking-tight text-[var(--brand-primary)]">
                  {stat.number}
                </span>
                <span className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)]">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-lg text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
