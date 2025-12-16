"use client";

/**
 * NAVBAR - Grey translucent + blurred (dark), white translucent + blurred (light), NO borders
 * - CTA button solid colors:
 *   - Dark: grey-ish (no yellow)
 *   - Light: solid #003942
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";

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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Motion config (smooth + consistent)
  const ease = [0.22, 1, 0.36, 1] as const;
  const hoverT = { duration: 0.28, ease } as const;
  const tapT = { duration: 0.12, ease } as const;

  const navSurface = isDark ? "bg-[#16171B]/60" : "bg-white/55";
  const navSurfaceScrolled = isDark ? "bg-[#16171B]/72" : "bg-white/65";

  const navShadow = isScrolled
    ? "shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
    : "shadow-[0_10px_30px_rgba(0,0,0,0.12)]";

  // Accent for "Heads" (dark = yellow, light = #003942)
  const brandAccent = isDark ? "text-[#f6ff82]" : "text-[#003942]";

  // Focus ring matches accent (Tailwind state variants) [web:388]
  const focusRing = isDark ? "focus-visible:ring-[#f6ff82]/60" : "focus-visible:ring-[#003942]/35";

  const linkBase =
    `px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ` +
    `focus:outline-none focus-visible:ring-2 ${focusRing}`;

  const linkTheme = isDark
    ? "text-white/75 hover:text-white hover:bg-white/10"
    : "text-slate-700 hover:text-slate-900 hover:bg-black/5";

  const iconBtn = isDark ? "text-white hover:bg-white/10" : "text-slate-900 hover:bg-black/5";

  // Mobile: translucent + blurred, no borders
  const mobileOverlay = isDark ? "bg-black/60" : "bg-black/30";
  const mobilePanel = isDark ? "bg-[#16171B]/88" : "bg-white/85";
  const mobileLink = isDark
    ? "text-white/85 hover:text-white border-white/10"
    : "text-slate-800 hover:text-slate-900 border-black/10";

  /**
   * CTA solid colors (updated):
   * - Dark: grey-ish (match UI), readable white text
   * - Light: solid #003942 with white text
   */
  const ctaBg = isDark ? "bg-white/10 hover:bg-white/15" : "bg-[#003942] hover:bg-[#003942]/90";
  const ctaText = "text-white";
  const ctaDot = isDark ? "bg-[#f6ff82]" : "bg-white"; // small premium accent dot stays nice

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-5 px-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease }}
          className={`
            flex items-center justify-between
            px-5 md:px-8 py-3.5 rounded-full
            ${navSurface}
            ${isScrolled ? navSurfaceScrolled : ""}
            backdrop-blur-xl
            ${navShadow}
            border-none
            transition-[box-shadow,transform,background-color] duration-500
            w-full max-w-4xl
          `}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center shrink-0"
          >
            <span className={`text-xl md:text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              Webb<span className={brandAccent}>Heads</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-1 lg:gap-2 mx-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`${linkBase} ${linkTheme}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />

            {/* Book a Call (solid bg) */}
            <motion.a
              href="https://cal.com/webb-heads"
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              whileHover={{
                y: -2,
                scale: 1.02,
                boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
              }}
              whileTap={{
                y: 0,
                scale: 0.98,
                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
              }}
              transition={hoverT}
              className={`
                px-5 py-2.5 text-sm font-semibold rounded-full
                ${ctaBg} ${ctaText}
                flex items-center gap-2
                focus:outline-none focus-visible:ring-2 ${focusRing}
                will-change-transform
              `}
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
            >
              <span className={`w-2 h-2 rounded-full ${ctaDot}`} />
              Book a Call
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              whileTap={{ scale: 0.96 }}
              transition={tapT}
              className={`p-2 rounded-full transition-colors ${iconBtn} focus:outline-none focus-visible:ring-2 ${focusRing}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className={`absolute inset-0 ${mobileOverlay}`} onClick={() => setIsMobileMenuOpen(false)} />

            {/* Panel */}
            <motion.div
              initial={{ y: -14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              className={`
                absolute top-24 left-4 right-4 rounded-3xl overflow-hidden
                ${mobilePanel} backdrop-blur-2xl
                border-none
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              `}
            >
              <div className="p-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.25, ease }}
                    className={`
                      block py-4 text-lg font-medium border-b last:border-0
                      transition-colors
                      ${mobileLink}
                      focus:outline-none focus-visible:ring-2 ${focusRing} rounded-md
                    `}
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Mobile Book a Call (solid bg) */}
                <motion.a
                  href="https://cal.com/webb-heads"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.25, ease }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    mt-6 w-full py-4 text-center font-semibold rounded-full
                    flex items-center justify-center gap-2
                    ${ctaBg} ${ctaText}
                    focus:outline-none focus-visible:ring-2 ${focusRing}
                  `}
                >
                  <span className={`w-2 h-2 rounded-full ${ctaDot}`} />
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
