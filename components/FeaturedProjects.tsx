"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { IPhoneMockup } from "./IPhoneMockup";
import { MockScreen } from "./MockScreen";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";

export function FeaturedProjects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const nodes = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && en.intersectionRatio >= 0.45) {
            const idx = nodes.indexOf(en.target as HTMLElement);
            if (idx >= 0) setActive(idx);
          }
        });
      },
      {
        root: scrollerRef.current,
        threshold: [0.35, 0.5, 0.65],
      }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const atStart = scrollLeft <= 1;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - 1;
      if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      id="projects"
      className="border-t border-[var(--border-separator)] py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>Featured work</SectionKicker>
          <h2
            id="projects-heading"
            className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
          >
            Products on the stage they{" "}
            <span className="text-accent">deserve</span>.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-text-secondary">
            Scroll horizontally—each piece is framed like a release, not a
            slide deck.
          </p>
        </SectionReveal>
      </div>

      <div className="relative mt-16">
        <div
          ref={scrollerRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 pt-2 md:gap-10 md:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]"
          style={{ scrollPaddingInline: "max(1.25rem, calc((100vw - 72rem) / 2 + 1.25rem))" }}
          tabIndex={0}
          role="region"
          aria-label="Project gallery"
        >
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <article
                key={p.id}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="flex w-[min(100vw-2.5rem,520px)] shrink-0 snap-center flex-col md:w-[min(100%,480px)] lg:w-[520px]"
                aria-current={isActive ? "true" : undefined}
              >
                <motion.div
                  className="flex justify-center"
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          scale: isActive ? 1 : 0.92,
                          opacity: isActive ? 1 : 0.52,
                        }
                  }
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <IPhoneMockup accentHint>
                    <MockScreen content={p.screenContent} />
                  </IPhoneMockup>
                </motion.div>

                <div className="mt-10 md:mt-12">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-accent/90">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                    {p.description}
                  </p>
                  <p className="mt-4 text-[13px] text-text-muted">
                    <span className="text-text-secondary/80">Role · </span>
                    {p.role}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <motion.li key={t} whileHover={{ y: -1, scale: 1.02 }}>
                        <span className="inline-block rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-text-secondary transition-all duration-300 hover:border-accent/35 hover:bg-accent/[0.07] hover:text-text-primary">
                          {t}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-accent"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    Explore case study
                    <span aria-hidden className="text-accent/80">
                      →
                    </span>
                  </motion.a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
