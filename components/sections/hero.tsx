"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconArrowDown, IconArrowRight } from "@/components/ui/icons";
import { fadeUp, stagger } from "@/lib/motion";
import { HeroPanel } from "@/components/visuals/hero-panel";

const sources = [
  "Microsoft 365",
  "Google Workspace",
  "AWS CloudTrail",
  "Okta",
  "CrowdStrike",
  "Cloudflare",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Lightweight AI SOC · Now in private beta</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="text-gradient">Turn noisy alerts into</span>{" "}
            <span className="text-gradient-cyan">clear next steps.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-pretty text-[16px] leading-relaxed text-ink-muted sm:text-[17px]"
          >
            SocLite.ai is the security operations layer for teams without a
            security team. It ingests your alerts, explains what actually
            matters in plain English, prioritizes real threats, and tells you
            exactly what to do next.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <LinkButton href="#waitlist" size="lg" className="group">
              Join the Waitlist
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </LinkButton>
            <LinkButton href="#how" size="lg" variant="secondary">
              See How It Works
              <IconArrowDown className="h-4 w-4" />
            </LinkButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              Connects to the tools you already run
            </p>
            <div className="mask-fade-x mt-3 overflow-hidden">
              <div className="flex w-max animate-marquee gap-2.5">
                {[...sources, ...sources].map((s, i) => (
                  <span
                    key={`${s}-${i}`}
                    className="whitespace-nowrap rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-[12px] text-ink-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative"
        >
          <HeroPanel />
        </motion.div>
      </div>
    </section>
  );
}
