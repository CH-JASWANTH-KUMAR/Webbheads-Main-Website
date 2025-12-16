"use client";

/**
 * THEME TOGGLE BUTTON - icon only (no background)
 */

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  // Icon color only (no bg)
  const iconColor = isDark ? "text-white/75 hover:text-white" : "text-slate-900/80 hover:text-slate-900";

  // Optional: subtle focus ring for accessibility (still no bg) [web:388]
  const focusRing = isDark ? "focus-visible:ring-[#f6ff82]/60" : "focus-visible:ring-[#003942]/35";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-10 h-10 rounded-full
        flex items-center justify-center
        bg-transparent
        transition-colors duration-200
        ${iconColor}
        focus:outline-none focus-visible:ring-2 ${focusRing}
      `}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
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
    </motion.button>
  );
}
