import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { blogPosts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Insurance Insights & Guides — Golden Trust Insure Blog" },
      {
        name: "description",
        content:
          "Plain-English guides, news, and tips from independent insurance brokers — published monthly.",
      },
      { property: "og:title", content: "Golden Trust Insure Blog" },
      {
        property: "og:description",
        content: "Insurance insights, guides, and news from our advisors.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

const cats = ["All", "Insurance Tips", "News", "Guides"] as const;

function BlogPage() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const visible = blogPosts.filter((p) => cat === "All" || p.category === cat);

  return (
    <>
      <section className="bg-primary text-background pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div className="container-x">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">Insights</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            The fine print,{" "}
            <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
              translated.
            </em>
          </h1>
          <p className="mt-6 text-background/75 max-w-2xl text-lg">
            Practical guides and industry news from advisors who'd rather you understood your policy
            than just paid for it.
          </p>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {cats.map((c) => (
              <Badge
                key={c}
                onClick={() => setCat(c)}
                className={`cursor-pointer rounded-full px-5 py-2 text-sm border transition-colors ${
                  cat === c
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary"
                    : "bg-transparent text-foreground border-border hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </Badge>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {visible.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <div className="aspect-[5/3] overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-accent uppercase tracking-wider font-medium">
                      {p.category}
                    </span>
                    <span>·</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">By {p.author}</span>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: p.slug }}
                      className="inline-flex items-center gap-1 text-accent font-medium hover:underline"
                    >
                      Read more <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
