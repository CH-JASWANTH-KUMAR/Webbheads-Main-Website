"use client";

/**
 * ==========================================================================
 * PRICING SECTION - 4 Card Layout
 * ==========================================================================
 * 4 Pricing tiers in card format:
 * 1. Must-Have - Essential services
 * 2. Premium - Full-stack solutions (highlighted)
 * 3. Need-Based - Scale-dependent services
 * 4. Nice-to-Have - Add-on services
 * 
 * All prices in INR (₹)
 * Color: Lime #f6ff82, Teal #003942, White #ffffff
 * ==========================================================================
 */

import { Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

// Pricing tiers with INR prices
const plans = [
  {
    name: 'Must-Have',
    price: '₹1.2L',
    priceNote: 'Starting from',
    description: 'Essential services every realtor needs',
    features: [
      'High-Conversion Website',
      'Property Listing CMS',
      'Lead Capture Forms',
      'WhatsApp Integration',
      'CRM Setup',
      'Speed Optimization'
    ],
    highlight: false
  },
  {
    name: 'Premium',
    price: '₹4L',
    priceNote: 'Starting from',
    description: 'Full-stack solutions for serious growth',
    features: [
      'Everything in Must-Have',
      'AI Follow-Up Chatbot',
      'Lead Automation System',
      'Analytics Dashboard',
      'Sales Pipeline Setup',
      'Team Training Included'
    ],
    highlight: true
  },
  {
    name: 'Need-Based',
    price: '₹50K',
    priceNote: 'Starting from',
    description: 'Scale-dependent services for growing teams',
    features: [
      'Listings Management',
      'Sales Team Automation',
      'Ad Landing Pages',
      'Builder Microsites',
      'Analytics Dashboard',
      'Lead Source Tracking'
    ],
    highlight: false
  },
  {
    name: 'Nice-to-Have',
    price: '₹15K',
    priceNote: 'Starting from',
    description: 'Add-on services to enhance your brand',
    features: [
      'UI/UX Redesign',
      'Brand Refresh',
      'Drone Video Editing',
      'Virtual Staging (AI)',
      'WhatsApp Catalogue',
      'Social Media Assets'
    ],
    highlight: false
  }
];

/**
 * CountUp Component - Animates price display
 */
const CountUp = ({ target }: { target: string }) => {
  const [display, setDisplay] = useState('₹0');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      // Simple animation to target
      const timer = setTimeout(() => {
        setDisplay(target);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
};

export default function Pricing() {
  const { isDark } = useTheme();
  
  return (
    <section className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[#003942] rounded-full" />
            <span className="text-sm font-medium text-[#003942]">Investment</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}
          >
            Transparent <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Honest pricing for every stage of growth. All prices in INR.
          </motion.p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? 'bg-[#003942] border-[#f6ff82] text-white shadow-2xl shadow-[#003942]/30 lg:scale-105' 
                  : isDark 
                    ? 'bg-[#002428] border-[#003942] text-white hover:shadow-xl hover:border-[#f6ff82]/50'
                    : 'bg-white border-gray-200 text-[#003942] hover:shadow-xl hover:border-[#003942]'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 bg-[#f6ff82] text-[#003942] text-xs font-bold uppercase tracking-wider rounded-full w-max">
                  Best Value
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : isDark ? 'text-white' : 'text-[#003942]'}`}>
                {plan.name}
              </h3>
              
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-gray-300' : isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
              </p>
              
              <div className="mb-6">
                <span className={`text-xs ${plan.highlight ? 'text-gray-400' : isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  {plan.priceNote}
                </span>
                <div className={`text-3xl font-bold ${plan.highlight ? 'text-[#f6ff82]' : isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-[#003942]'}`}>
                  <CountUp target={plan.price} />
                </div>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-[#f6ff82]' : isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}`} />
                    <span className={plan.highlight ? 'text-gray-300' : isDark ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#f6ff82] text-[#003942] hover:bg-[#e8f075]' 
                  : isDark 
                    ? 'bg-gradient-to-r from-[#f6ff82] to-[#d4e682] text-[#003942] hover:shadow-lg hover:shadow-[#f6ff82]/20'
                    : 'bg-[#003942] text-white hover:bg-[#004d59]'
              }`}>
                Get Started →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Need a custom package? <a href="#contact" className="text-[#003942] font-medium hover:underline">Contact us</a> for a tailored solution.
        </motion.p>
      </div>
    </section>
  );
}
