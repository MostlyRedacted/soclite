import { cn } from "@/lib/cn";

/** Small uppercase label with a signal dot: the section "kicker". */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
      </span>
      {children}
    </span>
  );
}
