import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const stats = [
  { label: "Happy Clients", value: 15000, suffix: "+" },
  { label: "Years Experience", value: 25, suffix: "+" },
  { label: "Insurance Plans", value: 50, suffix: "+" },
  { label: "Claims Settled", value: 98, suffix: "%" },
];

export function StatsBar() {
  return (
    <section className="bg-primary-mid text-background">
      <div className="container-x py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-2 divide-x divide-accent/30">
        {stats.map((s, i) => (
          <div key={s.label} className={`text-center px-4 ${i === 0 ? "md:border-l-0" : ""}`}>
            <p className="font-heading text-4xl lg:text-5xl text-accent">
              <AnimatedCounter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs lg:text-sm uppercase tracking-[0.18em] text-background/75">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
