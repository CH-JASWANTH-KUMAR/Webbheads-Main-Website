"use client";

/**
 * ==========================================================================
 * HERO SECTION - WebbHeads Real Estate Landing Page
 * ==========================================================================
 * This is the main hero section featuring:
 * - Left side: Headline, subheadline, and CTA buttons
 * - Right side: Animated 3D growth visualization (houses on coins with arrow)
 * 
 * Design: Luxury light/dark theme with lime (#f6ff82) and teal (#003942)
 * Animation: Floating houses with growth arrow, similar to real estate investment growth
 * ==========================================================================
 */

import { motion } from "framer-motion";
import { TrendingUp, Building2, DollarSign } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { isDark } = useTheme();
  
  return (
    <section id="hero" className={`relative min-h-screen w-full overflow-hidden flex items-center pt-20 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      
      {/* ===== BACKGROUND DECORATIONS ===== */}
      <div className={`absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none ${isDark ? 'bg-[#f6ff82]/10' : 'bg-[#f6ff82]/20'}`} />
      <div className={`absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-[#003942]/30' : 'bg-[#003942]/10'}`} />

      {/* ===== MAIN CONTENT GRID ===== */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* ===== LEFT COLUMN: Text Content ===== */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`inline-block px-4 py-1.5 mb-6 border rounded-full backdrop-blur-sm ${
              isDark 
                ? 'border-[#f6ff82]/30 bg-[#f6ff82]/10' 
                : 'border-[#003942]/10 bg-[#f6ff82]'
            }`}
          >
            <span className={`text-sm font-medium tracking-wide uppercase ${isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}`}>
              Elevating Real Estate
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight ${isDark ? 'text-white' : 'text-[#003942]'}`}>
            Premium Digital <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-[#f6ff82] to-[#d4e682]' : 'from-[#003942] to-[#005f73]'}`}>
              Solutions
            </span> for <br />
            Real Estate.
          </h1>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl mb-10 leading-relaxed max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            We craft high-end websites, custom apps, and intelligent automation systems specifically designed for property developers and luxury agencies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Explore Plans - Links to Pricing Section */}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-4 text-lg font-medium rounded-lg shadow-xl transition-all flex items-center gap-2 group ${
                isDark 
                  ? 'bg-[#f6ff82] text-[#003942] hover:bg-[#e6ef72] shadow-[#f6ff82]/20' 
                  : 'bg-[#003942] text-white hover:bg-[#004d59] shadow-[#003942]/20'
              }`}
            >
              Explore Plans
              <svg className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isDark ? 'text-[#003942]' : 'text-[#f6ff82]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            {/* Our Case Studies - Links to Portfolio Section */}
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-8 py-4 border-2 text-lg font-medium rounded-lg transition-all ${
                isDark 
                  ? 'bg-transparent border-[#f6ff82]/30 text-white hover:border-[#f6ff82] hover:bg-[#f6ff82]/10' 
                  : 'bg-white border-[#003942]/10 text-[#003942] hover:border-[#003942] hover:bg-[#f6ff82]/20'
              }`}
            >
              Our Case Studies
            </motion.a>
          </div>
        </motion.div>

        {/* ===== RIGHT COLUMN: 3D Real Estate Growth Visualization ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-[500px] md:h-[550px] w-full flex items-center justify-center"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* ===== ANIMATED GROWTH CHART WITH HOUSES ===== */}
            <div className="relative flex items-end justify-center gap-4 md:gap-6">
              
              {/* Growth Arrow - Animated */}
              <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute -top-8 left-0 right-0 z-20"
              >
                <svg viewBox="0 0 400 100" className="w-full h-24">
                  <defs>
                    <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#16A34A" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 30 80 Q 100 75, 150 60 Q 200 45, 250 35 Q 300 25, 350 15"
                    fill="none"
                    stroke="url(#arrowGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                  />
                  <motion.polygon
                    points="345,5 375,15 350,30"
                    fill="#16A34A"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.5, duration: 0.3 }}
                  />
                </svg>
              </motion.div>

              {/* Bar 1 - Smallest */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* House */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-2"
                >
                  <div className="w-12 h-10 md:w-14 md:h-12 relative">
                    {/* Roof */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[28px] md:border-l-[32px] border-r-[28px] md:border-r-[32px] border-b-[20px] md:border-b-[24px] border-l-transparent border-r-transparent border-b-[#EF4444]" />
                    {/* Body */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 md:w-12 h-6 md:h-7 bg-[#FEE2E2] border-2 border-[#EF4444] rounded-sm">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-[#7C3AED] rounded-t-sm" />
                    </div>
                  </div>
                </motion.div>
                {/* Coin Stack */}
                <div className="flex flex-col items-center">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="w-14 md:w-16 h-4 md:h-5 bg-gradient-to-b from-[#FCD34D] to-[#F59E0B] rounded-full border-2 border-[#D97706] -mt-1 first:mt-0 shadow-md"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bar 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="mb-2"
                >
                  <div className="w-14 h-12 md:w-16 md:h-14 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] md:border-l-[36px] border-r-[32px] md:border-r-[36px] border-b-[22px] md:border-b-[26px] border-l-transparent border-r-transparent border-b-[#3B82F6]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 md:w-14 h-7 md:h-8 bg-[#DBEAFE] border-2 border-[#3B82F6] rounded-sm">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-5 bg-[#7C3AED] rounded-t-sm" />
                    </div>
                  </div>
                </motion.div>
                <div className="flex flex-col items-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="w-14 md:w-16 h-4 md:h-5 bg-gradient-to-b from-[#FCD34D] to-[#F59E0B] rounded-full border-2 border-[#D97706] -mt-1 first:mt-0 shadow-md"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bar 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="mb-2"
                >
                  <div className="w-16 h-14 md:w-18 md:h-16 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[36px] md:border-l-[40px] border-r-[36px] md:border-r-[40px] border-b-[24px] md:border-b-[28px] border-l-transparent border-r-transparent border-b-[#10B981]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 md:w-16 h-8 md:h-9 bg-[#D1FAE5] border-2 border-[#10B981] rounded-sm">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-5 bg-[#7C3AED] rounded-t-sm" />
                    </div>
                  </div>
                </motion.div>
                <div className="flex flex-col items-center">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="w-14 md:w-16 h-4 md:h-5 bg-gradient-to-b from-[#FCD34D] to-[#F59E0B] rounded-full border-2 border-[#D97706] -mt-1 first:mt-0 shadow-md"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Bar 4 - Tallest */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="mb-2"
                >
                  <div className="w-18 h-16 md:w-20 md:h-18 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] md:border-l-[44px] border-r-[40px] md:border-r-[44px] border-b-[26px] md:border-b-[30px] border-l-transparent border-r-transparent border-b-[#f6ff82]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 md:w-18 h-9 md:h-10 bg-[#FEF3C7] border-2 border-[#f6ff82] rounded-sm">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-6 bg-[#003942] rounded-t-sm" />
                    </div>
                  </div>
                </motion.div>
                <div className="flex flex-col items-center">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + i * 0.08 }}
                      className="w-14 md:w-16 h-4 md:h-5 bg-gradient-to-b from-[#FCD34D] to-[#F59E0B] rounded-full border-2 border-[#D97706] -mt-1 first:mt-0 shadow-md"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ===== FLOATING INFO CARDS ===== */}
            
            {/* Growth Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="absolute bottom-4 left-0 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase">Avg. ROI Increase</p>
                  <p className="text-lg font-bold text-[#003942]">+340%</p>
                </div>
              </div>
            </motion.div>

            {/* Investment Card */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="absolute top-4 right-0 bg-[#003942] text-white p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <DollarSign className="w-5 h-5 text-[#f6ff82]" />
                <div>
                  <p className="text-xs text-gray-400">Properties Sold</p>
                  <p className="text-sm font-bold">$2B+ Value</p>
                </div>
              </div>
            </motion.div>
            
            {/* Animated Label */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.4 }}
              className="absolute bottom-4 right-0 bg-[#003942] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg flex items-center gap-1.5 border-2 border-[#f6ff82]"
            >
              <Building2 className="w-3.5 h-3.5 text-[#f6ff82]" />
              Real Estate Growth
            </motion.div>
          </div>
          
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f6ff82]/10 to-transparent blur-[60px] -z-10 rounded-full scale-75" />
        </motion.div>
      </div>
    </section>
  );
}
