import type { Project } from "@/data/projects";

export function MockScreen({ content }: { content: Project["screenContent"] }) {
  switch (content) {
    case "sign":
      return (
        <div className="flex h-full flex-col bg-[#0c0c0e] p-3 pt-12 text-[10px] text-white/90 sm:text-[11px]">
          <div className="mb-2 flex items-center justify-between text-[9px] text-white/45">
            <span>SignBridge</span>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-white/70">
              Live
            </span>
          </div>
          <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#141416] ring-1 ring-white/[0.07]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.06),transparent_55%)]" />
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
              <span className="text-2xl font-light text-white/80">A</span>
            </div>
            <p className="relative z-10 mt-3 text-[9px] tracking-wide text-white/40">
              Gesture context
            </p>
          </div>
          <div className="mt-2 rounded-xl bg-white/[0.05] p-2 ring-1 ring-white/[0.06]">
            <p className="text-[9px] text-white/35">Translation</p>
            <p className="text-[11px] font-medium text-white/90">
              Letter A · high confidence
            </p>
          </div>
        </div>
      );
    case "finance":
      return (
        <div className="flex h-full flex-col bg-[#0b0b0d] p-3 pt-12 text-[10px]">
          <p className="mb-3 text-[11px] font-medium text-white/90">
            Overview
          </p>
          <div className="mb-2 rounded-2xl bg-white/[0.04] p-3 ring-1 ring-white/[0.06]">
            <p className="text-[9px] text-white/40">Balance</p>
            <p className="text-lg font-semibold tracking-tight text-white">
              $24,891
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-2">
            <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/[0.05]" />
            <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/[0.05]" />
            <div className="col-span-2 h-16 rounded-xl bg-white/[0.02] ring-1 ring-white/[0.05]" />
          </div>
        </div>
      );
    case "editor":
      return (
        <div className="flex h-full flex-col bg-[#0a0a0c] p-3 pt-12 text-[10px] text-white/85">
          <div className="mb-2 h-2 w-16 rounded-full bg-white/15" />
          <div className="flex-1 space-y-2 rounded-2xl bg-[#121214] p-3 ring-1 ring-white/[0.06]">
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-[88%] rounded bg-white/08" />
            <div className="h-2 w-[72%] rounded bg-white/08" />
            <div className="mt-4 h-20 rounded-lg bg-white/[0.04]" />
          </div>
        </div>
      );
    case "wellness":
      return (
        <div className="flex h-full flex-col items-center justify-center bg-[#09090b] p-3 pt-12 text-center">
          <div className="mb-6 h-32 w-32 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_65%)]" />
          <p className="text-[11px] font-medium text-white/85">Focus</p>
          <p className="mt-1 text-[9px] text-white/40">12 min remaining</p>
        </div>
      );
    default:
      return <div className="h-full bg-neutral-900" />;
  }
}
