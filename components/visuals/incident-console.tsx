"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { SeverityTag } from "@/components/ui/severity-tag";
import { IconArrowRight, IconCheck, IconShieldCheck } from "@/components/ui/icons";
import { ScoreRing } from "./score-ring";
import { incidents, timeline, triageSummary } from "./data";

const toneBar: Record<string, string> = {
  critical: "bg-critical",
  high: "bg-high",
  medium: "bg-medium",
  low: "bg-low",
};

/**
 * The primary product mockup: an interactive AI triage console.
 * Left = prioritized incident queue. Right = AI summary, correlated
 * timeline, scores, and recommended remediation for the selected incident.
 */
export function IncidentConsole() {
  const [selected, setSelected] = useState(incidents[0].id);
  const active = incidents.find((i) => i.id === selected) ?? incidents[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr]">
      {/* Queue */}
      <div className="border-b border-line lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between px-4 py-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            Priority queue
          </span>
          <span className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-ink-muted">
            {incidents.length} open
          </span>
        </div>
        <div className="space-y-px">
          {incidents.map((inc) => {
            const isActive = inc.id === selected;
            return (
              <button
                key={inc.id}
                onClick={() => setSelected(inc.id)}
                className={cn(
                  "group relative flex w-full flex-col gap-2 px-4 py-3.5 text-left transition-colors",
                  isActive
                    ? "bg-cyan/[0.06]"
                    : "hover:bg-white/[0.025]",
                )}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full w-[3px] transition-opacity",
                    toneBar[inc.severity],
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                  )}
                />
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-ink-faint">
                    {inc.id}
                  </span>
                  <SeverityTag level={inc.severity} />
                </div>
                <span
                  className={cn(
                    "text-[13px] font-medium leading-snug",
                    isActive ? "text-ink" : "text-ink-muted group-hover:text-ink",
                  )}
                >
                  {inc.title}
                </span>
                <div className="flex items-center justify-between font-mono text-[10px] text-ink-faint">
                  <span>{inc.source}</span>
                  <span>{inc.time}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail */}
      <div className="min-w-0 p-4 sm:p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-ink-faint">
                    {active.id}
                  </span>
                  <SeverityTag level={active.severity} />
                </div>
                <h3 className="text-[15px] font-semibold leading-snug text-ink">
                  {active.title}
                </h3>
                <p className="font-mono text-[11px] text-ink-faint">
                  {active.source} · asset {active.asset}
                </p>
              </div>
              <div className="flex shrink-0 gap-4">
                <ScoreRing
                  value={active.score}
                  label="priority"
                  tone={active.severity === "critical" ? "critical" : "cyan"}
                  size={64}
                />
                <ScoreRing
                  value={active.confidence}
                  label="confidence"
                  tone="teal"
                  size={64}
                />
              </div>
            </div>

            {/* AI summary */}
            <div className="rounded-xl border border-cyan/20 bg-cyan/[0.04] p-4">
              <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyan">
                <span className="flex h-4 w-4 items-center justify-center rounded bg-cyan/15">
                  <IconShieldCheck className="h-3 w-3" />
                </span>
                AI incident summary
              </div>
              <p className="text-[13.5px] leading-relaxed text-ink">
                {active.id === triageSummary.incidentId
                  ? triageSummary.headline
                  : `${active.title}. Correlated across ${active.source} with a priority score of ${active.score}/100. Confidence ${active.confidence}%.`}
              </p>
              {active.id === triageSummary.incidentId && (
                <p className="mt-2 text-[12px] leading-relaxed text-ink-muted">
                  {triageSummary.why}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Timeline */}
              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Correlated timeline
                </div>
                <ol className="relative space-y-3 border-l border-line pl-4">
                  {timeline.map((ev) => (
                    <li key={ev.t} className="relative">
                      <span
                        className={cn(
                          "absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-surface",
                          toneBar[ev.tone],
                        )}
                      />
                      <div className="font-mono text-[10px] text-ink-faint">
                        {ev.t} UTC
                      </div>
                      <div className="text-[12.5px] text-ink-muted">
                        {ev.label}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Recommended actions */}
              <div>
                <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
                  Recommended remediation
                </div>
                <ul className="space-y-2">
                  {triageSummary.actions.map((a) => (
                    <li
                      key={a.label}
                      className={cn(
                        "flex items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-[12.5px]",
                        a.primary
                          ? "border-cyan/30 bg-cyan/[0.06] text-ink"
                          : "border-line bg-white/[0.02] text-ink-muted",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <IconCheck
                          className={cn(
                            "h-4 w-4 shrink-0",
                            a.primary ? "text-cyan" : "text-ink-faint",
                          )}
                        />
                        {a.label}
                      </span>
                      {a.primary && (
                        <IconArrowRight className="h-4 w-4 shrink-0 text-cyan" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
