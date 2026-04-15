"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type IPhoneMockupProps = {
  children?: ReactNode;
  className?: string;
  dim?: boolean;
  accentHint?: boolean;
  orientation?: "portrait" | "landscape";
};

export function IPhoneMockup({
  children,
  className = "",
  dim = false,
  accentHint = false,
  orientation = "portrait",
}: IPhoneMockupProps) {
  const isLandscape = orientation === "landscape";

  return (
    <motion.div
      className={`relative mx-auto flex items-center justify-center ${
        isLandscape
          ? "w-[min(100%,460px)] sm:w-[min(100%,540px)] md:w-[min(100%,620px)]"
          : "w-[min(100%,280px)] sm:w-[min(100%,320px)] md:w-[min(100%,360px)]"
      } ${className}`}
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
        className="border p-[10px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)] rounded-[2.75rem] w-full"
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
          className={`relative overflow-hidden rounded-[2.15rem] bg-black ${
            isLandscape ? "aspect-[19.5/9]" : "aspect-[9/19.5]"
          }`}
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 40px -20px rgba(52,211,153,0.04)",
          }}
        >
          {/* Dynamic Island */}
          <div
            className={`absolute z-20 rounded-full bg-black ${
              isLandscape
                ? "left-3 top-1/2 h-[100px] w-[28px] -translate-y-1/2"
                : "left-1/2 top-3 h-[28px] w-[100px] -translate-x-1/2"
            }`}
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
            aria-hidden
          />

          <div className="absolute inset-0 z-0 overflow-hidden">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
