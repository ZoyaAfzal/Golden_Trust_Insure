import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", invert }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.2em] mb-4 ${invert ? "text-accent" : "text-accent"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl leading-[1.1] ${invert ? "text-background" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg ${invert ? "text-background/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
