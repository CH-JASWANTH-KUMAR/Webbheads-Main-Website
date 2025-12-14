"use client";

/**
 * ==========================================================================
 * ABOUT US SECTION - WebbHeads Agency (webbheads.com style)
 * ==========================================================================
 * Layout matching webbheads.com screenshot:
 * - Left side: Team photo in circular frame with decorative elements
 * - Right side: "More about us" content + Vision/Mission/Values
 * 
 * Colors: Lime #f6ff82, Teal #003942, White #ffffff
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function AboutUs() {
  const { isDark } = useTheme();
  
  return (
    <section id="about" className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-white'} overflow-hidden`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* ===== LEFT COLUMN: Team Photo ===== */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative flex items-center justify-center"
          >
            {/* Square Photo Frame */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Ring with Text */}
              <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full border-2 flex items-center justify-center z-20 ${isDark ? 'border-[#f6ff82] bg-[#001a1f]' : 'border-[#003942] bg-white'}`}>
                <div className="relative w-full h-full">
                  {/* Rotating Text Around Circle */}
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    </defs>
                    <text className={`text-[8px] uppercase tracking-widest ${isDark ? 'fill-[#f6ff82]' : 'fill-[#003942]'}`}>
                      <textPath href="#circlePath">
                        • LEADERS • DRIVEN BY INNOVATION •
                      </textPath>
                    </text>
                  </svg>
                  {/* Arrow Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUpRight className={`w-7 h-7 ${isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}`} />
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-[#f6ff82] rounded-2xl -z-10" />

              {/* Main Photo - Now Square with rounded corners */}
              <div className="relative rounded-2xl overflow-hidden aspect-square border-4 border-[#f6ff82] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="WebbHeads Team" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003942]/30 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* ===== RIGHT COLUMN: Content ===== */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            {/* About Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6">
              <span className="text-sm font-medium text-[#003942]">★ ABOUT</span>
            </div>

            {/* Main Heading */}
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-[#003942]'}`}>
              More <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>about us</span>
            </h2>
            
            {/* Description Paragraphs */}
            <p className={`text-lg mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              At WebbHeads, we build functional technologies that help businesses optimize time and deliver exceptional user experiences.
            </p>
            <p className={`mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              By blending creativity, technology, and AI innovation, we craft digital solutions that drive real impact — from smart automation to high-converting websites and user-friendly apps that help brands grow smarter and faster.
            </p>

            {/* About Sub-section */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left: About Text */}
              <div className="md:w-1/2">
                <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}>About</h3>
                <p className={`leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  At WebbHeads, our mission and vision guide everything we build — helping businesses embrace the future with smarter, faster, and more human-centered digital solutions.
                </p>
                <a 
                  href="https://djkushal.framer.website/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 border-2 font-medium rounded-full transition-all duration-300 ${isDark ? 'border-[#f6ff82] text-[#f6ff82] hover:bg-[#f6ff82] hover:text-[#003942]' : 'border-[#003942] text-[#003942] hover:bg-[#003942] hover:text-white'}`}
                >
                  More About Founder
                </a>
              </div>

              {/* Right: Vision, Mission, Values */}
              <div className="md:w-1/2 space-y-6">
                {/* Vision */}
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#003942] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-[#003942]'}`}>Vision</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Transforming Businesses Digitally.</p>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f6ff82] border-2 border-[#003942] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-[#003942]'}`}>Mission</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Helping brands build professional, high-performing digital identities through technology and automation.</p>
                  </div>
                </div>

                {/* Values */}
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f6ff82] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className={`font-bold mb-1 ${isDark ? 'text-white' : 'text-[#003942]'}`}>Values</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Creativity, innovation, and integrity guide our every move — ensuring each project is built with purpose, precision, and a passion for progress.</p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
