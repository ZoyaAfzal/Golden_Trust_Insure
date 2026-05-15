import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { blogPosts } from "@/lib/site-data";

export function BlogSection() {
  // Show the latest 3 posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            align="left"
            eyebrow="Latest Insights"
            title={
              <>
                The fine print,{" "}
                <em className="text-accent not-italic" style={{ fontStyle: "italic" }}>
                  translated.
                </em>
              </>
            }
          />
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/20 hover:border-accent hover:text-accent w-fit"
          >
            <Link to="/blog">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {recentPosts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider font-semibold text-accent mb-3">
                  <span>{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.date}
                  </span>
                </div>
                <Link to="/blog/$slug" params={{ slug: p.slug }}>
                  <h3 className="font-heading text-xl leading-snug group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </Link>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {p.excerpt}
                </p>
                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">By {p.author}</span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="text-xs font-bold text-accent flex items-center gap-1 hover:underline"
                  >
                    Read more <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
