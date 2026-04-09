"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";

const milestones = [
  {
    period: "2023 — Present",
    title: "Full-stack product surfaces",
    org: "Independent & collaborative builds",
    body: "Shipping web and mobile experiences with emphasis on clarity, performance, and maintainable architecture.",
  },
  {
    period: "2021 — 2023",
    title: "Deepening mobile & interface craft",
    org: "Product teams · contract",
    body: "React Native and native-adjacent work—gesture systems, navigation, and pixel-level polish for consumer apps.",
  },
  {
    period: "2019 — 2021",
    title: "Frontend foundations",
    org: "University & early professional",
    body: "Computer science trajectory with growing focus on UI engineering, design collaboration, and accessible patterns.",
  },
  {
    period: "Ongoing",
    title: "Applied AI & accessibility",
    org: "Research-led builds",
    body: "Exploring computer vision and model integration for assistive experiences—where ethics, latency, and UX meet.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--border-separator)] py-24 md:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>Experience</SectionKicker>
          <h2
            id="experience-heading"
            className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
          >
            A path shaped by craft, systems, and curiosity.
          </h2>
        </SectionReveal>

        <div className="relative mt-20 max-w-3xl">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-accent/15 to-transparent md:left-[9px]"
            aria-hidden
          />
          <ol className="space-y-14">
            {milestones.map((m, i) => (
              <li key={m.period} className="relative pl-10 md:pl-12">
                <motion.span
                  className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/15 bg-bg-base md:top-2 md:h-5 md:w-5"
                  aria-hidden
                  initial={false}
                  whileInView={{
                    borderColor: "rgba(52, 211, 153, 0.35)",
                    boxShadow: "0 0 20px -4px rgba(52, 211, 153, 0.25)",
                  }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                      delay: 0.15 + i * 0.08,
                    }}
                  />
                </motion.span>
                <SectionReveal delay={i * 0.04}>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                        {m.title}
                      </h3>
                      <p className="mt-1 text-[14px] text-accent/80">{m.org}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-[11px] font-medium text-text-secondary">
                      {m.period}
                    </span>
                  </div>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
                    {m.body}
                  </p>
                </SectionReveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
