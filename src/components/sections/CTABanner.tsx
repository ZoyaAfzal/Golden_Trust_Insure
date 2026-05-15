import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/site-data";

export function CTABanner() {
  return (
    <section className="section-y bg-primary text-background relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-[400px] w-[400px] rounded-full bg-primary-mid/60 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container-x relative text-center max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Get protected today</p>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Ready to protect what{" "}
          <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
            matters most?
          </em>
        </h2>
        <p className="mt-5 text-background/75 text-base md:text-lg max-w-xl mx-auto">
          Get a free, no-obligation quote in minutes — or speak with an advisor who will walk you
          through every option.
        </p>
        <div className="mt-9 flex flex-wrap gap-3 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 h-12 text-base"
          >
            <Link to="/contact">Get your free quote →</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full bg-transparent border-background/40 text-background hover:bg-background/10 hover:text-background px-7 h-12 text-base"
          >
            <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-1 h-4 w-4" /> {BRAND.phone}
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
