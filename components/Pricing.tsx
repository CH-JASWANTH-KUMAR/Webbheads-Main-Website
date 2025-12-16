"use client";

/**
 * PRICING SECTION — Unified cards (Premium not visually different)
 * - Cards: borderless, same bg/colors for all
 * - Header pill: filled
 * - Heading: keep gradient ONLY on the word "Pricing"
 * - Price number: SOLID color (light #003942, dark #f6ff82)
 * - Header dot: SOLID color (light #003942, dark #f6ff82)
 * - CTA button: light mode same, dark mode grayish
 * - Premium: only "Best Value" pill
 */

import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const plans = [
  {
    name: "Must-Have",
    price: "₹1.2L",
    priceNote: "Starting from",
    description: "Essential services every realtor needs",
    features: [
      "High-Conversion Website",
      "Property Listing CMS",
      "Lead Capture Forms",
      "WhatsApp Integration",
      "CRM Setup",
      "Speed Optimization",
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹4L",
    priceNote: "Starting from",
    description: "Full-stack solutions for serious growth",
    features: [
      "Everything in Must-Have",
      "AI Follow-Up Chatbot",
      "Lead Automation System",
      "Analytics Dashboard",
      "Sales Pipeline Setup",
      "Team Training Included",
    ],
    highlight: true,
  },
  {
    name: "Need-Based",
    price: "₹50K",
    priceNote: "Starting from",
    description: "Scale-dependent services for growing teams",
    features: [
      "Listings Management",
      "Sales Team Automation",
      "Ad Landing Pages",
      "Builder Microsites",
      "Analytics Dashboard",
      "Lead Source Tracking",
    ],
    highlight: false,
  },
  {
    name: "Nice-to-Have",
    price: "₹15K",
    priceNote: "Starting from",
    description: "Add-on services to enhance your brand",
    features: [
      "UI/UX Redesign",
      "Brand Refresh",
      "Drone Video Editing",
      "Virtual Staging (AI)",
      "WhatsApp Catalogue",
      "Social Media Assets",
    ],
    highlight: false,
  },
];

const CountUp = ({ target }: { target: string }) => {
  const [display, setDisplay] = useState("₹0");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setDisplay(target), 250);
      return () => clearTimeout(timer);
    }
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
};

export default function Pricing() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";
  const headerSub = isDark ? "text-white/55" : "text-slate-600";

  // All cards same
  const cardBase = isDark
    ? "bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)] text-white"
    : "bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] text-slate-900";

  const planDesc = isDark ? "text-white/55" : "text-slate-600";
  const featureText = isDark ? "text-white/75" : "text-slate-700";

  const pill = isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700";

  const hoverSpring = { type: "spring" as const, stiffness: 520, damping: 32, mass: 0.6 };
  const inViewTween = { duration: 0.35, ease: "easeOut" as const };

  // SOLID price color rule you wanted
  const priceColor = isDark ? "text-[#f6ff82]" : "text-[#003942]";

  return (
    <section className={`py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={inViewTween}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium ${pill}`}
          >
            {/* Dot rule */}
            <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#003942]"}`} />
            <span>Investment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={inViewTween}
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Transparent{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...inViewTween, delay: 0.05 }}
            className={`text-lg ${headerSub}`}
          >
            Honest pricing for every stage of growth. All prices in INR.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...inViewTween, delay: index * 0.06 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className={`
                relative rounded-2xl p-6 backdrop-blur flex flex-col overflow-hidden h-full
                ${cardBase}
              `}
            >
              <motion.div className="absolute inset-0" transition={hoverSpring} />

              <div className="relative z-10 flex flex-col h-full">
                {plan.highlight && (
                  <div className="mb-4 inline-flex items-center">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider
                        ${isDark ? "bg-[#f6ff82] text-[#003942]" : "bg-[#003942] text-white"}
                      `}
                    >
                      Best Value
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${planDesc}`}>{plan.description}</p>

                <div className="mb-6">
                  <span className={`text-xs ${isDark ? "text-white/45" : "text-slate-500"}`}>
                    {plan.priceNote}
                  </span>

                  <div className={`text-3xl font-bold ${priceColor}`}>
                    <CountUp target={plan.price} />
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      {/* Tick mark: dark in light mode, yellow in dark mode */}
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${isDark ? "text-[#f6ff82]" : "text-[#003942]"}`}
                      />
                      <span className={featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={hoverSpring}
                  className={`
                    w-full inline-flex items-center justify-center
                    px-6 py-3.5 rounded-full text-sm font-semibold
                    transition-colors duration-200
                    ${isDark ? "bg-white/10 text-white hover:bg-white/15" : "bg-[#003942] text-white"}
                    shadow-[0_10px_20px_rgba(0,0,0,0.18)]
                  `}
                >
                  Get Started →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
