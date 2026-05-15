import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section className="section-y bg-[var(--surface-2)]">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client stories"
          title={
            <>
              What our clients{" "}
              <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                say
              </em>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-7 shadow-sm flex flex-col"
            >
              <div className="flex gap-0.5 text-accent mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-heading text-lg leading-snug text-foreground flex-1">
                "{t.quote}"
              </p>
              <div className="mt-7 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-primary text-accent flex items-center justify-center font-medium text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
