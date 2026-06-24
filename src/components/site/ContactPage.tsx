import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight, ChevronDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { CTASection, Footer } from "./SiteShell";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@kenroute.com",
    helper: "We reply within one working day.",
  },
  {
    icon: Phone,
    label: "Call sales",
    value: "+91 80 4000 1234",
    helper: "Mon–Sat, 9:00 to 19:00 IST.",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Bengaluru, India",
    helper: "InfoSecDairies Private Limited.",
  },
  {
    icon: Clock,
    label: "Support hours",
    value: "24 × 7 priority",
    helper: "Dedicated success manager for every account.",
  },
];

const faqs = [
  {
    q: "How long does it take to onboard with KenRoute?",
    a: "Most operators are fully live within 7 to 14 days. We handle data migration, agent training and route configuration end-to-end.",
  },
  {
    q: "Do you offer custom integrations?",
    a: "Yes. We integrate with payment gateways, GPS providers, accounting tools and any internal system through our open API.",
  },
  {
    q: "Is there a minimum fleet size?",
    a: "No. KenRoute scales from a handful of buses to hundreds of vehicles across multiple states without changing the way you work.",
  },
  {
    q: "What does pricing look like?",
    a: "Pricing is tailored to your fleet size, agent network and operational complexity. Book a demo and we'll send a custom proposal.",
  },
  {
    q: "Where is my data stored?",
    a: "All data is encrypted in transit and at rest, hosted in compliant Indian data centers with daily backups and role-based access.",
  },
];

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${
      open 
        ? "border-brand bg-card shadow-soft" 
        : "border-hairline bg-card hover:border-brand/40 hover:shadow-soft"
    }`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8"
      >
        <span className="text-lg font-semibold text-foreground md:text-xl transition-colors duration-250 select-none">
          {q}
        </span>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-all duration-300 ${
          open 
            ? 'bg-brand text-white border-brand shadow-soft rotate-180' 
            : 'text-muted-foreground border-hairline hover:bg-surface-muted'
        }`}>
          <ChevronDown className="h-5 w-5" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 text-base leading-relaxed text-muted-foreground md:px-8 md:pb-8 border-t border-hairline/40 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-8 md:pt-40 md:pb-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 480px at 85% -10%, color-mix(in oklab, var(--brand) 8%, transparent), transparent 60%), radial-gradient(700px 400px at 0% 0%, color-mix(in oklab, var(--navy) 5%, transparent), transparent 60%)",
          }}
        />
        <div className="container-page mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-brand"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Let's start a <span className="text-brand">conversation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            Tell us about your travel business and we'll show you how KenRoute can simplify your operations — usually within one working day.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <motion.form
            {...fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-hairline bg-surface-muted/40 p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Send us a message</h2>
            <p className="mt-3 text-muted-foreground">
              Share a few details and the right person will get back to you shortly.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Field label="First name" placeholder="Aarav" />
              <Field label="Last name" placeholder="Sharma" />
              <Field label="Work email" type="email" placeholder="aarav@company.com" />
              <Field label="Phone" placeholder="+91 98xxxxxxxx" />
              <Field label="Company" placeholder="Your travel business" className="md:col-span-2" />
              <Field label="Fleet size" placeholder="e.g. 25 buses" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-foreground">How can we help?</label>
                <textarea
                  rows={5}
                  placeholder="Tell us a bit about your operations…"
                  className="mt-2 w-full rounded-2xl border border-hairline bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-navy/90"
            >
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.form>

          <motion.div {...fadeUp} className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-hairline bg-card p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg font-semibold text-foreground">{item.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.helper}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container-page mx-auto max-w-3xl">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">FAQ</p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Questions, answered.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Everything you need to know before getting started with KenRoute.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 flex flex-col gap-4">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} idx={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-hairline bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
      />
    </div>
  );
}
