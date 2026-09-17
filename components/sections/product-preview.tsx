"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { WindowChrome } from "@/components/visuals/window-chrome";
import { IncidentConsole } from "@/components/visuals/incident-console";
import { inView } from "@/lib/motion";

const callouts = [
  "Prioritized queue — highest real risk first",
  "AI summary with the evidence and the reasoning",
  "Correlated timeline across every connected source",
  "Priority & confidence scores you can trust",
  "Recommended remediation, ranked by impact",
];

export function ProductPreview() {
  return (
    <section id="preview" className="relative border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Inside the console"
          title="See a threat the way an analyst would — instantly"
          description="This is a live-styled preview of the SocLite console. Select an incident to see how AI turns scattered signals into a decision you can act on."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-14"
        >
          <div
            aria-hidden
            className="absolute -inset-x-6 -top-8 bottom-0 -z-10 rounded-[40px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent_70%)] blur-2xl"
          />
          <WindowChrome
            title="soclite.ai — incident console"
            className="glow-cyan"
          >
            <IncidentConsole />
          </WindowChrome>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {callouts.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line bg-white/[0.02] px-3.5 py-1.5 text-[12px] text-ink-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
