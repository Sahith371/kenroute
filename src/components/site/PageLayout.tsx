import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { CTASection, Footer } from "./SiteShell";

interface PageProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export function PageLayout({ eyebrow, title, description, children }: PageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(900px 480px at 85% -10%, color-mix(in oklab, var(--brand) 8%, transparent), transparent 60%), radial-gradient(700px 400px at 0% 0%, color-mix(in oklab, var(--navy) 5%, transparent), transparent 60%)",
          }}
        />
        <div className="container-page mx-auto max-w-3xl text-center">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-brand"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {children}

      <CTASection />
      <Footer />
    </div>
  );
}
