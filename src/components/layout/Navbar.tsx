import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { BRAND, navItems } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className={`flex h-9 w-9 items-center justify-center rounded-full ${transparent ? "bg-accent/90" : "bg-primary"} transition-colors`}>
            <Anchor className={`h-4.5 w-4.5 ${transparent ? "text-primary" : "text-accent"}`} strokeWidth={2.2} />
          </span>
          <span className={`font-heading text-xl font-semibold tracking-tight ${transparent ? "text-background" : "text-foreground"}`}>
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              data-active={location.pathname === n.to}
              className={`nav-link text-sm font-medium ${transparent ? "text-background/90 hover:text-background" : "text-foreground/80 hover:text-foreground"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="hidden md:inline-flex rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-5">
            <Link to="/contact">Get a Quote →</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`md:hidden ${transparent ? "text-background hover:text-background hover:bg-background/10" : ""}`}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="font-heading text-xl">{BRAND.name}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {navItems.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium hover:bg-secondary"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" className="mt-6 w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote →</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
