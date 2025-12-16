"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { X } from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const ACTIVE_YELLOW_ALPHA = 0.75;
const ACTIVE_YELLOW = `rgba(246,255,130,${ACTIVE_YELLOW_ALPHA})`;

const steps = [
  {
    title: "Discovery",
    desc: "Understanding your vision",
    details: {
      heading: "Discovery Phase",
      overview:
        "We start by deeply understanding your business, goals, target audience, and competitive landscape.",
      points: [
        "In-depth consultation call",
        "Analysis of current presence",
        "Competitor research",
        "Define target audience",
        "Document requirements",
        "Set project timeline",
      ],
      duration: "1-2 Weeks",
    },
  },
  {
    title: "Strategy",
    desc: "Planning the roadmap",
    details: {
      heading: "Strategy Phase",
      overview:
        "We craft a comprehensive strategy that aligns with your business goals and maximizes ROI.",
      points: [
        "Define technology stack",
        "Create project roadmap",
        "Plan content strategy",
        "Design user journey",
        "Establish KPIs",
        "Present strategy",
      ],
      duration: "1 Week",
    },
  },
  {
    title: "Design",
    desc: "Crafting the visual identity",
    details: {
      heading: "Design Phase",
      overview:
        "Our design team creates stunning, conversion-focused designs that reflect your brand.",
      points: [
        "Mood boards direction",
        "Wireframes for key pages",
        "High-fidelity UI mockups",
        "Mobile-responsive variations",
        "Interactive prototypes",
        "Design revisions",
      ],
      duration: "2-3 Weeks",
    },
  },
  {
    title: "Development",
    desc: "Building the solution",
    details: {
      heading: "Development Phase",
      overview:
        "Our expert developers bring the designs to life with clean, performant code.",
      points: [
        "Frontend development",
        "Backend & API integration",
        "CRM and automation setup",
        "Performance optimization",
        "Cross-browser testing",
        "Security implementation",
      ],
      duration: "3-4 Weeks",
    },
  },
  {
    title: "Launch",
    desc: "Going live to the world",
    details: {
      heading: "Launch Phase",
      overview:
        "We handle the entire launch process, ensuring a smooth transition with zero downtime.",
      points: [
        "Pre-launch QA testing",
        "Domain configuration",
        "SSL certificate setup",
        "Analytics implementation",
        "SEO submission",
        "Launch day support",
      ],
      duration: "1 Week",
    },
  },
  {
    title: "Growth",
    desc: "Scaling and optimization",
    details: {
      heading: "Growth Phase",
      overview:
        "Post-launch, we continue to optimize and grow your digital presence.",
      points: [
        "Performance monitoring",
        "A/B testing",
        "Content updates",
        "Feature enhancements",
        "Scaling infrastructure",
        "Dedicated support",
      ],
      duration: "Ongoing",
    },
  },
];

function StepCard({
  index,
  title,
  desc,
  isDark,
  onHoverStart,
  onHoverEnd,
  onClick,
}: {
  index: number;
  title: string;
  desc: string;
  isDark: boolean;
  onHoverStart: (e: React.PointerEvent<HTMLButtonElement>) => void;
  onHoverEnd: () => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <motion.button
      type="button"
      onPointerEnter={onHoverStart}
      onPointerLeave={onHoverEnd}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full text-left rounded-3xl p-6 md:p-7
        ${isDark ? "bg-white/5" : "bg-white"}
        shadow-[0_18px_50px_rgba(0,0,0,0.12)]
        focus:outline-none select-none
        h-full flex flex-col justify-start
      `}
    >
      <div className="flex items-start justify-between gap-4 w-full">
        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <p
            className={`${
              isDark ? "text-white/60" : "text-slate-500"
            } text-xs font-semibold`}
          >
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            className={`${
              isDark ? "text-white" : "text-slate-900"
            } mt-2 text-xl font-bold leading-tight`}
          >
            {title}
          </h3>
          <p
            className={`${
              isDark ? "text-white/55" : "text-slate-600"
            } mt-2 text-sm leading-relaxed`}
          >
            {desc}
          </p>
        </div>

        {/* Number Circle */}
        <div
          className={`
            h-10 w-10 shrink-0 rounded-full flex items-center justify-center 
            text-sm font-bold
            ${isDark ? "bg-[#2B2D31] text-white" : "bg-[#003942] text-white"}
          `}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
    </motion.button>
  );
}

function ProgressLine({
  isDark,
  progress,
}: {
  isDark: boolean;
  progress: any;
}) {
  return (
    <div className="relative mt-16 hidden md:block">
      <div
        className={`h-1 w-full rounded-full ${
          isDark ? "bg-white/10" : "bg-slate-200"
        } overflow-hidden`}
      >
        <motion.div
          className="h-full"
          style={{
            scaleX: progress,
            transformOrigin: "0% 50%",
            backgroundColor: isDark ? ACTIVE_YELLOW : "#003942",
          }}
        />
      </div>
    </div>
  );
}

export default function Process() {
  const { isDark } = useTheme();

  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center end", "end center"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.2,
  });

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";

  const heading = isDark ? "text-white" : "text-slate-900";
  const sub = isDark ? "text-white/55" : "text-slate-600";

  const selected = useMemo(
    () => (selectedStep === null ? null : steps[selectedStep]),
    [selectedStep]
  );

  useEffect(() => {
    if (selectedStep === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedStep(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedStep]);

  const popupPos = useMemo(() => {
    if (isMobile || !anchorRect || !cardsWrapperRef.current) return null;

    const wrapperRect = cardsWrapperRef.current.getBoundingClientRect();
    const margin = 12;
    const width = 360;

    const anchorLeft = anchorRect.left - wrapperRect.left;
    const anchorRight = anchorRect.right - wrapperRect.left;
    const anchorTop = anchorRect.top - wrapperRect.top;

    const wrapperWidth = wrapperRect.width;

    let left = anchorRight + margin;
    if (left + width > wrapperWidth - margin)
      left = anchorLeft - width - margin;
    left = Math.max(margin, Math.min(left, wrapperWidth - width - margin));

    const top = anchorTop;

    return { left, top, width };
  }, [anchorRect, isMobile]);

  const handleInteraction = (
    idx: number,
    e:
      | React.PointerEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement>,
    type: "hover" | "click"
  ) => {
    if (isMobile && type === "hover") return;
    if (!isMobile && type === "click") return;

    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    setAnchorRect(rect);
    setSelectedStep(idx);
  };

  const closeHover = () => {
    if (!isMobile) setSelectedStep(null);
  };

  return (
    <section ref={sectionRef} className={`py-16 md:py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs md:text-sm font-medium
              ${
                isDark
                  ? "bg-white/5 text-white/75"
                  : "bg-slate-100 text-slate-700"
              }
            `}
          >
            <span
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
              }`}
            />
            <span>How We Work</span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${heading}`}>
            Our{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Process
            </span>
          </h2>

          <p className={`text-base md:text-lg max-w-2xl mx-auto ${sub}`}>
            A proven 6-step workflow designed to deliver exceptional results.
            {isMobile ? " Tap" : " Hover"} any card to learn more.
          </p>
        </motion.div>

        <div ref={cardsWrapperRef} className="relative">
          {/* 
            Responsive Grid updated to 3 columns on large screens.
            This creates a 2-row layout (3x2) for 6 items, preventing overcrowding.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <StepCard
                key={s.title}
                index={idx}
                title={s.title}
                desc={s.desc}
                isDark={isDark}
                onHoverStart={(e) => handleInteraction(idx, e, "hover")}
                onHoverEnd={closeHover}
                onClick={(e) => handleInteraction(idx, e, "click")}
              />
            ))}
          </div>

          <AnimatePresence>
            {selectedStep !== null && selected && (
              <>
                {isMobile ? (
                  <motion.div
                    key="mobile-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setSelectedStep(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.9, opacity: 0, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className={`
                        w-full max-w-sm rounded-3xl overflow-hidden
                        shadow-2xl
                        ${isDark ? "bg-[#121316]" : "bg-white"}
                      `}
                    >
                      <PopupContent
                        isDark={isDark}
                        selected={selected}
                        stepIndex={selectedStep}
                        onClose={() => setSelectedStep(null)}
                      />
                    </motion.div>
                  </motion.div>
                ) : (
                  popupPos && (
                    <motion.div
                      key={`process-popover-${selectedStep}`}
                      initial={{ opacity: 0, scale: 0.98, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 8 }}
                      transition={{ duration: 0.14, ease: "easeOut" }}
                      className="absolute z-30 pointer-events-none xl:pointer-events-auto"
                      style={{
                        left: popupPos.left,
                        top: popupPos.top,
                        width: popupPos.width,
                      }}
                    >
                      <div
                        className={`
                          rounded-3xl overflow-hidden
                          shadow-[0_24px_80px_rgba(0,0,0,0.20)]
                          ${isDark ? "bg-[#121316]" : "bg-white"}
                        `}
                      >
                        <PopupContent
                          isDark={isDark}
                          selected={selected}
                          stepIndex={selectedStep}
                          onClose={() => setSelectedStep(null)}
                        />
                      </div>
                    </motion.div>
                  )
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        <div className="max-w-6xl mx-auto">
          <ProgressLine isDark={isDark} progress={progress} />
        </div>
      </div>
    </section>
  );
}

function PopupContent({
  isDark,
  selected,
  stepIndex,
  onClose,
}: {
  isDark: boolean;
  selected: (typeof steps)[number];
  stepIndex: number;
  onClose: () => void;
}) {
  return (
    <div className="p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`${
            isDark ? "text-white/60" : "text-slate-500"
          } text-xs font-semibold`}
        >
          Stage {String(stepIndex + 1).padStart(2, "0")}
        </span>

        <button
          onClick={onClose}
          className={`
            h-8 w-8 rounded-full flex items-center justify-center transition-colors
            ${
              isDark
                ? "bg-white/5 hover:bg-white/10"
                : "bg-slate-100 hover:bg-slate-200"
            }
          `}
          aria-label="Close"
          type="button"
        >
          <X
            className={`w-4 h-4 ${isDark ? "text-white" : "text-slate-900"}`}
          />
        </button>
      </div>

      <h3
        className={`mt-2 text-lg font-bold ${
          isDark ? "text-white" : "text-slate-900"
        }`}
      >
        {selected.details.heading}
      </h3>

      <div
        className={`mt-4 h-px w-full ${
          isDark ? "bg-white/10" : "bg-slate-200"
        }`}
      />

      <ul
        className={`
          mt-4 space-y-2 pl-5 list-disc
          ${isDark ? "marker:text-[#f6ff82]" : "marker:text-[#003942]"}
        `}
      >
        {selected.details.points.map((point) => (
          <li
            key={point}
            className={`text-sm leading-relaxed ${
              isDark ? "text-white/70" : "text-slate-700"
            }`}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
