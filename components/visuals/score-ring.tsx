import { cn } from "@/lib/cn";

/** Circular progress ring for priority / confidence scores. */
export function ScoreRing({
  value,
  label,
  tone = "cyan",
  size = 72,
}: {
  value: number;
  label: string;
  tone?: "cyan" | "critical" | "teal";
  size?: number;
}) {
  const stroke = 5;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  const color =
    tone === "critical"
      ? "var(--color-critical)"
      : tone === "teal"
        ? "var(--color-teal)"
        : "var(--color-cyan)";

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 0.9s cubic-bezier(0.16,1,0.3,1)",
              filter: `drop-shadow(0 0 6px ${color})`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-lg font-semibold text-ink">
            {value}
          </span>
        </div>
      </div>
      <span
        className={cn(
          "font-mono text-[10px] uppercase tracking-widest text-ink-faint",
        )}
      >
        {label}
      </span>
    </div>
  );
}
