"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ContactUs() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = isDark ? "bg-transparent" : "bg-gradient-to-b from-[#eef4f8] to-[#f7fbff]";

  // Removed borders here (no "border", no "*border-*")
  const shell = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_12px_34px_rgba(0,0,0,0.55)]"
    : "bg-gradient-to-br from-white to-[#f9fcff] border border-[#003942]/12 shadow-[0_12px_34px_rgba(15,23,42,0.1)]";

  const leftText = isDark ? "text-white/80" : "text-slate-900";
  const leftSub = isDark ? "text-white/55" : "text-slate-600";

  // Removed border
  const formCard = isDark
    ? "bg-black/25 border border-white/10"
    : "bg-white border border-[#cfdbe4] shadow-[0_10px_24px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]";

  const label = isDark ? "text-white/70" : "text-slate-700";

  // Inputs: borderless + theme-matched focus ring
  const inputBase = isDark
    ? "bg-black/30 text-white placeholder:text-white/35 border-none focus:outline-none focus:ring-1 focus:ring-[#f6ff82]"
    : "bg-[#f8fbfd] text-slate-900 placeholder:text-slate-500 border border-[#d6e1e9] focus:outline-none focus:ring-1 focus:ring-[#003942] focus:border-[#003942]";

  // Pill CTA style
  const ctaBtn = isDark
    ? "bg-white/10 text-white hover:bg-white/15"
    : "bg-[#003942] text-white hover:bg-[#002a31]";

  const ctaFocus = isDark
    ? "focus-visible:ring-[#f6ff82]/60"
    : "focus-visible:ring-[#003942]/35";

  return (
    <section className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Main container */}
        <div className={`rounded-3xl md:rounded-[2.25rem] overflow-hidden ${shell}`}>
          {/* 
             Padding reduced on mobile (p-6) vs desktop (p-16) 
             Gap reduced on mobile (gap-8) vs desktop (gap-12)
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-10 lg:p-16">
            
            {/* Left Content */}
            <div className={`${leftText} lg:pr-2`}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8 text-xs md:text-sm font-medium
                  ${isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700"}
                `}
              >
                <span className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#003942]"}`} />
                <span>Contact</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Ready to{" "}
                <span className={`bg-clip-text text-transparent ${brandGradient}`}>transform</span>{" "}
                your digital presence?
              </motion.h2>

              <p className={`text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md ${leftSub}`}>
                Let&apos;s discuss how we can elevate your real estate brand with premium digital solutions.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4
                    className={`font-medium mb-2 uppercase tracking-wider text-xs md:text-sm ${
                      isDark ? "text-white/60" : "text-slate-600"
                    }`}
                  >
                    Email
                  </h4>
                  {/* Fixed link syntax */}
                  <a
                    href="mailto:webbheadsmarketing@gmail.com"
                    className={`text-lg md:text-2xl font-semibold hover:opacity-90 transition break-all md:break-normal ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    webbheadsmarketing@gmail.com
                  </a>
                </div>

                <div>
                  <h4
                    className={`font-medium mb-2 uppercase tracking-wider text-xs md:text-sm ${
                      isDark ? "text-white/60" : "text-slate-600"
                    }`}
                  >
                    Phone
                  </h4>
                  <p className={`text-lg md:text-2xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              className={`rounded-2xl md:rounded-3xl p-6 md:p-10 backdrop-blur ${formCard}`}
            >
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>First Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase} text-sm md:text-base`}
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>Last Name</label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase} text-sm md:text-base`}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>Email Address</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase} text-sm md:text-base`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>Message</label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all resize-none ${inputBase} text-sm md:text-base`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    rounded-full px-7 py-3.5 text-sm font-semibold
                    transition-colors duration-200 hover:opacity-95
                    ${ctaBtn}
                    shadow-[0_12px_30px_rgba(0,0,0,0.20)]
                    focus:outline-none focus-visible:ring-2 ${ctaFocus}
                    group
                  `}
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className={`text-xs ${isDark ? "text-white/40" : "text-slate-500"} mt-4`}>
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
