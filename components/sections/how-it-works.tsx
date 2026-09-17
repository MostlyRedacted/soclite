"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import {
  IconPlug,
  IconBrain,
  IconMessage,
  IconShieldCheck,
} from "@/components/ui/icons";
import { fadeUp, inView, stagger } from "@/lib/motion";

const steps = [
  {
    n: "01",
    icon: IconPlug,
    title: "Connect your alerts",
    body: "Point SocLite at the tools you already run — identity, endpoint, cloud, email, firewall. Read-only, agentless, live in minutes.",
    meta: "3-minute setup",
  },
  {
    n: "02",
    icon: IconBrain,
    title: "AI analyzes & prioritizes",
    body: "Every signal is correlated across sources, scored for real risk, and de-duplicated. Noise collapses; the few that matter rise to the top.",
    meta: "Correlated scoring",
  },
  {
    n: "03",
    icon: IconMessage,
    title: "Get plain-English clarity",
    body: "Each incident comes with a summary anyone can read: what happened, why it matters, and the evidence behind it — no query language required.",
    meta: "Human-readable",
  },
  {
    n: "04",
    icon: IconShieldCheck,
    title: "Act with confidence",
    body: "Follow guided, prioritized remediation steps. Contain the threat, close the loop, and keep an audit-ready record of what you did.",
    meta: "Guided response",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From raw signal to resolved incident"
          description="A security operations workflow that runs itself — so a two-person team gets the outcome of a full SOC."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.n} variants={fadeUp} className="group relative">
                {/* connector line on large screens */}
                {i < steps.length - 1 && (
                  <div className="absolute right-[-11px] top-16 hidden h-px w-6 bg-gradient-to-r from-line to-transparent lg:block" />
                )}
                <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/25 hover:bg-surface">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/[0.06] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-cyan transition-colors group-hover:border-cyan/30">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-ink-faint">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    {s.meta}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
