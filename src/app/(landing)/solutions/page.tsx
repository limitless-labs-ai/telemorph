"use client";
import React, { useState, useRef, useEffect } from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import PricingCard from "@/components/Landing Page/PricingCard";
import { pricing, pricingTitles } from "@/config/pricing";
import {
  missionContent,
  solutionsContent,
} from "@/config/landing/solutions-content";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Wrench,
  Truck,
  DollarSign,
  Package,
  Star,
  Target,
  Zap,
  CheckCircle,
  Sparkles,
} from "lucide-react";

function SolutionsContent() {
  const servicesRef = useRef<HTMLDivElement>(null);

  // Icon mapping for each solution
  const solutionIcons = [
    Package, // Procurement & Management
    Shield, // Data Management & Security
    Wrench, // Maintenance & Support
    Truck, // ELD Solutions
    DollarSign, // Expense Management
  ];

  useEffect(() => {
    if (servicesRef.current) {
      const sections = servicesRef.current.querySelectorAll(".service-section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        { threshold: 0.2 }
      );

      sections.forEach((section: Element) => {
        observer.observe(section);
      });

      return () => {
        sections.forEach((section: Element) => {
          observer.unobserve(section);
        });
      };
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse"></div>
      <div
        className="absolute bottom-40 left-10 w-56 h-56 rounded-full bg-primary/10 blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Floating icons decoration */}
      <div className="absolute top-32 left-20 opacity-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary" />
      </div>
      <div
        className="absolute top-64 right-32 opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Target className="w-6 h-6 text-primary" />
      </div>
      <div
        className="absolute bottom-96 left-32 opacity-10 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <Zap className="w-7 h-7 text-primary" />
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Mission Section - Fixed: removed problematic border decoration */}
        <section className="mb-24 relative fade-in-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-primary)] relative">
              {missionContent.title}
              <div className="h-1 w-16 bg-primary mt-2"></div>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            {missionContent.description}
          </p>
          <div
            className="mt-10 p-6 bg-primary/5 rounded-lg border border-primary/10 shadow-sm fade-in hover:bg-primary/8 transition-all duration-300"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground font-medium text-lg">
                Our expertise spans across five core service areas, each
                tailored to cater to your unique business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Service Sections */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Solutions
            </h2>
          </div>
          <div className="h-1 w-16 bg-primary mx-auto"></div>
        </div>

        <div ref={servicesRef} className="space-y-20">
          {solutionsContent.map((solution, index) => {
            const isEven = index % 2 === 0;
            const solutionNumber = index + 1;
            const IconComponent = solutionIcons[index];

            return (
              <section
                key={solution.title}
                className="service-section transition-all duration-700 opacity-0 translate-y-10"
              >
                {/* Desktop Layout - Enhanced with icons */}
                <div className="hidden md:flex flex-row gap-8 items-center mb-6 md:mb-10">
                  <div
                    className={`flex-1 ${isEven ? "order-2 md:order-1" : ""}`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <span className="w-8 h-8 bg-primary/10 flex items-center justify-center rounded-full text-primary font-bold border border-primary/20">
                        {solutionNumber}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <div
                    className={`flex-1 flex justify-center ${
                      isEven ? "order-1 md:order-2" : ""
                    }`}
                  >
                    <div className="relative group p-2">
                      <Image
                        src={solution.imagePath}
                        alt={solution.title}
                        width={280}
                        height={280}
                        className="object-cover rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                      />
                      {/* Floating icon overlay */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - Enhanced with icons */}
                <div className="md:hidden bg-background/95 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:border-primary/30 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={solution.imagePath}
                      alt={solution.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 bg-background/95 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="w-8 h-8 bg-background/95 backdrop-blur-sm flex items-center justify-center rounded-full text-primary font-bold shadow-md border border-primary/20">
                        {solutionNumber}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 bg-background/50">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom decoration with icon */}
        <div className="flex flex-col items-center mt-16 space-y-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div className="h-0.5 w-32 bg-primary/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentPricingRef = pricingRef.current;
    if (currentPricingRef) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const pricingContent = document.getElementById("pricing-content");
            if (pricingContent) {
              pricingContent.classList.add("animate-in");
            }

            const animateRightElements =
              currentPricingRef?.querySelectorAll(".animate-in-right");
            setTimeout(() => {
              animateRightElements?.forEach((el) => {
                el.classList.add("animate-in");
              });
            }, 300);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(currentPricingRef);

      return () => {
        if (currentPricingRef) {
          observer.unobserve(currentPricingRef);
        }
      };
    }
  }, []);

  return (
    <div
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      ref={pricingRef}
    >
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -z-10"></div>

      <div
        className="transition-all duration-1000 opacity-0 translate-y-10"
        id="pricing-content"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 inline-block relative fade-in">
            {pricingTitles.title}
            <div className="h-1 w-24 bg-primary mt-2 mx-auto"></div>
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto mt-8 fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {pricingTitles.text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="relative flex items-center space-x-2 mb-6 p-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-primary/10 shadow-sm">
            <span
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                isMonthly
                  ? "text-foreground bg-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsMonthly(true)}
              style={{ cursor: "pointer" }}
            >
              Monthly
            </span>
            <span
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                !isMonthly
                  ? "text-foreground bg-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsMonthly(false)}
              style={{ cursor: "pointer" }}
            >
              Yearly
            </span>
          </div>
          <div className="h-8 overflow-hidden">
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isMonthly
                  ? "opacity-0 -translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-sm text-primary font-medium bg-primary/10 px-4 py-1.5 rounded-full">
                Save 20% with annual billing
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={plan.title}
              className="animate-in-right"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <PricingCard
                title={plan.title}
                price={isMonthly ? plan.price.monthly : plan.price.yearly}
                features={plan.features}
                isPopular={plan.isPopular}
                displayBilledAnnually={!isMonthly}
                buttonText={plan.buttonText}
              />
            </div>
          ))}
        </div>

        <div
          className="mt-24 text-center fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Have questions? Check out our{" "}
            <Link
              href="/#faq"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              FAQ page
            </Link>{" "}
            or{" "}
            <Link
              href="/#"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function Solutions() {
  useEffect(() => {
    // Add global CSS for animation classes
    const style = document.createElement("style");
    style.innerHTML = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      
      .animate-in-right {
        opacity: 0;
        transform: translateX(20px);
        transition: all 0.6s ease-out;
      }
      
      .animate-in-right.animate-in {
        opacity: 1;
        transform: translateX(0);
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(2deg); }
        66% { transform: translateY(5px) rotate(-1deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      
      @keyframes pulse-glow {
        0% { 
          opacity: 0.7;
          transform: scale(1);
        }
        50% { 
          opacity: 1;
          transform: scale(1.05);
        }
        100% { 
          opacity: 0.7;
          transform: scale(1);
        }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      /* Enhanced hover effects */
      .service-section:hover .group {
        transform: translateY(-2px);
      }
      
      /* Shimmer effect for cards */
      .shimmer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(var(--primary), 0.1), transparent);
        animation: shimmer 2s infinite;
        pointer-events: none;
      }
      
      /* Smooth transitions for all interactive elements */
      .transition-all {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);

    // Initialize animations when the page loads
    const initAnimations = () => {
      const pricingContent = document.getElementById("pricing-content");
      if (pricingContent) {
        pricingContent.classList.add("animate-in");
      }
    };

    // Allow time for the DOM to fully render
    setTimeout(initAnimations, 100);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <PageLayout>
      <SolutionsContent />
      <Pricing />
    </PageLayout>
  );
}

export default Solutions;
