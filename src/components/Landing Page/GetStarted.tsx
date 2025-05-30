"use client";
import React, { useRef } from "react";
import { TextReveal } from "../ui/text-reveal";
import { motion, useInView } from "motion/react";
import { ArrowButton } from "../ui/arrow-button";
import { cn } from "@/lib/utils";
import { textEffect, cardText } from "@/config/landing/gettingstarted";
import Link from "next/link";
import { App } from "@/config/landing/navlinks";

function GetStarted() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}
      >
        <TextReveal className="text-center">{textEffect}</TextReveal>
      </motion.div>

      <motion.div
        className={cn("w-full max-w-5xl mx-auto p-8 mb-16")}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
              }
            : {
                opacity: 0,
                y: 60,
                scale: 0.95,
              }
        }
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: {
            duration: 0.4,
            ease: "easeOut",
          },
        }}
      >
        <motion.div
          className={cn(
            "rounded-2xl shadow-2xl p-8 relative overflow-hidden",
            "bg-[var(--gradient-indigo)] border-2 border-border",
            "transition-all duration-500 will-change-transform transform-gpu"
          )}
          whileHover={{
            boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.25)",
            transition: { duration: 0.4 },
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--brand-indigo)]/20 to-[var(--brand-indigo-dark)]/30 opacity-0"
            whileHover={{
              opacity: 1,
              background: [
                "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0.3) 100%)",
                "linear-gradient(225deg, rgba(99, 102, 241, 0.15) 0%, rgba(79, 70, 229, 0.25) 100%)",
                "linear-gradient(315deg, rgba(99, 102, 241, 0.25) 0%, rgba(79, 70, 229, 0.35) 100%)",
                "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(79, 70, 229, 0.3) 100%)",
              ],
              transition: { duration: 2, repeat: Infinity },
            }}
          />

          <div
            className={cn(
              "flex flex-col items-center gap-6 text-center relative z-10"
            )}
          >
            <motion.h2
              className={cn("text-4xl md:text-5xl font-bold", "text-white")}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              {cardText.title}
            </motion.h2>

            <motion.p
              className={cn(
                "text-[var(--brand-indigo-accent)] text-lg md:text-xl max-w-2xl leading-relaxed"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: "easeOut",
              }}
            >
              {cardText.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 20,
                      scale: 0.9,
                    }
              }
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
            >
              <Link href={App}>
                <motion.div
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{
                    y: 0,
                    transition: { duration: 0.1 },
                  }}
                >
                  <ArrowButton
                    size="lg"
                    className={cn(
                      "bg-[var(--brand-indigo)] hover:bg-[var(--brand-indigo-light)]",
                      "text-white shadow-lg hover:shadow-xl",
                      "text-lg py-6 px-10 transition-all duration-300",
                      "border border-white/20 hover:border-white/40",
                      "backdrop-blur-sm relative overflow-hidden group"
                    )}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        background: [
                          "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        ],
                        transition: { duration: 2, repeat: Infinity },
                      }}
                    />
                    <span className="relative z-10">{cardText.buttonText}</span>
                  </ArrowButton>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default GetStarted;
