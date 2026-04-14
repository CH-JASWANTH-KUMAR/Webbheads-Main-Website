"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useLayoutEffect, useMemo, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

function ScrollLock() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0)
      document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
    };
  }, []);

  return null;
}

type CaseStudy = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "The Grand Estate",
    category: "Luxury Real Estate Website",
    description:
      "Complete digital transformation for a $50M luxury villa portfolio with 3D virtual tours and lead automation.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 2,
    title: "Skyline Towers",
    category: "Mobile App Development",
    description:
      "Premium mobile application for high-rise apartment sales with AR property viewing and instant booking.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 3,
    title: "Azure Heights",
    category: "AI Automation & CRM",
    description:
      "End-to-end CRM integration with AI-powered lead scoring and automated follow-up sequences.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 4,
    title: "Palm Residences",
    category: "Web Development",
    description:
      "Luxury beachfront property website with virtual tours and integrated booking system.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 5,
    title: "Urban Lofts",
    category: "Virtual Tours",
    description:
      "360° interactive property tours with hotspots and integrated floor plans.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 6,
    title: "Metro Plaza",
    category: "Branding & Design",
    description:
      "Complete brand identity and marketing collateral for commercial real estate.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 7,
    title: "Cedar Ridge",
    category: "Landing Page + SEO",
    description:
      "Conversion-first landing pages and local SEO to drive qualified buyer inquiries.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200&h=800",
  },
  {
    id: 8,
    title: "Harbor View",
    category: "Performance Rebuild",
    description:
      "Speed-focused rebuild with improved Lighthouse scores and streamlined lead capture.",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1200&h=800",
  },
];

const cardHoverVariants = { rest: {}, hover: {} };
const imageHoverVariants = { rest: { scale: 1 }, hover: { scale: 1.12 } };

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
const revealTransition = { duration: 0.5, ease: EASE_SMOOTH } as const;

const imageScaleTransition = {
  scale: { type: "tween" as const, ease: EASE_SMOOTH, duration: 1.05 },
};

const CARD_SHELL =
  "group relative block overflow-hidden rounded-2xl will-change-transform transition-all duration-200 ease-out " +
  "dark:shadow-[0_18px_50px_rgba(0,0,0,0.30)]";

function previewPlacement(i: number) {
  if (i === 0) return "col-span-12 sm:col-span-12 lg:col-span-6 row-span-2";
  if (i >= 1 && i <= 4)
    return "col-span-12 sm:col-span-6 lg:col-span-3 row-span-2";
  if (i === 5) return "col-span-12 sm:col-span-12 lg:col-span-6 row-span-2";
  return "col-span-12 sm:col-span-6 lg:col-span-3 row-span-2";
}

function CaseStudyCard({
  study,
  revealDelay = 0,
  className = "",
  imagePosClass = "object-center",
  isDark = false,
}: {
  study: CaseStudy;
  revealDelay?: number;
  className?: string;
  imagePosClass?: string;
  isDark?: boolean;
}) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ ...revealTransition, delay: revealDelay }}
      whileHover="hover"
      animate="rest"
      variants={cardHoverVariants}
      className={`${CARD_SHELL} ${className} ${
        isDark
          ? "shadow-[0_14px_38px_rgba(0,0,0,0.14)]"
          : "bg-white border border-[#dce8e2] hover:border-[#b8d0c5] hover:shadow-[0_4px_24px_rgba(26,60,52,0.07)] hover:-translate-y-[2px]"
      }`}
      style={{ minHeight: 0 }}
    >
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ minHeight: "100%" }}
      >
        <motion.img
          src={study.image}
          alt={study.title}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover ${imagePosClass} will-change-transform`}
          variants={imageHoverVariants}
          transition={imageScaleTransition}
          style={{ minHeight: "100%" }}
        />

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-4 top-4 right-4 flex items-start justify-between">
          <div
            className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] font-medium shadow-[0_8px_18px_rgba(0,0,0,0.10)] backdrop-blur-md ${
              isDark
                ? "bg-gray-800/80 text-white/90"
                : "bg-[#003942]/90 text-white"
            }`}
          >
            {study.category}
          </div>

          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-[0_8px_18px_rgba(0,0,0,0.12)] backdrop-blur-md ${
              isDark ? "bg-gray-800/80" : "bg-[#003942]/90"
            }`}
          >
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="absolute left-5 right-5 bottom-5">
          {/* Reduced font size to text-xl for better fit in shorter cards */}
          <h3 className="text-xl font-bold leading-tight text-white mb-2 drop-shadow-md line-clamp-2">
            {study.title}
          </h3>

          <p className="text-sm leading-snug text-white/90 mb-0 drop-shadow-sm line-clamp-2 opacity-90">
            {study.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default function CaseStudies() {
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();
  const { tr } = useLanguage();

  const gradientTextClass = isDark
    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]"
    : "bg-clip-text text-transparent bg-gradient-to-r from-[#1a3c34] via-[#155461] to-[#0b6a78]";
  const sectionBg = "bg-transparent";

  const heading = isDark ? "text-white" : "text-[#0f1f1b]";
  const sub = isDark ? "text-white/55" : "text-[#4a6660]";

  const localizedStudies = useMemo(
    () =>
      caseStudies.map((study) => ({
        ...study,
        title: tr(study.title, study.title),
        category:
          {
            "Luxury Real Estate Website": tr("Luxury Real Estate Website", "లగ్జరీ రియల్ ఎస్టేట్ వెబ్‌సైట్"),
            "Mobile App Development": tr("Mobile App Development", "మొబైల్ యాప్ డెవలప్‌మెంట్"),
            "AI Automation & CRM": tr("AI Automation & CRM", "AI ఆటోమేషన్ & CRM"),
            "Web Development": tr("Web Development", "వెబ్ డెవలప్‌మెంట్"),
            "Virtual Tours": tr("Virtual Tours", "వర్చువల్ టూర్స్"),
            "Branding & Design": tr("Branding & Design", "బ్రాండింగ్ & డిజైన్"),
            "Landing Page + SEO": tr("Landing Page + SEO", "ల్యాండింగ్ పేజ్ + SEO"),
            "Performance Rebuild": tr("Performance Rebuild", "పర్ఫార్మెన్స్ రీబిల్డ్"),
          }[study.category] ?? study.category,
        description:
          {
            "Complete digital transformation for a $50M luxury villa portfolio with 3D virtual tours and lead automation.": tr(
              "Complete digital transformation for a $50M luxury villa portfolio with 3D virtual tours and lead automation.",
              "3D వర్చువల్ టూర్స్ మరియు లీడ్ ఆటోమేషన్‌తో లగ్జరీ విల్లా పోర్ట్‌ఫోలియోకు పూర్తి డిజిటల్ మార్పు."
            ),
            "Premium mobile application for high-rise apartment sales with AR property viewing and instant booking.": tr(
              "Premium mobile application for high-rise apartment sales with AR property viewing and instant booking.",
              "AR ప్రాపర్టీ వ్యూయింగ్ మరియు ఇన్‌స్టంట్ బుకింగ్‌తో హై-రైజ్ అపార్ట్మెంట్ సేల్స్ కోసం ప్రిమియం మొబైల్ యాప్."
            ),
            "End-to-end CRM integration with AI-powered lead scoring and automated follow-up sequences.": tr(
              "End-to-end CRM integration with AI-powered lead scoring and automated follow-up sequences.",
              "AI ఆధారిత లీడ్ స్కోరింగ్ మరియు ఆటోమేటెడ్ ఫాలో-అప్స్‌తో ఎండ్-టు-ఎండ్ CRM ఇంటిగ్రేషన్."
            ),
            "Luxury beachfront property website with virtual tours and integrated booking system.": tr(
              "Luxury beachfront property website with virtual tours and integrated booking system.",
              "వర్చువల్ టూర్స్ మరియు ఇంటిగ్రేటెడ్ బుకింగ్ సిస్టమ్‌తో లగ్జరీ బీచ్‌ఫ్రంట్ ప్రాపర్టీ వెబ్‌సైట్."
            ),
            "360° interactive property tours with hotspots and integrated floor plans.": tr(
              "360° interactive property tours with hotspots and integrated floor plans.",
              "హాట్‌స్పాట్స్ మరియు ఇంటిగ్రేటెడ్ ఫ్లోర్ ప్లాన్స్‌తో 360° ఇంటరాక్టివ్ ప్రాపర్టీ టూర్స్."
            ),
            "Complete brand identity and marketing collateral for commercial real estate.": tr(
              "Complete brand identity and marketing collateral for commercial real estate.",
              "కమర్షియల్ రియల్ ఎస్టేట్ కోసం పూర్తి బ్రాండ్ ఐడెంటిటీ మరియు మార్కెటింగ్ మెటీరియల్."
            ),
            "Conversion-first landing pages and local SEO to drive qualified buyer inquiries.": tr(
              "Conversion-first landing pages and local SEO to drive qualified buyer inquiries.",
              "నాణ్యమైన కొనుగోలుదారుల ఇన్‌క్వైరీలను పెంచడానికి కన్వర్షన్-ఫోకస్ ల్యాండింగ్ పేజీలు మరియు లోకల్ SEO."
            ),
            "Speed-focused rebuild with improved Lighthouse scores and streamlined lead capture.": tr(
              "Speed-focused rebuild with improved Lighthouse scores and streamlined lead capture.",
              "మెరుగైన Lighthouse స్కోర్లు మరియు వేగవంతమైన లీడ్ క్యాప్చర్‌తో స్పీడ్-ఫోకస్ రీబిల్డ్."
            ),
          }[study.description] ?? study.description,
      })),
    [tr]
  );

  const previewStudies = useMemo(() => localizedStudies.slice(0, 6), [localizedStudies]);

  const modalBackdrop = isDark ? "bg-black" : "bg-white";
  const modalText = isDark ? "text-white" : "text-[#0f1f1b]";
  const modalSubText = isDark ? "text-white/70" : "text-[#4a6660]";
  const modalCloseBtn = isDark
    ? "bg-white/10 hover:bg-white/20"
    : "bg-black/5 hover:bg-black/10";
  const modalCloseIcon = isDark ? "text-white" : "text-slate-900";
  const viewAllPill = isDark
    ? "bg-white/10 text-white hover:bg-white/15"
    : "bg-[#003942] text-white";
  const labelPill = isDark
    ? "bg-white/5 text-white/75"
    : "bg-[#f6ff82] text-[#1a3c34]";

  return (
    <section id="portfolio" className={`py-20 md:py-28 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={revealTransition}
          className="mb-12"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium
                  ${labelPill}
                `}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isDark ? "bg-[#f6ff82]" : "bg-[#1a3c34]"
                  }`}
                />
                <span>{tr("Our Work", "మా పని")}</span>
              </div>

              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${heading}`}
              >
                {tr("Case", "కేస్")}{" "}
                <span className={gradientTextClass}>
                  {tr("Studies", "స్టడీస్")}
                </span>
              </h2>

              <p className={`text-lg ${sub}`}>
                {tr(
                  "See how we've helped leading real estate agencies transform their digital presence.",
                  "ప్రമുഖ రియల్ ఎస్టేట్ ఏజెన్సీల డిజిటల్ ప్రెజెన్స్‌ను మేము ఎలా మార్చామో చూడండి."
                )}
              </p>
            </div>

            {/* View All Button (Desktop/Tablet) */}
            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className={`
                  inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
                  transition-all hover:scale-105 active:scale-95
                  shadow-lg
                  ${viewAllPill}
                `}
              >
                {tr("View All Projects", "అన్ని ప్రాజెక్టులు చూడండి")}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 
           MASONRY GRID 
           - auto-rows reduced to [180px] on mobile and [200px] on md+ 
           - Effectively half the height of previous layout
        */}
        <div className="grid grid-cols-12 auto-rows-[140px] md:auto-rows-[160px] gap-4 md:gap-6 grid-flow-row-dense">
          {previewStudies.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              revealDelay={idx * 0.05}
              className={`${previewPlacement(idx)} h-full`}
              imagePosClass={
                idx >= 1 && idx <= 4
                  ? "object-center lg:object-[50%_15%]"
                  : "object-center"
              }
              isDark={isDark}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className={`
              inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold w-full justify-center
              shadow-lg
              ${viewAllPill}
            `}
          >
            {tr("View All Projects", "అన్ని ప్రాజెక్టులు చూడండి")}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            key="case-studies-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_SMOOTH }}
            className={`fixed inset-0 z-[100] ${modalBackdrop} overflow-y-auto`}
            onClick={() => setShowAll(false)}
          >
            <ScrollLock />

            <button
              onClick={() => setShowAll(false)}
              className={`fixed top-6 right-6 z-[110] w-12 h-12 rounded-full ${modalCloseBtn} flex items-center justify-center transition-colors shadow-lg`}
              aria-label={tr("Close", "మూసివేయండి")}
              type="button"
            >
              <X className={`w-6 h-6 ${modalCloseIcon}`} />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.45, ease: EASE_SMOOTH, delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="container mx-auto px-6 py-20"
            >
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2
                  className={`text-3xl md:text-5xl font-bold mb-4 ${modalText}`}
                >
                  {tr("All", "అన్ని")}{" "}
                  <span className={gradientTextClass}>
                    {tr("Case Studies", "కేస్ స్టడీస్")}
                  </span>
                </h2>
                <p className={`text-lg ${modalSubText}`}>
                  {tr(
                    `Explore our complete portfolio of ${caseStudies.length}+ successful projects delivered for clients worldwide.`,
                    `ప్రపంచవ్యాప్తంగా క్లయింట్ల కోసం డెలివర్ చేసిన ${caseStudies.length}+ విజయవంతమైన ప్రాజెక్టుల మా పూర్తి పోర్ట్‌ఫోలియోను చూడండి.`
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {localizedStudies.map((study) => (
                  <CaseStudyCard
                    key={study.id}
                    study={study}
                    className="aspect-[4/3] min-h-[340px] shadow-xl"
                    imagePosClass="object-center"
                    isDark={isDark}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
