import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  PlayCircle,
  Check,
  Monitor,
  Users,
  Smartphone,
  RefreshCw,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { MacFrame, PhoneFrame } from "@/components/site/MacFrame";
import { CTASection, Footer } from "@/components/site/SiteShell";
import dashboardAdmin from "@/assets/dashboard-admin.jpg";
import dashboardAgent from "@/assets/dashboard-agent.jpg";
import dashboardBuses from "@/assets/dashboard-buses.jpg";
import appConductor from "@/assets/app-conductor.jpg";
import appTripDetails from "@/assets/app-trip-details.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function ProductsPage() {
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
              Products
            </motion.p>
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-4 text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            >
              Three Products.
              <br />
              <span className="text-brand">One Powerful Ecosystem.</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              Manage your entire travel business with dedicated tools built for
              admins, agents and conductors — designed to work as one.
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
          </div>

          {/* Stacked Mac + Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <MacFrame>
              <img
                src={dashboardAdmin}
                alt="KenRoute Admin Panel"
                width={1536}
                height={1024}
                className="block h-auto w-full"
              />
            </MacFrame>
            <div className="absolute -bottom-10 -right-2 hidden sm:block">
              <PhoneFrame className="w-[200px]">
                <img
                  src={appConductor}
                  alt="KenRoute Conductor App"
                  width={1024}
                  height={1536}
                  className="block h-auto w-full"
                />
              </PhoneFrame>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ PRODUCT 01 — ADMIN PANEL ============ */}
      <ProductShowcase
        index="01"
        eyebrow="Admin Panel"
        title={<>Complete Control<br />Over Operations</>}
        desc="Powerful tools to manage buses, routes, bookings, users and analytics from one elegant dashboard built for operators."
        bullets={[
          "Bus & Fleet Management",
          "Route & Schedule Management",
          "Booking & Reservation Management",
          "Reports & Analytics",
          "Driver & Staff Management",
          "OTA Integrations (redBus, AbhiBus)",
          "Revenue & Performance Insights",
        ]}
        accent="brand"
        visual={<MacShot src={dashboardBuses} alt="Admin Panel — Buses page" />}
        bg="bg-surface-muted"
      />

      {/* ============ PRODUCT 02 — AGENT PANEL ============ */}
      <ProductShowcase
        index="02"
        eyebrow="Agent Panel"
        title={<>Empower<br />Your Agents</>}
        desc="Give your agents a dedicated workspace to manage bookings, customers and revenue effortlessly — with real-time availability."
        bullets={[
          "Create & Manage Bookings",
          "Customer Management",
          "Real-time Availability & Pricing",
          "Commission & Revenue Tracking",
          "Trip & Passenger Updates",
          "Easy Cancellations & Refunds",
        ]}
        accent="brand"
        visual={<MacShot src={dashboardAgent} alt="Agent Panel — Bookings" />}
        bg="bg-[color-mix(in_oklab,var(--brand)_7%,white)]"
        reverse
      />

      {/* ============ PRODUCT 03 — CONDUCTOR APP ============ */}
      <section className="bg-card">
        <div className="container-page py-24 md:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
            <motion.div {...fadeUp}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                03 — Conductor App
              </p>
              <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Everything In<br />Your Pocket
              </h2>
              <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
                A mobile-first app for conductors to manage trips, validate
                tickets and update passenger status in real time — even offline.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "QR Ticket Validation",
                  "Passenger List & Boarding",
                  "Trip & Seat Management",
                  "Live Updates & Notifications",
                  "Works Offline",
                ].map((b) => (
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
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-end justify-center gap-4 sm:gap-6"
            >
              <PhoneFrame className="hidden translate-y-6 scale-95 opacity-90 md:block">
                <img src={appTripDetails} alt="Trip Details" loading="lazy" width={1024} height={1536} className="block h-auto w-full" />
              </PhoneFrame>
              <PhoneFrame>
                <img src={appConductor} alt="Scan Ticket" loading="lazy" width={1024} height={1536} className="block h-auto w-full" />
              </PhoneFrame>
              <PhoneFrame className="hidden translate-y-6 scale-95 opacity-90 lg:block">
                <img src={appTripDetails} alt="Passenger List" loading="lazy" width={1024} height={1536} className="block h-auto w-full" />
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ ECOSYSTEM ============ */}
      <section className="bg-surface-muted py-24 md:py-32">
        <div className="container-page">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              The Ecosystem
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              One Ecosystem. All Connected.
            </h2>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
              Built to work together seamlessly in real time — every booking,
              update and scan flows instantly across every product.
            </p>
          </motion.div>

          {/* Visual ecosystem diagram */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mx-auto mt-16 grid max-w-5xl items-center gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]"
          >
            <EcoNode icon={<Monitor className="h-7 w-7" />} title="Admin Panel" desc="Manage operations, routes, users and analytics." />
            <EcoConnector />
            <EcoNode icon={<Users className="h-7 w-7" />} title="Agent Panel" desc="Manage bookings, customers and sales efficiently." />
            <EcoConnector />
            <EcoNode icon={<Smartphone className="h-7 w-7" />} title="Conductor App" desc="Validate tickets, manage trips and update in real time." />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-2 rounded-full border border-hairline bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 shadow-soft"
          >
            <RefreshCw className="h-4 w-4 text-brand" />
            Real-time Sync Across All Platforms
          </motion.div>

          {/* Why grid */}
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Rocket className="h-5 w-5" />,
                title: "Built For Scale",
                desc: "From a few buses to thousands, KenRoute grows with your business.",
              },
              {
                icon: <RefreshCw className="h-5 w-5" />,
                title: "Real-time Synchronization",
                desc: "All updates reflect instantly across every platform.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                title: "Role-based Access",
                desc: "Secure permissions for admins, agents and conductors.",
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
                <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
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

function MacShot({ src, alt }: { src: string; alt: string }) {
  return (
    <MacFrame>
      <img src={src} alt={alt} loading="lazy" width={1536} height={1024} className="block h-auto w-full" />
    </MacFrame>
  );
}

interface ShowcaseProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  desc: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
  bg: string;
  accent?: string;
}

function ProductShowcase({ index, eyebrow, title, desc, bullets, visual, reverse, bg }: ShowcaseProps) {
  return (
    <section className={bg}>
      <div className="container-page py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...fadeUp} className={reverse ? "lg:order-2" : ""}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              {index} — {eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
              {desc}
            </p>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-[14.5px] text-foreground/85">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              to="/features"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
            >
              Explore features <ArrowRight className="h-4 w-4" />
            </Link>
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

function EcoNode({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid h-20 w-20 place-items-center rounded-2xl border border-hairline bg-card text-brand shadow-soft">
        {icon}
      </div>
      <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 max-w-[200px] text-[13px] leading-relaxed text-muted-foreground">
        {desc}
      </p>
    </div>
  );
}

function EcoConnector() {
  return (
    <div className="hidden items-center justify-center md:flex">
      <div className="relative h-px w-16 bg-gradient-to-r from-transparent via-brand/40 to-transparent">
        <RefreshCw className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-surface-muted p-0.5 text-brand" />
      </div>
    </div>
  );
}
