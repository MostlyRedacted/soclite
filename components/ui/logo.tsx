import { cn } from "@/lib/cn";

/** SocLite mark — a lightweight shield with a signal pulse. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="soclite-mark" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67e8f9" />
          <stop offset="0.5" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M16 2.5 5 6.4v7.2c0 6.9 4.5 13.3 11 15.9 6.5-2.6 11-9 11-15.9V6.4L16 2.5Z"
        stroke="url(#soclite-mark)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 16.5h3l2-4.5 3 8 2-5h3.5"
        stroke="url(#soclite-mark)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        SocLite
        <span className="text-cyan">.ai</span>
      </span>
    </span>
  );
}
