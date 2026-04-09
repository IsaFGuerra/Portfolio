"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IPhoneMockup } from "./IPhoneMockup";
import { MockScreen } from "./MockScreen";

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pt-24 pb-20 md:pt-28 md:pb-28"
      aria-label="Introduction"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute left-1/2 top-[-20%] h-[50%] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(52,211,153,0.09),transparent_62%)]"
          animate={
            reduce
              ? undefined
              : { opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[50%] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-8 lg:gap-20">
        <div className="order-2 md:order-1">
          <motion.div
            className="mb-6 flex items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="h-px w-8 bg-accent/70"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
              aria-hidden
            />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              Isadora Guerra
            </p>
          </motion.div>
          <motion.h1
            className="max-w-xl text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem] lg:text-5xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Frontend &amp; mobile developer building{" "}
            <span className="bg-gradient-to-r from-[#f5f5f7] via-[#e4e4ea] to-accent bg-clip-text text-transparent">
              thoughtful
            </span>{" "}
            digital experiences.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-md text-[15px] leading-relaxed text-text-secondary md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Interfaces with intention—spanning web, native apps, product
            systems, and applied{" "}
            <span className="text-text-primary/95">AI</span>. Calm surfaces,
            sharp engineering, and work that holds up in the real world.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-text-primary px-7 text-[14px] font-medium text-bg-base shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_32px_-8px_rgba(52,211,153,0.25)]"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#ai-demo"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-7 text-[14px] font-medium text-text-primary backdrop-blur-sm transition-colors duration-300 hover:border-accent/35 hover:bg-accent/[0.06] hover:text-text-primary hover:shadow-[0_0_24px_-8px_rgba(52,211,153,0.35)]"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Explore AI Demo
            </motion.a>
          </motion.div>
        </div>

        <div className="relative order-1 flex min-h-[320px] justify-center md:order-2 md:min-h-[480px]">
          <motion.div
            className="absolute left-[2%] top-[18%] z-0 w-[55%] max-w-[200px] scale-[0.82] sm:left-[4%] md:max-w-[220px]"
            initial={{ opacity: 0, x: 28, rotate: -6 }}
            animate={
              reduce
                ? { opacity: 1, x: 0, rotate: -6 }
                : {
                    opacity: 1,
                    x: 0,
                    rotate: -6,
                    y: [0, -5, 0],
                  }
            }
            transition={{
              opacity: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] },
              y: { ...floatTransition, delay: 0.5 },
            }}
          >
            <IPhoneMockup dim accentHint>
              <MockScreen content="finance" />
            </IPhoneMockup>
          </motion.div>
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            animate={
              reduce
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 1, y: [0, -8, 0], scale: 1 }
            }
            transition={{
              opacity: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              y: { ...floatTransition, delay: 0.15 },
              scale: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <IPhoneMockup accentHint>
              <MockScreen content="sign" />
            </IPhoneMockup>
          </motion.div>
          <motion.div
            className="absolute right-[0%] top-[22%] z-0 w-[52%] max-w-[190px] scale-[0.78] sm:right-[2%] md:max-w-[210px]"
            initial={{ opacity: 0, x: -28, rotate: 7 }}
            animate={
              reduce
                ? { opacity: 1, x: 0, rotate: 7 }
                : {
                    opacity: 1,
                    x: 0,
                    rotate: 7,
                    y: [0, -4, 0],
                  }
            }
            transition={{
              opacity: { duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] },
              x: { duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] },
              rotate: { duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] },
              y: { ...floatTransition, delay: 0.8 },
            }}
          >
            <IPhoneMockup dim accentHint>
              <MockScreen content="wellness" />
            </IPhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
