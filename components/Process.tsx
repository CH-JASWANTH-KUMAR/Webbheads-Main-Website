"use client";

/**
 * ==========================================================================
 * PROCESS SECTION - Our Workflow with Popup Details
 * ==========================================================================
 * Features:
 * - 6-step process with clickable cards
 * - Popup modal with detailed overview for each stage
 * - Scroll-synced loading animation (completes when section hits middle)
 * - Animation reverses when scrolling back up
 * ==========================================================================
 */

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageSquare, Search, PenTool, Code2, Rocket, BarChart, CheckCircle2, Clock } from "lucide-react";
import { useRef, useState } from "react";
import { useTheme } from '@/context/ThemeContext';

// Process steps with detailed information for popups
const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    desc: "Understanding your vision",
    details: {
      heading: "Discovery Phase",
      overview: "We start by deeply understanding your business, goals, target audience, and competitive landscape. This phase sets the foundation for everything we build.",
      points: [
        "In-depth consultation call to understand your vision",
        "Analysis of your current digital presence",
        "Competitor research and market positioning",
        "Define target audience and user personas",
        "Document requirements and success metrics",
        "Set project timeline and milestones"
      ],
      duration: "1-2 Weeks"
    }
  },
  {
    icon: Search,
    title: "Strategy",
    desc: "Planning the roadmap",
    details: {
      heading: "Strategy Phase",
      overview: "Based on our discovery findings, we craft a comprehensive strategy that aligns with your business goals and maximizes ROI.",
      points: [
        "Define technology stack and architecture",
        "Create detailed project roadmap",
        "Plan content strategy and SEO approach",
        "Design user journey and conversion funnels",
        "Establish KPIs and measurement framework",
        "Present strategy for approval"
      ],
      duration: "1 Week"
    }
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Crafting the visual identity",
    details: {
      heading: "Design Phase",
      overview: "Our design team creates stunning, conversion-focused designs that reflect your brand's luxury positioning and resonate with your target audience.",
      points: [
        "Mood boards and design direction",
        "Wireframes for all key pages",
        "High-fidelity UI design mockups",
        "Mobile-responsive design variations",
        "Interactive prototypes for user testing",
        "Design revisions based on feedback"
      ],
      duration: "2-3 Weeks"
    }
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Building the solution",
    details: {
      heading: "Development Phase",
      overview: "Our expert developers bring the designs to life with clean, performant code. We build for speed, scalability, and maintainability.",
      points: [
        "Frontend development with modern frameworks",
        "Backend systems and API integration",
        "CRM and automation setup",
        "Performance optimization",
        "Cross-browser and device testing",
        "Security implementation and testing"
      ],
      duration: "3-4 Weeks"
    }
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "Going live to the world",
    details: {
      heading: "Launch Phase",
      overview: "We handle the entire launch process, ensuring a smooth transition with zero downtime and maximum impact.",
      points: [
        "Pre-launch checklist and QA testing",
        "Domain and hosting configuration",
        "SSL certificate and security setup",
        "Analytics and tracking implementation",
        "SEO optimization and submission",
        "Launch day support and monitoring"
      ],
      duration: "1 Week"
    }
  },
  {
    icon: BarChart,
    title: "Growth",
    desc: "Scaling and optimization",
    details: {
      heading: "Growth Phase",
      overview: "Post-launch, we continue to optimize, maintain, and grow your digital presence with ongoing support and data-driven improvements.",
      points: [
        "Performance monitoring and reporting",
        "A/B testing and conversion optimization",
        "Content updates and maintenance",
        "Feature enhancements and updates",
        "Scaling infrastructure as you grow",
        "Dedicated support and consultation"
      ],
      duration: "Ongoing"
    }
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const { isDark } = useTheme();

  // Scroll-based animation - synced with scroll position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"] // Animation completes when section center hits viewport center
  });

  // Transform scroll progress to step index (0 to 6)
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, steps.length]);

  return (
    <>
      <section className={`py-24 bg-transparent`} ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6">
              <span className="w-2 h-2 bg-[#003942] rounded-full" />
              <span className="text-sm font-medium text-[#003942]">How We Work</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}>
              Our <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>Process</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A proven 6-step workflow designed to deliver exceptional results. Hover over any stage to learn more.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Horizontal Progress Line (Desktop) */}
            <div className={`absolute top-[3.5rem] left-0 w-full h-1 hidden lg:block rounded-full overflow-hidden ${isDark ? 'bg-[#003942]' : 'bg-gray-200'}`}>
              <motion.div
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                className="h-full bg-gradient-to-r from-[#f6ff82] to-[#D4AF37]"
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className="flex flex-col items-center text-center cursor-pointer group relative"
                >
                  {/* Step Circle - Animated based on scroll with gradient */}
                  <motion.div
                    className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border-4 shadow-xl mb-4 relative transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#f6ff82]/20`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      borderColor: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [isDark ? "#003942" : "#E5E7EB", "#f6ff82"]
                      ),
                      background: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [
                          isDark ? "#002428" : "#FFFFFF",
                          "linear-gradient(135deg, #f6ff82 0%, #d4e682 100%)"
                        ]
                      ),
                    }}
                  >
                    <motion.div
                      style={{
                        color: useTransform(
                          progressValue,
                          [index, index + 0.5],
                          [isDark ? "#4B5563" : "#D1D5DB", "#003942"]
                        ),
                      }}
                    >
                      <step.icon className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                    </motion.div>

                    {/* Completed checkmark */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-[#003942] rounded-full flex items-center justify-center"
                      style={{
                        scale: useTransform(progressValue, [index + 0.8, index + 1], [0, 1]),
                        opacity: useTransform(progressValue, [index + 0.8, index + 1], [0, 1]),
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f6ff82]" />
                    </motion.div>

                    {/* Hover indicator overlay */}
                    <div className="absolute inset-0 rounded-full bg-[#f6ff82]/0 group-hover:bg-[#f6ff82]/10 transition-colors duration-300" />
                  </motion.div>

                  {/* Step Number */}
                  <motion.span
                    className="text-xs font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [isDark ? "#6B7280" : "#9CA3AF", isDark ? "#f6ff82" : "#003942"]
                      ),
                    }}
                  >
                    0{index + 1}
                  </motion.span>

                  {/* Step Title */}
                  <motion.h3
                    className="text-base lg:text-lg font-bold mb-1 transition-all duration-300 group-hover:text-[#f6ff82]"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [isDark ? "#9CA3AF" : "#9CA3AF", isDark ? "#ffffff" : "#003942"]
                      ),
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Step Description */}
                  <motion.p
                    className="text-xs lg:text-sm leading-relaxed transition-colors duration-300"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [isDark ? "#6B7280" : "#D1D5DB", isDark ? "#9CA3AF" : "#6B7280"]
                      ),
                    }}
                  >
                    {step.desc}
                  </motion.p>

                  {/* Hover Card - Positioned Above Step */}
                  <AnimatePresence>
                    {hoveredStep === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-72 z-50 pointer-events-none"
                      >
                        <div className={`rounded-xl shadow-2xl border overflow-hidden ${isDark ? 'bg-[#002428] border-[#003942]' : 'bg-white border-gray-200'}`}>
                          {/* Header with gradient */}
                          <div className="bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e066] p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-[#003942]/20 flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-5 h-5 text-[#003942]" />
                              </div>
                              <div>
                                <span className="text-[#003942] text-xs font-medium">
                                  Stage 0{index + 1}
                                </span>
                                <h3 className="text-base font-bold text-[#003942]">
                                  {step.details.heading}
                                </h3>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4 space-y-3">
                            {/* Overview */}
                            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              {step.details.overview}
                            </p>

                            {/* Duration Badge */}
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-[#f6ff82]" />
                              <span className={`text-xs font-medium ${isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}`}>
                                {step.details.duration}
                              </span>
                            </div>

                            {/* Key Points - Show first 3 */}
                            <div>
                              <h4 className={`font-bold mb-2 text-xs ${isDark ? 'text-white' : 'text-[#003942]'}`}>
                                Key Deliverables:
                              </h4>
                              <ul className="space-y-1.5">
                                {step.details.points.slice(0, 3).map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs">
                                    <CheckCircle2 className="w-3 h-3 text-[#f6ff82] shrink-0 mt-0.5" />
                                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* More Points Indicator */}
                            {step.details.points.length > 3 && (
                              <p className={`text-xs italic ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                + {step.details.points.length - 3} more included
                              </p>
                            )}
                          </div>

                          {/* Arrow pointer */}
                          <div className={`w-3 h-3 absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45 ${isDark ? 'bg-[#002428] border-r border-b border-[#003942]' : 'bg-white border-r border-b border-gray-200'}`} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
