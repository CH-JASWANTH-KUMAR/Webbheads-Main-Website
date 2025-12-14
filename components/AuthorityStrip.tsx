"use client";

/**
 * ==========================================================================
 * AUTHORITY STRIP - Trusted By Section
 * ==========================================================================
 * Infinite horizontal marquee showcasing partner/client logos.
 * Uses duplicated logo array for seamless infinite scrolling.
 * 
 * Animation: CSS translate from 0% to -50% with Framer Motion
 * Note: Replace placeholder logos with actual client logos when available.
 * ==========================================================================
 */

import { Building2, Home, Key, Landmark, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

// Logo data - duplicated for infinite loop effect
const logos = [
  { name: 'EstatePro', Icon: Building2 },
  { name: 'HomeGuard', Icon: ShieldCheck },
  { name: 'KeyStone', Icon: Key },
  { name: 'LandMark', Icon: Landmark },
  { name: 'DreamHome', Icon: Home },
  // Duplicate set for seamless infinite scroll
  { name: 'EstatePro', Icon: Building2 },
  { name: 'HomeGuard', Icon: ShieldCheck },
  { name: 'KeyStone', Icon: Key },
  { name: 'LandMark', Icon: Landmark },
  { name: 'DreamHome', Icon: Home },
];

export default function AuthorityStrip() {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-12 border-b overflow-hidden ${isDark ? 'bg-[#002428] border-[#003942]' : 'bg-white border-gray-100'}`}>
      <div className="container mx-auto px-6">
        <p className={`text-center text-xs font-bold uppercase tracking-[0.2em] mb-10 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Trusted by Industry Leaders</p>
        
        <div className="relative flex overflow-hidden mask-gradient">
          <motion.div 
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-3 group min-w-max">
                <logo.Icon className={`w-8 h-8 ${isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}`} strokeWidth={1.5} />
                <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'}`}>{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
