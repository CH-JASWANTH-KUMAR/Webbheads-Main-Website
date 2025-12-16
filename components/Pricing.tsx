"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
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
  const pill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-slate-100 text-slate-700";

  // SOLID price color rule
  const priceColor = isDark ? "text-[#f6ff82]" : "text-[#003942]";

  return (
    <section id="pricing" className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs md:text-sm font-medium ${pill}`}
          >
            <span
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
              }`}
            />
            <span>Investment</span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Transparent{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Pricing
            </span>
          </h2>

          <p className={`text-base md:text-lg ${headerSub} max-w-2xl mx-auto`}>
            Honest pricing for every stage of growth. All prices in INR.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl p-6 backdrop-blur flex flex-col overflow-hidden h-full
                ${cardBase}
              `}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* 
                   Highlight Badge 
                   - Removed the 'else' block spacer.
                   - Now if there is no badge, the title sits at the top naturally.
                */}
                {plan.highlight && (
                  <div className="mb-4 inline-flex items-center">
                    <span
                      className={`
                        rounded-full px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider
                        ${
                          isDark
                            ? "bg-[#f6ff82] text-[#003942]"
                            : "bg-[#003942] text-white"
                        }
                      `}
                    >
                      Best Value
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                
                {/* Removed fixed min-height from description to reduce gaps */}
                <p className={`text-sm mb-4 ${planDesc}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span
                    className={`text-xs ${
                      isDark ? "text-white/45" : "text-slate-500"
                    }`}
                  >
                    {plan.priceNote}
                  </span>
                  <div className={`text-3xl font-bold ${priceColor}`}>
                    <CountUp target={plan.price} />
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          isDark ? "text-[#f6ff82]" : "text-[#003942]"
                        }`}
                      />
                      <span className={featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  type="button"
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    px-6 py-3.5 rounded-full text-sm font-semibold
                    transition-all duration-200 active:scale-95
                    ${
                      isDark
                        ? "bg-white/10 text-white hover:bg-white/15"
                        : "bg-[#003942] text-white hover:bg-[#002a31]"
                    }
                    shadow-[0_10px_20px_rgba(0,0,0,0.18)]
                  `}
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
