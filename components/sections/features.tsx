"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/section-header";
import { SeverityTag } from "@/components/ui/severity-tag";
import {
  IconLayers,
  IconMessage,
  IconGauge,
  IconWrench,
  IconReport,
  IconServer,
} from "@/components/ui/icons";
import { fadeUp, inView, stagger } from "@/lib/motion";

const features = [
  {
    icon: IconLayers,
    title: "AI Alert Triage",
    body: "Every alert is correlated, de-duplicated, and classified automatically. What used to be a 10,000-line queue becomes a short list of things that are actually worth your attention.",
    span: "lg:col-span-2",
    accent: true,
  },
  {
    icon: IconGauge,
    title: "Threat Prioritization",
    body: "A single priority score blends severity, asset value, and blast radius, so you always know what to handle first.",
    span: "",
  },
  {
    icon: IconMessage,
    title: "Incident Summaries",
    body: "Plain-English writeups of what happened and why it matters. Readable by a founder, precise enough for an engineer.",
    span: "",
  },
  {
    icon: IconWrench,
    title: "Recommended Remediation",
    body: "Each incident ships with concrete next steps, ranked by impact: revoke this session, block that domain, remove that rule.",
    span: "lg:col-span-2",
    accent: true,
  },
  {
    icon: IconReport,
    title: "Analyst-Friendly Reports",
    body: "Board-ready and audit-ready summaries generated on demand. Show exactly what was detected, decided, and done.",
    span: "",
  },
  {
    icon: IconServer,
    title: "Lightweight Deployment",
    body: "Agentless, read-only, cloud-native. Connect your stack and get value the same afternoon. No SIEM migration, no new headcount.",
    span: "lg:col-span-2",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Capabilities"
          title="Everything a SOC does. None of the overhead."
          description="Built for teams that need the results of a security operations center without the staff, tooling, or budget for one."
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                variants={fadeUp}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition-all duration-300 hover:border-cyan/25 hover:bg-surface",
                  f.span,
                )}
              >
                {f.accent && (
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(34,211,238,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-cyan transition-colors group-hover:border-cyan/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-ink-muted">
                      {f.body}
                    </p>
                  </div>
                </div>

                {/* subtle in-card detail for the wide triage card */}
                {f.title === "AI Alert Triage" && (
                  <div className="relative mt-5 flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-line bg-black/30 px-2 py-1 font-mono text-[10px] text-ink-faint line-through decoration-ink-faint/60">
                      10,412 raw alerts
                    </span>
                    <span className="text-ink-faint">→</span>
                    <span className="rounded-md border border-cyan/30 bg-cyan/[0.06] px-2 py-1 font-mono text-[10px] text-cyan">
                      6 that matter
                    </span>
                    <SeverityTag level="critical" />
                    <SeverityTag level="high" />
                    <SeverityTag level="medium" />
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
