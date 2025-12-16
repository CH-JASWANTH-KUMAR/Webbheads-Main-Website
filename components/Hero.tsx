"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { isDark } = useTheme();
  const prefersReducedMotion = useReducedMotion();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";
  const bodyText = isDark ? "text-white/70" : "text-slate-700";

  const card = isDark
    ? "bg-white/5 border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
    : "bg-white border-slate-200 shadow-[0_8px_22px_rgba(15,23,42,0.07)]";

  const ease = [0.22, 1, 0.36, 1] as const;
  const tapT = { duration: 0.12, ease } as const;
  const tapScale = prefersReducedMotion ? 1 : 0.985;

  return (
    <section
      id="hero"
      // Responsive padding: pt-28 for mobile, scaling up to pt-44 for desktop
      className={`relative w-full overflow-hidden pt-28 md:pt-40 lg:pt-44 pb-16 md:pb-24 ${sectionBg}`}
    >
      {/* 
         Responsive Background Glow: 
         - Mobile: w-[90vw] (relative width) to prevent overflow
         - Desktop: w-[600px] (fixed cap)
      */}
      <div
        className={`
          absolute top-[-10%] left-1/2 -translate-x-1/2 
          w-[90vw] h-[90vw] md:w-[600px] md:h-[600px] 
          rounded-full blur-[80px] md:blur-[120px] pointer-events-none 
          ${isDark ? "bg-[#f6ff82]/10" : "bg-[#f6ff82]/20"}
        `}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Badge */}
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
            <span>ELEVATING REAL ESTATE</span>
          </div>

          {/* 
             Responsive Typography:
             - text-4xl on mobile (prevents wrapping issues)
             - text-5xl on tablet
             - text-7xl on desktop
          */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Premium Digital <br />
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Solutions
            </span>{" "}
            for Real Estate.
          </h1>

          <p
            className={`
              text-base sm:text-lg md:text-xl mb-8 md:mb-12 
              leading-relaxed max-w-2xl mx-auto px-2 
              ${bodyText}
            `}
          >
            We craft high-end websites, custom apps, and intelligent automation
            systems specifically designed for property developers and luxury
            agencies.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full sm:w-auto">
            {/* PRIMARY CTA */}
            <motion.a
              href="#pricing"
              initial={false}
              whileTap={{ scale: tapScale }}
              transition={tapT}
              className={`
                w-full sm:w-auto justify-center px-8 py-4 text-lg font-semibold rounded-full border-none flex items-center gap-2
                ${
                  isDark
                    ? "bg-[#f6ff82] text-[#003942]"
                    : "bg-[#003942] text-white"
                }
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ff82]/60
              `}
              style={{
                boxShadow: isDark
                  ? "0 10px 30px rgba(246, 255, 130, 0.2), 0 5px 15px rgba(0,0,0,0.3)"
                  : "0 10px 26px rgba(15,23,42,0.25)",
              }}
            >
              <span>Explore Plans</span>
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              href="#portfolio"
              initial={false}
              whileTap={{ scale: tapScale }}
              transition={tapT}
              className={`
                w-full sm:w-auto justify-center px-8 py-4 rounded-full font-semibold border-none flex items-center gap-2
                ${card}
                ${isDark ? "text-white" : "text-slate-900"}
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
        </motion.div>
      </div>
    </section>
  );
}
