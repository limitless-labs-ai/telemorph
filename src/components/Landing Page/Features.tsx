"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import featuresConfig from "@/config/landing/feature";
import { cn } from "@/lib/utils";

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  size,
  colorAccent,
  className,
  index,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  size: "sm" | "md" | "lg";
  colorAccent?: string;
  className?: string;
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
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
              scale: 0.96,
            }
      }
      transition={{
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      className={cn(
        "bg-card/40 backdrop-blur-sm rounded-3xl border border-border/50 shadow-lg will-change-transform transform-gpu",
        "hover:shadow-xl transition-all duration-300 group h-full relative overflow-hidden cursor-pointer",
        sizeClasses[size],
        className
      )}
    >
      {/* Simplified background gradient */}
      <motion.div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 -z-10",
          "bg-gradient-to-br from-foreground/2 to-foreground/3"
        )}
        whileHover={{
          opacity: 1,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
      />

      {/* Icon with smooth hover effect */}
      <motion.div
        className={cn(
          "w-12 h-12 rounded-2xl bg-gradient-to-br p-3 mb-4 relative",
          colorAccent || "from-sidebar-primary to-primary"
        )}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }
        }
        transition={{
          duration: 0.5,
          delay: 0.2 + index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.25,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }}
      >
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 transition-opacity duration-300"
          whileHover={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        />
        <Icon
          className="w-full h-full text-white relative z-10 drop-shadow-sm"
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Title with smooth animation */}
      <motion.h3
        className="text-xl font-bold mb-2 transition-colors duration-300"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{
          duration: 0.5,
          delay: 0.3 + index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
      >
        {title}
      </motion.h3>

      {/* Description with smooth reveal */}
      <motion.p
        className="text-muted-foreground leading-relaxed transition-colors duration-300"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
          delay: 0.4 + index * 0.1,
          ease: "easeOut",
        }}
      >
        {description}
      </motion.p>

      {/* Subtle bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-sidebar-primary to-primary opacity-0 rounded-full"
        initial={{ scaleX: 0 }}
      />
    </motion.div>
  );
};

function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" ref={sectionRef}>
      <BlurFade delay={0.2} inView={isInView}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.h2
            className="text-2xl font-medium text-sidebar-primary mb-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {featuresConfig.subtitle}
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {featuresConfig.title}
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            {featuresConfig.description}
          </motion.p>
        </motion.div>
      </BlurFade>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <div className="md:col-span-1 grid grid-cols-1 gap-6">
          <FeatureCard {...featuresConfig.cards[0]} index={0} />
        </div>
        <div className="md:col-span-1 grid grid-cols-1 gap-6">
          <FeatureCard {...featuresConfig.cards[1]} index={1} />
        </div>
        <div className="md:col-span-1 grid grid-cols-1 gap-6">
          <FeatureCard {...featuresConfig.cards[2]} index={2} />
        </div>
        <div className="md:col-span-1 grid grid-cols-1 gap-6">
          <FeatureCard {...featuresConfig.cards[3]} index={3} />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 gap-6">
          <FeatureCard {...featuresConfig.cards[4]} index={4} />
        </div>
        <div className="md:col-span-2 grid grid-cols-1 gap-6">
          <FeatureCard {...featuresConfig.cards[5]} index={5} />
        </div>
      </motion.div>
    </section>
  );
}

export default Features;
