import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import heroImage from "@/assets/hero-family.jpg";

const headline = ["Smart", "Coverage", "for", "Smarter", "Living."];

export function Hero() {
  return (
    <section className="relative bg-primary text-background overflow-hidden">
      {/* decorative gold orb */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-primary-mid/40 blur-3xl" />

      <div className="container-x relative pt-36 pb-20 lg:pt-44 lg:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          {/* badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-7"
          >
            {["Insurance", "Trusted", "Security"].map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-xs uppercase tracking-[0.2em] rounded-full border border-background/30 px-4 py-1.5 text-background/85"
              >
                • {t}
              </motion.span>
            ))}
          </motion.div>

          {/* headline */}
          <h1 className="font-heading text-[2.6rem] sm:text-5xl lg:text-[4.25rem] leading-[1.02] tracking-tight">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.28em]"
              >
                {word === "Coverage" ? (
                  <em
                    className="not-italic font-normal italic text-accent"
                    style={{ fontStyle: "italic" }}
                  >
                    {word}
                  </em>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 max-w-xl text-base md:text-lg text-background/75 leading-relaxed"
          >
            Independent brokers building coverage that protects families, homes, and the things
            you've worked hardest for — with the trust and clarity you deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-7 h-12 text-base"
            >
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-transparent border-background/40 text-background hover:bg-background/10 hover:text-background px-7 h-12 text-base cursor-pointer"
                >
                  <Play className="mr-1 h-4 w-4 fill-current" /> Watch Video
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none aspect-video">
                <DialogHeader className="sr-only">
                  <DialogTitle>Our Story</DialogTitle>
                </DialogHeader>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9D3vS2EizK0?autoplay=1&mute=1&rel=0"
                  title="Golden Trust Insure Story"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
            <img
              src={heroImage}
              alt="A family standing in front of their home"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* floating card */}
          <Dialog>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-4 sm:-left-10 bottom-10 w-60 rounded-2xl bg-background text-foreground p-3 shadow-2xl animate-float-bob cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent shrink-0">
                    <Play className="h-5 w-5 fill-current" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Watch our story</p>
                    <p className="text-sm font-medium truncate">25 years of trust</p>
                  </div>
                </div>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none aspect-video">
              <DialogHeader className="sr-only">
                <DialogTitle>Our Story</DialogTitle>
              </DialogHeader>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9D3vS2EizK0?autoplay=1&mute=1&rel=0"
                title="Golden Trust Insure Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
