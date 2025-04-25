"use client";
import React from "react";
import { Check } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";

function PricingCard({
  title,
  price,
  features,
  isPopular = false,
  displayBilledAnnually = false,
  buttonText = "Get Started",
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  displayBilledAnnually?: boolean;
  buttonText?: string;
}) {
  // Check if this is a yearly plan with a discount
  const isYearlyDiscount = price !== "0";

  return (
    <div
      className={`relative rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full flex flex-col ${
        isPopular
          ? "bg-gradient-to-b from-primary/10 to-primary/5 border-2 border-primary"
          : "bg-background border border-border"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold">${price}</span>
            <span className="text-muted-foreground ml-1">/month</span>
          </div>
          <div className="h-5 overflow-hidden">
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                displayBilledAnnually
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              <span className="text-sm text-muted-foreground">
                Billed annually
              </span>
            </div>
          </div>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <ArrowButton
        className="w-full"
        variant={isPopular ? "default" : "secondary"}
        onClick={() => {
          console.log(`Button clicked for ${title}`);
        }}
      >
        {buttonText}
      </ArrowButton>
    </div>
  );
}

export default PricingCard;
