"use client";

/**
 * ==========================================================================
 * SERVICES SECTION - WebbHeads Offerings
 * ==========================================================================
 * Displays the 6 core services we offer to real estate clients
 * Features: Hover effects, gradient backgrounds, entrance animations
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { Code, Smartphone, Bot, Calendar, BarChart3, Box } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

// Service offerings data - each has an icon, title, and description
const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Bespoke, high-performance websites tailored for luxury property listings and agencies.'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native mobile applications that connect agents with buyers seamlessly.'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent chatbots and workflow automation to streamline your operations.'
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description: 'Custom scheduling solutions for property viewings and open houses.'
  },
  {
    icon: BarChart3,
    title: 'CRM & Dashboards',
    description: 'Centralized platforms to manage leads, properties, and performance analytics.'
  },
  {
    icon: Box,
    title: 'Virtual Staging',
    description: 'Immersive 3D tours and virtual staging to showcase properties remotely.'
  }
];

export default function Services() {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#003942]'}`}
          >
            Our Expertise in <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>Real Estate Tech</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Comprehensive digital solutions designed to elevate your real estate business.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 group ${
                isDark 
                  ? 'bg-[#002428] border-[#003942]/50 hover:border-[#f6ff82]/30' 
                  : 'bg-white border-gray-100 hover:border-[#f6ff82]/30'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300 ${
                isDark 
                  ? 'bg-[#f6ff82]/10 text-[#f6ff82] group-hover:bg-[#f6ff82] group-hover:text-[#003942]' 
                  : 'bg-[#003942]/5 text-[#003942] group-hover:bg-[#003942] group-hover:text-[#f6ff82]'
              }`}>
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}>{service.title}</h3>
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
