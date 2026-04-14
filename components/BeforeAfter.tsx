"use client";

import { Check, X, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

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
  const { tr } = useLanguage();

  const sectionBg = "bg-transparent";
  const gradientTextClass = isDark
    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]"
    : "bg-clip-text text-transparent bg-gradient-to-r from-[#1a3c34] via-[#155461] to-[#0b6a78]";

  const shell = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
    : "bg-white border border-[#dce8e2] shadow-[0_4px_24px_rgba(26,60,52,0.07)]";

  const subText = isDark ? "text-white/55" : "text-[#4a6660]";
  const pill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-[#f6ff82] text-[#1a3c34]";

  const rowBorder = isDark ? "border-white/10" : "border-[#dce8e2]";
  const headerBg = isDark ? "bg-white/[0.03]" : "bg-[#edf1ee]";
  const beforeText = isDark ? "text-white/70" : "text-[#4a6660]";
  const afterText = isDark ? "text-white" : "text-[#0f1f1b]";
  const impactBadge = isDark
    ? "bg-[#f6ff82]/15 text-[#f6ff82]"
    : "bg-[#003942]/10 text-[#003942]";

  const localizedComparisons = comparisons.map((item) => {
    const map = {
      "Lead Response Time": {
        feature: "లీడ్ ప్రతిస్పందన సమయం",
        before: "మాన్యువల్ ఫాలో-అప్స్ గంటలు పడతాయి, లీడ్స్ చల్లబడిపోతాయి.",
        after: "ఆటోమేటెడ్ స్పందనలు నిమిషాల్లో చేరతాయి, 24/7.",
        impact: "వేగవంతమైన మొదటి స్పందన",
      },
      "Daily Productivity": {
        feature: "రోజువారీ ఉత్పాదకత",
        before: "టీమ్‌లు పునరావృత అడ్మిన్ పనులపై 5+ గంటలు ఖర్చు చేస్తాయి.",
        after: "ఆటోమేషన్ రోజుకు 4+ గంటలు సేవ్ చేస్తుంది.",
        impact: "అధిక విలువైన పనికి సమయం",
      },
      "Lead Tracking": {
        feature: "లీడ్ ట్రాకింగ్",
        before: "లీడ్స్ ఇమెయిల్స్, కాల్స్, షీట్లలో విడిపోయి ఉంటాయి.",
        after: "ప్రతి లీడ్ ఒకే CRM మరియు డ్యాష్‌బోర్డ్‌లో ట్రాక్ అవుతుంది.",
        impact: "స్పష్టమైన పైప్‌లైన్",
      },
      "Conversion Rate": {
        feature: "కన్వర్షన్ రేట్",
        before: "అసమంజసమైన ఫాలో-అప్స్ వల్ల క్లోజింగ్ రేట్స్ తగ్గుతాయి.",
        after: "సంఘటిత వర్క్‌ఫ్లోలు కన్వర్షన్‌ను మెరుగుపరుస్తాయి.",
        impact: "ఉన్నత క్లోజ్ రేట్స్",
      },
      "Work-Life Balance": {
        feature: "వర్క్-లైఫ్ బ్యాలెన్స్",
        before: "ఏజెంట్లు రాత్రింబవళ్లు అందుబాటులో ఉండాల్సి వస్తుంది.",
        after: "స్మార్ట్ సిస్టమ్స్ ఆఫ్టర్-ఆవర్స్‌ను హ్యాండిల్ చేస్తాయి.",
        impact: "స్థిరమైన కార్యకలాపాలు",
      },
    } as Record<string, { feature: string; before: string; after: string; impact: string }>;

    const localized = map[item.feature];
    if (!localized) {
      return item;
    }

    return {
      ...item,
      feature: tr(item.feature, localized.feature),
      before: tr(item.before, localized.before),
      after: tr(item.after, localized.after),
      impact: tr(item.impact, localized.impact),
    };
  });

  return (
    <section className={`py-12 md:py-20 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] ${pill}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#1a3c34]"
              }`}
            />
            <span className="tracking-wide">{tr("BEFORE & AFTER", "ముందు & తర్వాత")}</span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-[#0f1f1b]"
            }`}
          >
            {tr("Before vs After, made", "ముందు vs తర్వాత,")}{" "}
            <span className={gradientTextClass}>
              {tr("crystal clear", "స్పష్టంగా")}
            </span>
          </h2>

          <p
            className={`mx-auto mt-3 max-w-2xl text-sm md:text-base leading-relaxed ${subText}`}
          >
            {tr(
              "A clean side-by-side comparison so users quickly understand the value shift after working with us.",
              "మాతో పనిచేసిన తర్వాత విలువ ఎలా మారుతుందో త్వరగా అర్థమయ్యే స్పష్టమైన పోలిక."
            )}
          </p>
        </div>

        {/* Desktop/Table View */}
        <div className={`hidden md:block rounded-3xl overflow-hidden backdrop-blur ${shell}`}>
          <div className={`grid grid-cols-[1.1fr_1.55fr_1.55fr_0.95fr] text-sm font-semibold ${headerBg}`}>
            <div className={`px-6 py-4 border-b ${rowBorder} ${isDark ? "text-white/80" : "text-[#0f1f1b]"}`}>
              {tr("Area", "ప్రాంతం")}
            </div>
            <div className={`px-6 py-4 border-b ${rowBorder} ${beforeText} flex items-center gap-2`}>
              <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${isDark ? "bg-white/10" : "bg-[#1a3c34] text-white"}`}>
                <X className="h-3.5 w-3.5" />
              </span>
              {tr("Before Us", "ముందు")}
            </div>
            <div className={`px-6 py-4 border-b ${rowBorder} ${afterText} flex items-center gap-2`}>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]">
                <Check className="h-3.5 w-3.5 text-[#003942]" />
              </span>
              {tr("After Us", "తర్వాత")}
            </div>
            <div className={`px-6 py-4 border-b ${rowBorder} ${isDark ? "text-white/80" : "text-[#0f1f1b]"}`}>
              {tr("Outcome", "ఫలితం")}
            </div>
          </div>

          {localizedComparisons.map((item, idx) => (
            <div
              key={item.feature}
              className={`grid grid-cols-[1.1fr_1.55fr_1.55fr_0.95fr] ${
                idx !== comparisons.length - 1 ? `border-b ${rowBorder}` : ""
              } ${idx % 2 === 0 ? (isDark ? "bg-white/[0.01]" : "bg-white") : (isDark ? "bg-black/10" : "bg-[#edf1ee]")}`}
            >
              <div className={`px-6 py-5 font-semibold ${isDark ? "text-white" : "text-[#0f1f1b]"}`}>
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
          {localizedComparisons.map((item) => (
            <div key={item.feature} className={`rounded-2xl p-5 backdrop-blur ${shell}`}>
              <h3 className={`text-base font-semibold ${isDark ? "text-white" : "text-[#0f1f1b]"}`}>
                {item.feature}
              </h3>

              <div className={`mt-3 rounded-xl p-3 ${isDark ? "bg-black/25" : "bg-[#edf1ee]"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${beforeText}`}>{tr("Before Us", "ముందు")}</p>
                <p className={`mt-1 text-sm leading-relaxed ${beforeText}`}>{item.before}</p>
              </div>

              <div className={`mt-2 rounded-xl p-3 ${isDark ? "bg-[#f6ff82]/10" : "bg-[#003942]/5"}`}>
                <p className={`text-xs font-semibold uppercase tracking-wide ${afterText}`}>{tr("After Us", "తర్వాత")}</p>
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
                <span className={gradientTextClass}>
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
                  : "bg-[#1a3c34] text-white"
              }
              shadow-[0_12px_30px_rgba(0,0,0,0.25)]
            `}
          >
            <span>{tr("Start now", "ఇప్పుడే ప్రారంభించండి")}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
