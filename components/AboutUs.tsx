"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function AboutUs() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = isDark ? "bg-transparent" : "bg-[#f4f8fc]";

  // No borders (match your card style)
  const card = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
    : "bg-white border border-slate-200/70 shadow-[0_18px_50px_rgba(0,0,0,0.12)]";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 md:mb-12"
        >
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
            className={`text-3xl md:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            More{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              about us
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 lg:gap-14">
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
            className="w-full relative flex items-center justify-center"
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
            className="w-full text-left lg:max-w-[560px] lg:-mt-3"
          >
            <p
              className={`text-base md:text-lg mb-3 leading-relaxed ${bodyText}`}
            >
              At WebbHeads, we build functional technologies that help
              businesses optimize time and deliver exceptional user experiences.
            </p>
            <p className={`text-base md:text-lg mb-8 leading-relaxed ${subText}`}>
              By blending creativity, technology, and AI innovation, we craft
              digital solutions that drive real impact — from smart automation to
              high-converting websites and user-friendly apps that help brands
              grow smarter and faster.
            </p>

            <div
              className={`text-left border-l-2 pl-5 ${
                isDark ? "border-white/20" : "border-[#003942]/20"
              }`}
            >
              <h3
                className={`text-xl md:text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                About
              </h3>
              <p className={`leading-relaxed mb-5 text-sm md:text-[15px] ${subText}`}>
                At WebbHeads, our mission and vision guide everything we build
                — helping businesses embrace the future with smarter, faster,
                and more human-centered digital solutions.
              </p>

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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12"
        >
          <div className={`rounded-2xl p-5 md:p-6 backdrop-blur ${card}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex items-start gap-3">
                <Bullet />
                <div className="min-w-0">
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Vision
                  </h4>
                  <p className={`text-sm leading-relaxed break-words ${subText}`}>
                    Transforming businesses digitally with clarity and speed.
                    We envision growth systems that stay simple, scalable, and
                    human-first at every stage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bullet />
                <div className="min-w-0">
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Mission
                  </h4>
                  <p className={`text-sm leading-relaxed break-words ${subText}`}>
                    Helping brands build professional, high-performing digital
                    identities through technology and automation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bullet />
                <div className="min-w-0">
                  <h4
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Values
                  </h4>
                  <p className={`text-sm leading-relaxed break-words ${subText}`}>
                    Creativity, innovation, and integrity guide our every move
                    — ensuring each project is built with purpose, precision,
                    and a passion for progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
