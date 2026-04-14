"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactUs() {
  const { isDark } = useTheme();
  const { tr } = useLanguage();

  const darkGradientTextClass =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]";
  const sectionBg = "bg-transparent";

  // Removed borders here (no "border", no "*border-*")
  const shell = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_12px_34px_rgba(0,0,0,0.55)]"
    : "bg-white border border-[#e2ece6] shadow-[0_18px_48px_rgba(26,60,52,0.12)]";

  const leftText = isDark ? "text-white/80" : "text-[#0f1f1b]";
  const leftSub = isDark ? "text-white/75" : "text-[#3d5c54]";

  // Removed border
  const formCard = isDark
    ? "bg-black/25 border border-white/10"
    : "bg-white border border-[#e2ece6]";

  const label = isDark ? "text-white/70" : "text-[#7a9e95]";

  // Inputs: borderless + theme-matched focus ring
  const inputBase = isDark
    ? "bg-black/30 text-white placeholder:text-white/35 border-none focus:outline-none focus:ring-1 focus:ring-[#f6ff82]"
    : "bg-[#f1f5f2] text-[#0f1f1b] placeholder:text-[#7a9e95] border border-[#e2ece6] focus:outline-none focus:ring-0 focus:border-[#1a3c34]";

  // Pill CTA style
  const ctaBtn = isDark
    ? "bg-white/10 text-white hover:bg-white/15"
    : "bg-[#1a3c34] text-white hover:bg-[#f6ff82] hover:text-[#1a3c34]";

  const ctaFocus = isDark
    ? "focus-visible:ring-[#f6ff82]/60"
    : "focus-visible:ring-[#003942]/35";

  return (
    <section id="contact" className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Main container */}
        <div className={`${isDark ? "rounded-3xl md:rounded-[2.25rem]" : "rounded-[16px]"} overflow-hidden ${shell}`}>
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
                  inline-flex items-center gap-2 mb-6 md:mb-8
                  ${isDark ? "px-4 py-2 rounded-full text-xs md:text-sm font-medium bg-white/5 text-white/75" : "px-[14px] py-[4px] rounded-full text-[13px] font-medium bg-[#f6ff82] text-[#1a3c34]"}
                `}
              >
                  <span className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#1a3c34]"}`} />
                  <span>{tr("Contact", "సంప్రదించండి")}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight ${isDark ? "text-white" : "text-[#0f1f1b]"}`}
              >
                {tr("Ready to", "మీ డిజిటల్ ప్రెజెన్స్‌ను")}{" "}
                <span className={isDark ? darkGradientTextClass : "text-[#1a3c34]"}>{tr("transform", "మార్చేందుకు")}</span>{" "}
                {tr("your digital presence?", "సిద్ధమేనా?")}
              </motion.h2>

              <p className={`text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-md ${leftSub}`}>
                {tr(
                  "Let's discuss how we can elevate your real estate brand with premium digital solutions.",
                  "ప్రిమియం డిజిటల్ పరిష్కారాలతో మీ రియల్ ఎస్టేట్ బ్రాండ్‌ను ఎలా ముందుకు తీసుకెళ్లాలో మాట్లాడుకుందాం."
                )}
              </p>

              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4
                    className={`font-medium mb-2 uppercase tracking-wider ${
                      isDark ? "text-xs md:text-sm text-white/60" : "text-[#7a9e95] text-[11px] tracking-[0.08em]"
                    }`}
                  >
                    {tr("Email", "ఇమెయిల్")}
                  </h4>
                  {/* Fixed link syntax */}
                  <a
                    href="mailto:webbheadsmarketing@gmail.com"
                    className={`text-lg md:text-2xl font-semibold hover:opacity-90 transition break-all md:break-normal ${
                      isDark ? "text-white" : "text-[#0f1f1b]"
                    }`}
                  >
                    <span className="block">sales@webbheads.com</span>
                    <span className="block">contact@webbheads.com</span>
                  </a>
                </div>

                <div>
                  <h4
                    className={`font-medium mb-2 uppercase tracking-wider ${
                      isDark ? "text-xs md:text-sm text-white/60" : "text-[#7a9e95] text-[11px] tracking-[0.08em]"
                    }`}
                  >
                    {tr("Phone", "ఫోన్")}
                  </h4>
                  <p className={`text-lg md:text-2xl font-semibold ${isDark ? "text-white" : "text-[#0f1f1b]"}`}>
                    9494259453
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
              className={`${isDark ? "rounded-2xl md:rounded-3xl" : "rounded-[14px]"} p-6 md:p-10 backdrop-blur ${formCard}`}
            >
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>{tr("Name", "పేరు")}</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase} text-sm md:text-base`}
                    placeholder={tr("Your name", "మీ పేరు")}
                  />
                </div>

                <div>
                  <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>{tr("Email", "ఇమెయిల్")}</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase} text-sm md:text-base`}
                    placeholder={tr("your@email.com", "మీ@email.com")}
                  />
                </div>

                <div>
                  <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>{tr("Contact Number", "సంప్రదింపు నంబర్")}</label>
                  <input
                    type="tel"
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${inputBase} text-sm md:text-base`}
                    placeholder={tr("Phone number", "ఫోన్ నంబర్")}
                  />
                </div>

                <div>
                  <label className={`block text-xs md:text-sm font-medium mb-2 ${label}`}>{tr("Message", "సందేశం")}</label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all resize-none ${inputBase} text-sm md:text-base`}
                    placeholder={tr("Tell us about your project...", "మీ ప్రాజెక్ట్ గురించి చెప్పండి...")}
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    ${isDark ? "rounded-full font-semibold" : "rounded-lg font-medium"} px-7 py-3.5 text-sm
                    ${isDark ? "transition-colors duration-200 hover:opacity-95" : "transition-all duration-150 ease-in-out"}
                    ${ctaBtn}
                    shadow-[0_12px_30px_rgba(0,0,0,0.20)]
                    focus:outline-none focus-visible:ring-2 ${ctaFocus}
                    group
                  `}
                >
                  {tr("Send Message", "సందేశం పంపండి")}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className={`text-xs mt-4 ${isDark ? "text-white/40" : "text-[#7a9e95]"}`}>
                  {tr(
                    "By submitting this form, you agree to be contacted about your inquiry.",
                    "ఈ ఫారమ్ సమర్పించడం ద్వారా మీ అభ్యర్థనకు సంబంధించి మిమ్మల్ని సంప్రదించడానికి మీరు అంగీకరిస్తున్నారు."
                  )}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
