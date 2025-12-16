"use client";

/**
 * FOOTER — updated accents:
 * - Light mode accent: #003942 (instead of #f6ff82)
 * - Dark mode accent stays: #f6ff82
 * - Social hover icon color:
 *   - Dark: yellow
 *   - Light: #003942
 * - Twitter replaced with X icon
 */

import { Facebook, Instagram, Linkedin, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  const sectionBg = "bg-transparent";
  const heading = isDark ? "text-white" : "text-slate-900";
  const body = isDark ? "text-white/65" : "text-slate-600";
  const muted = isDark ? "text-white/45" : "text-slate-500";

  // Accent color (theme-specific)
  const accentText = isDark ? "text-[#f6ff82]" : "text-[#003942]";
  const accentDot = isDark ? "bg-[#f6ff82]" : "bg-[#003942]";

  return (
    <footer className={`py-16 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-1 md:col-span-2"
          >
            <h3 className={`text-3xl font-bold mb-4 ${heading}`}>
              Webb<span className={accentText}>Heads</span>
            </h3>
            <p className={`${body} max-w-sm leading-relaxed`}>
              Crafting premium digital experiences for the modern real estate industry. We blend luxury design with
              cutting-edge technology.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
          >
            <h4 className={`text-lg font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>Quick Links</h4>
            <ul className={`space-y-4 ${body}`}>
              <li>
                <a href="#services" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
          >
            <h4 className={`text-lg font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>Connect</h4>

            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: XIcon, label: "X", href: "#" }, // Twitter -> X
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`
                    group
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-slate-100 hover:bg-slate-200/70"}
                    transition-all duration-300
                  `}
                >
                  <Icon
                    size={18}
                    className={`
                      transition-colors duration-300
                      ${isDark ? "text-white/70" : "text-slate-600"}
                      ${isDark ? "group-hover:text-[#f6ff82]" : "group-hover:text-[#003942]"}
                    `}
                  />
                </a>
              ))}
            </div>

            {/* Small accent chip */}
            <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? "bg-white/5" : "bg-slate-100"}`}>
              <span className={`w-2 h-2 rounded-full ${accentDot}`} />
              <span className={`text-sm font-medium ${isDark ? "text-white/70" : "text-slate-700"}`}>
                Built for premium real estate brands
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.4, ease: "easeOut" }}
          className={`pt-6 flex flex-col md:flex-row justify-between items-center text-sm ${muted}`}
        >
          <p>&copy; {new Date().getFullYear()} WebbHeads. All rights reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
              Privacy Policy
            </a>
            <a href="#" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
