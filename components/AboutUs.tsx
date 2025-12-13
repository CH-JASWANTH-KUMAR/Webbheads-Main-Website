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

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* ===== LEFT COLUMN: Team Photo ===== */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Circular Photo Frame */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Ring with Text */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#003942] flex items-center justify-center bg-white z-20">
                <div className="relative w-full h-full">
                  {/* Rotating Text Around Circle */}
                  <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    </defs>
                    <text className="text-[8px] fill-[#003942] uppercase tracking-widest">
                      <textPath href="#circlePath">
                        • LEADERS • DRIVEN BY INNOVATION •
                      </textPath>
                    </text>
                  </svg>
                  {/* Arrow Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-[#003942]" />
                  </div>
                </div>
              </div>

              {/* Main Photo */}
              <div className="relative rounded-full overflow-hidden aspect-square border-4 border-[#f6ff82] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800" 
                  alt="WebbHeads Team" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003942]/20 to-transparent" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#003942] mb-6 leading-tight">
              More about us
            </h2>
            
            {/* Description Paragraphs */}
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              At WebbHeads, we build functional technologies that help businesses optimize time and deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              By blending creativity, technology, and AI innovation, we craft digital solutions that drive real impact — from smart automation to high-converting websites and user-friendly apps that help brands grow smarter and faster.
            </p>

            {/* About Sub-section */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left: About Text */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-[#003942] mb-4">About</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At WebbHeads, our mission and vision guide everything we build — helping businesses embrace the future with smarter, faster, and more human-centered digital solutions.
                </p>
                <a 
                  href="https://djkushal.framer.website/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border-2 border-[#003942] text-[#003942] font-medium rounded-full hover:bg-[#003942] hover:text-white transition-all duration-300"
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
                    <h4 className="font-bold text-[#003942] mb-1">Vision</h4>
                    <p className="text-gray-600 text-sm">Transforming Businesses Digitally.</p>
                  </div>
                </div>

                {/* Mission */}
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f6ff82] border-2 border-[#003942] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#003942] mb-1">Mission</h4>
                    <p className="text-gray-600 text-sm">Helping brands build professional, high-performing digital identities through technology and automation.</p>
                  </div>
                </div>

                {/* Values */}
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#f6ff82] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#003942] mb-1">Values</h4>
                    <p className="text-gray-600 text-sm">Creativity, innovation, and integrity guide our every move — ensuring each project is built with purpose, precision, and a passion for progress.</p>
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
