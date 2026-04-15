import type { Locale } from "@/data/experience";

export type SkillGroup = {
  id: string;
  title: Record<Locale, string>;
  /** Nomes de tecnologia em geral iguais; entradas traduzidas só onde faz sentido. */
  items: Record<Locale, string[]>;
};

/**
 * Stacks alinhadas a experiências e projetos (LinkedIn) — sem certificações ou instituições.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "mobile",
    title: {
      en: "Mobile & native",
      pt: "Mobile e nativo",
    },
    items: {
      en: [
        "Flutter",
        "Dart",
        "React Native",
        "Swift",
        "SwiftUI",
        "UIKit",
        "iOS",
        "SpriteKit",
      ],
      pt: [
        "Flutter",
        "Dart",
        "React Native",
        "Swift",
        "SwiftUI",
        "UIKit",
        "iOS",
        "SpriteKit",
      ],
    },
  },
  {
    id: "web",
    title: {
      en: "Web & runtime",
      pt: "Web e runtime",
    },
    items: {
      en: ["React.js", "JavaScript", "TypeScript", "Node.js"],
      pt: ["React.js", "JavaScript", "TypeScript", "Node.js"],
    },
  },
  {
    id: "data",
    title: {
      en: "Data",
      pt: "Dados",
    },
    items: {
      en: ["MongoDB", "SQL"],
      pt: ["MongoDB", "SQL"],
    },
  },
  {
    id: "delivery",
    title: {
      en: "How I ship",
      pt: "Como entrego",
    },
    items: {
      en: ["Git", "Agile & Scrum", "UX"],
      pt: ["Git", "Metodologias ágeis e Scrum", "UX"],
    },
  },
];
