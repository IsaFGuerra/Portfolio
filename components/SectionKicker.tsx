"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionKicker({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex items-center gap-3">
      <motion.span
        className="h-px w-6 bg-accent/60 md:w-8"
        initial={reduce ? false : { scaleX: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        aria-hidden
      />
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        {children}
      </p>
    </div>
  );
}
