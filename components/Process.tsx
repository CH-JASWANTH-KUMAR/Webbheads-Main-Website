"use client";

/**
 * ==========================================================================
 * PROCESS SECTION - Our Workflow
 * ==========================================================================
 * Displays the 6-step process we follow for client projects:
 * 1. Discovery - Understanding client vision
 * 2. Strategy - Planning the roadmap
 * 3. Design - Crafting visual identity
 * 4. Development - Building the solution
 * 5. Launch - Going live
 * 6. Growth - Scaling and optimization
 * 
 * Features:
 * - Scroll-triggered step highlighting
 * - Animated progress line on desktop
 * - Active state changes based on scroll position
 * ==========================================================================
 */

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { MessageSquare, Search, PenTool, Code2, Rocket, BarChart } from 'lucide-react';
import { useRef, useState } from 'react';

// Process steps data - icon, title, and short description
const steps = [
  { icon: MessageSquare, title: 'Discovery', desc: 'Understanding your vision' },
  { icon: Search, title: 'Strategy', desc: 'Planning the roadmap' },
  { icon: PenTool, title: 'Design', desc: 'Crafting the visual identity' },
  { icon: Code2, title: 'Development', desc: 'Building the solution' },
  { icon: Rocket, title: 'Launch', desc: 'Going live to the world' },
  { icon: BarChart, title: 'Growth', desc: 'Scaling and optimization' }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate active step based on scroll progress (0 to 1)
    // We have 6 steps, so each step takes up roughly 1/6th (approx 0.16)
    const stepIndex = Math.min(Math.floor(latest * steps.length), steps.length - 1);
    setActiveStep(stepIndex);
  });

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">Our <span className="text-[#C9A227]">Process</span></h2>
          <p className="text-gray-600 text-lg">A proven workflow for exceptional results.</p>
        </div>

        <div className="relative">
          {/* Animated Connecting Line (Vertical on Mobile, Horizontal on Desktop) */}
          <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-100 -translate-x-1/2 hidden md:block lg:hidden" /> {/* Tablet Vertical */}
          
          {/* Desktop Horizontal Line */}
          <div className="absolute top-[3.5rem] left-0 w-full h-1 bg-gray-100 hidden lg:block">
             <motion.div 
               style={{ scaleX: scrollYProgress, transformOrigin: "left" }} 
               className="h-full bg-[#C9A227]" 
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <motion.div 
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? '#C9A227' : '#F9FAFB',
                      backgroundColor: isActive ? '#FFFFFF' : '#FFFFFF'
                    }}
                    className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border-4 shadow-xl mb-6 relative z-10 transition-all duration-500 ${
                      isActive ? 'shadow-[#C9A227]/20' : 'shadow-gray-100'
                    }`}
                  >
                    <step.icon 
                      className={`w-10 h-10 transition-colors duration-500 ${
                        isActive ? 'text-[#C9A227]' : 'text-gray-300'
                      }`} 
                      strokeWidth={1.5} 
                    />
                    
                    {/* Pulse Effect for Current Step */}
                    {index === activeStep && (
                      <div className="absolute inset-0 rounded-full border-2 border-[#C9A227] animate-ping opacity-20" />
                    )}
                  </motion.div>
                  
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-500 ${
                    isActive ? 'text-[#1A1A1A]' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm leading-relaxed max-w-[150px] transition-colors duration-500 ${
                    isActive ? 'text-gray-600' : 'text-gray-300'
                  }`}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
