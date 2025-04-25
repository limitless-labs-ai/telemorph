"use client";

/**
 * ArrowButton Component
 *
 * A button component that displays an animated arrow on hover.
 * Extends the base Button component with additional hover animation effects.
 *
 * @example
 * // Basic usage
 * <ArrowButton>Click me</ArrowButton>
 *
 * // With custom variant and size
 * <ArrowButton variant="outline" size="lg">
 *   Large outline button
 * </ArrowButton>
 *
 * // With custom className
 * <ArrowButton className="bg-primary text-white">
 *   Custom styled button
 * </ArrowButton>
 *
 * // Usage with Next.js Link
 * <Link href="/path">
 *   <ArrowButton asChild>
 *     Navigate to path
 *   </ArrowButton>
 * </Link>
 *
 * Props:
 * - children: React.ReactNode - The content of the button
 * - className?: string - Additional CSS classes
 * - variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" - Button style variant
 * - size?: "default" | "sm" | "lg" | "icon" - Button size
 * - asChild?: boolean - If true, button will render as a child component (useful with Link)
 * - ...props: All standard button HTML attributes are supported
 */

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export function ArrowButton({
  children,
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ArrowButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Button
      className={cn("group relative overflow-hidden cursor-pointer", className)}
      variant={variant}
      size={size}
      asChild={asChild}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <span className="flex items-center">
        {children}

        <AnimatePresence>
          {isHovering && (
            <motion.div
              className="relative"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={{ x: -5 }}
                animate={{ x: 3 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </span>
    </Button>
  );
}
