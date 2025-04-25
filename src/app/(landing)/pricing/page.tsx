"use client";
import React, { useState } from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import PricingCard from "@/components/Landing Page/PricingCard";
import { pricing, pricingTitles } from "@/config/pricing";

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <PageLayout>
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            {pricingTitles.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {pricingTitles.text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-12">
          <div className="flex items-center space-x-2 mb-2">
            <span
              className={`text-sm font-medium ${
                isMonthly ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsMonthly(!isMonthly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                  isMonthly ? "translate-x-1" : "translate-x-6"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                !isMonthly ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly
            </span>
          </div>
          <div className="h-6 overflow-hidden">
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                isMonthly
                  ? "opacity-0 -translate-y-2"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                Save 20% with annual billing
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={plan.title}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
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
          className="mt-20 text-center animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-8">
            Have questions? Check out our{" "}
            <a href="/#faq" className="text-primary hover:underline">
              FAQ page
            </a>{" "}
            or{" "}
            <a href="/#" className="text-primary hover:underline">
              contact our support team
            </a>
            .
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default Pricing;
