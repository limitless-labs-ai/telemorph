"use client";

import React from "react";
import { motion } from "motion/react";
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
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "bg-card/40 backdrop-blur-sm rounded-3xl border border-border/50 shadow-lg hover:shadow-xl will-change-transform",
        "hover:border-sidebar-primary/30 transition-all duration-200 group h-full relative overflow-hidden",
        "transform-gpu", // Force GPU acceleration
        sizeClasses[size],
        className
      )}
    >
      {/* Animated background gradient - simplified for performance */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-200 -z-10",
          "bg-gradient-to-br",
          colorAccent || "from-sidebar-primary to-primary"
        )}
      />

      <div
        className={cn(
          "w-12 h-12 rounded-2xl bg-gradient-to-br p-3 mb-4 transform transition-transform duration-200 group-hover:scale-105",
          colorAccent || "from-sidebar-primary to-primary"
        )}
      >
        <Icon className="w-full h-full text-white" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-sidebar-primary transition-colors duration-200">
        {title}
      </h3>
      <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-200">
        {description}
      </p>
    </motion.div>
  );
};

function Features() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <BlurFade delay={0.3} inView>
        <div className="text-center mb-16">
          <h2 className="text-2xl font-medium text-sidebar-primary mb-2">
            {featuresConfig.subtitle}
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {featuresConfig.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {featuresConfig.description}
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
}

export default Features;
