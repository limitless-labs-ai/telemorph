import PageLayout from "@/components/Utilities/PageLayout";
import { Hero } from "@/components/Landing Page/Hero";
import Features from "@/components/Landing Page/Features";
import FAQ from "@/components/Landing Page/FAQ";
import Testimonials from "@/components/Landing Page/Testimonials";
import GetStarted from "@/components/Landing Page/GetStarted";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <div id="features">
        <Features />
      </div>
      <Testimonials />
      <div id="faq">
        <FAQ />
      </div>
      <GetStarted />
    </PageLayout>
  );
}
