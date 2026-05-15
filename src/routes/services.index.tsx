import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Insurance Services — Golden Trust Insure" },
      { name: "description", content: "Life, health, auto, home, business and travel insurance — six lines of coverage tailored by independent brokers." },
      { property: "og:title", content: "Insurance Services — Golden Trust Insure" },
      { property: "og:description", content: "Six core lines of coverage, each tailored by an independent broker." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const filters = ["All", "Personal", "Family", "Business"] as const;
const groupOf = (slug: string) =>
  slug === "business-insurance" ? "Business" :
  slug === "auto-insurance" || slug === "travel-insurance" ? "Personal" : "Family";

function ServicesPage() {
  const [filter, setFilter] = useState<typeof filters[number]>("All");
  const visible = services.filter((s) => filter === "All" || groupOf(s.slug) === filter);

  return (
    <>
      <section className="bg-primary text-background pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            <Link to="/" className="hover:text-background">Home</Link> / Services
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            Coverage that meets <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>every season</em> of your life.
          </h1>
          <p className="mt-6 text-background/75 max-w-2xl text-lg">
            Six core insurance lines, all available individually or bundled for premium savings. Each policy is shopped across forty-plus carriers to find the right fit.
          </p>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <Badge
                key={f}
                onClick={() => setFilter(f)}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm border transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {f}
              </Badge>
            ))}
          </div>
          <SectionHeading
            eyebrow="Browse all"
            title={<>Find the <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>right</em> coverage</>}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 h-12">
              <Link to="/contact">Bundle & save — get a quote →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
