export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  tech: string[];
  screenClassName?: string;
  screenContent: "sign" | "finance" | "editor" | "wellness";
};

export const projects: Project[] = [
  {
    id: "signbridge",
    name: "SignBridge",
    category: "Mobile · AI · Accessibility",
    description:
      "On-device aware interface for sign language interpretation—real-time gesture context, calm feedback, and a flow built for clarity under pressure.",
    role: "Product, mobile UI, model integration",
    tech: ["Swift", "Core ML", "ARKit", "UIKit"],
    screenContent: "sign",
  },
  {
    id: "ledger",
    name: "North Ledger",
    category: "Frontend · Product",
    description:
      "A restrained financial surface for daily decisions—dense data made legible through hierarchy, motion, and intentional empty states.",
    role: "Frontend architecture, design systems",
    tech: ["Next.js", "TypeScript", "Tailwind", "TanStack Query"],
    screenContent: "finance",
  },
  {
    id: "studio",
    name: "Studio Notes",
    category: "Mobile · UX",
    description:
      "Capture and structure ideas without friction—offline-first patterns, tactile transitions, and typography tuned for long reading sessions.",
    role: "React Native, interaction design",
    tech: ["React Native", "Expo", "Reanimated", "Zustand"],
    screenContent: "editor",
  },
  {
    id: "still",
    name: "Still",
    category: "Digital product · Wellness",
    description:
      "Breathing room in software—a quiet companion for focus with subtle haptics, adaptive layouts, and zero visual noise.",
    role: "End-to-end product build",
    tech: ["SwiftUI", "WidgetKit", "CloudKit"],
    screenContent: "wellness",
  },
];
