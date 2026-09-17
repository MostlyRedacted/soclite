"use client";

import { motion } from "framer-motion";
import { fadeUp, inView, stagger } from "@/lib/motion";
import { Reveal } from "@/components/ui/reveal";

const problems = [
  {
    stat: "11,000+",
    label: "alerts a week",
    body: "Endpoint, identity, cloud, and email tools all fire at once. Most are noise, but you can't tell which until you've read them.",
  },
  {
    stat: "0",
    label: "dedicated analysts",
    body: "There's no one whose job is to sit in a SIEM all day. Security lands on whoever is closest, on top of everything else they own.",
  },
  {
    stat: "45 min",
    label: "per false alarm",
    body: "Every alert pulls someone off real work to investigate, pivot between five dashboards, and usually conclude it was nothing.",
  },
  {
    stat: "1 in 20",
    label: "actually matters",
    body: "The one that matters is buried in the noise. Miss it, and a quiet Tuesday turns into a breach.",
  },
];

export function ProblemStrip() {
  return (
    <section className="relative border-y border-line bg-base/40 py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-[28px]">
            Small teams don&apos;t have an alert problem.
            <br className="hidden sm:block" />{" "}
            <span className="text-ink-muted">
              They have a clarity problem.
            </span>
          </h2>
        </Reveal>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4"
        >
          {problems.map((p) => (
            <motion.div
              key={p.label}
              variants={fadeUp}
              className="group bg-surface p-6 transition-colors hover:bg-surface-2"
            >
              <div className="font-mono text-3xl font-semibold text-gradient-cyan">
                {p.stat}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                {p.label}
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-ink-muted">
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
