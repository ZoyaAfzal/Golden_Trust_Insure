import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { BlogSection } from "@/components/sections/BlogSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Golden Trust Insure — Smart Coverage for Smarter Living" },
      { name: "description", content: "Independent insurance brokers offering life, health, auto, home, business and travel coverage. Trusted by 15,000+ families since 2001." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyUs />
      <Testimonials />
      <BlogSection />
      <CTABanner />
    </>
  );
}
