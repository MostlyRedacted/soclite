import type { Variants } from "framer-motion";

/** Reusable reveal used across sections for a consistent motion rhythm. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

/** Container that staggers its children on reveal. */
export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Shared viewport config so reveals fire once, slightly before fully in view. */
export const inView = {
  once: true,
  margin: "-80px",
} as const;
