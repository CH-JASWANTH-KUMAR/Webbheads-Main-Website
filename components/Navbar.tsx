"use client";

/**
 * ==========================================================================
 * NAVBAR COMPONENT - Premium Translucent Glass Navigation
 * ==========================================================================
 * - Light translucent glass effect navbar
 * - Centered floating pill design
 * - Logo on left, nav links in center, theme toggle + Book a Call on right
 * - Mobile hamburger menu
 * ==========================================================================
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

// Navigation links
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ===== FLOATING GLASS NAVBAR - Centered ===== */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-5 px-6">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`
            flex items-center justify-between
            px-5 md:px-8 py-3.5
            ${isDark 
              ? 'bg-[#002a33]/70 border-[#003942]/40' 
              : 'bg-white/50 border-white/40'
            }
            backdrop-blur-xl
            rounded-full
            border
            shadow-[0_8px_32px_rgba(0,0,0,0.08)]
            transition-all duration-500
            w-full max-w-4xl
            ${isScrolled 
              ? isDark 
                ? "bg-[#002a33]/85 shadow-[0_8px_40px_rgba(0,0,0,0.25)]" 
                : "bg-white/70 shadow-[0_8px_40px_rgba(0,0,0,0.12)]" 
              : ""
            }
          `}
        >
          {/* ===== LOGO ===== */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center shrink-0"
          >
            <span className={`text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'}`}>
              Webb<span className={isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}>Heads</span>
            </span>
          </a>

          {/* ===== DESKTOP NAVIGATION LINKS ===== */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-1 lg:gap-2 mx-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isDark 
                    ? 'text-white/70 hover:text-white hover:bg-white/10' 
                    : 'text-[#003942]/70 hover:text-[#003942] hover:bg-[#003942]/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ===== RIGHT SIDE: Theme Toggle + Book a Call ===== */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <a
              href="https://cal.com/webb-heads"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 ${
                isDark 
                  ? 'bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e066] text-[#003942] hover:shadow-xl hover:shadow-[#f6ff82]/30' 
                  : 'bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e066] text-[#003942] hover:shadow-xl hover:shadow-[#f6ff82]/30'
              }`}
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-[#003942]' : 'bg-[#003942]'}`} />
              Book a Call
            </a>
          </div>

          {/* ===== MOBILE: Theme Toggle + Menu Button ===== */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                isDark 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-[#003942] hover:bg-[#003942]/5'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ===== MOBILE MENU OVERLAY ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className={`absolute inset-0 backdrop-blur-sm ${isDark ? 'bg-black/40' : 'bg-black/20'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content - Glass effect */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`absolute top-24 left-4 right-4 backdrop-blur-2xl rounded-3xl border shadow-[0_16px_48px_rgba(0,0,0,0.12)] overflow-hidden ${
                isDark 
                  ? 'bg-[#002a33]/95 border-[#003942]/50' 
                  : 'bg-white/90 border-white/50'
              }`}
            >
              {/* Mobile Nav Links */}
              <div className="p-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block py-4 text-lg font-medium border-b last:border-0 transition-colors ${
                      isDark 
                        ? 'text-white/80 hover:text-white border-white/10' 
                        : 'text-[#003942]/80 hover:text-[#003942] border-[#003942]/10'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Mobile Book a Call Button - Only ONE */}
                <motion.a
                  href="https://cal.com/webb-heads"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-6 w-full py-4 text-center font-semibold rounded-full flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e066] text-[#003942] hover:shadow-xl hover:shadow-[#f6ff82]/30"
                >
                  <span className="w-2 h-2 rounded-full animate-pulse bg-[#003942]" />
                  Book a Call
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
