import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", to: "/", exact: true },
  { label: "Features", to: "/features", exact: false },
  { label: "Products", to: "/products", exact: false },
  { label: "Pricing", to: "/pricing", exact: false },
  { label: "About", to: "/about", exact: false },
  { label: "Contact", to: "/contact", exact: false },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b-2 border-hairline bg-background/75 backdrop-blur-md transition-all duration-300"
    >
      <div className="container-page flex h-18 md:h-22 items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo className="h-[70px] w-auto md:h-[86px] -ml-[8px] scale-[1.2] md:scale-[1.35] origin-left" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-foreground font-semibold after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground after:scale-x-0" }}
              className="relative text-sm font-medium transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-brand after:transition-transform after:duration-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy/90"
          >
            Book Demo
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-hairline"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-card lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-surface-muted"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white"
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
