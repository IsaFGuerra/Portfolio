"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";
import { site } from "@/lib/site";

const links = [
  {
    label: "GitHub",
    href: site.github,
    sub: "Code & experiments",
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    sub: "Professional profile",
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    sub: site.email,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--border-separator)] py-28 md:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>Contact</SectionKicker>
          <h2
            id="contact-heading"
            className="mt-5 max-w-3xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-text-primary"
          >
            Let&apos;s build thoughtful digital experiences—and technology that
            feels <span className="text-accent">meaningful</span>.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-text-secondary">
            Open to collaborations where design, code, and product judgment
            matter. Reach out; I&apos;ll respond with care.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <ul className="mt-16 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-10 md:gap-14">
            {links.map((l, i) => (
              <li key={l.label}>
                <motion.a
                  href={l.href}
                  className="group block"
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    l.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.08 + i * 0.06,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ x: 4 }}
                >
                  <span className="relative text-[15px] font-semibold text-text-primary">
                    {l.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
                  </span>
                  <span className="mt-1 block text-[13px] text-text-muted transition-colors duration-300 group-hover:text-accent/80">
                    {l.sub}
                  </span>
                </motion.a>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>

      <footer className="mx-auto mt-24 max-w-6xl px-5 md:mt-32 md:px-8">
        <p className="text-center text-[12px] text-text-muted md:text-left">
          © {new Date().getFullYear()} Isadora Guerra.{" "}
          <span className="text-accent/60">Crafted with intention.</span>
        </p>
      </footer>
    </section>
  );
}
