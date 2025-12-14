"use client";

/**
 * ==========================================================================
 * CASE STUDIES SECTION - Featured Project Showcases
 * ==========================================================================
 * Layout: 2x2 grid
 * - 3 case study cards
 * - 1 "View All" card that opens popup with all case studies
 * ==========================================================================
 */

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: "The Grand Estate",
    category: "Luxury Real Estate Website",
    description: "Complete digital transformation for a $50M luxury villa portfolio with 3D virtual tours and lead automation.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=800",
    results: ["300% increase in leads", "2.5s page load time", "45% conversion rate"],
  },
  {
    id: 2,
    title: "Skyline Towers",
    category: "Mobile App Development",
    description: "Premium mobile application for high-rise apartment sales with AR property viewing and instant booking.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800",
    results: ["50K+ downloads", "4.8★ App Store rating", "85% user retention"],
  },
  {
    id: 3,
    title: "Azure Heights",
    category: "AI Automation & CRM",
    description: "End-to-end CRM integration with AI-powered lead scoring and automated follow-up sequences.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=800",
    results: ["70% time saved", "200+ leads/month", "35% higher close rate"],
  },
  {
    id: 4,
    title: "Palm Residences",
    category: "Web Development",
    description: "Luxury beachfront property website with virtual tours and integrated booking system.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200&h=800",
    results: ["250% traffic increase", "60% bounce reduction", "4x lead generation"],
  },
  {
    id: 5,
    title: "Urban Lofts",
    category: "Virtual Tours",
    description: "360° interactive property tours with hotspots and integrated floor plans.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800",
    results: ["90% engagement rate", "50% less site visits", "Faster decisions"],
  },
  {
    id: 6,
    title: "Metro Plaza",
    category: "Branding & Design",
    description: "Complete brand identity and marketing collateral for commercial real estate.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200&h=800",
    results: ["New brand identity", "5x social reach", "Premium positioning"],
  },
];

// Case Study Card Component - Compact version
function CaseStudyCard({ study }: { study: typeof caseStudies[0] }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-[#003942] cursor-pointer h-full"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={study.image}
          alt={study.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#003942] via-[#003942]/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block px-2 py-0.5 bg-[#f6ff82] text-[#003942] text-[10px] font-medium rounded-full mb-2">
            {study.category}
          </span>
          <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:underline group-hover:decoration-[#f6ff82] group-hover:decoration-2 transition-all">
            {study.title}
          </h3>
          <p className="text-white/60 text-xs line-clamp-2">{study.description}</p>
        </div>

        {/* Arrow Icon */}
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();

  return (
    <section className={`py-20 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6"><span className="w-2 h-2 bg-[#003942] rounded-full" />
            <span className="text-sm font-medium text-[#003942]">Our Work</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#003942]'}`}>
            Case <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>Studies</span>
          </h2>
          <p className={`max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            See how we&apos;ve helped leading real estate agencies transform their digital presence.
          </p>
        </motion.div>

        {/* 4-column Grid: 3 Case Studies + 1 View All */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Case Study 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            <CaseStudyCard study={caseStudies[0]} />
          </motion.div>

          {/* Case Study 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <CaseStudyCard study={caseStudies[1]} />
          </motion.div>

          {/* Case Study 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CaseStudyCard study={caseStudies[2]} />
          </motion.div>

          {/* View All Card - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => setShowAll(true)}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#003942] to-[#004d59] cursor-pointer flex items-center justify-center aspect-[4/3]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #f6ff82 1px, transparent 0)`,
                backgroundSize: '24px 24px'
              }} />
            </div>

            {/* Decorative Boxes */}
            <div className="absolute top-4 right-4 w-14 h-8 border-2 border-[#f6ff82]/30 rounded-lg rotate-6 group-hover:rotate-3 transition-transform duration-500" />
            <div className="absolute top-8 right-8 w-10 h-6 border-2 border-[#f6ff82]/20 rounded-lg rotate-12 group-hover:rotate-6 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4 w-12 h-7 border-2 border-[#f6ff82]/30 rounded-lg -rotate-6 group-hover:-rotate-3 transition-transform duration-500" />

            {/* Content */}
            <div className="relative z-10 text-center p-4">
              <div className="w-12 h-12 rounded-full bg-[#f6ff82]/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="w-5 h-5 text-[#f6ff82] group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                View All <span className="text-[#003942] underline decoration-[#f6ff82] decoration-4 underline-offset-4">Case Studies</span>
              </h3>
              <p className="text-white/60 text-xs mb-3">
                Explore all {caseStudies.length} projects
              </p>
              <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f6ff82] text-[#003942] text-xs font-semibold rounded-full group-hover:bg-[#D4AF37] transition-colors">
                Explore All <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>

            {/* Border Glow Effect */}
            <div className="absolute inset-0 rounded-xl border border-[#f6ff82]/0 group-hover:border-[#f6ff82]/40 transition-colors duration-300" />
          </motion.div>
        </div>
      </div>

      {/* ===== VIEW ALL POPUP MODAL ===== */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowAll(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAll(false)}
              className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="container mx-auto px-6 py-20"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  All <span className="text-[#003942] underline decoration-[#f6ff82] decoration-4 underline-offset-4">Case Studies</span>
                </h2>
                <p className="text-white/60">
                  {caseStudies.length} successful projects delivered
                </p>
              </div>

              {/* All Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CaseStudyCard study={study} />
                  </motion.div>
                ))}
              </div>

              {/* Back Button */}
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(false)}
                  className="px-8 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors"
                >
                  ← Back to Home
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
