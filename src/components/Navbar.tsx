"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowButton } from "@/components/ui/arrow-button";
import {
  navLinks,
  App,
  ButtonText,
  LogoConfig,
} from "@/config/landing/navlinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pt-5 px-4">
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
          borderRadius: "2rem",
        }}
        animate={{
          opacity: 1,
          y: 0,
          borderRadius: isOpen ? "2rem" : "2rem",
        }}
        transition={{
          duration: 0.5,
          borderRadius: {
            duration: 0.3,
            ease: "easeInOut",
          },
        }}
        className={cn(
          "w-full max-w-5xl backdrop-blur-md border border-border/50",
          "transition-all duration-300 ease-in-out",
          scrolled ? "bg-card/90 shadow-lg" : "bg-card/60"
        )}
      >
        <div className="flex items-center justify-between h-14 px-6 mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Link href="/#home">
              <Image
                src={LogoConfig.src}
                alt={LogoConfig.alt}
                width={LogoConfig.width}
                height={LogoConfig.height}
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  className="relative"
                >
                  <Link
                    href={link.path}
                    className={cn(
                      "flex items-center px-3 py-2 text-sm font-medium rounded-full",
                      "transition-colors relative z-10",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    <link.icon
                      className={cn(
                        "w-4 h-4 mr-2 transition-transform",
                        isActive && "scale-110"
                      )}
                    />
                    {link.name}
                  </Link>

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-sidebar-primary/10 rounded-full -z-0"
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-1 bg-sidebar-primary rounded-full -translate-x-1/2"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "50%", opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={App}>
                <ArrowButton className="ml-4 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 rounded-full">
                  {ButtonText}
                </ArrowButton>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border/50 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * (index + 1) }}
                      className="relative"
                    >
                      <Link
                        href={link.path}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm font-medium rounded-full relative z-10",
                          isActive
                            ? "text-foreground font-bold"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <link.icon
                          className={cn(
                            "w-4 h-4 mr-2 transition-transform",
                            isActive && "scale-110"
                          )}
                        />
                        {link.name}

                        {isActive && (
                          <motion.div
                            className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-sidebar-primary rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            layoutId="mobile-indicator"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link href={App}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-2 pb-2 cursor-pointer"
                  >
                    <ArrowButton className="w-full bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90 rounded-full">
                      {ButtonText}
                    </ArrowButton>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
