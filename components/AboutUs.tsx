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
  const pill = isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700";

  // Solid bullet for Vision/Mission/Values (theme-matched)
  const Bullet = () => (
    <span
      className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
        isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
      }`}
    />
  );

  return (
    <section id="about" className={`py-24 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* LEFT: Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Rotating badge (kept) */}
              <div
                className={`absolute -top-6 -right-6 w-28 h-28 rounded-full p-[2px] ${brandGradient} z-20`}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center backdrop-blur ${
                    isDark ? "bg-[#05060A]" : "bg-white"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
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
                      <ArrowUpRight className={`w-7 h-7 ${isDark ? "text-white" : "text-slate-900"}`} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Main photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
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
            className="lg:w-1/2"
          >
            {/* Pill (no border) */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium ${pill}`}
            >
              {/* (optional) you can theme-match this dot too; left as-is */}
            <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#003942]"}`} />
              <span>ABOUT</span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              More{" "}
              <span className={`bg-clip-text text-transparent ${brandGradient}`}>
                about us
              </span>
            </h2>

            <p className={`text-lg mb-4 leading-relaxed ${bodyText}`}>
              At WebbHeads, we build functional technologies that help businesses optimize time
              and deliver exceptional user experiences.
            </p>
            <p className={`mb-10 leading-relaxed ${subText}`}>
              By blending creativity, technology, and AI innovation, we craft digital solutions
              that drive real impact — from smart automation to high-converting websites and
              user-friendly apps that help brands grow smarter and faster.
            </p>

            <div className="flex flex-col md:flex-row gap-10">
              {/* Left */}
              <div className="md:w-1/2">
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                  About
                </h3>
                <p className={`leading-relaxed mb-6 ${subText}`}>
                  At WebbHeads, our mission and vision guide everything we build — helping
                  businesses embrace the future with smarter, faster, and more human-centered
                  digital solutions.
                </p>

                {/* Button: match your pill style + slightly taller + dark-mode grayish */}
                <a
                  href="https://djkushal.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center justify-center gap-2
                    px-6 py-3.5 rounded-full text-sm font-semibold
                    transition-colors duration-200 hover:opacity-95
                    ${isDark ? "bg-white/10 text-white hover:bg-white/15" : "bg-[#003942] text-white"}
                    shadow-[0_12px_30px_rgba(0,0,0,0.22)]
                  `}
                >
                  <span>More About Founder</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              {/* Right: Mission/Vision/Values card */}
              <div className="md:w-1/2">
                <div className={`rounded-2xl p-6 backdrop-blur ${card}`}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Bullet />
                      <div>
                        <h4 className={`font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                          Vision
                        </h4>
                        <p className={`text-sm ${subText}`}>Transforming Businesses Digitally.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Bullet />
                      <div>
                        <h4 className={`font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                          Mission
                        </h4>
                        <p className={`text-sm ${subText}`}>
                          Helping brands build professional, high-performing digital identities
                          through technology and automation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Bullet />
                      <div>
                        <h4 className={`font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                          Values
                        </h4>
                        <p className={`text-sm ${subText}`}>
                          Creativity, innovation, and integrity guide our every move — ensuring
                          each project is built with purpose, precision, and a passion for progress.
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
