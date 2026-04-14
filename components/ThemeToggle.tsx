"use client";

/**
 * THEME TOGGLE BUTTON - icon only (no background)
 */

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();
  const { tr } = useLanguage();

  const iconColor = isDark ? "text-white" : "text-slate-900";
  const labelColor = isDark ? "text-white/90" : "text-slate-800";
  const btnSurface = isDark
    ? "bg-white/10 hover:bg-white/15 border-white/20"
    : "bg-[#003942]/8 hover:bg-[#003942]/12 border-[#003942]/20";

  const focusRing = isDark ? "focus-visible:ring-[#f6ff82]/60" : "focus-visible:ring-[#003942]/35";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative h-10 px-3 rounded-full border
        inline-flex items-center justify-center gap-2
        transition-colors duration-200
        ${btnSurface} ${iconColor}
        focus:outline-none focus-visible:ring-2 ${focusRing}
      `}
      aria-label={
        isDark
          ? tr("Switch to light mode", "లైట్ మోడ్‌కి మార్చండి")
          : tr("Switch to dark mode", "డార్క్ మోడ్‌కి మార్చండి")
      }
      title={
        isDark
          ? tr("Switch to light mode", "లైట్ మోడ్‌కి మార్చండి")
          : tr("Switch to dark mode", "డార్క్ మోడ్‌కి మార్చండి")
      }
    >
      <span className="relative w-[18px] h-[18px] flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 180,
            scale: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Moon size={18} />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? -180 : 0,
            scale: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          <Sun size={18} />
        </motion.div>
      </span>

      <span className={`text-xs font-semibold tracking-wide ${labelColor}`}>
        {isDark ? tr("Dark", "డార్క్") : tr("Light", "లైట్")}
      </span>
    </motion.button>
  );
}
