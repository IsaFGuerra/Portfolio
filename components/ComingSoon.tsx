"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

export function ComingSoon() {
  const reduce = useReducedMotion();
  const { locale, setLocale, t } = useLocale();

  return (
    <main className="relative flex min-h-[100svh] flex-col">
      <header className="relative z-10 flex items-center justify-between px-5 py-5 md:px-8 md:py-6">
        <div className="flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-text-primary">
          <motion.span
            className="relative flex h-2 w-2"
            aria-hidden
            animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inset-0 rounded-full bg-accent/40 blur-[3px]" />
            <span className="relative m-auto block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
          </motion.span>
          Isadora Guerra
        </div>
        <div
          className="flex items-center gap-1 rounded-lg border border-[var(--border-subtle)] bg-white/[0.02] p-0.5"
          role="group"
          aria-label={t.language.label}
        >
          {(["pt", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              className={`min-w-[2.25rem] rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide transition-colors duration-200 ${
                locale === code
                  ? "bg-accent/15 text-accent"
                  : "text-text-muted hover:text-text-secondary"
              }`}
              aria-pressed={locale === code}
            >
              {t.language[code]}
            </button>
          ))}
        </div>
      </header>

      <section
        className="relative flex flex-1 items-center justify-center overflow-hidden px-5 pb-24 pt-8 md:px-8"
        aria-labelledby="coming-soon-heading"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <motion.div
            className="absolute left-1/2 top-[-15%] h-[50%] w-[80%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(52,211,153,0.09),transparent_62%)]"
            animate={
              reduce
                ? undefined
                : { opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }
            }
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <motion.div
            className="mb-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-8 bg-accent/70" aria-hidden />
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
              {t.comingSoon.kicker}
            </p>
            <span className="h-px w-8 bg-accent/70" aria-hidden />
          </motion.div>

          <motion.h1
            id="coming-soon-heading"
            className="text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem] lg:text-5xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.comingSoon.title}
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-text-secondary md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.comingSoon.body}
          </motion.p>
        </div>
      </section>
    </main>
  );
}
