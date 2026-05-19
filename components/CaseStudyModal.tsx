"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, Timer, TrendingUp, X } from "lucide-react";
import { useEffect, useMemo } from "react";
import type { CaseStudy } from "@/components/case-studies/data";

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

type CaseStudyModalProps = {
  study: CaseStudy | null;
  isOpen: boolean;
  isDark: boolean;
  onClose: () => void;
};

export default function CaseStudyModal({
  study,
  isOpen,
  isDark,
  onClose,
}: CaseStudyModalProps) {
  const modalTheme = useMemo(
    () =>
      isDark
        ? {
            backdrop: "bg-black/70",
            surface:
              "bg-slate-950/80 text-white border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.55)]",
            muted: "text-white/65",
            soft: "bg-white/5 border-white/10",
            badge: "bg-white/10 text-white/80",
            button:
              "bg-white text-slate-900 hover:bg-white/90 shadow-[0_18px_45px_rgba(0,0,0,0.4)]",
          }
        : {
            backdrop: "bg-slate-900/50",
            surface:
              "bg-white/85 text-slate-900 border-black/5 shadow-[0_30px_120px_rgba(15,23,42,0.22)]",
            muted: "text-slate-600",
            soft: "bg-white/70 border-black/5",
            badge: "bg-slate-900/10 text-slate-700",
            button:
              "bg-slate-900 text-white hover:bg-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.25)]",
          },
    [isDark]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && study && (
        <motion.div
          className={`fixed inset-0 z-[120] ${modalTheme.backdrop} backdrop-blur-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE_SMOOTH }}
          onClick={onClose}
          aria-hidden="true"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${study.title} case study`}
            className="relative mx-auto my-6 md:my-10 w-[min(1120px,94vw)]"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.45, ease: EASE_SMOOTH }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`relative max-h-[calc(100vh-72px)] overflow-y-auto rounded-[36px] border ${modalTheme.surface}`}
            >
              <button
                type="button"
                onClick={onClose}
                className={`absolute right-6 top-6 z-20 h-11 w-11 rounded-full ${modalTheme.soft} flex items-center justify-center transition-colors`}
                aria-label="Close case study"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-6 pb-10 pt-8 sm:px-10">
                <motion.div
                  className={`overflow-hidden rounded-3xl border ${modalTheme.soft}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: EASE_SMOOTH }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="h-[260px] w-full object-cover sm:h-[320px]"
                    loading="lazy"
                  />
                </motion.div>

                <div className="mt-6 flex flex-col gap-4">
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase ${modalTheme.badge}`}
                  >
                    {study.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                    {study.title}
                  </h2>
                  <p className={`${modalTheme.muted} text-sm sm:text-base max-w-2xl`}>
                    {study.description}
                  </p>
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${modalTheme.button}`}
                  >
                    View Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <section className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    <Sparkles className="h-4 w-4" />
                    <span>Overview</span>
                  </div>
                  <p className={`${modalTheme.muted} max-w-2xl text-sm sm:text-base leading-relaxed`}>
                    {study.overview}
                  </p>
                </section>

                <section className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    <Check className="h-4 w-4" />
                    <span>Key Features</span>
                  </div>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {study.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="text-sm">
                        <span className="mr-2 text-emerald-400">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    <Timer className="h-4 w-4" />
                    <span>Tech Stack</span>
                  </div>
                  <p className={`${modalTheme.muted} text-sm`}>
                    {study.technologies.join(" • ")}
                  </p>
                </section>

                <section className="mt-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                    <TrendingUp className="h-4 w-4" />
                    <span>Results</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {study.results.slice(0, 4).map((result) => (
                      <div
                        key={result}
                        className={`rounded-2xl border px-4 py-3 text-sm ${modalTheme.soft}`}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
