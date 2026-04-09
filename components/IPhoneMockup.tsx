"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type IPhoneMockupProps = {
  children?: ReactNode;
  className?: string;
  /** 0–1 dimming for non-active carousel slides */
  dim?: boolean;
  /** Subtle green rim glow on hover */
  accentHint?: boolean;
};

export function IPhoneMockup({
  children,
  className = "",
  dim = false,
  accentHint = false,
}: IPhoneMockupProps) {
  return (
    <motion.div
      className={`relative mx-auto w-[min(100%,280px)] sm:w-[min(100%,320px)] md:w-[min(100%,360px)] ${className}`}
      style={{ opacity: dim ? 0.48 : 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        accentHint
          ? {
              scale: dim ? 1.02 : 1.03,
              transition: { type: "spring", stiffness: 320, damping: 22 },
            }
          : undefined
      }
    >
      <motion.div
        className="rounded-[2.75rem] border p-[10px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]"
        style={{
          borderColor: "var(--border-subtle)",
          background:
            "linear-gradient(165deg, #2a2a2c 0%, #121214 40%, #0e0e10 100%)",
        }}
        whileHover={
          accentHint
            ? {
                boxShadow:
                  "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(52,211,153,0.15), 0 0 48px -12px rgba(52,211,153,0.12)",
              }
            : undefined
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="relative aspect-[9/19.5] overflow-hidden rounded-[2.15rem] bg-black"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 40px -20px rgba(52,211,153,0.04)",
          }}
        >
          <div
            className="absolute left-1/2 top-3 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
            aria-hidden
          />
          <div className="absolute inset-0 z-0">{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
