"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function AboutUs() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";

  // No borders (match your card style)
  const card = isDark
    ? "bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
    : "bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]";

  const subText = isDark ? "text-white/55" : "text-slate-600";
  const bodyText = isDark ? "text-white/70" : "text-slate-700";

  // Badge pill without border trick (filled pill)
  const pill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-slate-100 text-slate-700";

  // Solid bullet for Vision/Mission/Values (theme-matched)
  const Bullet = () => (
    <span
      className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
        isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
      }`}
    />
  );

  return (
    <section id="about" className={`py-16 md:py-24 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* 
            LEFT: Team Photo 
            - Removed `lg:justify-end` which was pushing it right (leaving left gap).
            - Added `lg:justify-center` or `lg:justify-start` to fill space better.
            - Adjusted max-w to ensure it feels substantial.
          */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-xl">
              {/* Rotating badge */}
              <div
                className={`
                  absolute -top-4 -right-4 md:-top-8 md:-right-8
                  w-20 h-20 md:w-28 md:h-28 
                  rounded-full p-[2px] ${brandGradient} z-20
                `}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center backdrop-blur ${
                    isDark ? "bg-[#05060A]" : "bg-white"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <svg
                      className="w-full h-full animate-spin-slow"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                          fill="none"
                        />
                      </defs>
                      <text
                        className={`text-[8px] uppercase tracking-widest ${
                          isDark ? "fill-white/70" : "fill-slate-700"
                        }`}
                      >
                        <textPath href="#circlePath">
                          • LEADERS • DRIVEN BY INNOVATION •
                        </textPath>
                      </text>
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <ArrowUpRight
                        className={`w-5 h-5 md:w-7 md:h-7 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main photo - aspect square ensures it fills the width */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl w-full">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800"
                  alt="WebbHeads Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Pill */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs md:text-sm font-medium ${pill}`}
            >
              <span
                className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                  isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
                }`}
              />
              <span>ABOUT</span>
            </div>

            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              More{" "}
              <span className={`bg-clip-text text-transparent ${brandGradient}`}>
                about us
              </span>
            </h2>

            <p
              className={`text-base md:text-lg mb-4 leading-relaxed ${bodyText}`}
            >
              At WebbHeads, we build functional technologies that help
              businesses optimize time and deliver exceptional user experiences.
            </p>
            <p className={`text-base md:text-lg mb-10 leading-relaxed ${subText}`}>
              By blending creativity, technology, and AI innovation, we craft
              digital solutions that drive real impact — from smart automation to
              high-converting websites and user-friendly apps that help brands
              grow smarter and faster.
            </p>

            <div className="flex flex-col md:flex-row gap-10 text-left">
              {/* Left Column (About Text + Button) */}
              <div className="md:w-1/2 flex flex-col items-start">
                <h3
                  className={`text-xl md:text-2xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  About
                </h3>
                <p className={`leading-relaxed mb-6 text-sm md:text-base ${subText}`}>
                  At WebbHeads, our mission and vision guide everything we build
                  — helping businesses embrace the future with smarter, faster,
                  and more human-centered digital solutions.
                </p>

                {/* Button */}
                <a
                  href="https://djkushal.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-full md:w-auto inline-flex items-center justify-center gap-2
                    px-6 py-3.5 rounded-full text-sm font-semibold
                    transition-colors duration-200 hover:opacity-95
                    ${
                      isDark
                        ? "bg-white/10 text-white hover:bg-white/15"
                        : "bg-[#003942] text-white"
                    }
                    shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                  `}
                >
                  <span>More About Founder</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right Column (Mission/Vision/Values card) */}
              <div className="md:w-1/2 w-full">
                <div className={`rounded-2xl p-6 backdrop-blur ${card}`}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Bullet />
                      <div>
                        <h4
                          className={`font-bold mb-1 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Vision
                        </h4>
                        <p className={`text-sm ${subText}`}>
                          Transforming Businesses Digitally.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Bullet />
                      <div>
                        <h4
                          className={`font-bold mb-1 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Mission
                        </h4>
                        <p className={`text-sm ${subText}`}>
                          Helping brands build professional, high-performing
                          digital identities through technology and automation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Bullet />
                      <div>
                        <h4
                          className={`font-bold mb-1 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        >
                          Values
                        </h4>
                        <p className={`text-sm ${subText}`}>
                          Creativity, innovation, and integrity guide our every
                          move — ensuring each project is built with purpose,
                          precision, and a passion for progress.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Right */}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
