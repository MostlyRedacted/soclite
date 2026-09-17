"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import {
  IconRocket,
  IconBuilding,
  IconServer,
  IconUsers,
} from "@/components/ui/icons";
import { fadeUp, inView, stagger } from "@/lib/motion";

const segments = [
  {
    icon: IconRocket,
    title: "Startup founders",
    body: "You're shipping fast and can't afford a breach or a full-time analyst. Get enterprise-grade coverage without hiring for it.",
    line: "Security that scales with you",
  },
  {
    icon: IconBuilding,
    title: "SMB owners",
    body: "Compliance, customer trust, and cyber-insurance requirements — handled, without turning your business into a security company.",
    line: "Trust you can demonstrate",
  },
  {
    icon: IconServer,
    title: "IT managers",
    body: "You already wear five hats. Let AI own first-pass triage so alerts stop interrupting the work only you can do.",
    line: "Off your plate, under control",
  },
  {
    icon: IconUsers,
    title: "Lean security teams",
    body: "One or two people covering everything. SocLite is the force multiplier that lets a small team punch far above its headcount.",
    line: "A whole SOC, amplified",
  },
];

export function Audience() {
  return (
    <section id="audience" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Who it's for"
          title="Built for the teams enterprise security forgot"
          description="If security is everyone's part-time job and no one's full-time role, SocLite was designed for you."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/25 hover:bg-surface"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-teal transition-colors group-hover:border-teal/30">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-[16px] font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-muted">
                  {s.body}
                </p>
                <div className="mt-5 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-wider text-teal/80">
                  {s.line}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
