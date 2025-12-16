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

  // IMPORTANT: make section transparent so global blobs show through.
  const sectionBg = "bg-transparent";

  const heading = isDark ? "text-white" : "text-slate-900";
  const sub = isDark ? "text-white/55" : "text-slate-600";

  const cardClass = isDark
    ? "bg-white/5"
    : "bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]";

  return (
    <section className={`relative py-20 md:py-28 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`rounded-3xl overflow-hidden ${cardClass} mb-10 md:mb-14`}
        >
          <div className="grid lg:grid-cols-[1.25fr_1fr] items-stretch gap-4 lg:gap-6">
            {/* LEFT: Video */}
            <div className="p-8 md:p-10 lg:py-12 lg:ps-12 lg:pe-4">
              <div
                className={`
                  relative w-full h-full rounded-3xl overflow-hidden
                  ${isDark ? "bg-black/20" : "bg-slate-100"}
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
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="p-8 md:p-10 lg:py-12 lg:ps-4 lg:pe-12 flex flex-col items-start text-left">
              <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${heading}`}>
                Experience
                <br />
                {/* Innovation color rule */}
                <span className={isDark ? "text-[#f6ff82]" : "text-[#003942]"}>
                  Innovation
                </span>
                , See the
                <br />
                Impact
              </h2>

              <p className={`mt-4 text-lg ${sub} max-w-xl`}>
                Discover why top agencies are embracing digital solutions and how you can stay ahead
                of the competition.
              </p>

              <div className="mt-8 space-y-5 w-full max-w-xl">
                {checklist.map((text) => (
                  <div key={text} className="flex items-center gap-4 justify-start">
                    {/* Circle shape updated (NO gradient; theme-specific colors). [web:367][web:393] */}
                    <div
                      className={`
                        h-10 w-10 shrink-0 rounded-full flex items-center justify-center
                        ${isDark ? "bg-[#f6ff82] text-[#003942]" : "bg-[#003942] text-white"}
                      `}
                    >
                      <Check className="h-4 w-4" />
                    </div>

                    <p
                      className={`text-base leading-snug ${
                        isDark ? "text-white/75" : "text-slate-700"
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
        <div className="w-full overflow-hidden">
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
              className="flex gap-6"
              animate={{ x: [0, -1600] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 28, ease: "linear" },
              }}
            >
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                <div
                  key={index}
                  className={`
                    shrink-0 flex items-center gap-3 px-6 py-3 rounded-full
                    ${isDark ? "bg-white/5" : "bg-slate-100"}
                    shadow-none
                  `}
                >
                  <span className="w-2 h-2 bg-[#f6ff82] rounded-full" />
                  <span className={`text-sm font-medium whitespace-nowrap ${heading}`}>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
