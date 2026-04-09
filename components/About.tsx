"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";

const highlights = [
  { title: "Frontend", detail: "Systems, performance, and polish." },
  { title: "Mobile", detail: "Native-feeling flows on small glass." },
  { title: "Product thinking", detail: "From constraint to shipped." },
  { title: "AI-driven experiences", detail: "Models in service of clarity." },
  { title: "UI craft", detail: "Typography, rhythm, silence." },
];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[var(--border-separator)] py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>About</SectionKicker>
          <h2
            id="about-heading"
            className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
          >
            Interface, logic, and applied intelligence—held together with{" "}
            <span className="text-accent">taste</span>.
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <SectionReveal delay={0.08}>
            <div className="space-y-6 text-[15px] leading-[1.75] text-text-secondary md:text-base">
              <p>
                I&apos;m Isadora—a developer focused on frontend and mobile who
                cares as much about the pixels as the path data takes through
                your stack. I like products that feel obvious in the hand and
                honest on the screen: clear states, respectful motion, and
                engineering you can evolve.
              </p>
              <p>
                My work sits where design meets code and where code meets
                product reality—APIs, integrations, and increasingly, applied
                AI that augments people instead of shouting at them. Whether
                it&apos;s a web surface, a native shell, or a vision pipeline
                behind the camera, I build end-to-end with accessibility and
                usability as non-negotiables.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="group rounded-2xl border border-[var(--border-subtle)] bg-white/[0.02] p-5 transition-shadow duration-500 hover:border-accent/20 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.12)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.25 } }}
                >
                  <p className="text-[13px] font-semibold text-text-primary transition-colors group-hover:text-accent">
                    {h.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-text-muted">
                    {h.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
