"use client";

import { useEffect, useState } from "react";
import { Check, ArrowUpRight, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

type Plan = {
  name: string;
  badge: string;
  subTitle: string;
  priceMain: string;
  priceUnit: string;
  description: string;
  keyBenefits: string[];
  ctaLabel: string;
  highlight?: boolean;
};

type ComparisonRow = {
  feature: string;
  start: boolean;
  scale: boolean;
  dominate: boolean;
};

const plans: Plan[] = [
  {
    name: "Start",
    badge: "For New Agents",
    subTitle: "Local Presence System",
    priceMain: "₹18K - ₹25K",
    priceUnit: "/month",
    description: "Build local visibility and start receiving consistent property inquiries.",
    keyBenefits: [
      "Launch a conversion-ready 5-page website with 10 listings",
      "Get WhatsApp catalog + click-to-chat for instant buyer response",
      "Own your Google presence with local SEO and review setup",
      "Maintain consistent brand visibility with monthly content",
    ],
    ctaLabel: "Launch My Presence",
  },
  {
    name: "Scale",
    badge: "For Growing Agencies",
    subTitle: "Lead Generation System",
    priceMain: "₹50K - ₹70K",
    priceUnit: "/month",
    description: "Turn your listings into a predictable lead engine with performance tracking.",
    keyBenefits: [
      "Capture higher-intent buyers with listing-specific landing pages",
      "Showcase properties better using 360 experiences",
      "Run focused Meta campaigns with monthly optimization",
      "Automated follow-ups so you never lose a hot lead",
    ],
    ctaLabel: "Start Getting Leads",
    highlight: true,
  },
  {
    name: "Dominate",
    badge: "For Market Leaders",
    subTitle: "Market Domination System (Elite 360)",
    priceMain: "₹1,20K - ₹1,80K",
    priceUnit: "/month",
    description: "Own your market with a full sales system built for sustained deal velocity.",
    keyBenefits: [
      "Create premium demand with full-funnel visual production",
      "Scale acquisition with multi-channel ad and retargeting systems",
      "Close faster using AI scoring, CRM workflows, and lead prioritization",
      "Receive verified buyer leads through a done-for-you pipeline",
    ],
    ctaLabel: "Book Free Demo",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Conversion-focused Website",
    start: true,
    scale: true,
    dominate: true,
  },
  {
    feature: "Listing Funnel Pages",
    start: false,
    scale: true,
    dominate: true,
  },
  {
    feature: "WhatsApp Lead Capture",
    start: true,
    scale: true,
    dominate: true,
  },
  {
    feature: "Meta Ad Campaign Management",
    start: false,
    scale: true,
    dominate: true,
  },
  {
    feature: "360 Property Experiences",
    start: false,
    scale: true,
    dominate: true,
  },
  {
    feature: "AI Lead Scoring + CRM Automations",
    start: false,
    scale: false,
    dominate: true,
  },
  {
    feature: "Retargeting + Multi-Channel Acquisition",
    start: false,
    scale: false,
    dominate: true,
  },
  {
    feature: "Dedicated Growth Team Support",
    start: false,
    scale: false,
    dominate: true,
  },
];

export default function Pricing() {
  const { isDark } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  useEffect(() => {
    if (!isComparisonOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsComparisonOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isComparisonOpen]);

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";
  const headerSub = isDark ? "text-white/55" : "text-[#4a6660]";
  const cardBase = isDark
    ? "bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)] text-white"
    : "bg-white border border-[#dce8e2] shadow-[0_4px_24px_rgba(26,60,52,0.07)] text-[#0f1f1b]";
  const featureText = isDark ? "text-white/75" : "text-[#4a6660]";
  const pill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-[#f6ff82] text-[#1a3c34]";
  const highlightedCard = isDark
    ? "ring-2 ring-[#f6ff82]/70 shadow-[0_24px_60px_rgba(246,255,130,0.22)]"
    : "ring-2 ring-[#003942]/30 shadow-[0_24px_60px_rgba(0,57,66,0.2)]";
  const planDesc = isDark ? "text-white/55" : "text-[#4a6660]";
  const priceColor = isDark ? "text-[#f6ff82]" : "text-[#003942]";
  const softCard = isDark ? "opacity-90 hover:opacity-100" : "opacity-95 hover:opacity-100";

  const renderAvailability = (isAvailable: boolean) => {
    if (isAvailable) {
      return (
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full border ${
            isDark
              ? "border-[#f6ff82]/60 bg-[#f6ff82]/15 text-[#f6ff82]"
              : "border-[#003942]/30 bg-[#003942]/10 text-[#003942]"
          }`}
          aria-label="Included"
          title="Included"
        >
          <Check className="h-4.5 w-4.5" strokeWidth={2.6} />
        </span>
      );
    }

    return (
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border ${
          isDark
            ? "border-white/20 bg-white/[0.06] text-white/55"
            : "border-slate-300 bg-slate-100 text-slate-500"
        }`}
        aria-label="Not included"
        title="Not included"
      >
        <X className="h-4 w-4" strokeWidth={2.4} />
      </span>
    );
  };

  return (
    <section id="pricing" className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
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
            3 Levels of Growth{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Systems
            </span>
          </h2>

          <p className={`text-base md:text-lg ${headerSub} max-w-3xl mx-auto`}>
            Choose the system based on your growth stage. Start for visibility,
            Scale for predictable leads, or Dominate for complete sales control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: plan.highlight ? -8 : -4,
                      scale: plan.highlight ? 1.04 : 1.01,
                    }
              }
              className={`
                relative rounded-2xl p-6 backdrop-blur flex flex-col overflow-hidden h-full
                ${cardBase}
                ${plan.highlight ? `${highlightedCard} md:-translate-y-2` : softCard}
              `}
            >
              {plan.highlight && (
                <div
                  className={`absolute inset-0 opacity-30 pointer-events-none ${
                    isDark
                      ? "bg-[radial-gradient(circle_at_top,_rgba(246,255,130,0.22),_transparent_55%)]"
                      : "bg-[radial-gradient(circle_at_top,_rgba(0,57,66,0.14),_transparent_55%)]"
                  }`}
                />
              )}

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
                <div className="mb-4 inline-flex items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider ${
                      isDark
                        ? "bg-white/10 text-white/80"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  {/* {plan.highlight ? (
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider ${
                        isDark
                          ? "bg-[#f6ff82] text-[#003942]"
                          : "bg-[#003942] text-white"
                      }`}
                    >
                      Most Chosen by Agencies
                    </span>
                  ) : null} */}
                </div>

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-xs md:text-sm font-semibold uppercase tracking-[0.12em] mb-3 ${isDark ? "text-white/45" : "text-slate-500"}`}>
                  {plan.subTitle}
                </p>

                <p className={`text-sm mb-4 ${planDesc}`}>{plan.description}</p>

                <div className="mb-6">
                  <span className={`text-xs ${isDark ? "text-white/45" : "text-slate-500"}`}>
                    Starting from
                  </span>
                  <div className="mt-1">
                    <div
                      className={`text-[2rem] md:text-[2.4rem] font-bold leading-none ${priceColor} ${
                        plan.highlight ? "drop-shadow-[0_0_14px_rgba(246,255,130,0.25)]" : ""
                      }`}
                    >
                      {plan.priceMain}
                    </div>
                    <div className={`text-sm font-medium mt-1 ${isDark ? "text-white/55" : "text-slate-500"}`}>
                      {plan.priceUnit}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.keyBenefits.map((feature, i) => (
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

                <motion.a
                  href="#contact"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full inline-flex items-center justify-center gap-2
                    px-6 py-3.5 rounded-full text-sm font-semibold
                    transition-all duration-300
                    ${
                      plan.highlight
                        ? isDark
                          ? "bg-gradient-to-r from-[#f6ff82] to-[#e8f074] text-[#003942] hover:brightness-105"
                          : "bg-gradient-to-r from-[#003942] to-[#0b6a78] text-white hover:brightness-105"
                        : isDark
                          ? "bg-white/10 text-white hover:bg-white/15"
                          : "bg-[#003942] text-white hover:bg-[#002a31]"
                    }
                    ${plan.highlight ? "shadow-[0_12px_28px_rgba(0,0,0,0.28)]" : "shadow-[0_10px_20px_rgba(0,0,0,0.18)]"}
                  `}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>

                <p className={`mt-3 text-xs text-center ${isDark ? "text-white/45" : "text-slate-500"}`}>
                  No contracts • Cancel anytime • Results-driven strategy
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => setIsComparisonOpen(true)}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? "bg-[#f6ff82] text-[#003942] hover:brightness-95"
                  : "bg-[#003942] text-white hover:bg-[#002a31]"
              } shadow-[0_10px_20px_rgba(0,0,0,0.16)]`}
            >
              <span>Compare All Plans</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <a
              href="/packages/webbheads-full-package.pdf"
              download
              className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-[#003942] text-white hover:bg-[#002a31]"
              } shadow-[0_10px_20px_rgba(0,0,0,0.16)]`}
            >
              <span>Download Full Package PDF</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {isComparisonOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Plan comparison table"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close plan comparison"
            onClick={() => setIsComparisonOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 w-full max-w-6xl rounded-2xl border overflow-hidden ${
              isDark
                ? "bg-[#0b0f14] border-white/10 text-white"
                : "bg-white border-slate-200 text-slate-900"
            } shadow-[0_28px_90px_rgba(0,0,0,0.35)]`}
          >
            <div
              className={`flex items-start justify-between gap-4 px-5 md:px-7 py-4 md:py-5 border-b ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <div>
                <h3 className="text-lg md:text-2xl font-bold">Plan Comparison</h3>
                <p className={`text-sm md:text-base mt-1 ${isDark ? "text-white/65" : "text-slate-600"}`}>
                  Quick side-by-side view so visitors can choose faster without scrolling through long sections.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsComparisonOpen(false)}
                className={`shrink-0 rounded-full p-2 transition-colors ${
                  isDark ? "bg-white/10 hover:bg-white/15" : "bg-slate-100 hover:bg-slate-200"
                }`}
                aria-label="Close comparison modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead
                  className={`sticky top-0 backdrop-blur ${
                    isDark ? "bg-[#111720]/95" : "bg-slate-50/95"
                  }`}
                >
                  <tr>
                    <th className="text-left px-5 md:px-7 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="text-center px-4 md:px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      Start
                    </th>
                    <th className="text-center px-4 md:px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      Scale
                    </th>
                    <th className="text-center px-4 md:px-5 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider">
                      Dominate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr
                      key={row.feature}
                      className={`${
                        isDark
                          ? index % 2 === 0
                            ? "bg-white/0"
                            : "bg-white/[0.03]"
                          : index % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50"
                      }`}
                    >
                      <td
                        className={`align-top px-5 md:px-7 py-4 text-sm md:text-[15px] font-semibold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {row.feature}
                      </td>
                      <td className="align-middle px-4 md:px-5 py-4 text-center">
                        {renderAvailability(row.start)}
                      </td>
                      <td className="align-middle px-4 md:px-5 py-4 text-center">
                        {renderAvailability(row.scale)}
                      </td>
                      <td className="align-middle px-4 md:px-5 py-4 text-center">
                        {renderAvailability(row.dominate)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className={`flex justify-end px-5 md:px-7 py-4 border-t ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}
            >
              <a
                href="#contact"
                onClick={() => setIsComparisonOpen(false)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  isDark
                    ? "bg-gradient-to-r from-[#f6ff82] to-[#e8f074] text-[#003942]"
                    : "bg-gradient-to-r from-[#003942] to-[#0b6a78] text-white"
                }`}
              >
                Choose Your Package
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
