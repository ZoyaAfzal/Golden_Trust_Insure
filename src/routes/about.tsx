import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Linkedin, Award, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { team, BRAND } from "@/lib/site-data";
import teamImage from "@/assets/team-office.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Golden Trust Insure — 25 Years of Independent Insurance" },
      { name: "description", content: "Meet the independent broker team who has protected 15,000+ families since 2001 with honest advice and lifelong service." },
      { property: "og:title", content: "About Golden Trust Insure" },
      { property: "og:description", content: "25 years of independent, family-first insurance brokerage." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: Shield, title: "Independence", desc: "We work for you, never the carrier. Every recommendation is shopped across our full panel." },
  { icon: Heart, title: "Stewardship", desc: "Your policy isn't a transaction — it's a relationship that we tend to for the long haul." },
  { icon: Award, title: "Clarity", desc: "Plain English explanations, transparent commissions, and no surprises at renewal." },
];

const milestones = [
  { year: "2001", text: "Founded in Boston with three agents and a borrowed conference room." },
  { year: "2009", text: "Crossed 1,000 active client households across New England." },
  { year: "2018", text: "Named Independent Agency of the Year by the IIABA." },
  { year: "2026", text: "Protecting 15,000+ families and 800+ businesses nationwide." },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-background pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">About {BRAND.name}</p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              Twenty-five years of <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>quiet</em> protection.
            </h1>
            <p className="mt-6 text-background/75 text-lg max-w-xl">
              We started with a simple idea: insurance should be sold by people who answer to clients, not quotas. Three agents and a borrowed conference room later, that idea has carried us across the country.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="rounded-3xl overflow-hidden aspect-[5/4] shadow-2xl"
          >
            <img src={teamImage} alt="TrustHarbor team" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Pull quote story */}
      <section className="section-y bg-surface">
        <div className="container-x grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Our story</p>
          <div>
            <p className="font-heading text-2xl md:text-3xl leading-snug text-foreground">
              "The day a client calls you in a crisis is the day you discover what your business is actually for. After 25 years, we still answer every one of those calls personally."
            </p>
            <p className="mt-6 text-sm text-muted-foreground">— Eleanor Voss, Founder & CEO</p>
            <div className="mt-10 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                {BRAND.name} was founded in 2001 to give families and small businesses a real alternative to captive carriers. Independent from day one, we've grown deliberately — adding only as many clients as we could serve well.
              </p>
              <p>
                Today we represent over forty A-rated carriers, but the way we work has not changed: a single dedicated advisor for every household, a real human on the phone for every claim, and an annual coverage review that respects how your life evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-background">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title={<>Three principles, <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>no exceptions.</em></>}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-accent">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-heading text-2xl">{v.title}</h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionHeading
            eyebrow="Meet the team"
            title={<>The people <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>behind</em> your policy</>}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden"
              >
                <div className="aspect-[4/5] bg-primary text-accent flex items-center justify-center font-heading text-5xl relative">
                  <span>{m.initials}</span>
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 transition-colors flex items-end justify-end p-4">
                    <Linkedin className="h-5 w-5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-heading text-lg">{m.name}</h4>
                  <p className="text-xs uppercase tracking-wider text-accent mt-1">{m.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-y bg-background">
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Our journey"
            title={<>Twenty-five years, <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>one promise.</em></>}
          />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-border" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <p className="font-heading text-3xl text-accent">{m.year}</p>
                    <p className="mt-2 text-muted-foreground">{m.text}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                  <div />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary-mid px-7 h-12">
              <Link to="/contact">Talk to an advisor →</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
