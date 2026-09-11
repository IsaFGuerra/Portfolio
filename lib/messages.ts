import type { Locale } from "@/data/experience";

export const messages = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      aiDemo: "AI Demo",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    experience: {
      kicker: "Experience",
      heading:
        "Internships and research—from agtech and Apple Academy to enterprise mobile.",
    },
    skills: {
      kicker: "Skills & stack",
      heading: "Capabilities without the",
      headingAccent: "noise",
      subtitle: "Organized by surface area—not by percentages.",
    },
    language: {
      label: "Language",
      pt: "PT",
      en: "EN",
    },
    comingSoon: {
      kicker: "Isadora Guerra",
      title: "Portfolio under construction",
      body: "I'm crafting a new home for my work in frontend, mobile, and intelligent systems. Check back soon.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      aiDemo: "Demo de IA",
      experience: "Experiência",
      skills: "Habilidades",
      contact: "Contato",
    },
    experience: {
      kicker: "Experiência",
      heading:
        "Estágios e pesquisa—do agronegócio e Apple Academy ao mobile corporativo.",
    },
    skills: {
      kicker: "Habilidades e stack",
      heading: "Capacidades sem o",
      headingAccent: "ruído",
      subtitle: "Organizado por frente de atuação—não por porcentagens.",
    },
    language: {
      label: "Idioma",
      pt: "PT",
      en: "EN",
    },
    comingSoon: {
      kicker: "Isadora Guerra",
      title: "Portfólio em construção",
      body: "Estou preparando um novo espaço para o meu trabalho em frontend, mobile e sistemas inteligentes. Volte em breve.",
    },
  },
} as const satisfies Record<Locale, unknown>;

export type Messages = (typeof messages)[Locale];
