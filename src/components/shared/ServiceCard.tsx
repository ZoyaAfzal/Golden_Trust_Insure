import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, Heart, Car, Home, Briefcase, Plane, ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

const ICONS = { Shield, Heart, Car, Home, Briefcase, Plane };

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = ICONS[service.icon];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        hash="description"
        className="group block h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_50px_-20px_rgba(13,59,46,0.25)]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-primary">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <h3 className="mt-6 font-heading text-2xl text-foreground">{service.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.shortDesc}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
