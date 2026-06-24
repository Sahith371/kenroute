import { motion } from "framer-motion";
import {
  ArrowRight,
  Bus,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/SiteShell";
import aboutBus from "@/assets/about-bus.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 480px at 90% -5%, color-mix(in oklab, var(--brand) 10%, transparent), transparent 60%), radial-gradient(700px 400px at 0% 0%, color-mix(in oklab, var(--navy) 5%, transparent), transparent 60%)",
          }}
        />

        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-brand"
            >
              About KenRoute
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            >
              Built for Bus Operators.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              KenRoute is a modern bus operations software designed to help
              operators manage routes, bookings, buses, agents and daily
              operations efficiently from one platform.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy/90"
              >
                <Calendar className="h-4 w-4" /> Book Demo
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-muted"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl bg-surface-muted shadow-card">
              <img
                src={aboutBus}
                alt="Modern coach bus on an open highway"
                width={1200}
                height={900}
                className="block h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ WHY KENROUTE ============ */}
      <section className="bg-surface-muted py-24 md:py-32">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
              Why KenRoute
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Bus operators often manage operations using multiple tools and
              manual processes. KenRoute brings everything together in one
              platform, helping operators simplify daily operations and improve
              efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ THREE CARDS ============ */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Bus className="h-6 w-6" />,
                title: "Built for Bus Operators",
                desc: "Designed specifically for bus businesses and their operational needs.",
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Simple and Easy to Use",
                desc: "Clean workflows and an intuitive experience for every user.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Reliable and Secure",
                desc: "Built with performance, stability and security in mind.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="rounded-2xl border border-hairline bg-card p-8 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-foreground">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POWERED BY ============ */}
      <section className="bg-surface-muted py-24 md:py-32">
        <div className="container-page">
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-card p-8 text-center shadow-soft md:p-12"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-foreground">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="mt-6 text-balance text-2xl font-bold tracking-tight md:text-3xl">
              A Product of InfoSecDairies Private Limited
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
              KenRoute is developed and maintained by InfoSecDairies Private
              Limited, a technology company focused on building reliable
              software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
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
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 240px at 80% 0%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 60%)",
              }}
            />
            <h2 className="relative text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Ready to Modernize Your Bus Operations?
            </h2>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
              >
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-card/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-card/10"
              >
                Contact Sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
