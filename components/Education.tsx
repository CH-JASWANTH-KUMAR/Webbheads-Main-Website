"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const checklist = [
  "Tailored solutions for your business needs",
  "Engaging visuals that tell your brand story",
  "Proven strategies for maximum impact",
];

const marqueeItems = [
  "Premium Websites",
  "AI Automation",
  "Lead Generation",
  "CRM Integration",
  "Property Listings",
  "Virtual Tours",
  "Analytics Dashboard",
  "SEO Optimization",
];

export default function Education() {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "bg-black" : "bg-transparent";

  const heading = isDark ? "text-white" : "text-[#0f1f1b]";
  const sub = isDark ? "text-white/55" : "text-[#4a6660]";

  const cardClass = isDark
    ? "bg-[#11151C] border border-white/10 shadow-[0_22px_58px_rgba(0,0,0,0.45)]"
    : "bg-white border border-[#dce8e2] shadow-[0_4px_24px_rgba(26,60,52,0.07)]";

  // Circle bg rule:
  // - Dark: grayish (no yellow)
  // - Light: #003942
  const circleBg = isDark ? "bg-[#2B2D31]" : "bg-[#003942]";
  const circleText = "text-white";

  return (
    <section className={`relative py-16 md:py-28 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`rounded-3xl overflow-hidden ${cardClass} mb-10 md:mb-14`}
        >
          {/* Responsive Grid: Stacks on mobile, side-by-side on Large (lg) screens */}
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] items-center gap-0 xl:gap-8">
            
            {/* LEFT: Video */}
            <div className="p-5 md:p-8 xl:p-10 order-1">
              <div
                className={`
                  relative w-full aspect-video rounded-3xl overflow-hidden
                  ${isDark ? "bg-black/20" : "bg-[#edf1ee]"}
                `}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/fH0No8qr9D0?rel=0"
                  title="How Technology Helps Real Estate Grow"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className={`absolute inset-0 rounded-3xl ring-1 ring-inset pointer-events-none ${isDark ? "ring-white/15" : "ring-black/10"}`} />
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="p-6 md:p-8 xl:p-10 flex flex-col items-start text-left justify-center order-2">
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${heading}`}
              >
                Experience{" "}
                <span className={isDark ? "text-[#f6ff82]" : "text-[#003942]"}>
                  Innovation
                </span>
                , See the Impact
              </h2>

              <p className={`mt-4 text-base md:text-lg ${sub} max-w-xl`}>
                Discover why top agencies are embracing digital solutions and
                how you can stay ahead of the competition.
              </p>

              <div className="mt-8 space-y-4 md:space-y-5 w-full max-w-xl">
                {checklist.map((text) => (
                  <div
                    key={text}
                    className="flex items-start md:items-center gap-4 justify-start"
                  >
                    {/* Checklist circle */}
                    <div
                      className={`
                        h-8 w-8 md:h-10 md:w-10 shrink-0 rounded-full flex items-center justify-center mt-1 md:mt-0
                        ${circleBg} ${circleText}
                      `}
                    >
                      <Check className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </div>

                    <p
                      className={`text-sm md:text-base leading-snug ${
                        isDark ? "text-white/75" : "text-[#4a6660]"
                      }`}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div
          className={`relative w-full overflow-hidden rounded-[20px] py-5 ${
            isDark ? "bg-black" : "bg-[#1a3c34]"
          }`}
        >
          <p className="mb-[14px] text-center text-[11px] font-medium uppercase tracking-[0.1em] text-[rgba(246,255,130,0.7)]">
            Our Full Stack of Services
          </p>

          <div
            className={`absolute inset-y-0 left-0 z-10 w-12 md:w-20 pointer-events-none ${
              isDark
                ? "bg-gradient-to-r from-[#000000] to-transparent"
                : "bg-gradient-to-r from-[#1a3c34] to-transparent"
            }`}
          />
          <div
            className={`absolute inset-y-0 right-0 z-10 w-12 md:w-20 pointer-events-none ${
              isDark
                ? "bg-gradient-to-l from-[#000000] to-transparent"
                : "bg-gradient-to-l from-[#1a3c34] to-transparent"
            }`}
          />

          <div
            className={`
              relative
              [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
              [mask-size:100%_100%]
              [mask-repeat:no-repeat]
              [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
              [-webkit-mask-size:100%_100%]
              [-webkit-mask-repeat:no-repeat]
            `}
          >
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{ x: [0, -1600] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 28,
                  ease: "linear",
                },
              }}
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`shrink-0 flex items-center gap-2 px-[18px] py-2 rounded-full border text-[13px] font-medium whitespace-nowrap ${
                      isDark
                        ? "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.8)]"
                        : "bg-[rgba(255,255,255,0.08)] border-[rgba(255,255,255,0.12)] text-white"
                    }`}
                  >
                    <span className="w-[6px] h-[6px] rounded-full bg-[#f6ff82]" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
