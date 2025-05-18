"use client";
import React, { useState, useRef, useEffect } from "react";
import PageLayout from "@/components/Utilities/PageLayout";
import PricingCard from "@/components/Landing Page/PricingCard";
import { pricing, pricingTitles } from "@/config/pricing";
import Image from "next/image";

function SolutionsContent() {
  const servicesRef = useRef<HTMLDivElement>(null);

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

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Mission Section */}
        <section className="mb-24 relative fade-in-up">
          <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--brand-primary)] relative">
            Our Mission
            <div className="h-1 w-16 bg-primary mt-2"></div>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            TeleMorph, the leading telecom management company in North America,
            is renowned for its steadfast commitment to excellence,
            responsibility, and leadership. Our goal is to offer our clients a
            personalized corporate structure that offers unmatched assurance,
            adaptability, security, resources, and cost-effectiveness. Our goal
            is to lead the telecom/IT services and management sector by
            providing solutions that enable current leaders to scale new
            heights.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Through our 24/7 support line or adaptable web interface, our
            customers can always count on us to give them the service they need,
            whenever they need it. At TeleMorph we are dedicated to providing
            comprehensive and innovative IT services to businesses of all sizes,
            empowering them to navigate the ever-evolving digital landscape with
            ease.
          </p>
          <div
            className="mt-10 p-6 bg-primary/5 rounded-lg border border-primary/10 shadow-sm fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <p className="text-foreground font-medium text-lg">
              Our expertise spans across five core service areas, each tailored
              to cater to your unique business needs.
            </p>
          </div>
        </section>

        {/* Service Sections */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Our Solutions
          <div className="h-1 w-16 bg-primary mt-2 mx-auto"></div>
        </h2>

        <div ref={servicesRef} className="space-y-20">
          <section className="service-section transition-all duration-700 opacity-0 translate-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6 md:mb-10">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-full text-primary mr-3">
                    1
                  </span>
                  Procurement & Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Device procurement and management involves acquiring,
                  configuring, and overseeing IT equipment like smartphones and
                  tablets for a business. This includes selecting the right
                  devices, negotiating contracts with carriers and vendors,
                  deploying and setting up the equipment, providing ongoing
                  support, troubleshooting, and managing the devices'
                  end-of-life cycle. The goal is to equip employees with the
                  necessary tools to enhance efficiency, security, and
                  cost-effectiveness.
                </p>
                <button className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex justify-center order-1 md:order-2">
                <div className="relative group p-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-lg transform transition-all duration-300"></div>
                  <Image
                    src="/images/solutions/technology.svg"
                    alt="Procurement & Management"
                    width={280}
                    height={280}
                    className="relative rounded-xl object-contain bg-[var(--brand-primary)]/5 p-6 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="service-section transition-all duration-700 opacity-0 translate-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6 md:mb-10">
              <div className="flex-1 flex justify-center">
                <div className="relative group p-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl blur-xl group-hover:blur-lg transform transition-all duration-300"></div>
                  <Image
                    src="/images/solutions/management.svg"
                    alt="Data Management & Security"
                    width={280}
                    height={280}
                    className="relative rounded-xl object-contain bg-[var(--brand-primary)]/5 p-6 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-full text-primary mr-3">
                    2
                  </span>
                  Data Management & Security
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Device security and data management involves safeguarding
                  sensitive information stored on and transmitted by IT devices.
                  This includes implementing secure passwords, encryption,
                  access restrictions, monitoring usage and network connections,
                  and ensuring data backups. The goal is to prevent data loss,
                  theft, or unauthorized access while maintaining
                  confidentiality. Effective policies, clear usage guidelines,
                  regular security training, and tools like device management
                  solutions and security software are essential.
                </p>
                <button className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <section className="service-section transition-all duration-700 opacity-0 translate-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6 md:mb-10">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-full text-primary mr-3">
                    3
                  </span>
                  Maintenance & Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maintenance and support encompass diagnosing and resolving
                  both hardware issues, such as cracked screens or battery
                  problems, and software issues, like sluggish performance or
                  connectivity problems. These services can be provided by
                  manufacturers, carriers, or independent repair shops. The goal
                  is to restore the device's functionality, ensuring it operates
                  efficiently so users can remain productive. This approach
                  helps businesses extend the lifespan and value of their
                  devices, reducing downtime and avoiding costly replacements.
                </p>
                <button className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex justify-center order-1 md:order-2">
                <div className="relative group p-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-lg transform transition-all duration-300"></div>
                  <Image
                    src="/images/solutions/maintenance.svg"
                    alt="Maintenance & Support"
                    width={280}
                    height={280}
                    className="relative rounded-xl object-contain bg-[var(--brand-primary)]/5 p-6 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="service-section transition-all duration-700 opacity-0 translate-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6 md:mb-10">
              <div className="flex-1 flex justify-center">
                <div className="relative group p-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/20 rounded-2xl blur-xl group-hover:blur-lg transform transition-all duration-300"></div>
                  <Image
                    src="/images/solutions/eld.svg"
                    alt="ELD Solutions"
                    width={280}
                    height={280}
                    className="relative rounded-xl object-contain bg-[var(--brand-primary)]/5 p-6 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-full text-primary mr-3">
                    4
                  </span>
                  ELD Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ELD software development helps trucking companies manage their
                  logs and increase productivity by creating software and mobile
                  applications for ELD devices. This entails offering trucking
                  firms advising and training services on how to use ELD
                  hardware and software as well as how to adhere to legal
                  requirements.
                </p>
                <button className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          <section className="service-section transition-all duration-700 opacity-0 translate-y-10">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-6 md:mb-10">
              <div className="flex-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground flex items-center">
                  <span className="w-8 h-8 bg-primary/20 flex items-center justify-center rounded-full text-primary mr-3">
                    5
                  </span>
                  Expense Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expense management involves monitoring, regulating, and
                  optimizing business costs related to hardware, service plans,
                  and other associated expenses. It includes implementing
                  policies for device management, analyzing usage reports to
                  identify cost-saving opportunities, negotiating better rates
                  with service providers, and providing employees with tools for
                  economical device use. The goals are to reduce costs.
                </p>
                <button className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex justify-center order-1 md:order-2">
                <div className="relative group p-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-lg transform transition-all duration-300"></div>
                  <Image
                    src="/images/solutions/cost-savings.svg"
                    alt="Expense Management"
                    width={280}
                    height={280}
                    className="relative rounded-xl object-contain bg-[var(--brand-primary)]/5 p-6 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-16">
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
    if (pricingRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const pricingContent = document.getElementById("pricing-content");
            if (pricingContent) {
              pricingContent.classList.add("animate-in");
            }

            const animateRightElements =
              pricingRef.current?.querySelectorAll(".animate-in-right");
            setTimeout(() => {
              animateRightElements?.forEach((el) => {
                el.classList.add("animate-in");
              });
            }, 300);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(pricingRef.current);

      return () => {
        if (pricingRef.current) {
          observer.unobserve(pricingRef.current);
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
            <a
              href="/#faq"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              FAQ page
            </a>{" "}
            or{" "}
            <a
              href="/#"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              contact our support team
            </a>
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
      
      .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .fade-in {
        animation: fadeIn 0.6s ease-out forwards;
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .float {
        animation: float 6s ease-in-out infinite;
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
