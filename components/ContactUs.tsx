"use client";

/**
 * CONTACT US — no borders, consistent pill button + theme-matched focus rings
 * - Send button matches your other CTAs (pill, py-3.5, dark grayish)
 * - Inputs keep borderless look, but focus ring matches theme:
 *   light: #003942, dark: #f6ff82 [web:656]
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactUs() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";

  // Removed borders here (no "border", no "*border-*")
  const shell = isDark
    ? "bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

  const leftText = isDark ? "text-white/80" : "text-slate-900";
  const leftSub = isDark ? "text-white/55" : "text-slate-600";

  // Removed border
  const formCard = isDark
    ? "bg-black/25 border border-white/10"
    : "bg-slate-50 border border-slate-200";

  const label = isDark ? "text-white/70" : "text-slate-700";

  // Inputs: borderless + theme-matched focus ring (instead of always yellow) [web:656]
  const inputBase = isDark
    ? "bg-black/30 text-white placeholder:text-white/35 border-none focus:outline-none focus:ring-1 focus:ring-[#f6ff82]"
    : "bg-white text-slate-900 placeholder:text-slate-400 border-none focus:outline-none focus:ring-1 focus:ring-[#003942]";

  // Pill CTA style (matches Pricing/About/BeforeAfter buttons)
  const ctaBtn = isDark
    ? "bg-white/10 text-white hover:bg-white/15"
    : "bg-[#003942] text-white";

  return (
    <section className={`py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Main container (no border) */}
        <div className={`rounded-[2.25rem] overflow-hidden ${shell}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 md:p-16">
            {/* Left */}
            <div className={leftText}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur
                  border border-transparent bg-origin-border
                  ${isDark ? "text-white/75" : "text-slate-700"}
                  [background-image:linear-gradient(${isDark ? "#05060A" : "#ffffff"},${isDark ? "#05060A" : "#ffffff"}),linear-gradient(90deg,#f6ff82,#003942)]
                `}
              >
                {/* Circle: light mode #003942, dark unchanged (#f6ff82) */}
                <span className={`h-1.5 w-1.5 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#003942]"}`} />
                <span>Contact</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Ready to{" "}
                <span className={`bg-clip-text text-transparent ${brandGradient}`}>transform</span>{" "}
                your digital presence?
              </motion.h2>

              <p className={`text-lg mb-10 leading-relaxed max-w-md ${leftSub}`}>
                Let&apos;s discuss how we can elevate your real estate brand with premium digital solutions.
              </p>

              <div className="space-y-6">
                <div>
                  <h4
                    className={`font-medium mb-2 uppercase tracking-wider text-sm ${
                      isDark ? "text-white/60" : "text-slate-600"
                    }`}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:webbheadsmarketing@gmail.com"
                    className={`text-xl md:text-2xl font-semibold hover:opacity-90 transition ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    webbheadsmarketing@gmail.com
                  </a>
                </div>

                <div>
                  <h4
                    className={`font-medium mb-2 uppercase tracking-wider text-sm ${
                      isDark ? "text-white/60" : "text-slate-600"
                    }`}
                  >
                    Phone
                  </h4>
                  <p className={`text-xl md:text-2xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* Right form (no border) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              className={`rounded-3xl p-8 md:p-10 backdrop-blur ${formCard}`}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${label}`}>First Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase}`}
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${label}`}>Last Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase}`}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${label}`}>Email Address</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase}`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${label}`}>Message</label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all resize-none ${inputBase}`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Send button: match previous pill buttons (no gradient) */}
                <button
                  type="submit"
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    rounded-full px-7 py-3.5 text-sm font-semibold
                    transition-colors duration-200 hover:opacity-95
                    ${ctaBtn}
                    shadow-[0_12px_30px_rgba(0,0,0,0.20)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6ff82]/60
                  `}
                >
                  Send Message
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className={`text-xs ${isDark ? "text-white/40" : "text-slate-500"}`}>
                  By submitting this form, you agree to be contacted about your inquiry.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
