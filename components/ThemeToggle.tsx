"use client";

/**
 * ==========================================================================
 * THEME TOGGLE BUTTON - Dark/Light Mode Switch
 * ==========================================================================
 * Animated toggle button with sun/moon icons
 * Premium glass effect with smooth transitions
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-10 h-10 rounded-full
        flex items-center justify-center
        transition-all duration-300
        ${isDark 
          ? 'bg-[#f6ff82]/20 hover:bg-[#f6ff82]/30 text-[#f6ff82]' 
          : 'bg-[#003942]/5 hover:bg-[#003942]/10 text-[#003942]'
        }
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0
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
          scale: isDark ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
    </motion.button>
  );
}
