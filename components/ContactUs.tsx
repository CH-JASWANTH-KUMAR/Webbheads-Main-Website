"use client";

/**
 * ==========================================================================
 * CONTACT US SECTION - Lead Capture Form
 * ==========================================================================
 * Dark card with:
 * - Left: Contact info (email, phone) and call-to-action headline
 * - Right: Form with name, email, and message fields
 * 
 * Email: webbheadsmarketing@gmail.com
 * Features: Gold accents, glassmorphism background effects
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ContactUs() {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-[#003942] rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f6ff82]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 md:p-20 relative z-10">
            
            {/* Left Content */}
            <div className="text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to <span className="text-[#f6ff82] underline decoration-white decoration-4 underline-offset-4">Transform</span> Your Digital Presence?
              </motion.h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
                Let's discuss how we can elevate your real estate brand with our premium digital solutions.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#f6ff82] font-medium mb-2 uppercase tracking-wider text-sm">Email Us</h4>
                  <p className="text-2xl font-bold">webbheadsmarketing@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-[#f6ff82] font-medium mb-2 uppercase tracking-wider text-sm">Call Us</h4>
                  <p className="text-2xl font-bold">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#f6ff82] focus:ring-1 focus:ring-[#f6ff82] outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#f6ff82] focus:ring-1 focus:ring-[#f6ff82] outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#f6ff82] focus:ring-1 focus:ring-[#f6ff82] outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#f6ff82] focus:ring-1 focus:ring-[#f6ff82] outline-none transition-all" placeholder="Tell us about your project..." />
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e066] text-[#003942] font-bold rounded-lg hover:shadow-lg hover:shadow-[#f6ff82]/30 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
