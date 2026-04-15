"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocale } from "./LocaleProvider";

const linkKeys = [
  { href: "#about", key: "about" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#ai-demo", key: "aiDemo" as const },
  { href: "#experience", key: "experience" as const },
  { href: "#skills", key: "skills" as const },
  { href: "#contact", key: "contact" as const },
];

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500"
      style={{
        borderColor: scrolled
          ? "color-mix(in srgb, var(--accent) 12%, transparent)"
          : "transparent",
        backgroundColor: scrolled
          ? "rgba(10, 10, 10, 0.78)"
          : "rgba(10, 10, 10, 0.45)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(10px)",
        boxShadow: scrolled
          ? "0 0 0 1px rgba(52, 211, 153, 0.04), 0 12px 40px -20px rgba(0,0,0,0.5)"
          : "none",
      }}
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:h-16 md:px-8">
        <motion.a
          href="#"
          className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-text-primary"
          whileHover={{ opacity: 0.92 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="relative flex h-2 w-2"
            aria-hidden
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="absolute inset-0 rounded-full bg-accent/40 blur-[3px]" />
            <span className="relative m-auto block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
          </motion.span>
          Isadora Guerra
        </motion.a>
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {linkKeys.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-medium text-text-muted transition-colors duration-300 hover:text-text-primary"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + i * 0.04,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {t.nav[l.key]}
                <span className="nav-link-line" />
              </motion.a>
            ))}
          </nav>
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
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <div
            className="flex items-center gap-0.5 rounded-lg border border-[var(--border-subtle)] bg-white/[0.02] p-0.5"
            role="group"
            aria-label={t.language.label}
          >
            {(["pt", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`min-w-[2rem] rounded-md px-1.5 py-1 text-[10px] font-semibold tracking-wide transition-colors duration-200 ${
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
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-text-primary transition-colors duration-300 hover:border-accent/25 hover:text-accent md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 8h16M4 16h16" />
              </>
            )}
          </svg>
        </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--border-separator)] md:hidden"
          >
            <div className="bg-bg-base/95 px-5 py-4 backdrop-blur-md">
              <ul className="flex flex-col gap-3">
                {linkKeys.map((l) => (
                  <li key={l.href}>
                    <motion.a
                      href={l.href}
                      className="block py-1 text-[15px] text-text-secondary transition-colors hover:text-accent"
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {t.nav[l.key]}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
