"use client";

/**
 * ==========================================================================
 * PRICING SECTION - Service Packages
 * ==========================================================================
 * Displays 4 pricing tiers with animated count-up for prices:
 * 1. Must Have ($2,999) - Basic website package
 * 2. Need Based ($4,999) - CMS and advanced SEO
 * 3. Nice to Have ($7,999) - Property search and virtual tours
 * 4. Premium ($12,999) - Full suite with AI and mobile app
 * 
 * Features:
 * - CountUp animation when cards come into view
 * - Highlighted "Premium" card with gold accent
 * - Feature checkmarks for each tier
 * ==========================================================================
 */

import { Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Pricing tiers - adjust prices and features as needed
const plans = [
  {
    name: 'Must Have',
    price: 2999,
    features: ['Custom Website', 'Mobile Responsive', 'Basic SEO', 'Contact Form'],
    highlight: false
  },
  {
    name: 'Need Based',
    price: 4999,
    features: ['Everything in Must Have', 'CMS Integration', 'Advanced SEO', 'Blog Section'],
    highlight: false
  },
  {
    name: 'Nice to Have',
    price: 7999,
    features: ['Everything in Need Based', 'Property Search', 'Virtual Tours', 'CRM Integration'],
    highlight: false
  },
  {
    name: 'Premium',
    price: 12999,
    features: ['Everything in Nice to Have', 'AI Chatbot', 'Custom Mobile App', 'Priority Support'],
    highlight: true
  }
];

/**
 * CountUp Component
 * Animates a number counting up from 0 to the target value.
 * Triggers when the element comes into view.
 */
const CountUp = ({ end, duration = 2 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>${count.toLocaleString()}</span>;
};

export default function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Investment</h2>
          <p className="text-gray-600 text-lg">Transparent pricing for every stage of growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? 'bg-[#1A1A1A] border-[#C9A227] text-white shadow-2xl shadow-[#1A1A1A]/30 scale-105' 
                  : 'bg-white border-gray-200 text-[#1A1A1A] hover:shadow-xl hover:border-[#C9A227]'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 bg-[#C9A227] text-white text-xs font-bold uppercase tracking-wider rounded-full w-max">
                  Best Value
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#1A1A1A]'}`}>{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-[#C9A227]' : 'text-[#1A1A1A]'}`}>
                  <CountUp end={plan.price} />
                </span>
                <span className={`text-sm ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>/project</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={`mt-0.5 ${plan.highlight ? 'text-[#C9A227]' : 'text-[#1A1A1A]'}`} />
                    <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#C9A227] text-white hover:bg-[#D4B03B] shadow-lg shadow-[#C9A227]/30' 
                  : 'bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] hover:shadow-lg'
              }`}>
                Get Started →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
