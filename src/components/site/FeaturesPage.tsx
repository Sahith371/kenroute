import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bus,
  Route as RouteIcon,
  Ticket,
  LayoutGrid,
  Plug,
  BarChart3,
  Smartphone,
  Users,
  Activity,
  Lock,
  Cloud,
  Check,
  Calendar,
  PlayCircle,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { MacFrame, PhoneFrame } from "@/components/site/MacFrame";
import { CTASection, Footer } from "@/components/site/SiteShell";
import dashboardAdmin from "@/assets/dashboard-admin.jpg";
import dashboardBuses from "@/assets/dashboard-buses.jpg";
import dashboardRoutes from "@/assets/dashboard-routes.jpg";
import dashboardAgent from "@/assets/dashboard-agent.jpg";
import appConductor from "@/assets/app-conductor.jpg";
import appTripDetails from "@/assets/app-trip-details.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function FeaturesPage() {
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
              "radial-gradient(900px 480px at 85% -10%, color-mix(in oklab, var(--brand) 10%, transparent), transparent 60%), radial-gradient(700px 400px at 0% 0%, color-mix(in oklab, var(--navy) 6%, transparent), transparent 60%)",
          }}
        />

        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-brand"
            >
              Features
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-4 text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            >
              Everything you need,
              <br />
              <span className="text-brand">nothing you don't.</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              A complete toolkit thoughtfully designed for the way travel
              operators actually work — from bus and route management to OTA
              integrations and analytics.
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
                <Calendar className="h-4 w-4" /> Book a Free Demo
              </Link>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-muted cursor-default"
              >
                <PlayCircle className="h-4 w-4" /> Watch Overview
              </button>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.22 }}
              className="mt-10 grid max-w-lg grid-cols-3 gap-6"
            >
              <TrustBadge icon={<Activity className="h-4 w-4" />} label="99.9% Uptime" sub="Always reliable" />
              <TrustBadge icon={<Lock className="h-4 w-4" />} label="Secure Platform" sub="Enterprise grade" />
              <TrustBadge icon={<Cloud className="h-4 w-4" />} label="Cloud Based" sub="Access anywhere" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <MacFrame>
              <img
                src={dashboardAdmin}
                alt="KenRoute dashboard"
                width={1536}
                height={1024}
                className="block h-auto w-full"
              />
            </MacFrame>
          </motion.div>
        </div>
      </section>

      {/* ============ FEATURE GRID ============ */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <motion.h2
            {...fadeUp}
            className="mx-auto max-w-3xl text-balance text-center text-3xl font-bold tracking-tight md:text-4xl"
          >
            Powerful features to streamline every part of your operations
          </motion.h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Bus />, title: "Bus Management", desc: "Manage your fleet, schedules and vehicle information effortlessly." },
              { icon: <RouteIcon />, title: "Route Management", desc: "Create, organize and optimize routes to improve efficiency and occupancy." },
              { icon: <Ticket />, title: "Booking Management", desc: "Handle reservations, cancellations and passenger data seamlessly in one place." },
              { icon: <Plug />, title: "OTA Integrations", desc: "Seamlessly connect with top OTAs like redBus and AbhiBus." },
              { icon: <LayoutGrid />, title: "Seat Layout Management", desc: "Create custom seat layouts for different buses with ease." },
              { icon: <Users />, title: "Agent Panel", desc: "Empower your agents with dedicated tools to manage bookings and customers." },
              { icon: <Smartphone />, title: "Conductor App", desc: "Mobile app for conductors to validate tickets and manage trips in real time." },
              { icon: <BarChart3 />, title: "Reports & Analytics", desc: "Gain actionable insights with advanced reports and analytics." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.04 }}
                className="group rounded-2xl border border-hairline bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-foreground [&>svg]:h-5 [&>svg]:w-5">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ALTERNATING SHOWCASES ============ */}
      <div className="space-y-6">
        <ShowcaseSection
          eyebrow="Bus Management"
          title="Complete control over your fleet"
          desc="Add buses, manage details, track status, assign schedules and make sure every vehicle in your fleet is always road-ready."
          bullets={[
            "Bus information & documents",
            "Maintenance & service tracking",
            "Insurance & fitness management",
          ]}
          visual={<MacShot src={dashboardBuses} alt="Buses page" />}
          variant="light"
        />

        <ShowcaseSection
          eyebrow="Route Management"
          title="Plan routes that maximize efficiency"
          desc="Design and manage routes with multiple stages, customize pricing and continuously improve operational efficiency."
          bullets={[
            "Multiple stages & stops",
            "Route scheduling",
            "Distance & time optimization",
          ]}
          visual={<MacShot src={dashboardRoutes} alt="Routes page" />}
          variant="tint"
          reverse
        />

        <ShowcaseSection
          eyebrow="Booking Management"
          title="Simplify bookings and customers"
          desc="From reservations to cancellations, manage the entire booking lifecycle with ease — across walk-ins, agents and online channels."
          bullets={[
            "Online & offline bookings",
            "Seat selection",
            "Cancellations & refunds",
          ]}
          visual={<MacShot src={dashboardAgent} alt="Bookings page" />}
          variant="light"
        />

        <ShowcaseSection
          eyebrow="Conductor App"
          title="Everything in the palm of your hand"
          desc="Our conductor app makes ticket validation and trip management simple and fast — even when the network drops."
          bullets={[
            "QR ticket validation",
            "Passenger list",
            "Trip & stage management",
            "Works offline",
          ]}
          visual={
            <div className="flex items-end justify-center gap-6 px-6 py-8">
              <PhoneFrame className="hidden translate-y-4 scale-95 opacity-90 sm:block">
                <img src={appTripDetails} alt="Trip details" loading="lazy" className="block h-auto w-full" width={1024} height={1536} />
              </PhoneFrame>
              <PhoneFrame>
                <img src={appConductor} alt="Conductor scan" loading="lazy" className="block h-auto w-full" width={1024} height={1536} />
              </PhoneFrame>
            </div>
          }
          variant="brand"
          reverse
        />

        <ShowcaseSection
          eyebrow="Reports & Analytics"
          title="Decisions backed by real-time insight"
          desc="Track revenue, occupancy, commissions and operational performance across routes, agents and channels — all in one place."
          bullets={[
            "Revenue & commissions",
            "Route & occupancy analytics",
            "Channel-wise performance",
            "Exportable reports",
          ]}
          visual={<MacShot src={dashboardAdmin} alt="Reports" />}
          variant="light"
        />
      </div>

      {/* ============ INTEGRATIONS ============ */}
      <section className="py-24">
        <div className="container-page">
          <motion.h2
            {...fadeUp}
            className="text-center text-2xl font-semibold tracking-tight md:text-3xl"
          >
            Seamless integrations with the best
          </motion.h2>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {["redBus", "AbhiBus", "Razorpay", "PayU", "MSG91"].map((name, i) => (
              <motion.div
                key={name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="grid h-20 place-items-center rounded-xl border border-hairline bg-card text-sm font-semibold text-foreground/80 shadow-soft"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY TRAVEL BUSINESSES LOVE KENROUTE ============ */}
      <section className="bg-surface-muted py-24">
        <div className="container-page">
          <motion.h2
            {...fadeUp}
            className="mx-auto max-w-2xl text-balance text-center text-3xl font-bold tracking-tight md:text-4xl"
          >
            Why travel businesses love KenRoute
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Layers className="h-5 w-5" />,
                title: "Built for Scale",
                desc: "Designed to handle thousands of routes, buses and bookings effortlessly.",
              },
              {
                icon: <Activity className="h-5 w-5" />,
                title: "Real-time Operations",
                desc: "Live tracking, updates and analytics to make smarter, faster decisions.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security with 99.9% uptime you can count on.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="rounded-2xl border border-hairline bg-card p-7 shadow-soft"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-foreground">
                  {c.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------- bits ---------- */

function TrustBadge({ icon, label, sub }: { icon: ReactNode; label: string; sub: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-foreground">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function MacShot({ src, alt }: { src: string; alt: string }) {
  return (
    <MacFrame>
      <img src={src} alt={alt} loading="lazy" width={1536} height={1024} className="block h-auto w-full" />
    </MacFrame>
  );
}

interface ShowcaseProps {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
  variant?: "light" | "tint" | "brand";
}

function ShowcaseSection({ eyebrow, title, desc, bullets, visual, reverse, variant = "light" }: ShowcaseProps) {
  const bg =
    variant === "tint"
      ? "bg-surface-muted"
      : variant === "brand"
        ? "bg-[color-mix(in_oklab,var(--brand)_8%,white)]"
        : "bg-card";

  return (
    <section className={`${bg}`}>
      <div className="container-page py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...fadeUp} className={reverse ? "lg:order-2" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
            <h3 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">{title}</h3>
            <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
            <ul className="mt-6 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[15px] text-foreground/85">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={reverse ? "lg:order-1" : ""}
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
