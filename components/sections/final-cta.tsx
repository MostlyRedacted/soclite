"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { IconCheck } from "@/components/ui/icons";
import { WaitlistForm } from "@/components/waitlist-form";
import { inView } from "@/lib/motion";

const perks = [
  "Early access to the private beta",
  "Founder-direct onboarding",
  "Locked-in early-adopter pricing",
];

export function FinalCta() {
  return (
    <section id="waitlist" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inView}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-line bg-surface/70 p-8 text-center sm:p-14"
        >
          {/* ambient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-dots opacity-[0.5] mask-fade-b" />
            <div className="absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(34,211,238,0.18),transparent)] blur-2xl" />
          </div>

          <div className="flex justify-center">
            <Eyebrow>Private beta · Limited spots</Eyebrow>
          </div>

          <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-[40px] sm:leading-[1.08]">
            Get the clarity of a SOC without building one.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16px] leading-relaxed text-ink-muted">
            Join the waitlist to be first in line for early releases and product
            updates. No credit card, no commitment, just a sharper way to
            handle security.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <WaitlistForm source="final-cta" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {perks.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted"
              >
                <IconCheck className="h-4 w-4 text-teal" />
                {p}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-[11px] text-ink-faint">
            We&apos;ll only email you about SocLite.ai. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
