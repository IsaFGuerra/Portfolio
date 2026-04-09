export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  role: string;
  tech: string[];
  screenClassName?: string;
  /** Fallback UI inside the phone mock when `image` is missing or fails to load */
  screenContent: "sign" | "finance" | "editor" | "wellness";
  /** Screenshot under `public/`, e.g. `/projects/runicorn.png` */
  image?: string;
};

export const projects: Project[] = [
  {
    id: "runicorn",
    name: "Runicorn",
    category: "iOS · Game · Casual",
    description:
      "Endless runner built with SpriteKit: guide a unicorn through an aurora-inspired world, collect stars, and dodge cosmic obstacles—with tilt or on-screen controls for a tactile, immersive pace.",
    role: "iOS game development · Apple Developer Academy | PUCRS",
    tech: ["Swift", "SpriteKit", "UIKit", "Core Motion"],
    screenContent: "editor",
    image: "/projects/runicorn.png",
  },
  {
    id: "dirty-dogs",
    name: "Dirty Dogs",
    category: "iOS · Multiplayer · Game",
    description:
      "A backyard duel where dogs race to find their bone first—dig, uncover items to throw at your rival, and lean on real-time Game Center sessions for quick, lighthearted competition.",
    role: "iOS game development · Apple Developer Academy | PUCRS",
    tech: ["Swift", "SwiftUI", "SpriteKit", "Game Center"],
    screenContent: "editor",
    image: "/projects/dirty-dogs.png",
  },
  {
    id: "boraa",
    name: "Boraa",
    category: "Mobile · Social · Discovery",
    description:
      "Helps people discover places, events, and plans through friends and community—nearby picks, check-ins, and a social layer so new experiences feel personal, not algorithmic noise.",
    role: "Mobile & backend features · Apple Developer Academy | PUCRS",
    tech: ["Swift", "Node.js", "TypeScript"],
    screenContent: "editor",
    image: "/projects/boraa.png",
  },
  {
    id: "rotta",
    name: "Rotta",
    category: "iOS · Sports · Fan experience",
    description:
      "Brings Formula 2, Formula 3, and F1 Academy closer to fans and newcomers—clear rankings, rich context, and interactive surfaces—plus haptics that evoke engine rumble for a more visceral follow-along.",
    role: "iOS development · Apple Developer Academy | PUCRS",
    tech: ["Swift", "UIKit", "Core Haptics"],
    screenContent: "finance",
    image: "/projects/rotta.png",
  },
];
