"use client";

/**
 * ==========================================================================
 * PROCESS SECTION - Our Workflow with Popup Details
 * ==========================================================================
 * Features:
 * - 4-step process with hoverable cards
 * - Hover-to-view detail popover for each stage
 * - Scroll-synced loading animation (completes when section hits middle)
 * - Animation reverses when scrolling back up
 * ==========================================================================
 */

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Search, Crosshair, PenTool, Send, CheckCircle2, ClipboardList } from "lucide-react";
import { useRef, useState } from "react";
import { useTheme } from '@/context/ThemeContext';

// Process steps with detailed information for popups
const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "Market scan, comparables & opportunity mapping",
    details: {
      heading: "Discover",
      overview: "Understand the market before touching the property.",
      deliverable: "Opportunity Brief + Market Snapshot",
      duration: "3–5 Days",
      points: [
        "Kickoff to capture goals, constraints & outcomes",
        "Hyperlocal comparables — active & recently sold",
        "Buyer persona & demand-segment mapping",
        "Risk and upside review before any planning",
        "Baseline KPIs locked in for campaign tracking"
      ]
    }
  },
  {
    icon: Crosshair,
    title: "Define",
    desc: "Data-backed pricing, channels & campaign plan",
    details: {
      heading: "Define",
      overview: "Convert insights into a locked execution blueprint.",
      deliverable: "Go-To-Market Blueprint",
      duration: "2–4 Days",
      points: [
        "Pricing window with clear rationale",
        "Channel mix — portals, social & direct outreach",
        "Timeline with launch sequence & milestones",
        "Budget allocation & lead volume projections",
        "Strategy deck ready for client sign-off"
      ]
    }
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Assets built to attract qualified buyers",
    details: {
      heading: "Design",
      overview: "Every asset crafted for conversion, not just attention.",
      deliverable: "Listing Asset Kit",
      duration: "4–7 Days",
      points: [
        "Photo & video brief aligned to target buyer",
        "Listing narrative with clear feature hierarchy",
        "Virtual tour plan & flow mapping",
        "Ad creatives per acquisition channel",
        "Landing page copy & inquiry form refinement"
      ]
    }
  },
  {
    icon: Send,
    title: "Deliver",
    desc: "Execute, close & feed the next cycle",
    details: {
      heading: "Deliver",
      overview: "Full execution — from first lead to signed contract.",
      deliverable: "Deal Closure + Performance Review",
      duration: "Through Closure",
      points: [
        "Campaign launch & lead capture operations",
        "Qualification, follow-up cadence & CRM updates",
        "Offer management & negotiation support",
        "Settlement & documentation coordination",
        "Post-deal retrospective fed into next Discover"
      ]
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
    offset: ["start 90%", "end 35%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const visibleSteps = steps.slice(0, 4);

  // Transform scroll progress to step index for visible steps only.
  const progressValue = useTransform(smoothProgress, [0, 1], [0, visibleSteps.length]);

  const getHoverPositionClass = (index: number) => {
    if (index === 0) return "left-0 translate-x-0";
    if (index === visibleSteps.length - 1) return "left-auto right-0 translate-x-0";
    return "left-1/2 -translate-x-1/2";
  };

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
              <span className="text-sm font-medium text-[#003942]">The WebbHeads Method</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}>
              Our <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>4D Process</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-[#4a6660]'}`}>
              Hover over each step to explore it in detail. Discover, Define, Design, Deliver gives you a repeatable system with clear outputs at every stage.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Horizontal Progress Line (Desktop) */}
            <div className={`absolute top-[3.5rem] left-0 w-full h-1 hidden lg:block rounded-full overflow-hidden ${isDark ? 'bg-[#003942]' : 'bg-gray-200'}`}>
              <motion.div
                style={{ scaleX: smoothProgress, transformOrigin: "left" }}
                className="h-full bg-gradient-to-r from-[#f6ff82] to-[#D4AF37]"
              />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10">
              {visibleSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className="flex flex-col items-center text-center cursor-pointer group relative min-h-[13rem]"
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
                      backgroundColor: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [
                          isDark ? "#002428" : "#FFFFFF",
                          "#f6ff82"
                        ]
                      ),
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f6ff82] to-[#d4e682]"
                      style={{
                        opacity: useTransform(progressValue, [index, index + 0.5], [0, 1]),
                      }}
                    />

                    <motion.div
                      className="relative z-10"
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
                      className="absolute z-20 -top-1 -right-1 w-6 h-6 bg-[#003942] rounded-full flex items-center justify-center"
                      style={{
                        scale: useTransform(progressValue, [index + 0.8, index + 1], [0, 1]),
                        opacity: useTransform(progressValue, [index + 0.8, index + 1], [0, 1]),
                      }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#f6ff82]" />
                    </motion.div>

                    {/* Hover indicator overlay */}
                    <div className="absolute inset-0 z-10 rounded-full bg-[#f6ff82]/0 group-hover:bg-[#f6ff82]/10 transition-colors duration-300" />
                  </motion.div>

                  {/* Step Number */}
                  <motion.span
                    className="text-xs font-bold mb-1 transition-colors duration-300"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [isDark ? "#6B7280" : "#8aaba3", isDark ? "#f6ff82" : "#1a3c34"]
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
                    className="text-xs lg:text-sm leading-relaxed transition-colors duration-300 max-w-[15rem]"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        [isDark ? "#6B7280" : "#8aaba3", isDark ? "#9CA3AF" : "#4a6660"]
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
                        className={`absolute bottom-full mb-4 w-[min(22rem,calc(100vw-2rem))] lg:w-72 z-50 pointer-events-none ${getHoverPositionClass(index)}`}
                      >
                        <div className={`rounded-xl shadow-2xl border overflow-hidden ${isDark ? 'bg-[#002428] border-[#003942]' : 'bg-white border-[#dce8e2]'}`}>
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
                            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4a6660]'}`}>
                              {step.details.overview}
                            </p>

                            {/* Deliverable + Duration */}
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <ClipboardList className="w-3.5 h-3.5 text-[#f6ff82] shrink-0 mt-0.5" />
                                <span className={`text-xs font-medium ${isDark ? 'text-[#f6ff82]' : 'text-[#003942]'}`}>
                                  Deliverable: {step.details.deliverable}
                                </span>
                              </div>
                              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-[#4a6660]'}`}>
                                Typical timeline: {step.details.duration}
                              </p>
                            </div>

                            {/* Key Points - Show first 3 */}
                            <div>
                              <h4 className={`font-bold mb-2 text-xs ${isDark ? 'text-white' : 'text-[#003942]'}`}>
                                What You Get:
                              </h4>
                              <ul className="space-y-1.5">
                                {step.details.points.slice(0, 3).map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs">
                                    <CheckCircle2 className="w-3 h-3 text-[#f6ff82] shrink-0 mt-0.5" />
                                    <span className={isDark ? 'text-gray-400' : 'text-[#4a6660]'}>
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
                          <div className={`w-3 h-3 absolute -bottom-1.5 left-1/2 -translate-x-1/2 rotate-45 ${isDark ? 'bg-[#002428] border-r border-b border-[#003942]' : 'bg-white border-r border-b border-[#dce8e2]'}`} />
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
