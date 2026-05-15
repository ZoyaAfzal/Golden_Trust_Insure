import { useEffect } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, X, Shield, Heart, Car, Home, Briefcase, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services, type Service } from "@/lib/site-data";

const ICONS = { Shield, Heart, Car, Home, Briefcase, Plane };

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — Golden Trust Insure` },
          { name: "description", content: loaderData.service.shortDesc },
          { property: "og:title", content: `${loaderData.service.title} — Golden Trust Insure` },
          { property: "og:description", content: loaderData.service.shortDesc },
          { property: "og:type", content: "product" },
          { property: "og:url", content: `/services/${loaderData.service.slug}` },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/services/${loaderData.service.slug}` }] : [],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: loaderData.service.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          },
        ]
      : [],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = ICONS[service.icon];
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  useEffect(() => {
    // 1. Force scroll to top immediately on route change to prevent landing at the bottom
    window.scrollTo(0, 0);

    // 2. If there is a hash, wait for the browser to finish layout and then scroll
    if (window.location.hash === "#description") {
      const scrollToElement = () => {
        const el = document.getElementById("description");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      // Use requestAnimationFrame with a small fallback timeout to ensure the DOM has settled
      const handleScroll = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(scrollToElement);
        });
      };

      handleScroll();
      const timer = setTimeout(scrollToElement, 250); // Fallback for slower renders
      return () => clearTimeout(timer);
    }
  }, [service.slug]);

  return (
    <>
      <section className="bg-primary text-background pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
            <Link to="/services" className="hover:text-background">
              Services
            </Link>{" "}
            / {service.title}
          </p>
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-end">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary mb-6">
                <Icon className="h-6 w-6" />
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                {service.title}
              </h1>
              <p className="mt-6 text-background/75 max-w-2xl text-lg">{service.longDesc}</p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 h-12 lg:w-fit lg:justify-self-end"
            >
              <Link to="/contact">
                Get a quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage details */}
      <section id="description" className="section-y bg-surface scroll-mt-32">
        <div className="container-x grid lg:grid-cols-[2fr_1fr] gap-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Coverage details"
              title={
                <>
                  What's{" "}
                  <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                    included
                  </em>
                </>
              }
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card border border-border p-6">
                <h4 className="font-heading text-lg text-primary mb-4">Covered</h4>
                <ul className="space-y-3">
                  {service.covered.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm">
                      <Check className="h-5 w-5 text-accent shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6">
                <h4 className="font-heading text-lg text-muted-foreground mb-4">Not covered</h4>
                <ul className="space-y-3">
                  {service.notCovered.map((c) => (
                    <li key={c} className="flex gap-2.5 text-sm text-muted-foreground">
                      <X className="h-5 w-5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title={
                  <>
                    Common{" "}
                    <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                      questions
                    </em>
                  </>
                }
              />
              <Accordion type="single" collapsible className="mt-8">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="font-heading text-lg text-left hover:no-underline hover:text-accent">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Sidebar quote card */}
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl bg-primary text-background p-7 shadow-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">Quick quote</p>
              <h3 className="font-heading text-2xl">Get covered in minutes</h3>
              <p className="mt-3 text-sm text-background/75">
                Tell us a few details and an advisor will return a tailored quote within one
                business hour.
              </p>
              <ul className="mt-5 space-y-2 text-sm">
                {["Free consultation", "No obligation", "40+ carriers"].map((t) => (
                  <li key={t} className="flex gap-2 text-background/85">
                    <Check className="h-4 w-4 text-accent" /> {t}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 h-11"
              >
                <Link to="/contact">Start my quote →</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-x">
          <SectionHeading
            eyebrow="Explore more"
            title={
              <>
                Related{" "}
                <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                  coverage
                </em>
              </>
            }
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
