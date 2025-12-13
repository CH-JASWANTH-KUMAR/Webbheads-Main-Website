"use client";

/**
 * ==========================================================================
 * EDUCATION SECTION - Why Tech Matters in Real Estate
 * ==========================================================================
 * Layout:
 * - Left: Text heading + YouTube video embed
 * - Right: Bullet points (Why Leading Agencies Choose Us)
 * - Bottom: Scrolling marquee effect
 * ==========================================================================
 */

import { motion } from "framer-motion";
import { Zap, Shield, Palette, Bot, Building2, Rocket } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

// Bullet points data
const bulletPoints = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Optimized performance ensuring your digital platforms load instantly.",
  },
  {
    icon: Shield,
    title: "Unmatched Reliability",
    description: "Secure, scalable infrastructure you can trust with your business data.",
  },
  {
    icon: Palette,
    title: "Premium UI/UX",
    description: "Award-winning designs that reflect the luxury of your properties.",
  },
  {
    icon: Bot,
    title: "Automation Expertise",
    description: "Cutting-edge AI solutions to automate repetitive tasks and lead nurturing.",
  },
  {
    icon: Building2,
    title: "Real Estate DNA",
    description: "Deep industry knowledge baked into every solution we build.",
  },
  {
    icon: Rocket,
    title: "End-to-End Service",
    description: "From concept to launch and beyond, we handle everything.",
  },
];

// Scrolling marquee items
const marqueeItems = [
  "Premium Websites",
  "AI Automation",
  "Lead Generation",
  "CRM Integration",
  "Property Listings",
  "Virtual Tours",
  "Analytics Dashboard",
  "SEO Optimization",
];

export default function Education() {
  const { isDark } = useTheme();
  
  return (
    <section className={`relative py-20 md:py-28 overflow-hidden ${isDark ? 'bg-gradient-to-b from-[#001a1f] to-[#002428]' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ===== MAIN CONTENT GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ===== LEFT SIDE - Video Section ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full shadow-lg shadow-[#f6ff82]/30">
              <span className="w-2 h-2 bg-[#003942] rounded-full" />
              <span className="text-sm font-medium text-[#003942]">Education</span>
            </div>

            {/* Heading */}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${isDark ? 'text-white' : 'text-[#003942]'}`}>
              How Technology is
              <span className={`underline decoration-[#f6ff82] decoration-4 underline-offset-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}> Transforming</span>
              <br />
              Real Estate
            </h2>

            {/* Subtext */}
            <p className={`text-lg max-w-lg ${isDark ? 'text-gray-400' : 'text-[#003942]/60'}`}>
              Discover why top agencies are embracing digital solutions and how you can stay ahead of the competition.
            </p>

            {/* YouTube Video Embed Placeholder */}
            <div className="relative mt-8">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#003942] shadow-2xl shadow-[#003942]/20">
                {/* Replace this iframe src with your actual YouTube video */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/fH0No8qr9D0?rel=0"
                  title="How Technology Helps Real Estate Grow"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#f6ff82]/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#f6ff82]/10 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE - Bullet Points ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Section Title */}
            <div className="mb-8">
              <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#003942]'}`}>
                Why Leading Agencies Choose Us
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-[#003942]/60'}>
                We combine technical excellence with luxury aesthetics to deliver results that matter.
              </p>
            </div>

            {/* Bullet Points Grid */}
            <div className="grid gap-5">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${isDark ? 'hover:bg-[#002a33]' : 'hover:bg-white'} hover:shadow-lg`}
                >
                  {/* Icon */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#f6ff82] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#f6ff82]/30">
                    <point.icon className="w-6 h-6 text-[#003942]" />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className={`font-semibold mb-1 group-hover:underline group-hover:decoration-[#f6ff82] group-hover:decoration-2 group-hover:underline-offset-4 transition-all ${isDark ? 'text-white' : 'text-[#003942]'}`}>
                      {point.title}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#003942]/60'}`}>
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== SCROLLING MARQUEE EFFECT ===== */}
      <div className="mt-20 overflow-hidden">
        <div className="relative">
          {/* Gradient fades */}
          <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 ${isDark ? 'bg-gradient-to-r from-[#002428] to-transparent' : 'bg-gradient-to-r from-gray-50 to-transparent'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 ${isDark ? 'bg-gradient-to-l from-[#002428] to-transparent' : 'bg-gradient-to-l from-gray-50 to-transparent'}`} />

          {/* Scrolling content */}
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1920] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the items for seamless loop */}
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <div
                key={index}
                className={`shrink-0 flex items-center gap-4 px-6 py-3 rounded-full border shadow-sm ${isDark ? 'bg-[#002a33] border-[#003942]/50' : 'bg-white border-[#003942]/10'}`}
              >
                <span className="w-2 h-2 bg-[#f6ff82] rounded-full" />
                <span className={`text-sm font-medium whitespace-nowrap ${isDark ? 'text-white' : 'text-[#003942]'}`}>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== BACKGROUND DECORATIONS ===== */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#f6ff82]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f6ff82]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
