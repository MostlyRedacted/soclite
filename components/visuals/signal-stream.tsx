"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { streamLines } from "./data";

const toneColor: Record<string, string> = {
  critical: "text-critical",
  high: "text-high",
  medium: "text-medium",
  low: "text-low",
  info: "text-ink-faint",
};

/**
 * A compact terminal that reveals raw signal lines one by one to give the
 * "active infrastructure" feel. Purely presentational.
 */
export function SignalStream({ className }: { className?: string }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= streamLines.length ? 3 : c + 1));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const visible = streamLines.slice(0, count);

  return (
    <div className={cn("font-mono text-[11px] leading-relaxed", className)}>
      <div className="mb-2 flex items-center justify-between text-ink-faint">
        <span className="uppercase tracking-[0.2em]">signal.stream</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-low" />
          live
        </span>
      </div>
      <div className="space-y-1">
        {visible.map((line, i) => (
          <div
            key={`${line.text}-${i}`}
            className="flex items-start gap-2 text-ink-muted"
          >
            <span className="text-ink-faint">›</span>
            <span className={cn("truncate", toneColor[line.tone])}>
              {line.text}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-2 text-ink-faint">
          <span>›</span>
          <span className="inline-block h-3.5 w-2 animate-ticker bg-cyan/70" />
        </div>
      </div>
    </div>
  );
}
