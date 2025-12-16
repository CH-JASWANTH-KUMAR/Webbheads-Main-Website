"use client";

import { Check, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const comparisons = [
  {
    id: 1,
    feature: "Lead Response Time",
    before: {
      description: "Manual follow-ups taking hours or days",
      details: ["Leads go cold", "Miss peak interest", "Competitors faster"],
    },
    after: {
      description: "Instant engagement within minutes",
      details: ["24/7 replies", "Lead scoring", "No missed hot leads"],
    },
  },
  {
    id: 2,
    feature: "Daily Productivity",
    before: {
      description: "5+ hours on repetitive admin tasks",
      details: ["Data entry", "Manual reminders", "Spreadsheet updates"],
    },
    after: {
      description: "Reclaim 4+ hours for high-value work",
      details: ["Automated routine", "Focus on deals", "More client time"],
    },
  },
  {
    id: 3,
    feature: "Lead Tracking",
    before: {
      description: "Leads lost across tools and inboxes",
      details: ["No single view", "Hard to track", "Unclear ROI"],
    },
    after: {
      description: "Full visibility for every lead",
      details: ["Unified dashboard", "Full history", "Data-driven actions"],
    },
  },
  {
    id: 4,
    feature: "Conversion Rate",
    before: {
      description: "Low conversions from slow processes",
      details: ["15–20% close", "Inconsistent follow-up", "Generic messaging"],
    },
    after: {
      description: "3x higher conversions with workflows",
      details: ["40–45% close", "Systematic follow-up", "Personalized automation"],
    },
  },
  {
    id: 5,
    feature: "Work-Life Balance",
    before: {
      description: "Always on-call after hours",
      details: ["Weekend work", "Constant checking", "Stress spikes"],
    },
    after: {
      description: "Systems work 24/7 for you",
      details: ["After-hours handled", "Weekend coverage", "Priority alerts only"],
    },
  },
];

function Chip({ text, isDark }: { text: string; isDark: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] leading-none whitespace-nowrap ${
        isDark ? "bg-white/5 text-white/65" : "bg-slate-100 text-slate-600"
      }`}
    >
      {text}
    </span>
  );
}

export default function BeforeAfter() {
  const { isDark } = useTheme();

  const sectionBg = "bg-transparent";
  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";

  const card = isDark
    ? "bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
    : "bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]";

  const inner = isDark ? "bg-black/25" : "bg-slate-50";

  const subText = isDark ? "text-white/55" : "text-slate-600";
  const pill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-slate-100 text-slate-700";

  return (
    <section className={`py-12 md:py-20 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
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
            Workflow, but{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              better
            </span>
          </h2>

          <p
            className={`mx-auto mt-3 max-w-2xl text-sm md:text-base leading-relaxed ${subText}`}
          >
            Quick snapshot of the shift from manual chaos to automated clarity.
          </p>
        </div>

        {/* 
           Cards Grid
           - grid-cols-1 mobile
           - grid-cols-2 lg (large desktop)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {comparisons.map((c) => (
            <div
              key={c.id}
              className={`rounded-2xl p-5 md:p-6 backdrop-blur ${card}`}
            >
              <div className="mb-4">
                <h3
                  className={`text-base md:text-lg font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {c.feature}
                </h3>
              </div>

              {/* 
                 Inner Before/After Grid 
                 - grid-cols-1 on mobile (stacked)
                 - sm:grid-cols-2 on tablet/desktop (side by side)
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Before */}
                <div className={`rounded-2xl p-4 ${inner}`}>
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-full flex items-center justify-center ${
                        isDark
                          ? "bg-white/10 text-white"
                          : "bg-slate-900 text-white"
                      }`}
                    >
                      <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-white/75" : "text-slate-800"
                        }`}
                      >
                        Before
                      </p>
                      <p
                        className={`mt-1 text-xs sm:text-sm leading-snug ${
                          isDark ? "text-white/55" : "text-slate-600"
                        }`}
                      >
                        {c.before.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.before.details.slice(0, 3).map((d) => (
                      <Chip key={d} text={d} isDark={isDark} />
                    ))}
                  </div>
                </div>

                {/* After */}
                <div className={`rounded-2xl p-4 ${inner}`}>
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-8 w-8 sm:h-10 sm:w-10 shrink-0 rounded-full flex items-center justify-center ${brandGradient}`}
                    >
                      <span
                        className={`h-7 w-7 sm:h-9 sm:w-9 rounded-full flex items-center justify-center ${
                          isDark ? "bg-[#05060A]" : "bg-white"
                        }`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}
                        />
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-white/75" : "text-slate-800"
                        }`}
                      >
                        After
                      </p>
                      <p
                        className={`mt-1 text-xs sm:text-sm leading-snug ${
                          isDark ? "text-white/55" : "text-slate-600"
                        }`}
                      >
                        {c.after.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.after.details.slice(0, 3).map((d) => (
                      <Chip key={d} text={d} isDark={isDark} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid - Stacked on mobile */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { stat: "4+ hrs", label: "Saved daily" },
            { stat: "3x", label: "Conversions" },
            { stat: "24/7", label: "Coverage" },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl p-5 text-center backdrop-blur ${card}`}
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
          </a>
        </div>
      </div>
    </section>
  );
}
