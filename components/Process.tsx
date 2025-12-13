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
import { MessageSquare, Search, PenTool, Code2, Rocket, BarChart, X, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";

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
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  // Scroll-based animation - synced with scroll position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"] // Animation completes when section center hits viewport center
  });

  // Transform scroll progress to step index (0 to 6)
  const progressValue = useTransform(scrollYProgress, [0, 1], [0, steps.length]);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6"><span className="w-2 h-2 bg-[#003942] rounded-full" />
              <span className="text-sm font-medium text-[#003942]">How We Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#003942] mb-4">
              Our <span className="text-[#003942] underline decoration-[#f6ff82] decoration-4 underline-offset-4">Process</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A proven 6-step workflow designed to deliver exceptional results. Click on any stage to learn more.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="relative">
            {/* Horizontal Progress Line (Desktop) */}
            <div className="absolute top-[3.5rem] left-0 w-full h-1 bg-gray-200 hidden lg:block rounded-full overflow-hidden">
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
                  onClick={() => setSelectedStep(index)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Circle - Animated based on scroll */}
                  <motion.div
                    className="w-20 h-20 lg:w-28 lg:h-28 rounded-full flex items-center justify-center border-4 shadow-xl mb-4 relative transition-all group-hover:scale-105 group-hover:shadow-2xl bg-white"
                    style={{
                      borderColor: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        ["#E5E7EB", "#003942"]
                      ),
                      backgroundColor: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        ["#FFFFFF", "#f6ff82"]
                      ),
                    }}
                  >
                    <motion.div
                      style={{
                        color: useTransform(
                          progressValue,
                          [index, index + 0.5],
                          ["#D1D5DB", "#003942"]
                        ),
                      }}
                    >
                      <step.icon className="w-8 h-8 lg:w-10 lg:h-10" strokeWidth={1.5} />
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

                    {/* Click indicator overlay */}
                    <div className="absolute inset-0 rounded-full bg-[#f6ff82]/0 group-hover:bg-[#f6ff82]/10 transition-colors" />
                  </motion.div>

                  {/* Step Number */}
                  <motion.span
                    className="text-xs font-bold mb-1"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        ["#9CA3AF", "#003942"]
                      ),
                    }}
                  >
                    0{index + 1}
                  </motion.span>

                  {/* Step Title */}
                  <motion.h3
                    className="text-base lg:text-lg font-bold mb-1 group-hover:underline group-hover:decoration-[#f6ff82] group-hover:decoration-2 transition-all"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        ["#9CA3AF", "#003942"]
                      ),
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Step Description */}
                  <motion.p
                    className="text-xs lg:text-sm leading-relaxed"
                    style={{
                      color: useTransform(
                        progressValue,
                        [index, index + 0.5],
                        ["#D1D5DB", "#6B7280"]
                      ),
                    }}
                  >
                    {step.desc}
                  </motion.p>

                  {/* Tap hint */}
                  <span className="mt-2 text-xs text-[#003942] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Tap for details →
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPUP MODAL ===== */}
      <AnimatePresence>
        {selectedStep !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStep(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden"
            >
              {/* Header with gradient */}
              <div className="bg-gradient-to-br from-[#003942] to-[#004d59] p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#f6ff82]/20 flex items-center justify-center">
                      {(() => {
                        const StepIcon = steps[selectedStep].icon;
                        return <StepIcon className="w-7 h-7 text-[#f6ff82]" />;
                      })()}
                    </div>
                    <div>
                      <span className="text-[#f6ff82] text-sm font-medium">
                        Stage 0{selectedStep + 1}
                      </span>
                      <h3 className="text-2xl font-bold">
                        {steps[selectedStep].details.heading}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedStep(null)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[50vh]">
                {/* Overview */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {steps[selectedStep].details.overview}
                </p>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f6ff82] rounded-full mb-6"><span className="w-2 h-2 bg-[#003942] rounded-full" />
                  <span className="text-sm font-medium text-[#003942]">
                    Duration: {steps[selectedStep].details.duration}
                  </span>
                </div>

                {/* What's Included */}
                <h4 className="font-bold text-[#003942] mb-4">What&apos;s Included:</h4>
                <ul className="space-y-3">
                  {steps[selectedStep].details.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#f6ff82] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003942]" />
                      </div>
                      <span className="text-gray-600 text-sm">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedStep(selectedStep > 0 ? selectedStep - 1 : steps.length - 1)}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#003942] transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setSelectedStep(selectedStep < steps.length - 1 ? selectedStep + 1 : 0)}
                    className="px-4 py-2 text-sm font-medium bg-[#003942] text-white rounded-full hover:bg-[#004d59] transition-colors"
                  >
                    Next Stage →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
