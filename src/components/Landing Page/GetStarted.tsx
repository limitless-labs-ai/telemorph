"use client";
import React from "react";
import { TextReveal } from "../ui/text-reveal";
import { motion } from "motion/react";
import { ArrowButton } from "../ui/arrow-button";
import { cn } from "@/lib/utils";
import { textEffect, cardText } from "@/config/landing/gettingstarted";

function GetStarted() {
  return (
    <>
      <TextReveal>{textEffect}</TextReveal>
      <div className={cn("w-full max-w-5xl mx-auto p-8 mb-16")}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-2xl shadow-xl p-8",
            "bg-background border-2 border-border",
            "transition-colors duration-200"
          )}
        >
          <div className={cn("flex flex-col items-center gap-6 text-center")}>
            <h2
              className={cn(
                "text-4xl md:text-5xl font-bold",
                "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              )}
            >
              {cardText.title}
            </h2>
            <p
              className={cn(
                "text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed"
              )}
            >
              {cardText.description}
            </p>
            <ArrowButton
              size="lg"
              className={cn(
                "bg-gradient-to-r from-primary to-primary/60",
                "text-primary-foreground hover:opacity-90",
                "text-lg py-6 px-10"
              )}
            >
              {cardText.buttonText}
            </ArrowButton>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default GetStarted;
