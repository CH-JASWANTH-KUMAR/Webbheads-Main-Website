"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

  const prefersReducedMotion = useReducedMotion();

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

  const ease = [0.22, 1, 0.36, 1] as const;
  const tapT = { duration: 0.12, ease } as const;
  const tapScale = prefersReducedMotion ? 1 : 0.985;

  const navSurface = isDark ? "bg-[#16171B]/60" : "bg-white/55";
  const navSurfaceScrolled = isDark ? "bg-[#16171B]/72" : "bg-white/65";

  const navShadow = isScrolled
    ? "shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
    : "shadow-[0_10px_30px_rgba(0,0,0,0.12)]";

  const brandAccent = isDark ? "text-[#f6ff82]" : "text-[#003942]";

  const focusRing = isDark
    ? "focus-visible:ring-[#f6ff82]/60"
    : "focus-visible:ring-[#003942]/35";

  const linkBase =
    `px-4 py-2 text-sm font-medium rounded-full ` +
    `focus:outline-none focus-visible:ring-2 ${focusRing}`;

  const linkTheme = isDark ? "text-white/75" : "text-slate-700";
  const iconBtn = isDark ? "text-white" : "text-slate-900";

  const mobileOverlay = isDark ? "bg-black/60" : "bg-black/30";
  const mobilePanel = isDark ? "bg-[#16171B]/88" : "bg-white/85";
  const mobileLink = isDark
    ? "text-white/85 border-white/10"
    : "text-slate-800 border-black/10";

  const ctaBg = isDark ? "bg-[#2B2D31]" : "bg-[#003942]";
  const ctaText = "text-white";

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center pt-4 md:pt-5 px-4 md:px-6">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease }}
          className={`
            flex items-center justify-between
            px-5 md:px-8 py-3 md:py-3.5 rounded-full
            ${navSurface}
            ${isScrolled ? navSurfaceScrolled : ""}
            backdrop-blur-xl
            ${navShadow}
            border-none
            transition-[box-shadow,background-color] duration-500
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
            <span
              className={`text-lg md:text-2xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
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

          {/* Right side (Desktop) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="bg-transparent p-0 rounded-none">
              <ThemeToggle />
            </div>

            <motion.a
              href="https://cal.com/webb-heads"
              target="_blank"
              rel="noopener noreferrer"
              initial={false}
              whileTap={{ scale: tapScale }}
              transition={tapT}
              className={`
                px-5 py-2.5 text-sm font-semibold rounded-full
                ${ctaBg} ${ctaText}
                flex items-center gap-2
                focus:outline-none focus-visible:ring-2 ${focusRing}
              `}
              style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
            >
              Book a Call
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <div className="bg-transparent p-0 rounded-none">
              <ThemeToggle />
            </div>

            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.96 }}
              transition={tapT}
              className={`p-2 rounded-full ${iconBtn} focus:outline-none focus-visible:ring-2 ${focusRing}`}
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
            transition={{ duration: 0.18, ease }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className={`absolute inset-0 ${mobileOverlay}`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease }}
              className={`
                absolute top-24 left-4 right-4 rounded-3xl overflow-hidden
                ${mobilePanel} backdrop-blur-2xl
                border-none
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              `}
            >
              <div className="p-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`
                      block py-4 text-lg font-medium border-b last:border-0
                      ${mobileLink}
                      focus:outline-none focus-visible:ring-2 ${focusRing} rounded-md
                    `}
                  >
                    {link.name}
                  </a>
                ))}

                <motion.a
                  href="https://cal.com/webb-heads"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: tapScale }}
                  transition={tapT}
                  className={`
                    mt-6 w-full py-4 text-center font-semibold rounded-full
                    flex items-center justify-center
                    ${ctaBg} ${ctaText}
                    focus:outline-none focus-visible:ring-2 ${focusRing}
                  `}
                >
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
