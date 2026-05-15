import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): { post: BlogPost } => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} — Golden Trust Insure Blog` },
      { name: "description", content: loaderData.post.excerpt },
      { property: "og:title", content: loaderData.post.title },
      { property: "og:image", content: loaderData.post.image },
    ] : [],
  }),
  component: BlogPostDetail,
});

function BlogPostDetail() {
  const { post } = Route.useLoaderData() as { post: BlogPost };

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        
        <div className="container-x relative h-full flex flex-col justify-end pb-12">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8 w-fit"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs uppercase tracking-wider font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-background leading-tight max-w-4xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mt-8 text-background/70 text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-accent" /> {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" /> {post.date}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <div className="prose prose-lg prose-primary max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed italic mb-10 border-l-4 border-accent pl-6">
              {post.excerpt}
            </p>
            
            <div className="text-foreground/80 leading-loose space-y-6 text-lg">
              {post.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Related to: {post.category}</span>
            </div>
            
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contact">Ask an advisor about this topic →</Link>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
