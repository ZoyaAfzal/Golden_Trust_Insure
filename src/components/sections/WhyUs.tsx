import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Users, Zap, LifeBuoy, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import teamImage from "@/assets/team-office.jpg";

const features = [
  {
    icon: Users,
    title: "Trusted by 15,000+ families",
    desc: "A quarter-century of building lifelong client relationships.",
  },
  {
    icon: Zap,
    title: "Instant online quote system",
    desc: "Compare carriers and bind a policy in under ten minutes.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 claims support",
    desc: "Real humans on call the moment something goes wrong.",
  },
  {
    icon: EyeOff,
    title: "No hidden fees — ever",
    desc: "Transparent commissions and side-by-side carrier comparisons.",
  },
];

export function WhyUs() {
  return (
    <section className="section-y bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_30px_60px_-20px_rgba(13,59,46,0.3)]">
            <img
              src={teamImage}
              alt="The Golden Trust Insure team in their Boston office"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-primary text-background rounded-2xl p-6 shadow-xl max-w-[220px]">
            <p className="font-heading text-3xl text-accent">A+</p>
            <p className="text-sm text-background/80 mt-1">A.M. Best financial strength rating</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Why choose us"
            title={
              <>
                Brokers who answer{" "}
                <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                  to you.
                </em>
              </>
            }
            subtitle="We're independent — which means we shop dozens of carriers to find the right policy, then stay with you long after the paperwork is signed."
          />

          <ul className="mt-10 space-y-6">
            {features.map((f, i) => (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-accent">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">{f.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full bg-primary text-primary-foreground hover:bg-primary-mid px-7 h-12"
          >
            <Link to="/contact">Start your free quote →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
