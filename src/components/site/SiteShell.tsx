import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function CTASection() {
  return (
    <section className="pb-28 pt-8">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center text-white shadow-card md:px-16 md:py-20"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(600px 240px at 80% 0%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)",
            }}
          />
          <h2 className="relative text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Ready to modernize your travel operations?
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-white/70">
            Join hundreds of travel businesses who trust KenRoute to power their operations.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Book a Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-xs text-white/60">No credit card required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const footerCols: { title: string; links: { label: string; to?: string; plain?: boolean }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Products", to: "/products" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@kenroute.com", plain: true },
      { label: "+91 98765 43210", plain: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-card py-14">
      <div className="container-page grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Smart Travel Operations Platform.
            <br />A product of InfoSecDairies Private Limited.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-semibold text-foreground">{col.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.plain || !l.to ? (
                    l.label
                  ) : (
                    <Link to={l.to} className="transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-page mt-12 border-t border-hairline pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} KenRoute. All rights reserved.
      </div>
    </footer>
  );
}
