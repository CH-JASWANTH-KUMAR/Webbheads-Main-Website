"use client";

/**
 * ==========================================================================
 * BEFORE & AFTER SECTION - Transformation Showcase
 * ==========================================================================
 * Shows the dramatic difference our agency makes:
 * - Side-by-side comparison cards
 * - Before: Pain points and struggles
 * - After: Results and improvements
 * - Visual slider/toggle effect
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, X, Check, TrendingUp, Clock, Users, Zap } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";

// Transformation data
const transformations = [
  {
    id: 1,
    category: 'Lead Generation',
    before: {
      title: 'Scattered Lead Sources',
      pain: 'Leads coming from 10+ sources, no tracking, 70% leads lost to slow follow-up',
      metrics: ['Manual data entry', '24hr+ response time', '15% conversion rate']
    },
    after: {
      title: 'Unified Lead Engine',
      result: 'All leads captured, scored, and auto-assigned with instant follow-up sequences',
      metrics: ['Auto-capture from all sources', '<5 min response time', '45% conversion rate']
    },
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 2,
    category: 'Website Performance',
    before: {
      title: 'Outdated Property Website',
      pain: 'Slow loading, no mobile optimization, generic templates that don\'t convert',
      metrics: ['8s+ page load', '70% bounce rate', '2% inquiry rate']
    },
    after: {
      title: 'High-Converting Platform',
      result: 'Lightning-fast, mobile-first design with integrated lead capture and virtual tours',
      metrics: ['<2s page load', '25% bounce rate', '12% inquiry rate']
    },
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 3,
    category: 'Sales Process',
    before: {
      title: 'Manual Sales Chaos',
      pain: 'Spreadsheets, sticky notes, missed follow-ups, no visibility into pipeline',
      metrics: ['No pipeline visibility', 'Forgotten follow-ups', '5+ hours/day on admin']
    },
    after: {
      title: 'Automated Sales Machine',
      result: 'CRM with automated workflows, reminders, and real-time analytics dashboard',
      metrics: ['Full pipeline visibility', 'Zero missed follow-ups', '1 hour/day on admin']
    },
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 4,
    category: 'Response Time',
    before: {
      title: 'Delayed Buyer Response',
      pain: 'Inquiries sitting in inbox for days, buyers moving to competitors',
      metrics: ['24-48hr response', 'Lost hot leads', 'No after-hours support']
    },
    after: {
      title: 'Instant AI Response',
      result: 'AI chatbot handles inquiries 24/7, qualifies leads, and books appointments',
      metrics: ['<1 min response', 'Every lead engaged', '24/7 availability']
    },
    icon: <Clock className="w-6 h-6" />
  }
];

export default function BeforeAfter() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { isDark } = useTheme();

  return (
    <section className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6"><span className="w-2 h-2 bg-[#003942] rounded-full" />
            <span className="text-sm font-medium text-[#003942]">The Transformation</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'} mb-4`}>
            Before & <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>After</span>
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
            See the dramatic difference our solutions make for real estate businesses
          </p>
        </motion.div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative"
            >
              <div className={`relative ${isDark ? 'bg-[#002428]' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border ${isDark ? 'border-[#003942]/50' : 'border-gray-100'}`}>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-[#003942] text-white text-xs font-medium rounded-full">
                  {item.icon}
                  {item.category}
                </div>

                {/* Before/After Toggle Indicator */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeCard === item.id 
                      ? 'bg-[#f6ff82] text-[#003942] shadow-lg' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {activeCard === item.id ? 'AFTER' : 'BEFORE'}
                  </span>
                </div>

                {/* Content Container */}
                <div className="pt-16 p-6 min-h-[280px] flex flex-col">
                  {/* Before State (Default) */}
                  <div className={`transition-all duration-500 ${
                    activeCard === item.id ? 'opacity-0 absolute' : 'opacity-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <X className="w-5 h-5 text-red-500" />
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'}`}>{item.before.title}</h3>
                    </div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{item.before.pain}</p>
                    <div className="space-y-2">
                      {item.before.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                          <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* After State (On Hover) */}
                  <div className={`transition-all duration-500 ${
                    activeCard === item.id ? 'opacity-100' : 'opacity-0 absolute'
                  }`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-full bg-[#f6ff82] flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#003942]" />
                      </div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'}`}>{item.after.title}</h3>
                    </div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>{item.after.result}</p>
                    <div className="space-y-2">
                      {item.after.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-[#f6ff82] rounded-full" />
                          <span className={`${isDark ? 'text-white' : 'text-[#003942]'} font-medium`}>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Instruction */}
                  <div className={`mt-auto pt-6 border-t ${isDark ? 'border-[#003942]/50' : 'border-gray-100'}`}>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      <span className={`transition-transform duration-300 ${activeCard === item.id ? 'rotate-180' : ''}`}>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                      {activeCard === item.id ? 'With WebbHeads' : 'Hover to see transformation'}
                    </p>
                  </div>
                </div>

                {/* Bottom Color Bar */}
                <div className={`h-1 transition-all duration-500 ${
                  activeCard === item.id ? 'bg-[#f6ff82]' : 'bg-red-400'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className={`inline-flex items-center gap-3 px-8 py-4 font-medium rounded-full transition-all duration-300 shadow-lg ${isDark ? 'bg-gradient-to-r from-[#f6ff82] to-[#d4e682] text-[#003942] hover:shadow-[#f6ff82]/30 hover:shadow-xl' : 'bg-gradient-to-r from-[#003942] to-[#005f73] text-white hover:shadow-[#003942]/30 hover:shadow-xl'}`}
          >
            <span>Get Your Transformation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
