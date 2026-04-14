"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function LanguageToggle() {
  const { language, toggleLanguage, tr } = useLanguage();
  const { isDark } = useTheme();

  const isTelugu = language === "te";
  const iconColor = isDark ? "text-white" : "text-slate-900";
  const btnSurface = isDark
    ? "bg-white/10 hover:bg-white/15 border-white/20"
    : "bg-[#003942]/8 hover:bg-[#003942]/12 border-[#003942]/20";

  const focusRing = isDark ? "focus-visible:ring-[#f6ff82]/60" : "focus-visible:ring-[#003942]/35";

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative h-10 px-3 rounded-full border
        inline-flex items-center justify-center gap-2
        transition-colors duration-200
        ${btnSurface} ${iconColor}
        focus:outline-none focus-visible:ring-2 ${focusRing}
      `}
      aria-label={tr("Switch to Telugu", "ఇంగ్లీష్ కి మార్చండి")}
      title={tr("Switch to Telugu", "ఇంగ్లీష్ కి మార్చండి")}
    >
      <span className="text-xs font-semibold tracking-wide">
        {isTelugu ? "తెలుగు" : "EN"}
      </span>
    </motion.button>
  );
}
