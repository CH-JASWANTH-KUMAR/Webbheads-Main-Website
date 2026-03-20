"use client";

import { Check, ArrowUpRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const plans = [
  {
    name: "Starter Growth",
    price: "₹1.4L",
    priceNote: "Starting from",
    description: "Core setup for agents launching their digital presence",
    features: [
      "Website Development (up to 8 pages)",
      "Property Listing CMS",
      "Lead Capture + WhatsApp Flow",
      "Basic CRM Pipeline Setup",
      "Performance & SEO Basics",
      "Launch Support",
    ],
    highlight: false,
    ctaLabel: "Get Started",
    ctaHref: "#contact",
    external: false,
  },
  {
    name: "Scale Premium",
    price: "₹4.5L",
    priceNote: "Starting from",
    description: "Best-value package for teams focused on conversion and automation",
    features: [
      "Everything in Starter Growth",
      "AI Automation + Follow-up Bot",
      "Booking System Integration",
      "CRM + Analytics Dashboard",
      "Custom Sales Automation Flows",
      "Team Handover + Training",
    ],
    highlight: true,
    ctaLabel: "Book Strategy Call",
    ctaHref: "https://cal.com/webb-heads",
    external: true,
  },
  {
    name: "Performance Add-ons",
    price: "₹60K",
    priceNote: "Starting from",
    description: "Need-based upgrades for established projects",
    features: [
      "App Development Modules",
      "Advanced Landing Pages",
      "Pipeline & Source Tracking",
      "Dashboard Enhancements",
      "Automation Extensions",
      "A/B Test Setup",
    ],
    highlight: false,
    ctaLabel: "Get Custom Quote",
    ctaHref: "#contact",
    external: false,
  },
  {
    name: "Brand & Media",
    price: "₹25K",
    priceNote: "Starting from",
    description: "Creative enhancements for visibility and premium positioning",
    features: [
      "UI/UX Redesign",
      "Brand Refresh",
      "Drone Video Editing",
      "Virtual Staging (AI)",
      "Social Media Design Kit",
      "Social Media Assets",
    ],
    highlight: false,
    ctaLabel: "Email Us",
    ctaHref: "mailto:webbheadsmarketing@gmail.com",
    external: true,
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

  const cardBase = isDark
    ? "bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)] text-white"
    : "bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)] text-slate-900";

  const highlightedCard = isDark
    ? "ring-2 ring-[#f6ff82]/70 shadow-[0_24px_60px_rgba(246,255,130,0.22)]"
    : "ring-2 ring-[#003942]/30 shadow-[0_24px_60px_rgba(0,57,66,0.2)]";

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
            Packages are built around our core services: website, app, AI automation, booking systems, CRM dashboards, and virtual staging.
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
                ${plan.highlight ? `${highlightedCard} md:-translate-y-2` : ""}
              `}
            >
              {plan.highlight && (
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isDark
                      ? "bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e682]"
                      : "bg-gradient-to-r from-[#003942] to-[#0b6a78]"
                  }`}
                />
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* 
                   Highlight Badge 
                   - Removed the 'else' block spacer.
                   - Now if there is no badge, the title sits at the top naturally.
                */}
                {plan.highlight && (
                  <div className="mb-4 inline-flex items-center gap-2">
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
                    <span className={`text-[11px] font-semibold ${isDark ? "text-[#f6ff82]" : "text-[#003942]"}`}>
                      Most Chosen
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
                <a
                  href={plan.ctaHref}
                  target={plan.external ? "_blank" : undefined}
                  rel={plan.external ? "noopener noreferrer" : undefined}
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    px-6 py-3.5 rounded-full text-sm font-semibold
                    transition-all duration-200 active:scale-95
                    ${
                      plan.highlight
                        ? isDark
                          ? "bg-[#f6ff82] text-[#003942] hover:bg-[#ecf57d]"
                          : "bg-[#003942] text-white hover:bg-[#002a31]"
                        : isDark
                          ? "bg-white/10 text-white hover:bg-white/15"
                          : "bg-[#003942] text-white hover:bg-[#002a31]"
                    }
                    shadow-[0_10px_20px_rgba(0,0,0,0.18)]
                  `}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
