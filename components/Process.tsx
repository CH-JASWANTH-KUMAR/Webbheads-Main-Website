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
import { useLanguage } from "@/context/LanguageContext";

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
  const { tr, language } = useLanguage();
  const gradientTextClass = isDark
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]'
    : 'text-transparent bg-clip-text bg-gradient-to-r from-[#1a3c34] via-[#155461] to-[#0b6a78]';

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

  const visibleSteps = steps.slice(0, 4).map((step) => {
    const localizedByTitle = {
      Discover: {
        title: tr("Discover", "కనుగొను"),
        desc: tr("Market scan, comparables & opportunity mapping", "మార్కెట్ స్కాన్, పోలికలు మరియు అవకాశాల మ్యాపింగ్"),
        details: {
          heading: tr("Discover", "కనుగొను"),
          overview: tr("Understand the market before touching the property.", "ప్రాపర్టీపై పని ప్రారంభించే ముందు మార్కెట్‌ను పూర్తిగా అర్థం చేసుకోండి."),
          deliverable: tr("Opportunity Brief + Market Snapshot", "అవకాశాల బ్రీఫ్ + మార్కెట్ స్నాప్‌షాట్"),
          duration: tr("3-5 Days", "3-5 రోజులు"),
          points:
            language === "te"
              ? [
                  "లక్ష్యాలు, పరిమితులు, ఫలితాలపై కిక్ఆఫ్ సమావేశం",
                  "లోకల్ మార్కెట్ పోలికలు - యాక్టివ్ మరియు ఇటీవల అమ్ముడైనవి",
                  "బయ్యర్ పర్సోనా మరియు డిమాండ్ సెగ్మెంట్ మ్యాపింగ్",
                  "ప్లానింగ్‌కు ముందు రిస్క్ మరియు అవకాశాల సమీక్ష",
                  "క్యాంపెయిన్ ట్రాకింగ్ కోసం బేస్‌లైన్ KPIలు ఫిక్స్ చేయడం",
                ]
              : [],
        },
      },
      Define: {
        title: tr("Define", "నిర్వచించు"),
        desc: tr("Data-backed pricing, channels & campaign plan", "డేటా ఆధారిత ధరలు, ఛానెల్స్ మరియు క్యాంపెయిన్ ప్లాన్"),
        details: {
          heading: tr("Define", "నిర్వచించు"),
          overview: tr("Convert insights into a locked execution blueprint.", "ఇన్‌సైట్స్‌ను అమలు చేయగల బ్లూప్రింట్‌గా మార్చండి."),
          deliverable: tr("Go-To-Market Blueprint", "గో-టు-మార్కెట్ బ్లూప్రింట్"),
          duration: tr("2-4 Days", "2-4 రోజులు"),
          points:
            language === "te"
              ? [
                  "స్పష్టమైన కారణాలతో ధర పరిధి నిర్ణయం",
                  "పోర్టల్స్, సోషల్, డైరెక్ట్ రీచ్‌ల ఛానెల్ మిక్స్",
                  "లాంచ్ సీక్వెన్స్ మరియు మైల్స్‌టోన్స్‌తో టైమ్‌లైన్",
                  "బడ్జెట్ కేటాయింపు మరియు లీడ్ ప్రొజెక్షన్స్",
                  "క్లయింట్ సైన్-ఆఫ్‌కు సిద్ధమైన స్ట్రాటజీ డెక్",
                ]
              : [],
        },
      },
      Design: {
        title: tr("Design", "డిజైన్"),
        desc: tr("Assets built to attract qualified buyers", "నాణ్యమైన కొనుగోలుదారులను ఆకర్షించే అసెట్స్"),
        details: {
          heading: tr("Design", "డిజైన్"),
          overview: tr("Every asset crafted for conversion, not just attention.", "ప్రతి అసెట్ దృష్టి కోసం కాదు, కన్వర్షన్ కోసం రూపొందించబడుతుంది."),
          deliverable: tr("Listing Asset Kit", "లిస్టింగ్ అసెట్ కిట్"),
          duration: tr("4-7 Days", "4-7 రోజులు"),
          points:
            language === "te"
              ? [
                  "టార్గెట్ బయ్యర్‌కు సరిపోయే ఫోటో, వీడియో బ్రీఫ్",
                  "స్పష్టమైన ఫీచర్ హైరార్కీతో లిస్టింగ్ కథనం",
                  "వర్చువల్ టూర్ ఫ్లో మ్యాపింగ్",
                  "ప్రతి ఛానెల్‌కు సరిపడే యాడ్ క్రియేటివ్స్",
                  "ల్యాండింగ్ పేజ్ కాపీ మరియు ఇన్‌క్వైరీ ఫారమ్ మెరుగుదల",
                ]
              : [],
        },
      },
      Deliver: {
        title: tr("Deliver", "డెలివర్"),
        desc: tr("Execute, close & feed the next cycle", "అమలు చేసి, క్లోజ్ చేసి, తదుపరి చక్రానికి సిద్ధం చేయండి"),
        details: {
          heading: tr("Deliver", "డెలివర్"),
          overview: tr("Full execution - from first lead to signed contract.", "మొదటి లీడ్ నుండి సైన్ చేసిన కాంట్రాక్ట్ వరకు పూర్తి అమలు."),
          deliverable: tr("Deal Closure + Performance Review", "డీల్ క్లోజర్ + పనితీరు సమీక్ష"),
          duration: tr("Through Closure", "క్లోజర్ వరకు"),
          points:
            language === "te"
              ? [
                  "క్యాంపెయిన్ లాంచ్ మరియు లీడ్ క్యాప్చర్ ఆపరేషన్స్",
                  "క్వాలిఫికేషన్, ఫాలో-అప్ మరియు CRM అప్డేట్స్",
                  "ఆఫర్ మేనేజ్‌మెంట్ మరియు నెగోషియేషన్ సపోర్ట్",
                  "సెటిల్‌మెంట్ మరియు డాక్యుమెంటేషన్ కోఆర్డినేషన్",
                  "తదుపరి దశ కోసం పోస్ట్-డీల్ రివ్యూ",
                ]
              : [],
        },
      },
    } as const;

    const localized = localizedByTitle[step.title as keyof typeof localizedByTitle];
    return localized
      ? {
          ...step,
          title: localized.title,
          desc: localized.desc,
          details: {
            ...step.details,
            heading: localized.details.heading,
            overview: localized.details.overview,
            deliverable: localized.details.deliverable,
            duration: localized.details.duration,
            points: localized.details.points.length > 0 ? localized.details.points : step.details.points,
          },
        }
      : step;
  });

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
              <span className="text-sm font-medium text-[#003942]">{tr("The WebbHeads Method", "WebbHeads విధానం")}</span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#003942]'}`}>
              {tr("Our", "మా")} <span className={gradientTextClass}>{tr("4D Process", "4D ప్రక్రియ")}</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-[#4a6660]'}`}>
              {tr(
                "Hover over each step to explore it in detail. Discover, Define, Design, Deliver gives you a repeatable system with clear outputs at every stage.",
                "ప్రతి దశపై హోవర్ చేస్తే పూర్తి వివరాలు చూడవచ్చు. ప్రతి దశలో స్పష్టమైన ఫలితాలు ఇచ్చే పునరావృత వ్యవస్థ ఇది."
              )}
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
                        className={`absolute bottom-full mb-4 w-[min(24rem,calc(100vw-2rem))] lg:w-80 z-50 pointer-events-none ${getHoverPositionClass(index)}`}
                      >
                        <div className={`rounded-2xl shadow-[0_18px_48px_rgba(0,0,0,0.22)] border overflow-hidden ${isDark ? 'bg-[#002428] border-[#003942]' : 'bg-white border-[#dce8e2]'}`}>
                          {/* Header with gradient */}
                          <div className="bg-gradient-to-r from-[#f6ff82] via-[#e8f074] to-[#d4e066] px-4 py-3.5">
                            <div className="flex items-center gap-3 text-left">
                              <div className="w-10 h-10 rounded-xl bg-[#003942]/20 flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-5 h-5 text-[#003942]" />
                              </div>
                              <div className="min-w-0">
                                <span className="block text-[#003942] text-[11px] font-semibold uppercase tracking-[0.12em]">
                                  Stage 0{index + 1}
                                </span>
                                <h3 className="text-base font-bold leading-tight text-[#003942]">
                                  {step.details.heading}
                                </h3>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-4 space-y-4 text-left">
                            {/* Overview */}
                            <p className={`text-[13px] leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4a6660]'}`}>
                              {step.details.overview}
                            </p>

                            {/* Deliverable + Duration */}
                            <div className={`grid grid-cols-1 gap-2.5 rounded-xl p-3 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-[#f8faf8] border border-[#e8f0ec]'}`}>
                              <div className="flex items-start gap-2">
                                <ClipboardList className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-[#f6ff82]' : 'text-[#1a3c34]'}`} />
                                <span className={`text-xs leading-relaxed font-medium ${isDark ? 'text-white' : 'text-[#1a3c34]'}`}>
                                  {tr("Deliverable", "డెలివరబుల్")}: {step.details.deliverable}
                                </span>
                              </div>
                              <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-[#4a6660]'}`}>
                                {tr("Typical timeline", "సాధారణ టైమ్‌లైన్")}: {step.details.duration}
                              </p>
                            </div>

                            {/* Key Points - Show first 3 */}
                            <div>
                              <h4 className={`font-semibold mb-2 text-xs uppercase tracking-[0.1em] ${isDark ? 'text-white/85' : 'text-[#003942]'}`}>
                                {tr("What You Get", "మీకు లభించేవి")}
                              </h4>
                              <ul className="space-y-2">
                                {step.details.points.slice(0, 3).map((point, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isDark ? 'text-[#f6ff82]' : 'text-[#1a3c34]'}`} />
                                    <span className={isDark ? 'text-gray-300' : 'text-[#4a6660]'}>
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* More Points Indicator */}
                            {step.details.points.length > 3 && (
                              <p className={`text-xs italic ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                + {step.details.points.length - 3} {tr("more included", "ఇంకా ఉన్నాయి")}
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
