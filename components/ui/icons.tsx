/**
 * Inline stroke icons: 24x24, currentColor, 1.6 stroke.
 * Kept minimal and consistent so feature/step cards read as one system.
 */
import { cn } from "@/lib/cn";

type IconProps = { className?: string };

const wrap = (className?: string) =>
  cn("h-6 w-6", className);

const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconPlug = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M9 3v5m6-5v5" />
    <path d="M6 8h12v3a6 6 0 0 1-12 0V8Z" />
    <path d="M12 17v4" />
  </svg>
);

export const IconBrain = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V17a2 2 0 0 0 4 0" />
    <path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V17a2 2 0 0 1-4 0V5Z" />
    <path d="M9 9.5h1.5M13.5 9.5H15" />
  </svg>
);

export const IconMessage = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M4 5h16v11H8l-4 3V5Z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </svg>
);

export const IconShieldCheck = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M12 3 5 5.5v5C5 15.5 8 19.3 12 21c4-1.7 7-5.5 7-10.5v-5L12 3Z" />
    <path d="m9 12 2 2 4-4.5" />
  </svg>
);

export const IconLayers = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);

export const IconGauge = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M4 16a8 8 0 1 1 16 0" />
    <path d="M12 16 15 10" />
    <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconWrench = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M15 6a4 4 0 0 0-5.2 4.9L4 16.7 7.3 20l5.8-5.8A4 4 0 0 0 18 9l-2.4 2.4-2-2L16 7" />
  </svg>
);

export const IconReport = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
    <path d="M13 3v5h5" />
    <path d="M9 13h6M9 16.5h4" />
  </svg>
);

export const IconBolt = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />
  </svg>
);

export const IconRocket = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M14 4c3 0 6 3 6 6-2 4-6 6-6 6l-4-4s2-6 4-8Z" />
    <path d="M10 12 6 16m2 2-2 2m8-4c0 2-1 4-1 4m-6-9s-2 1-4 1" />
  </svg>
);

export const IconBuilding = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M4 21V6l7-3v18M11 21h9V9l-9-3" />
    <path d="M14.5 10.5v.01M14.5 14v.01M17.5 10.5v.01M17.5 14v.01M7.5 9v.01M7.5 12.5v.01" />
  </svg>
);

export const IconUsers = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M4 20a5 5 0 0 1 10 0" />
    <path d="M16 6a3 3 0 0 1 0 6m4 8a5 5 0 0 0-3-4.6" />
  </svg>
);

export const IconServer = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <rect x="4" y="4" width="16" height="7" rx="1.5" />
    <rect x="4" y="13" width="16" height="7" rx="1.5" />
    <path d="M7.5 7.5v.01M7.5 16.5v.01" />
  </svg>
);

export const IconArrowRight = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export const IconCheck = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

export const IconArrowDown = ({ className }: IconProps) => (
  <svg {...common} className={wrap(className)}>
    <path d="M12 5v14m-6-6 6 6 6-6" />
  </svg>
);
