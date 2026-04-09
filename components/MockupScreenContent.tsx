"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { MockScreen } from "./MockScreen";

type Props = {
  /** Caminho em `public`, ex: `/projects/runicorn.png` */
  image?: string | null;
  screenContent: Project["screenContent"];
  alt: string;
  /** LCP / hero */
  priority?: boolean;
};

export function MockupScreenContent({
  image,
  screenContent,
  alt,
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);
  const useImage = Boolean(image?.trim()) && !failed;

  if (!useImage) {
    return <MockScreen content={screenContent} />;
  }

  return (
    <div className="relative h-full w-full bg-black">
      <Image
        src={image!.trim()}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
        priority={priority}
        onError={() => setFailed(true)}
        draggable={false}
      />
    </div>
  );
}
