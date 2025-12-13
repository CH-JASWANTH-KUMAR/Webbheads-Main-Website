"use client";

/**
 * ==========================================================================
 * PROOF SECTION - Statistics & Social Proof
 * ==========================================================================
 * Dark section displaying key achievement metrics with count-up animation.
 * Stats animate when scrolled into view.
 * ==========================================================================
 */

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Building2, Globe, TrendingUp, Award } from 'lucide-react';

// Key metrics to showcase achievements
const stats = [
  { value: 2, suffix: 'B+', prefix: '$', label: 'Property Value Sold', icon: Building2 },
  { value: 150, suffix: '+', prefix: '', label: 'Luxury Websites Built', icon: Globe },
  { value: 300, suffix: '%', prefix: '', label: 'Avg. Lead Increase', icon: TrendingUp },
  { value: 50, suffix: '+', prefix: '', label: 'Awards Won', icon: Award },
];

/**
 * CountUp Component - Animates number from 0 to target
 */
const CountUp = ({ end, prefix = '', suffix = '', duration = 2 }: { 
  end: number; 
  prefix?: string; 
  suffix?: string; 
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

export default function Proof() {
  return (
    <section className="py-20 bg-[#003942] text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#f6ff82]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center group"
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 bg-[#f6ff82]/10 rounded-xl flex items-center justify-center group-hover:bg-[#f6ff82]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#f6ff82]" />
                </div>
                {/* Count */}
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f6ff82] mb-2">
                  <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                {/* Label */}
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs md:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
