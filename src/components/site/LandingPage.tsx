import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import {
  ArrowRight,
  Bus,
  Route as RouteIcon,
  Ticket,
  LayoutGrid,
  Plug,
  BarChart3,
  FileText,
  ShieldCheck,
  QrCode,
  UserCog,
  PlayCircle,
  Calendar,
  Check,
  Activity,
  Lock,
  Cloud,
  Layers,
  Users,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "./Navbar";
import { CTASection, Footer } from "./SiteShell";
import { MacFrame, PhoneFrame } from "./MacFrame";
import dashboardAdmin from "@/assets/dashboard-admin.jpg";
import dashboardAgent from "@/assets/dashboard-agent.jpg";
import appConductor from "@/assets/app-conductor.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* subtle bg */}
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
            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl"
            >
              Travel Operations,
              <br />
              <span className="text-brand">Simplified.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              Manage buses, routes, bookings, agents, conductors and analytics from
              one powerful platform built for modern travel businesses.
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
              className="mt-10 grid max-w-lg grid-cols-3 gap-6 text-sm text-muted-foreground"
            >
              <HeroBadge icon={<Activity className="h-4 w-4" />} label="99.9% Uptime" />
              <HeroBadge icon={<Lock className="h-4 w-4" />} label="Secure & Reliable" />
              <HeroBadge icon={<Cloud className="h-4 w-4" />} label="Cloud Platform" />
            </motion.div>
          </div>

          {/* MacBook visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
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

            {/* Floating stat cards */}
            <FloatingStat
              className="absolute -left-4 top-8 hidden md:block"
              label="Daily Bookings"
              value="1,248"
              delta="+12.5%"
            />
            <FloatingStat
              className="absolute -right-2 top-1/3 hidden md:block"
              label="Revenue Today"
              value="₹12,45,680"
              delta="+18.7%"
            />
            <FloatingStat
              className="absolute -left-2 bottom-10 hidden md:block"
              label="Passengers"
              value="3,486"
              delta="+11.3%"
            />
            <FloatingStat
              className="absolute -right-4 -bottom-4 hidden md:block"
              label="Active Routes"
              value="85"
              delta="+5.6%"
            />
          </motion.div>
        </div>
      </section>

      {/* ============ WHY KENROUTE ============ */}
      <section className="bg-surface-muted py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why KenRoute"
            title="Built end-to-end for travel businesses"
            subtitle="A complete travel management solution designed to help you operate smarter and grow faster."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Layers className="h-5 w-5" />,
                title: "Built for Scale",
                desc: "Handle thousands of routes and bookings effortlessly on a platform built for growing operators.",
              },
              {
                icon: <Activity className="h-5 w-5" />,
                title: "Real-Time Operations",
                desc: "Live visibility into your operations with live tracking, updates and analytics.",
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Multi-User Platform",
                desc: "Dedicated panels and role-based access for admins, agents, conductors and drivers.",
              },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="group rounded-2xl border border-hairline bg-card p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
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

      {/* ============ PRODUCTS ============ */}
      <section id="products" className="py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Products"
            title="One platform. Every role covered."
            subtitle="Powerful, focused products for every person in your travel business."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ProductCard
              title="Admin Panel"
              desc="Complete control over your operations — dashboards, analytics, reports and route management."
              visual={
                <MacFrame>
                  <img src={dashboardAdmin} alt="Admin Panel" loading="lazy" className="block h-auto w-full" width={1536} height={1024} />
                </MacFrame>
              }
            />
            <ProductCard
              title="Agent Panel"
              desc="Manage reservations, customers and bookings efficiently with a dedicated agent workspace."
              visual={
                <MacFrame>
                  <img src={dashboardAgent} alt="Agent Panel" loading="lazy" className="block h-auto w-full" width={1536} height={1024} />
                </MacFrame>
              }
            />
            <ProductCard
              title="Conductor App"
              desc="Mobile app for conductors to validate tickets, manage passengers and update trip status on the go."
              visual={
                <div className="flex items-end justify-center pt-4">
                  <PhoneFrame>
                    <img src={appConductor} alt="Conductor App" loading="lazy" className="block h-auto w-full" width={1024} height={1536} />
                  </PhoneFrame>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="bg-surface-muted py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need to run smoothly"
            subtitle="A complete toolkit, thoughtfully designed for the way travel operators actually work."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Bus />, title: "Bus Management", desc: "Add, manage and track your entire fleet in one place." },
              { icon: <RouteIcon />, title: "Route Management", desc: "Create, update and optimize routes effortlessly." },
              { icon: <Ticket />, title: "Booking Management", desc: "Manage bookings, cancellations and passengers easily." },
              { icon: <LayoutGrid />, title: "Seat Layout Management", desc: "Create custom seat layouts for your buses." },
              { icon: <Plug />, title: "OTA Integrations", desc: "Seamless integration with redBus, AbhiBus and more." },
              { icon: <BarChart3 />, title: "Revenue Analytics", desc: "Track revenue, commissions and business performance." },
              { icon: <FileText />, title: "Reports", desc: "Detailed reports for bookings, revenue and routes." },
              { icon: <ShieldCheck />, title: "Role Based Access", desc: "Secure role-based access for granular control." },
              { icon: <QrCode />, title: "QR Ticket Validation", desc: "Fast, secure validation using QR codes." },
              { icon: <UserCog />, title: "Driver Management", desc: "Manage driver details, trips and assignments." },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 6) * 0.03 }}
                className="bg-card p-7 transition-colors hover:bg-surface-muted/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-foreground [&>svg]:h-5 [&>svg]:w-5">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Integrations"
            title="Plug into the channels that matter"
            subtitle="Sync inventory and bookings with India's leading OTAs out of the box."
          />
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {["redBus", "AbhiBus", "Paytm Travel", "MakeMyTrip", "ixigo"].map((name, i) => (
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

      {/* ============ SCREENSHOTS SHOWCASE ============ */}
      <section className="bg-navy py-28 text-white">
        <div className="container-page">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              A closer look
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Designed for clarity. Built for speed.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/70">
              A glimpse of the KenRoute platform — every detail considered, every workflow simplified.
            </p>
          </div>

          {/* Alternating sections */}
          <div className="mt-20 space-y-28">
            <ShowcaseRow
              title="Admin Dashboard"
              desc="Get a real-time overview of your bookings, revenue, passengers, routes and bus operations — all in one place."
              bullets={["Real-time analytics", "OTA sync status", "Booking & revenue overview", "Quick actions"]}
              visual={
                <MacFrame>
                  <img src={dashboardAdmin} alt="Admin Dashboard" loading="lazy" className="block h-auto w-full" width={1536} height={1024} />
                </MacFrame>
              }
            />
            <ShowcaseRow
              reverse
              title="Agent Workspace"
              desc="A fast, focused workspace for agents to take bookings, manage customers and update reservations in seconds."
              bullets={["Lightning-fast booking flow", "Customer history at a glance", "Refunds & rescheduling", "Daily settlement reports"]}
              visual={
                <MacFrame>
                  <img src={dashboardAgent} alt="Agent Workspace" loading="lazy" className="block h-auto w-full" width={1536} height={1024} />
                </MacFrame>
              }
            />
            <ShowcaseRow
              title="Conductor on the Go"
              desc="A native mobile experience for conductors — scan QR tickets, validate passengers and update trip status from anywhere."
              bullets={["QR ticket scanning", "Offline-first validation", "Live passenger manifest", "Trip status updates"]}
              visual={
                <div className="grid place-items-center">
                  <PhoneFrame>
                    <img src={appConductor} alt="Conductor App" loading="lazy" className="block h-auto w-full" width={1024} height={1536} />
                  </PhoneFrame>
                </div>
              }
            />
          </div>
        </div>
      </section>


      {/* ============ ABOUT ============ */}
      <section id="about" className="py-28">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">About</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Built by operators, for operators.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              KenRoute is the smart travel operations platform from InfoSecDairies Private Limited.
              We believe travel businesses deserve software that's as fast, reliable and elegant
              as the journeys they deliver.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-6">
            <Stat label="Bookings processed" value="2.4M+" />
            <Stat label="Active routes" value="12k+" />
            <Stat label="Operator partners" value="350+" />
            <Stat label="Uptime SLA" value="99.9%" />
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

/* ---------- small bits ---------- */

function HeroBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand-soft text-foreground">
        {icon}
      </span>
      <span className="text-sm font-medium text-foreground/80">{label}</span>
    </div>
  );
}

function FloatingStat({
  className = "",
  label,
  value,
  delta,
}: {
  className?: string;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`rounded-2xl border border-hairline bg-card px-4 py-3 shadow-card ${className}`}
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold tracking-tight text-foreground">{value}</p>
      <p className="text-[11px] font-semibold text-brand">{delta}</p>
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.p {...fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {eyebrow}
      </motion.p>
      <motion.h2 {...fadeUp} className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </motion.h2>
      <motion.p {...fadeUp} className="mt-4 text-pretty text-muted-foreground">
        {subtitle}
      </motion.p>
    </div>
  );
}

function ProductCard({
  title,
  desc,
  visual,
}: {
  title: string;
  desc: string;
  visual: ReactNode;
}) {
  return (
    <motion.div
      {...fadeUp}
      className="group flex flex-col overflow-hidden rounded-3xl border border-hairline bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
    >
      <div className="rounded-2xl bg-surface-muted p-6">{visual}</div>
      <div className="mt-6 px-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{desc}</p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
        >
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function ShowcaseRow({
  title,
  desc,
  bullets,
  visual,
  reverse,
}: {
  title: string;
  desc: string;
  bullets: string[];
  visual: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-14 md:grid-cols-2">
      <motion.div {...fadeUp} className={reverse ? "md:order-2" : ""}>
        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h3>
        <p className="mt-4 max-w-md text-pretty text-white/70">{desc}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm text-white/85">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/20 text-brand">
                <Check className="h-3 w-3" />
              </span>
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div {...fadeUp} className={reverse ? "md:order-1" : ""}>
        {visual}
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-card p-6 shadow-soft">
      <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function FooterCol({
  title,
  links,
  plain,
}: {
  title: string;
  links: string[];
  plain?: boolean;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            {plain ? l : <a href="#" className="hover:text-foreground">{l}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
