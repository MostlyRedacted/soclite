"use client";

import { motion } from "framer-motion";
import { SeverityTag } from "@/components/ui/severity-tag";
import { IconArrowRight, IconCheck, IconShieldCheck } from "@/components/ui/icons";
import { WindowChrome } from "./window-chrome";
import { SignalStream } from "./signal-stream";
import { ScoreRing } from "./score-ring";
import { metrics } from "./data";

/** Compact, cinematic product snapshot for the hero. */
export function HeroPanel() {
  return (
    <div className="relative">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(34,211,238,0.18),transparent_70%)] blur-2xl"
      />

      <WindowChrome title="soclite.ai — triage">
        <div className="grid grid-cols-1 gap-px bg-line/60 sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface px-4 py-3">
              <div className="font-mono text-lg font-semibold text-ink">
                {m.value}
              </div>
              <div className="mt-0.5 text-[10.5px] leading-tight text-ink-faint">
                {m.label}
                <span className="ml-1 text-cyan/80">{m.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[1fr_200px]">
          {/* Selected incident card */}
          <div className="space-y-3">
            <div className="rounded-xl border border-line bg-white/[0.02] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-ink-faint">
                  INC-4821
                </span>
                <SeverityTag level="critical" />
              </div>
              <h3 className="text-[14px] font-semibold leading-snug text-ink">
                Impossible travel sign-in for privileged account
              </h3>

              <div className="mt-3 rounded-lg border border-cyan/20 bg-cyan/[0.05] p-3">
                <div className="mb-1.5 flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-widest text-cyan">
                  <IconShieldCheck className="h-3 w-3" />
                  AI summary
                </div>
                <p className="text-[12px] leading-relaxed text-ink-muted">
                  Admin signed in from two cities 1,900&nbsp;km apart in
                  7&nbsp;minutes, then a mail-forwarding rule appeared —
                  likely a stolen session.
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-cyan/30 bg-cyan/[0.06] px-3 py-2">
                <span className="flex items-center gap-2 text-[12px] text-ink">
                  <IconCheck className="h-4 w-4 text-cyan" />
                  Revoke active sessions
                </span>
                <IconArrowRight className="h-4 w-4 text-cyan" />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-black/30 p-3">
              <SignalStream />
            </div>
          </div>

          {/* Scores + mini distribution */}
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-line bg-white/[0.02] p-4">
            <div className="flex justify-around">
              <ScoreRing value={96} label="priority" tone="critical" size={68} />
            </div>
            <div className="space-y-2">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                Severity mix
              </div>
              {[
                { label: "critical", w: "18%", c: "bg-critical" },
                { label: "high", w: "34%", c: "bg-high" },
                { label: "medium", w: "48%", c: "bg-medium" },
                { label: "low", w: "72%", c: "bg-low" },
              ].map((row) => (
                <div key={row.label} className="space-y-1">
                  <div className="flex justify-between font-mono text-[10px] text-ink-faint">
                    <span>{row.label}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-line">
                    <motion.div
                      className={`h-full rounded-full ${row.c}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: row.w }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WindowChrome>

      {/* floating resolved toast */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -bottom-5 -left-4 hidden items-center gap-2.5 rounded-xl border border-low/30 bg-surface/95 px-3.5 py-2.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur sm:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-low/15 text-low">
          <IconCheck className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <div className="text-[12px] font-medium text-ink">Sessions revoked</div>
          <div className="font-mono text-[10px] text-ink-faint">
            contained in 38s
          </div>
        </div>
      </motion.div>
    </div>
  );
}
