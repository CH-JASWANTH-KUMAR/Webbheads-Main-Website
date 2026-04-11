"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

function HeroDashboardCard({
  isDark,
}: {
  isDark: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`w-full h-full rounded-2xl border p-2 md:p-3 overflow-hidden backdrop-blur-sm ${
        isDark
          ? "bg-white/5 border-white/10"
          : "bg-white/80 border-slate-200"
      }`}
    >
      <iframe
        title="WebbHeads Journey Hero"
        src="/webbheads_journey_hero.html"
        className="block w-full h-[470px] sm:h-[500px] lg:h-[530px] xl:h-[560px] rounded-xl border-0"
        loading="lazy"
      />
    </motion.div>
  );
}

export default function Hero() {
  const { isDark } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineWordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const primaryButtonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const words = headlineWordRefs.current.filter(Boolean);
    if (!heroRef.current || words.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(words, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(words, { opacity: 0, y: 40 });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.15,
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  const handlePrimaryMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !primaryButtonRef.current) {
      return;
    }

    const rect = primaryButtonRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;

    gsap.to(primaryButtonRef.current, {
      x,
      y,
      duration: 0.22,
      ease: "power2.out",
    });
  };

  const handlePrimaryMouseLeave = () => {
    if (!primaryButtonRef.current) {
      return;
    }

    gsap.to(primaryButtonRef.current, {
      x: 0,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";
  const bodyText = isDark ? "text-white/70" : "text-slate-700";

  const card = isDark
    ? "bg-white/5 border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
    : "bg-white border-slate-200 shadow-[0_8px_22px_rgba(15,23,42,0.07)]";
  const primaryButtonClass = isDark
    ? "text-[#07110f] bg-gradient-to-r from-[#f6ff82] via-[#edff86] to-[#d8f566]"
    : "text-white bg-gradient-to-r from-[#003942] via-[#005260] to-[#006477]";
  const secondaryButtonClass = isDark
    ? "text-white bg-white/8 border border-white/25 backdrop-blur-md hover:bg-white/14"
    : "text-slate-900 bg-white/70 border border-white/80 backdrop-blur-md hover:bg-white";

  const ease = [0.22, 1, 0.36, 1] as const;
  const tapT = { duration: 0.12, ease } as const;
  const tapScale = prefersReducedMotion ? 1 : 0.985;
  const headlineWords = ["Premium", "Digital", "Solutions", "for", "Real", "Estate"];

  return (
    <section
      ref={heroRef}
      id="hero"
      className={`relative w-full min-h-screen overflow-hidden pt-[120px] pb-8 md:pb-12 ${sectionBg}`}
    >
      <div
        className={`hero-glow-blob ${isDark ? "hero-glow-blob--dark" : "hero-glow-blob--light"}`}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 min-h-[calc(100vh-120px)] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center"
        >
          <div className="text-center lg:text-left">
            <div
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8 text-xs md:text-sm font-medium
                ${isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700"}
              `}
            >
              <span
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                  isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
                }`}
              />
              <span>ABOUT WEBBHEADS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight max-w-4xl">
              {headlineWords.map((word, index) => {
                const wordClass = word === "Solutions" ? `bg-clip-text text-transparent ${brandGradient}` : "";
                return (
                  <span
                    key={word}
                    ref={(node) => {
                      headlineWordRefs.current[index] = node;
                    }}
                    className={`inline-block mr-[0.28em] ${wordClass}`}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>

            <p
              className={`
                text-base sm:text-lg md:text-xl mb-8 md:mb-10
                leading-relaxed max-w-2xl lg:max-w-none
                ${bodyText}
              `}
            >
              We craft high-end websites, custom apps, and intelligent automation
              systems specifically designed for property developers and luxury
              agencies.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
            {/* PRIMARY CTA */}
            <motion.a
              ref={primaryButtonRef}
              href="#pricing"
              initial={false}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1.03, y: -2, boxShadow: "0 18px 42px rgba(0,0,0,0.22)" }
              }
              whileTap={{ scale: tapScale }}
              transition={tapT}
              onMouseMove={handlePrimaryMouseMove}
              onMouseLeave={handlePrimaryMouseLeave}
              className={`
                group w-full sm:w-auto justify-center px-8 py-4 text-lg font-semibold rounded-full border-none flex items-center gap-2 transition-all duration-300
                ${primaryButtonClass}
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ff82]/60
              `}
              style={{
                boxShadow: isDark
                  ? "0 10px 30px rgba(246, 255, 130, 0.2), 0 5px 15px rgba(0,0,0,0.3)"
                  : "0 10px 26px rgba(15,23,42,0.25)",
              }}
            >
              <span>Explore Plans</span>
              <span className="relative w-5 h-5 overflow-hidden">
                <ArrowUpRight className="absolute inset-0 w-5 h-5 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-1 group-hover:opacity-0" />
                <ArrowUpRight className="absolute inset-0 w-5 h-5 -translate-x-4 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </span>
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              href="#portfolio"
              initial={false}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : { scale: 1.02, y: -2, boxShadow: "0 14px 36px rgba(0,0,0,0.16)" }
              }
              whileTap={{ scale: tapScale }}
              transition={tapT}
              className={`
                w-full sm:w-auto justify-center px-8 py-4 rounded-full font-semibold border flex items-center gap-2 transition-all duration-300
                ${card}
                ${secondaryButtonClass}
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ff82]/60
              `}
              style={{
                boxShadow: isDark
                  ? "0 8px 18px rgba(0,0,0,0.26)"
                  : "0 8px 18px rgba(15,23,42,0.08)",
              }}
            >
              <span>Our Case Studies</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
            </div>
          </div>

          <div className="w-full max-w-[660px] mx-auto lg:mx-0 lg:justify-self-end">
            <HeroDashboardCard isDark={isDark} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
