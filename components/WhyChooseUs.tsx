"use client";

/**
 * ==========================================================================
 * WHY CHOOSE US SECTION - Value Propositions
 * ==========================================================================
 * Highlights 6 key reasons why clients should choose WebbHeads:
 * 1. Lightning Speed - Fast loading performance
 * 2. Unmatched Reliability - Secure infrastructure
 * 3. Premium UI/UX - Award-winning designs
 * 4. Automation Expertise - AI-powered solutions
 * 5. Real Estate DNA - Deep industry knowledge
 * 6. End-to-End Service - Complete project handling
 * 
 * Features: Gradient icon backgrounds, hover lift effects
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Palette, Bot, Building2, Layers } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";

// Key differentiators that set us apart from competitors
const features = [
  {
    icon: Zap,
    title: 'Lightning Speed',
    description: 'Optimized performance ensuring your digital platforms load instantly.'
  },
  {
    icon: ShieldCheck,
    title: 'Unmatched Reliability',
    description: 'Secure, scalable infrastructure you can trust with your business data.'
  },
  {
    icon: Palette,
    title: 'Premium UI/UX',
    description: 'Award-winning designs that reflect the luxury of your properties.'
  },
  {
    icon: Bot,
    title: 'Automation Expertise',
    description: 'Cutting-edge AI solutions to automate repetitive tasks and lead nurturing.'
  },
  {
    icon: Building2,
    title: 'Real Estate DNA',
    description: 'Deep industry knowledge baked into every solution we build.'
  },
  {
    icon: Layers,
    title: 'End-to-End Service',
    description: 'From concept to launch and beyond, we handle everything.'
  }
];

export default function WhyChooseUs() {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'} mb-6`}
          >
            Why Leading Agencies <span className={`${isDark ? 'text-white' : 'text-[#003942]'} underline decoration-[#f6ff82] decoration-4 underline-offset-4`}>Choose Us</span>
          </motion.h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto text-lg`}>
            We combine technical excellence with luxury aesthetics to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#f6ff82] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f6ff82]/30">
                <feature.icon className="text-[#003942]" size={24} />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'} mb-3 group-hover:underline group-hover:decoration-[#f6ff82] group-hover:decoration-4 group-hover:underline-offset-4 transition-all`}>{feature.title}</h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
