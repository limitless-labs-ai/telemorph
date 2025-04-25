"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { cn } from "@/lib/utils";

function NotFound() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-4"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn("text-center space-y-6")}
      >
        <h1
          className={cn(
            "text-6xl font-bold",
            "bg-gradient-to-r from-primary to-sidebar-primary bg-clip-text text-transparent"
          )}
        >
          404
        </h1>
        <p className={cn("text-xl text-muted-foreground")}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <ArrowButton>Return Home</ArrowButton>
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
