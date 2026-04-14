"use client";

import { Facebook, Instagram, Linkedin, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { isDark } = useTheme();
  const { tr } = useLanguage();

  const sectionBg = "bg-transparent";
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
              {tr(
                "Crafting premium digital experiences for the modern real estate industry. We blend luxury design with cutting-edge technology.",
                "ఆధునిక రియల్ ఎస్టేట్ రంగానికి ప్రిమియం డిజిటల్ అనుభవాలను రూపొందిస్తున్నాం. లగ్జరీ డిజైన్‌ను ఆధునిక టెక్నాలజీతో కలుపుతున్నాం."
              )}
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
              {tr("Quick Links", "త్వరిత లింకులు")}
            </h4>
            <ul className={`space-y-3 md:space-y-4 ${body} text-sm md:text-base`}>
              <li>
                <a
                  href="#services"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  {tr("Services", "సేవలు")}
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  {tr("Portfolio", "పోర్ట్‌ఫోలియో")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  {tr("About Us", "మా గురించి")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`transition-colors hover:underline underline-offset-4 ${
                    isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
                  }`}
                >
                  {tr("Contact", "సంప్రదించండి")}
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
              {tr("Connect", "కనెక్ట్ అవ్వండి")}
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
                {tr("Built for premium real estate brands", "ప్రీమియం రియల్ ఎస్టేట్ బ్రాండ్ల కోసం రూపొందించబడింది")}
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
            ${isDark ? "border-white/10" : "border-[#e8f0ec]"}
            ${muted}
          `}
        >
          <p className="mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} WebbHeads. {tr("All rights reserved.", "అన్ని హక్కులు రిజర్వ్.")}
          </p>

          <div className="flex gap-6 md:gap-8">
            <a
              href="#"
              className={`transition-colors hover:underline ${
                isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
              }`}
            >
              {tr("Privacy Policy", "గోప్యతా విధానం")}
            </a>
            <a
              href="#"
              className={`transition-colors hover:underline ${
                isDark ? "hover:text-white" : "hover:text-[#1a3c34]"
              }`}
            >
              {tr("Terms of Service", "సేవా నిబంధనలు")}
            </a>
          </div>
        </motion.div>

        <div
          className="relative mt-10 text-center select-none pointer-events-none"
          style={{ fontSize: "clamp(64px, 12vw, 160px)" }}
          aria-hidden="true"
        >
          <div className="relative inline-block w-fit mx-auto font-extrabold leading-none tracking-[-0.02em]">
            <span
              className="block whitespace-pre"
              style={{
                color: "transparent",
                WebkitTextStroke: isDark
                  ? "2px rgba(255,255,255,0.08)"
                  : "2px rgba(26,60,52,0.15)",
              }}
            >
              WebbHeads
            </span>

            <span className="absolute inset-0 flex items-center justify-center">
              {"WebbHeads".split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="inline-block whitespace-pre watermark-letter-reveal watermark-force-anim"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: isDark
                      ? "2px rgba(255,255,255,0.2)"
                      : "2px rgba(26,60,52,0.28)",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>

            <span
              className="absolute inset-0 block whitespace-pre watermark-fill-loop watermark-force-anim"
              style={{
                color: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,60,52,0.10)",
              }}
            >
              WebbHeads
            </span>

            <span
              className="absolute inset-0 block whitespace-pre watermark-sweep-single watermark-force-anim"
              style={{
                backgroundImage:
                  "linear-gradient(105deg, transparent 36%, rgba(246,255,130,0.95) 50%, transparent 64%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 12px #f6ff82)",
              }}
            >
              WebbHeads
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
