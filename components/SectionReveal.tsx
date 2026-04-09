"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easePremium = [0.22, 1, 0.36, 1] as const;

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      transition={{
        duration: 0.85,
        delay,
        ease: easePremium,
      }}
    >
      {children}
    </motion.div>
  );
}
