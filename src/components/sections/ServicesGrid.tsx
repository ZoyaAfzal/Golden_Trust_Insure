import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { services } from "@/lib/site-data";

export function ServicesGrid() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we cover"
          title={
            <>
              Insurance, designed{" "}
              <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                around you
              </em>
            </>
          }
          subtitle="Six core lines of coverage, each tailored by an independent broker who works for you — not the carrier."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
