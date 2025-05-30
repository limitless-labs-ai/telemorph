import PageLayout from "@/components/Utilities/PageLayout";
import { Hero } from "@/components/Landing Page/Hero";
import { Statistics } from "@/components/Landing Page/Statistics";
import { Solutions } from "@/components/Landing Page/Solutions";
import Features from "@/components/Landing Page/Features";
import FAQ from "@/components/Landing Page/FAQ";
import Testimonials from "@/components/Landing Page/Testimonials";
import GetStarted from "@/components/Landing Page/GetStarted";

export default function Home() {
  return (
    <>
      {/* Background Image for Entire Page */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-50"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      />

      {/* Gradient Overlays for Edge Blending */}
      <div className="fixed inset-0 bg-gradient-to-t from-background via-background/60 to-transparent -z-40" />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/90 -z-40" />
      <div className="fixed inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70 -z-40" />

      {/* Additional overlay for better text readability */}
      <div className="fixed inset-0 bg-background/30 -z-40" />

      <PageLayout>
        <Hero />
        <Statistics />
        <Solutions />
        <div id="features">
          <Features />
        </div>
        <Testimonials />
        <div id="faq">
          <FAQ />
        </div>
        <GetStarted />
      </PageLayout>
    </>
  );
}
