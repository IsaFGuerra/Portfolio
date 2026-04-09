"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";

const items = [
  {
    title: "Author-led products",
    body: "Shipping end-to-end experiences where frontend, backend, and AI-adjacent layers align with a single narrative.",
  },
  {
    title: "Accessibility in the loop",
    body: "Prioritizing assistive flows and real-world constraints—not as an afterthought, but as a design input.",
  },
  {
    title: "Memorable digital craft",
    body: "Interfaces that reward attention: restrained motion, typographic discipline, and calm confidence.",
  },
];

export function Achievements() {
  return (
    <section
      className="border-t border-[var(--border-separator)] py-24 md:py-32"
      aria-labelledby="achievements-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>Highlights</SectionKicker>
          <h2
            id="achievements-heading"
            className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
          >
            What the work stands for.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
          {items.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 0.06}>
              <motion.article
                className="group h-full border-t border-[var(--border-subtle)] pt-8 transition-colors duration-500 hover:border-accent/40"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <h3 className="text-lg font-semibold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {it.title}
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-text-secondary">
                  {it.body}
                </p>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
