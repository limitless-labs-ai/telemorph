"use client";
import React, { useState } from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import PricingCard from "@/components/Landing Page/PricingCard";
import { pricing, pricingTitles } from "@/config/pricing";
import Image from "next/image";

function SolutionsContent() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Mission Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--brand-primary)]">
          Our Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          TeleMorph, the leading telecom management company in North America, is
          renowned for its steadfast commitment to excellence, responsibility,
          and leadership. Our goal is to offer our clients a personalized
          corporate structure that offers unmatched assurance, adaptability,
          security, resources, and cost-effectiveness. Our goal is to lead the
          telecom/IT services and management sector by providing solutions that
          enable current leaders to scale new heights. Through our 24/7 support
          line or adaptable web interface, our customers can always count on us
          to give them the service they need, whenever they need it. At
          TeleMorph we are dedicated to providing comprehensive and innovative
          IT services to businesses of all sizes, empowering them to navigate
          the ever-evolving digital landscape with ease. Our expertise spans
          across five core service areas, each tailored to cater to your unique
          business needs.
        </p>
      </section>

      {/* Service Sections */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          Procurement & Management
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-1">
            <p className="text-muted-foreground">
              Device procurement and management involves acquiring, configuring,
              and overseeing IT equipment like smartphones and tablets for a
              business. This includes selecting the right devices, negotiating
              contracts with carriers and vendors, deploying and setting up the
              equipment, providing ongoing support, troubleshooting, and
              managing the devices' end-of-life cycle. The goal is to equip
              employees with the necessary tools to enhance efficiency,
              security,and cost-effectiveness.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/solutions/technology.svg"
              alt="Procurement & Management"
              width={220}
              height={220}
              className="rounded-xl object-contain bg-[var(--brand-primary)]/5 p-4"
            />
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          Data Management & Security
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-1">
            <p className="text-muted-foreground">
              Device security and data management involves safeguarding
              sensitive information stored on and transmitted by IT devices.
              This includes implementing secure passwords, encryption, access
              restrictions, monitoring usage and network connections, and
              ensuring data backups. The goal is to prevent data loss, theft, or
              unauthorized access while maintaining confidentiality. Effective
              policies, clear usage guidelines, regular security training, and
              tools like device management solutions and security software are
              essential.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/solutions/management.svg"
              alt="Data Management & Security"
              width={220}
              height={220}
              className="rounded-xl object-contain bg-[var(--brand-primary)]/5 p-4"
            />
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          Maintenance & Support
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-1">
            <p className="text-muted-foreground">
              Maintenance and support encompass diagnosing and resolving both
              hardware issues, such as cracked screens or battery problems, and
              software issues, like sluggish performance or connectivity
              problems. These services can be provided by manufacturers,
              carriers, or independent repair shops. The goal is to restore the
              device's functionality, ensuring it operates efficiently so users
              can remain productive. This approach helps businesses extend the
              lifespan and value of their devices, reducing downtime and
              avoiding costly replacements.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/solutions/maintenance.svg"
              alt="Maintenance & Support"
              width={220}
              height={220}
              className="rounded-xl object-contain bg-[var(--brand-primary)]/5 p-4"
            />
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          ELD Solutions
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-1">
            <p className="text-muted-foreground">
              ELD software development helps trucking companies manage their
              logs and increase productivity by creating software and mobile
              applications for ELD devices. This entails offering trucking firms
              advising and training services on how to use ELD hardware and
              software as well as how to adhere to legal requirements.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/solutions/eld.svg"
              alt="ELD Solutions"
              width={220}
              height={220}
              className="rounded-xl object-contain bg-[var(--brand-primary)]/5 p-4"
            />
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">
          Expense Management
        </h3>
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-1">
            <p className="text-muted-foreground">
              Expense management involves monitoring, regulating, and optimizing
              business costs related to hardware, service plans, and other
              associated expenses. It includes implementing policies for device
              management, analyzing usage reports to identify cost-saving
              opportunities, negotiating better rates with service providers,
              and providing employees with tools for economical device use. The
              goals are to reduce costs.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/solutions/cost-savings.svg"
              alt="Expense Management"
              width={220}
              height={220}
              className="rounded-xl object-contain bg-[var(--brand-primary)]/5 p-4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
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
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mb-8">
          Have questions? Check out our{" "}
          <a href="/#faq" className="text-primary hover:underline">
            FAQ page
          </a>{" "}
          or{" "}
          <a href="/#" className="text-primary hover:underline">
            contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}

function Solutions() {
  return (
    <PageLayout>
      <SolutionsContent />
      <Pricing />
    </PageLayout>
  );
}

export default Solutions;
