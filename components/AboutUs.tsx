"use client";

/**
 * ==========================================================================
 * ABOUT US SECTION - WebbHeads Agency Introduction
 * ==========================================================================
 * Introduces WebbHeads as a digital agency specializing in real estate.
 * Features:
 * - Company description and value propositions
 * - Team/office image with floating stats card
 * 
 * Brand: WebbHeads - "Crafting Ideas into Empires"
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

// Key value propositions we offer to real estate clients
const VALUE_PROPOSITIONS = [
  "Specialized in High-End Property Markets",
  "Data-Driven Design & Development",
  "AI-Powered Automation & Workflows"
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* ===== LEFT COLUMN: Text Content ===== */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            {/* Section Badge */}
            <div className="inline-block px-4 py-1.5 mb-6 border border-[#C9A227]/20 rounded-full bg-[#C9A227]/5">
              <span className="text-sm font-medium text-[#C9A227] tracking-wide uppercase">
                About WebbHeads
              </span>
            </div>
            
            {/* Section Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 leading-tight">
              Crafting Ideas into <br />
              <span className="text-[#C9A227]">Digital Empires</span> for Real Estate.
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At WebbHeads, we help real estate businesses establish an emotional connection between their properties and engaged buyers. We blend creativity, technology, and AI innovation to craft digital solutions that drive real impact.
            </p>
            
            {/* Value Propositions List */}
            <div className="space-y-4 mb-10">
              {VALUE_PROPOSITIONS.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#C9A227] flex-shrink-0" size={24} />
                  <span className="text-[#1A1A1A] font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a 
              href="https://www.webbheads.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#2A2A2A] transition-colors shadow-lg shadow-[#1A1A1A]/10"
            >
              Visit WebbHeads.com
            </a>
          </motion.div>

          {/* ===== RIGHT COLUMN: Image ===== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A]/30 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="WebbHeads Team Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block z-20"
            >
              <p className="text-4xl font-bold text-[#C9A227] mb-1">40+</p>
              <p className="text-[#1A1A1A] font-medium text-sm">Happy clients across <br />real estate & tech.</p>
            </motion.div>

            {/* Second Floating Card - Top Right */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -top-4 -right-4 bg-[#1A1A1A] text-white p-4 rounded-xl shadow-xl hidden md:block z-20"
            >
              <p className="text-2xl font-bold text-[#C9A227]">250%</p>
              <p className="text-xs text-gray-300">Avg. Growth</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
