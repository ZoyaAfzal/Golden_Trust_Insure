import { Link } from "@tanstack/react-router";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";
import { BRAND, services, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-background">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent">
                <Anchor className="h-4.5 w-4.5 text-primary" strokeWidth={2.2} />
              </span>
              <span className="font-heading text-xl font-semibold">{BRAND.name}</span>
            </Link>
            <p className="mt-4 text-sm text-background/70 max-w-xs">
              Independent insurance brokers protecting families and businesses since 2001.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-base mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              {navItems.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="hover:text-accent transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="hover:text-accent transition-colors hover:translate-x-0.5 inline-block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                {BRAND.address}
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                {BRAND.phone}
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                {BRAND.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/15 flex justify-end text-xs text-background/60">
          <p>
            Powered by{" "}
            <a
              href="https://axistechgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors font-medium"
            >
              AxisTechGroup
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
