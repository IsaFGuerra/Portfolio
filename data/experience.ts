export type Locale = "pt" | "en";

export type ExperienceEntry = {
  id: string;
  period: Record<Locale, string>;
  title: Record<Locale, string>;
  org: Record<Locale, string>;
  body: Record<Locale, string>;
  location?: Record<Locale, string>;
};

/** Ordem: mais recente primeiro (como no LinkedIn). */
export const experienceEntries: ExperienceEntry[] = [
  {
    id: "slc",
    period: {
      pt: "jun de 2025 – atual · 11 meses",
      en: "Jun 2025 – Present · 11 months",
    },
    title: {
      pt: "Estagiária de Engenharia de Software",
      en: "Software Engineer Intern",
    },
    org: {
      pt: "SLC Agrícola S/A",
      en: "SLC Agrícola S/A",
    },
    body: {
      pt: "Desenvolvimento mobile Flutter. Stack: Flutter, Dart.",
      en: "Flutter mobile development. Stack: Flutter, Dart.",
    },
  },
  {
    id: "apple-academy",
    period: {
      pt: "fev de 2025 – atual · 1 ano e 3 meses",
      en: "Feb 2025 – Present · 1 year 3 months",
    },
    title: {
      pt: "Estagiária de Engenharia de Software",
      en: "Software Engineer Intern",
    },
    org: {
      pt: "Apple Developer Academy | PUCRS",
      en: "Apple Developer Academy | PUCRS",
    },
    body: {
      pt: "Desenvolvimento com Swift e UIKit.",
      en: "Development with Swift and UIKit.",
    },
  },
  {
    id: "hp-lis",
    period: {
      pt: "jun de 2024 – fev de 2025 · 9 meses",
      en: "Jun 2024 – Feb 2025 · 9 months",
    },
    title: {
      pt: "Estagiária de Engenharia de Software LIS/HP",
      en: "Software Engineer Intern LIS/HP",
    },
    org: {
      pt: "HP",
      en: "HP",
    },
    location: {
      pt: "Porto Alegre, RS · Presencial",
      en: "Porto Alegre, RS, Brazil · On-site",
    },
    body: {
      pt: "Projeto LIS/HP. React Native e Git em ambiente corporativo.",
      en: "LIS/HP project. React Native and Git in a corporate setting.",
    },
  },
  {
    id: "pet-pucrs",
    period: {
      pt: "abr de 2022 – jun de 2023 · 1 ano e 3 meses",
      en: "Apr 2022 – Jun 2023 · 1 year 3 months",
    },
    title: {
      pt: "Bolsista de iniciação científica",
      en: "Scientific initiation scholarship",
    },
    org: {
      pt: "Pet Informática - PUCRS",
      en: "Pet Informática - PUCRS",
    },
    location: {
      pt: "Porto Alegre, RS",
      en: "Porto Alegre, RS, Brazil",
    },
    body: {
      pt: "Pesquisa e atividades em laboratório com foco em trabalho em equipe.",
      en: "Research and lab work with a strong emphasis on teamwork.",
    },
  },
];
