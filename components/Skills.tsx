"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";

const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "UI architecture",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "App interfaces",
      "Mobile UX",
    ],
  },
  {
    title: "Backend",
    items: [
      "APIs",
      "Integrations",
      "Data flow",
      "Service architecture",
    ],
  },
  {
    title: "AI / Intelligent systems",
    items: [
      "Computer vision concepts",
      "Model integration",
      "Real-time interaction",
      "Accessibility-driven solutions",
    ],
  },
  {
    title: "Product / Design",
    items: [
      "Prototyping",
      "Interface design",
      "Interaction thinking",
      "Experience polish",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--border-separator)] py-24 md:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>Skills & stack</SectionKicker>
          <h2
            id="skills-heading"
            className="mt-5 max-w-xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
          >
            Capabilities without the{" "}
            <span className="text-accent">noise</span>.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] text-text-secondary">
            Organized by how I think—not by percentages.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {groups.map((g, i) => (
            <SectionReveal key={g.title} delay={i * 0.05}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white/[0.02] p-6 md:p-7"
                whileHover={{
                  borderColor: "rgba(52, 211, 153, 0.22)",
                  transition: { duration: 0.35 },
                }}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/[0.06] blur-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05 }}
                />
                <h3 className="relative border-l-2 border-accent/50 pl-3 text-[13px] font-semibold uppercase tracking-wider text-text-primary">
                  {g.title}
                </h3>
                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item}>
                      <motion.span
                        className="inline-block rounded-full border border-[var(--border-subtle)] bg-bg-base/80 px-3 py-1.5 text-[12px] font-medium text-text-secondary transition-colors duration-300 group-hover:border-accent/20"
                        whileHover={{
                          y: -2,
                          borderColor: "rgba(52, 211, 153, 0.35)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {item}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
