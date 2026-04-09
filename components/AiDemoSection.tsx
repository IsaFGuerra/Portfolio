"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "./SectionReveal";
import { SectionKicker } from "./SectionKicker";

const TIPS = [
  "Try signing the letter A",
  "Tip: keep your hand centered in frame",
  "Test with a clear, steady pose",
  "Tip: good lighting helps the pipeline",
];

const MOCK_OUTPUTS = [
  { label: "Observing", text: "—" },
  { label: "Processing", text: "Normalizing gesture…" },
  { label: "Translation", text: "Letter A · 0.94 confidence" },
  { label: "Live", text: "Hold pose to confirm" },
];

export function AiDemoSection() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tipIndex, setTipIndex] = useState(0);
  const [mockStep, setMockStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setMockStep(0);
  }, []);

  useEffect(() => {
    if (!open) {
      stopCamera();
      return;
    }
    const id = window.setInterval(() => {
      setTipIndex((i) => (i + 1) % TIPS.length);
    }, 5200);
    return () => clearInterval(id);
  }, [open, stopCamera]);

  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(() => {
      setMockStep((s) => (s + 1) % MOCK_OUTPUTS.length);
    }, 2800);
    return () => clearInterval(id);
  }, [open]);

  const startCamera = async () => {
    setError(null);
    setLoading(true);
    setOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      setError(
        "Camera unavailable. Allow access in your browser settings to run the demo."
      );
    } finally {
      setLoading(false);
    }
  };

  const close = () => {
    setOpen(false);
    stopCamera();
    setError(null);
  };

  return (
    <section
      id="ai-demo"
      className="border-t border-[var(--border-separator)] py-24 md:py-32"
      aria-labelledby="ai-demo-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionReveal>
          <SectionKicker>Intelligent sign translation</SectionKicker>
          <h2
            id="ai-demo-heading"
            className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-text-primary md:text-4xl"
          >
            From gesture to meaning—vision, inference, and a calm interface in
            one <span className="text-accent">flow</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-text-secondary md:text-base">
            SignBridge explores real-time sign language interpretation: camera
            capture, backend orchestration, and on-screen translation with
            accessibility at the center. It&apos;s the shape of the work I care
            about—full-stack, human, and technically serious.
          </p>
        </SectionReveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <SectionReveal delay={0.06}>
            <ul className="space-y-4 text-[14px] leading-relaxed text-text-secondary">
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                <span>
                  <strong className="font-medium text-text-primary">
                    Perception
                  </strong>
                  —camera frames routed through a disciplined vision pipeline.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                <span>
                  <strong className="font-medium text-text-primary">
                    Intelligence
                  </strong>
                  —model integration with latency-aware feedback in the UI.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/50" />
                <span>
                  <strong className="font-medium text-text-primary">
                    Surface
                  </strong>
                  —translation and status presented without theatrics—clarity
                  first.
                </span>
              </li>
            </ul>
            <motion.button
              type="button"
              onClick={startCamera}
              className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-text-primary px-8 text-[14px] font-medium text-bg-base shadow-[0_0_32px_-8px_rgba(52,211,153,0.35)]"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              Try it here — open camera
            </motion.button>
            <p className="mt-4 text-[12px] text-text-muted">
              Demo uses your camera locally. Recognition is simulated for this
              showcase; the experience mirrors production UX.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <motion.div
              className="rounded-3xl border border-[var(--border-subtle)] bg-[#121214] p-6 ring-1 ring-accent/10 md:p-8"
              style={{
                background:
                  "linear-gradient(160deg, rgba(52,211,153,0.06) 0%, transparent 42%), linear-gradient(160deg, rgba(255,255,255,0.03) 0%, transparent 45%), #121214",
              }}
              whileHover={{
                borderColor: "rgba(52, 211, 153, 0.2)",
                boxShadow: "0 0 48px -16px rgba(52, 211, 153, 0.15)",
              }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[11px] font-medium uppercase tracking-wider text-accent/90">
                Product lab
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                A live camera panel with assistive hints—designed to feel like
                system UI, not a gimmick.
              </p>
            </motion.div>
          </SectionReveal>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-4 backdrop-blur-md sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
          >
            <motion.div
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#0e0e10] shadow-[0_0_0_1px_rgba(52,211,153,0.08),0_24px_80px_-20px_rgba(0,0,0,0.7)]"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between border-b border-[var(--border-separator)] px-4 py-3">
                <p
                  id="demo-title"
                  className="text-[13px] font-medium text-text-primary"
                >
                  Camera demo
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg px-2 py-1 text-[12px] text-text-muted transition-colors duration-200 hover:bg-white/5 hover:text-accent"
                >
                  Close
                </button>
              </div>

              <div className="relative p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tipIndex}
                    className="absolute right-4 top-4 z-20 max-w-[200px] rounded-xl border border-accent/25 bg-black/50 px-3 py-2 text-[11px] leading-snug text-text-secondary shadow-lg backdrop-blur-md"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    role="status"
                  >
                    {TIPS[tipIndex]}
                  </motion.div>
                </AnimatePresence>

                <div className="relative overflow-hidden rounded-xl ring-1 ring-accent/15 ring-offset-0 ring-offset-[#0e0e10]">
                  {loading && (
                    <div className="flex aspect-[4/3] items-center justify-center bg-[#141416]">
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-7 w-7 animate-spin rounded-full border-2 border-white/12 border-t-accent" />
                        <span className="text-[12px] text-text-muted">
                          Starting camera…
                        </span>
                      </div>
                    </div>
                  )}
                  {!loading && error && (
                    <div className="flex aspect-[4/3] flex-col items-center justify-center bg-[#141416] px-6 text-center">
                      <p className="text-[13px] text-text-secondary">
                        {error}
                      </p>
                    </div>
                  )}
                  <video
                    ref={videoRef}
                    className={`aspect-[4/3] w-full object-cover ${loading || error ? "hidden" : "block"}`}
                    playsInline
                    muted
                    autoPlay
                  />
                </div>

                <motion.div
                  className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-[var(--border-subtle)] bg-white/[0.03] px-3 py-2.5"
                  animate={
                    MOCK_OUTPUTS[mockStep].label === "Processing"
                      ? { borderColor: "rgba(52, 211, 153, 0.22)" }
                      : { borderColor: "rgba(255, 255, 255, 0.08)" }
                  }
                  transition={{ duration: 0.4 }}
                >
                  <span
                    className={`text-[10px] font-medium uppercase tracking-wider ${MOCK_OUTPUTS[mockStep].label === "Processing" ? "text-accent" : "text-text-muted"}`}
                  >
                    {MOCK_OUTPUTS[mockStep].label}
                  </span>
                  <span className="text-right text-[12px] text-text-primary">
                    {MOCK_OUTPUTS[mockStep].text}
                  </span>
                </motion.div>

                <p className="mt-3 text-center text-[11px] text-text-muted">
                  Simulated interpretation for portfolio demonstration.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
