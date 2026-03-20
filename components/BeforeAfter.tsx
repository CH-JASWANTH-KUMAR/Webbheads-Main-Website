"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const comparisons = [
  {
    feature: "Lead Response Time",
    before: "Manual follow-ups take hours and leads cool down.",
    after: "Automated responses reach leads in minutes, 24/7.",
    impact: "Faster first contact",
  },
  {
    feature: "Daily Productivity",
    before: "Teams spend 5+ hours on repetitive admin tasks.",
    after: "Automation saves 4+ hours daily for sales-focused work.",
    impact: "More high-value work",
  },
  {
    feature: "Lead Tracking",
    before: "Leads are scattered across inboxes, calls, and sheets.",
    after: "Every lead is tracked in one CRM and dashboard view.",
    impact: "Clear pipeline visibility",
  },
  {
    feature: "Conversion Rate",
    before: "Inconsistent follow-ups lead to weak closing rates.",
    after: "Structured workflows and personalization improve conversions.",
    impact: "Higher close rates",
  },
  {
    feature: "Work-Life Balance",
    before: "Agents stay on-call all day and night to avoid misses.",
    after: "Smart systems handle after-hours and trigger only priority alerts.",
    impact: "Sustainable operations",
  },
];

export default function BeforeAfter() {
  const { isDark } = useTheme();

  const sectionBg = "bg-transparent";
  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";

  const shell = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
    : "bg-white border border-[#003942]/10 shadow-[0_18px_50px_rgba(0,0,0,0.12)]";

  const subText = isDark ? "text-white/55" : "text-slate-600";
  const pill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-slate-100 text-slate-700";

  const rowBorder = isDark ? "border-white/10" : "border-slate-200";
  const headerBg = isDark ? "bg-white/[0.03]" : "bg-slate-50";
  const beforeText = isDark ? "text-white/70" : "text-slate-700";
  const afterText = isDark ? "text-white" : "text-slate-900";
  const impactBadge = isDark
    ? "bg-[#f6ff82]/15 text-[#f6ff82]"
    : "bg-[#003942]/10 text-[#003942]";

  return (
    <section className={`py-12 md:py-20 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] ${pill}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
              }`}
            />
            <span className="tracking-wide">BEFORE & AFTER</span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Before vs After, made{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              crystal clear
            </span>
          </h2>

          <p
            className={`mx-auto mt-3 max-w-2xl text-sm md:text-base leading-relaxed ${subText}`}
          >
            A clean side-by-side comparison so users quickly understand the value shift after working with us.
          </p>
        </div>

        {/* Desktop/Table View */}
        <div className={`hidden md:block rounded-3xl overflow-hidden backdrop-blur ${shell}`}>
          <div className={`grid grid-cols-[1.1fr_1.55fr_1.55fr_0.95fr] text-sm font-semibold ${headerBg}`}>
            <div className={`px-6 py-4 border-b ${rowBorder} ${isDark ? "text-white/80" : "text-slate-900"}`}>
              Area
            </div>
            <div className={`px-6 py-4 border-b ${rowBorder} ${beforeText} flex items-center gap-2`}>
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${isDark ? "bg-white/10" : "bg-slate-900 text-white"}`}>
                <X className="h-3.5 w-3.5" />
              </span>
              Before Us
            </div>
            <div className={`px-6 py-4 border-b ${rowBorder} ${afterText} flex items-center gap-2`}>
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${brandGradient}`}>
                <Check className="h-3.5 w-3.5 text-[#003942]" />
              </span>
              After Us
            </div>
            <div className={`px-6 py-4 border-b ${rowBorder} ${isDark ? "text-white/80" : "text-slate-900"}`}>
              Outcome
            </div>
          </div>

          {comparisons.map((item, idx) => (
            <div
              key={item.feature}
              className={`grid grid-cols-[1.1fr_1.55fr_1.55fr_0.95fr] ${
                idx !== comparisons.length - 1 ? `border-b ${rowBorder}` : ""
              } ${idx % 2 === 0 ? (isDark ? "bg-white/[0.01]" : "bg-white") : (isDark ? "bg-black/10" : "bg-slate-50/55")}`}
            >
              <div className={`px-6 py-5 font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                {item.feature}
              </div>
              <div className={`px-6 py-5 text-sm leading-relaxed ${beforeText}`}>
                {item.before}
              </div>
              <div className={`px-6 py-5 text-sm leading-relaxed ${afterText}`}>
                {item.after}
              </div>
              <div className="px-6 py-5">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${impactBadge}`}>
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {comparisons.map((item) => (
            <div key={item.feature} className={`rounded-2xl p-5 backdrop-blur ${shell}`}>
              <h3 className={`text-base font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                {item.feature}
              </h3>

              <div className={`mt-3 rounded-xl p-3 ${isDark ? "bg-black/25" : "bg-slate-50"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${beforeText}`}>Before Us</p>
                <p className={`mt-1 text-sm leading-relaxed ${beforeText}`}>{item.before}</p>
              </div>

              <div className={`mt-2 rounded-xl p-3 ${isDark ? "bg-[#f6ff82]/10" : "bg-[#003942]/5"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${afterText}`}>After Us</p>
                <p className={`mt-1 text-sm leading-relaxed ${afterText}`}>{item.after}</p>
              </div>

              <div className="mt-3">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${impactBadge}`}>
                  {item.impact}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { stat: "4+ hrs", label: "Saved daily" },
            { stat: "3x", label: "Conversions" },
            { stat: "24/7", label: "Coverage" },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl p-5 text-center backdrop-blur ${shell}`}
            >
              <div className={`text-2xl md:text-3xl font-semibold`}>
                <span
                  className={`bg-clip-text text-transparent ${brandGradient}`}
                >
                  {item.stat}
                </span>
              </div>
              <div className={`mt-1 text-xs md:text-sm ${subText}`}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9 text-center">
          <a
            href="#contact"
            className={`
              inline-flex items-center justify-center gap-2.5
              rounded-full px-7 py-3.5 text-sm font-semibold
              transition-colors duration-200
              ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-[#003942] text-white"
              }
              shadow-[0_12px_30px_rgba(0,0,0,0.25)]
            `}
          >
            <span>Start now</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
