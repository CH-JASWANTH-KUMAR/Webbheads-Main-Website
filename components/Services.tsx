"use client";

/**
 * ==========================================================================
 * SERVICES SECTION - WebbHeads Offerings
 * ==========================================================================
 * Displays the 6 core services we offer to real estate clients:
 * 1. Website Development - Custom property websites
 * 2. App Development - Native mobile applications
 * 3. AI Automation - Chatbots and workflow automation
 * 4. Booking Systems - Scheduling for property viewings
 * 5. CRM & Dashboards - Lead and property management
 * 6. Virtual Staging - 3D tours and virtual staging
 * 
 * Features: Hover effects, gradient backgrounds, entrance animations
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { Code, Smartphone, Bot, Calendar, BarChart3, Box } from 'lucide-react';

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
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6"
          >
            Our Expertise in <span className="text-[#C9A227]">Real Estate Tech</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
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
              className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#C9A227]/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#1A1A1A]/5 rounded-xl flex items-center justify-center mb-8 text-[#1A1A1A] group-hover:bg-[#C9A227] group-hover:text-white transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
