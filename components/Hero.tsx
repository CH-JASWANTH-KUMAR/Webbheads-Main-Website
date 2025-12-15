"use client";

import { motion } from "framer-motion";
import { TrendingUp, Building2, DollarSign } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";
  
  const subText = isDark ? "text-white/55" : "text-slate-600";
  const bodyText = isDark ? "text-white/70" : "text-slate-700";

  const card = isDark
    ? "bg-white/5 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white border-slate-200 shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

  // Button motion: consistent + smooth
  const btnEase = [0.22, 1, 0.36, 1] as const; // smooth “easeOutCubic”-ish
  const hoverT = { duration: 0.28, ease: btnEase } as const;
  const tapT = { duration: 0.12, ease: btnEase } as const;

  return (
    <section
      id="hero"
      className={`relative w-full overflow-hidden pt-32 md:pt-40 lg:pt-44 pb-16 ${sectionBg}`}
    >
      <div
        className={`absolute top-[-20%] left-[-10%] w-[520px] h-[520px] rounded-full blur-[120px] pointer-events-none ${
          isDark ? "bg-[#f6ff82]/10" : "bg-[#f6ff82]/20"
        }`}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur
              border border-transparent bg-origin-border
              ${isDark ? "text-white/75" : "text-slate-700"}
              [background-image:linear-gradient(${isDark ? "#05060A" : "#ffffff"},${isDark ? "#05060A" : "#ffffff"}),linear-gradient(90deg,#f6ff82,#003942)]
            `}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#f6ff82]" />
            <span>ELEVATING REAL ESTATE</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Premium Digital <br />
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>Solutions</span> for{" "}
            <br />
            Real Estate.
          </h1>

          <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-lg ${bodyText}`}>
            We craft high-end websites, custom apps, and intelligent automation systems specifically
            designed for property developers and luxury agencies.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* PRIMARY CTA */}
            <motion.a
              href="#pricing"
              initial={false}
              whileHover={{
                y: -2,
                scale: 1.02,
                boxShadow: isDark
                  ? "0 18px 45px rgba(0,0,0,0.45)"
                  : "0 18px 45px rgba(15,23,42,0.18)",
              }}
              whileTap={{
                y: 0,
                scale: 0.98,
                boxShadow: isDark
                  ? "0 10px 25px rgba(0,0,0,0.35)"
                  : "0 10px 25px rgba(15,23,42,0.12)",
              }}
              transition={hoverT}
              className={`
                px-8 py-4 text-lg font-semibold rounded-full
                ${brandGradient} ${isDark ? "text-[#003942]" : "text-white"}
                border-none
                will-change-transform
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ff82]/60
              `}
              style={{
                boxShadow: isDark
                  ? "0 12px 30px rgba(0,0,0,0.35)"
                  : "0 12px 30px rgba(15,23,42,0.12)",
              }}
            >
              Explore Plans
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              href="#portfolio"
              initial={false}
              whileHover={{
                y: -2,
                scale: 1.01,
                boxShadow: isDark
                  ? "0 18px 45px rgba(0,0,0,0.50)"
                  : "0 18px 45px rgba(15,23,42,0.16)",
              }}
              whileTap={{
                y: 0,
                scale: 0.99,
                boxShadow: isDark
                  ? "0 10px 25px rgba(0,0,0,0.40)"
                  : "0 10px 25px rgba(15,23,42,0.10)",
              }}
              transition={hoverT}
              className={`
                px-8 py-4 rounded-full font-semibold border-none
                ${card}
                ${isDark ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-slate-50"}
                will-change-transform
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ff82]/60
              `}
            >
              Our Case Studies
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative h-[460px] md:h-[520px] w-full flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-6 rounded-[32px] opacity-60 blur-[60px] bg-gradient-to-tr from-[#f6ff82]/18 via-transparent to-transparent -z-10" />

            <div className="relative flex items-end justify-center gap-4 md:gap-6">
              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -top-8 left-0 right-0 z-20"
              >
                <svg viewBox="0 0 400 100" className="w-full h-24">
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f6ff82" />
                      <stop offset="100%" stopColor="#003942" />
                    </linearGradient>
                  </defs>

                  <motion.path
                    d="M 30 80 Q 100 75, 150 60 Q 200 45, 250 35 Q 300 25, 350 15"
                    fill="none"
                    stroke="url(#arrowGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.1, duration: 1.4, ease: "easeOut" }}
                  />
                  <motion.polygon
                    points="345,5 375,15 350,30"
                    fill="#003942"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.25 }}
                  />
                </svg>
              </motion.div>

              {/* Bars */}
              {[3, 5, 7, 10].map((count, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + idx * 0.18, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.25 }}
                    className="mb-2"
                  >
                    <div className="w-14 h-12 md:w-16 md:h-14 relative">
                      <div
                        className={`
                          absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0
                          border-l-[32px] md:border-l-[36px]
                          border-r-[32px] md:border-r-[36px]
                          border-b-[22px] md:border-b-[26px]
                          border-l-transparent border-r-transparent
                          ${idx === 3 ? "border-b-[#f6ff82]" : "border-b-[#003942]"}
                        `}
                      />
                      <div
                        className={`
                          absolute bottom-0 left-1/2 -translate-x-1/2
                          w-12 md:w-14 h-7 md:h-8 rounded-sm
                          ${isDark ? "bg-white/10 border border-white/15" : "bg-white border border-slate-200"}
                        `}
                      >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-5 bg-[#003942] rounded-t-sm" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col items-center">
                    {[...Array(count)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.55 + idx * 0.12 + i * 0.07 }}
                        className={`
                          w-14 md:w-16 h-4 md:h-5 rounded-full -mt-1 first:mt-0
                          ${brandGradient}
                          ${isDark ? "shadow-[0_10px_22px_rgba(0,0,0,0.35)]" : "shadow-[0_10px_22px_rgba(15,23,42,0.12)]"}
                        `}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.55 }}
              className={`absolute bottom-4 left-0 p-4 rounded-2xl border backdrop-blur ${card} z-20`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? "bg-white/5" : "bg-slate-50"
                  }`}
                >
                  <TrendingUp className={`${isDark ? "text-[#f6ff82]" : "text-[#003942]"} w-5 h-5`} />
                </div>
                <div>
                  <p className={`text-xs font-medium uppercase ${subText}`}>Avg. ROI Increase</p>
                  <p className={`text-lg font-bold ${isDark ? "text-white" : "text-[#003942]"}`}>+340%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.55 }}
              className={`absolute top-4 right-0 p-4 rounded-2xl border backdrop-blur ${card} z-20`}
            >
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-[#f6ff82]" />
                <div>
                  <p className={`text-xs ${subText}`}>Properties Sold</p>
                  <p className={`text-sm font-bold ${isDark ? "text-white" : "text-[#003942]"}`}>$2B+ Value</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, duration: 0.4 }}
              className={`absolute bottom-4 right-0 px-4 py-2 rounded-full border backdrop-blur ${card} z-20 flex items-center gap-2`}
            >
              <Building2 className="w-4 h-4 text-[#f6ff82]" />
              <span className={`text-xs font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Real Estate Growth
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
