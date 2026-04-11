"use client";

import { Facebook, Instagram, Linkedin, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "bg-transparent" : "bg-[#f9faf9] border-t border-[#e2ece6]";
  const heading = isDark ? "text-white" : "text-[#0f1f1b]";
  const body = isDark ? "text-white/65" : "text-[#3d5c54]";
  const muted = isDark ? "text-white/45" : "text-[#7a9e95]";

  // Accent color (theme-specific)
  const accentText = isDark ? "text-[#f6ff82]" : "text-[#1a3c34]";
  const accentDot = isDark ? "bg-[#f6ff82]" : "bg-[#f6ff82]";

  return (
    <footer className={`py-12 md:py-16 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* 
           Grid Layout:
           - Mobile: 1 column
           - Tablet: 2 columns
           - Desktop: 4 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Column (Spans 2 on desktop, 1 on others) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="col-span-1 lg:col-span-2"
          >
            <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${heading}`}>
              Webb<span className={accentText}>Heads</span>
            </h3>
            <p className={`${body} text-sm md:text-base max-w-sm leading-relaxed`}>
              Crafting premium digital experiences for the modern real estate
              industry. We blend luxury design with cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5, ease: "easeOut" }}
          >
            <h4
              className={`text-lg mb-4 md:mb-6 ${
                isDark ? "font-bold text-white" : "font-medium text-[#0f1f1b]"
              }`}
            >
              Quick Links
            </h4>
            <ul className={`space-y-3 md:space-y-4 ${body} text-sm md:text-base`}>
              <li>
                <a
                  href="#services"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect / Social */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.5, ease: "easeOut" }}
          >
            <h4
              className={`text-lg mb-4 md:mb-6 ${
                isDark ? "font-bold text-white" : "font-medium text-[#0f1f1b]"
              }`}
            >
              Connect
            </h4>

            <div className="flex gap-3 mb-6">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: XIcon, label: "X", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`
                    group
                    w-10 h-10 flex items-center justify-center
                    ${
                      isDark
                        ? "bg-white/5 hover:bg-white/10 rounded-full"
                        : "bg-white border border-[#e2ece6] rounded-[8px] hover:bg-[#1a3c34]"
                    }
                    transition-all ${isDark ? "duration-300" : "duration-150 ease-in-out"}
                  `}
                >
                  <Icon
                    size={18}
                    className={`
                      transition-colors ${isDark ? "duration-300" : "duration-150 ease-in-out"}
                      ${isDark ? "text-white/70" : "text-[#1a3c34]"}
                      ${
                        isDark
                          ? "group-hover:text-[#f6ff82]"
                          : "group-hover:text-[#f6ff82]"
                      }
                    `}
                  />
                </a>
              ))}
            </div>

            {/* Premium Chip */}
            <div
              className={`
                inline-flex items-center gap-2 px-4 py-2 rounded-full 
                ${isDark ? "bg-white/5" : "bg-[#f6ff82]"}
              `}
            >
              <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${accentDot}`} />
              <span
                className={`text-xs md:text-sm font-medium leading-none ${
                  isDark ? "text-white/70" : "text-[#1a3c34]"
                }`}
              >
                Built for premium real estate brands
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.4, ease: "easeOut" }}
          className={`
            border-t pt-8 flex flex-col md:flex-row justify-between items-center ${
              isDark ? "text-xs md:text-sm" : "text-[13px]"
            }
            ${isDark ? "border-white/10" : "border-[#e2ece6] bg-[#f1f5f2]"}
            ${muted}
          `}
        >
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} WebbHeads. All rights reserved.
          </p>

          <div className="flex gap-6 md:gap-8">
            <a
              href="#"
              className={`transition-colors hover:underline ${
                isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
              }`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`transition-colors hover:underline ${
                isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
              }`}
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
