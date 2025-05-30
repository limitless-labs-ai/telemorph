"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import stats from "@/config/landing/stats";

// Counter animation hook for smooth number counting - faster duration
const useCountAnimation = (end: number, duration: number = 1200) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const startCount = () => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return { count, startCount };
};

// Separate component for each stat item to properly handle hooks
const StatItem = ({
  stat,
  index,
  isInView,
}: {
  stat: { number: string; label: string; suffix: string };
  index: number;
  isInView: boolean;
}) => {
  const { count, startCount } = useCountAnimation(parseInt(stat.number));

  useEffect(() => {
    if (isInView) {
      // All counters start at the same time - no stagger
      const timer = setTimeout(startCount, 400);
      return () => clearTimeout(timer);
    }
  }, [isInView, startCount]);

  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 30,
              scale: 0.9,
            }
      }
      transition={{
        duration: 0.6,
        delay: 0.3 + index * 0.05, // Much smaller stagger for entrance only
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      className="text-center group cursor-default will-change-transform transform-gpu"
    >
      <div className="flex items-baseline justify-center">
        <motion.span
          className="text-6xl md:text-7xl font-bold tracking-tight text-[var(--brand-primary)] will-change-contents"
          initial={{ scale: 0.8 }}
          animate={isInView ? { scale: 1 } : { scale: 0.8 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 10,
          }}
        >
          {count}
        </motion.span>
        <motion.span
          className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)]"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{
            duration: 0.4,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          {stat.suffix}
        </motion.span>
      </div>
      <motion.p
        className="mt-2 text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.7,
          ease: "easeOut",
        }}
      >
        {stat.label}
      </motion.p>
    </motion.div>
  );
};

export function Statistics() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="text-center mb-12 will-change-transform"
        >
          <span className="text-[var(--brand-primary)] font-medium uppercase tracking-wider">
            IN NUMBER
          </span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto will-change-transform"
          >
            At TeleMorph, we are dedicated to providing innovative software
            solutions and IT services that empower businesses.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
