"use client";

import { motion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";

/** Thin wrapper for the standard on-scroll reveal used across sections. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
