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
        "We start by deeply understanding your business, goals, target audience, and competitive landscape. This phase sets the foundation for everything we build.",
      points: [
        "In-depth consultation call to understand your vision",
        "Analysis of your current digital presence",
        "Competitor research and market positioning",
        "Define target audience and user personas",
        "Document requirements and success metrics",
        "Set project timeline and milestones",
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
        "Based on our discovery findings, we craft a comprehensive strategy that aligns with your business goals and maximizes ROI.",
      points: [
        "Define technology stack and architecture",
        "Create detailed project roadmap",
        "Plan content strategy and SEO approach",
        "Design user journey and conversion funnels",
        "Establish KPIs and measurement framework",
        "Present strategy for approval",
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
        "Our design team creates stunning, conversion-focused designs that reflect your brand's luxury positioning and resonate with your target audience.",
      points: [
        "Mood boards and design direction",
        "Wireframes for all key pages",
        "High-fidelity UI design mockups",
        "Mobile-responsive design variations",
        "Interactive prototypes for user testing",
        "Design revisions based on feedback",
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
        "Our expert developers bring the designs to life with clean, performant code. We build for speed, scalability, and maintainability.",
      points: [
        "Frontend development with modern frameworks",
        "Backend systems and API integration",
        "CRM and automation setup",
        "Performance optimization",
        "Cross-browser and device testing",
        "Security implementation and testing",
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
        "We handle the entire launch process, ensuring a smooth transition with zero downtime and maximum impact.",
      points: [
        "Pre-launch checklist and QA testing",
        "Domain and hosting configuration",
        "SSL certificate and security setup",
        "Analytics and tracking implementation",
        "SEO optimization and submission",
        "Launch day support and monitoring",
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
        "Post-launch, we continue to optimize, maintain, and grow your digital presence with ongoing support and data-driven improvements.",
      points: [
        "Performance monitoring and reporting",
        "A/B testing and conversion optimization",
        "Content updates and maintenance",
        "Feature enhancements and updates",
        "Scaling infrastructure as you grow",
        "Dedicated support and consultation",
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
}: {
  index: number;
  title: string;
  desc: string;
  isDark: boolean;
  onHoverStart: (e: React.PointerEvent<HTMLButtonElement>) => void;
  onHoverEnd: () => void;
}) {
  return (
    <motion.button
      type="button"
      onPointerEnter={onHoverStart}
      onPointerLeave={onHoverEnd}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 520, damping: 32, mass: 0.6 }}
      className={`
        relative w-full text-left rounded-3xl p-7
        ${isDark ? "bg-white/5" : "bg-white"}
        shadow-[0_18px_50px_rgba(0,0,0,0.12)]
        focus:outline-none
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`${isDark ? "text-white/60" : "text-slate-500"} text-xs font-semibold`}>
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className={`${isDark ? "text-white" : "text-slate-900"} mt-2 text-lg font-semibold`}>
            {title}
          </h3>
          <p className={`${isDark ? "text-white/55" : "text-slate-600"} mt-2 text-sm leading-relaxed`}>
            {desc}
          </p>
        </div>

        {/* Circle icon updated (solid). */}
        <div
          className={`
            h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-xs font-bold
            ${isDark ? "bg-[#f6ff82] text-[#003942]" : "bg-[#003942] text-white"}
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
    <div className="relative mt-10">
      <div className={`h-1 w-full rounded-full ${isDark ? "bg-white/10" : "bg-slate-200"} overflow-hidden`}>
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
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapperRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["center end", "end center"],
  });

  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.2 });

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";

  const heading = isDark ? "text-white" : "text-slate-900";
  const sub = isDark ? "text-white/55" : "text-slate-600";

  const selected = useMemo(
    () => (selectedStep === null ? null : steps[selectedStep]),
    [selectedStep]
  );

  // Hover-based UI: keep ESC close.
  useEffect(() => {
    if (selectedStep === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedStep(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [selectedStep]);

  const popupPos = useMemo(() => {
    if (!anchorRect || !cardsWrapperRef.current) return null;

    const wrapperRect = cardsWrapperRef.current.getBoundingClientRect();
    const margin = 12;
    const width = 360; // slightly smaller

    const anchorLeft = anchorRect.left - wrapperRect.left;
    const anchorRight = anchorRect.right - wrapperRect.left;
    const anchorTop = anchorRect.top - wrapperRect.top;

    const wrapperWidth = wrapperRect.width;

    let left = anchorRight + margin;
    if (left + width > wrapperWidth - margin) left = anchorLeft - width - margin;
    left = Math.max(margin, Math.min(left, wrapperWidth - width - margin));

    const top = anchorTop;

    return { left, top, width };
  }, [anchorRect]);

  const openStepHover = (idx: number, e: React.PointerEvent<HTMLButtonElement>) => {
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    setAnchorRect(rect);
    setSelectedStep(idx);
  };

  const closeHover = () => setSelectedStep(null);

  return (
    <section ref={sectionRef} className={`py-24 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium
              ${isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700"}
            `}
          >
            <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#003942]"}`} />
            <span>How We Work</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${heading}`}>
            Our <span className={`bg-clip-text text-transparent ${brandGradient}`}>Process</span>
          </h2>

          <p className={`text-lg max-w-2xl mx-auto ${sub}`}>
            A proven 6-step workflow designed to deliver exceptional results. Hover any card to learn more.
          </p>
        </motion.div>

        <div ref={cardsWrapperRef} className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {steps.map((s, idx) => (
              <StepCard
                key={s.title}
                index={idx}
                title={s.title}
                desc={s.desc}
                isDark={isDark}
                onHoverStart={(e) => openStepHover(idx, e)}
                onHoverEnd={closeHover}
              />
            ))}
          </div>

          <AnimatePresence>
            {selectedStep !== null && selected && popupPos && (
              <motion.div
                key={`process-popover-${selectedStep}`}
                initial={{ opacity: 0, scale: 0.98, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 8 }}
                transition={{ duration: 0.14, ease: "easeOut" }}
                className="absolute z-30"
                style={{
                  left: popupPos.left,
                  top: popupPos.top,
                  width: popupPos.width,
                }}
                onPointerEnter={() => setSelectedStep(selectedStep)}
                onPointerLeave={closeHover}
              >
                <div
                  className={`
                    rounded-3xl overflow-hidden
                    shadow-[0_24px_80px_rgba(0,0,0,0.20)]
                    ${isDark ? "bg-[#121316]" : "bg-white"}
                  `}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`${isDark ? "text-white/60" : "text-slate-500"} text-xs font-semibold`}>
                        Stage {String(selectedStep + 1).padStart(2, "0")}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStep(null);
                        }}
                        className={`
                          h-9 w-9 rounded-full flex items-center justify-center transition-colors
                          ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-slate-100 hover:bg-slate-200"}
                        `}
                        aria-label="Close"
                        type="button"
                      >
                        <X className={`w-4 h-4 ${isDark ? "text-white" : "text-slate-900"}`} />
                      </button>
                    </div>

                    <h3 className={`mt-2 text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                      {selected.details.heading}
                    </h3>

                    <div className={`mt-4 h-px w-full ${isDark ? "bg-white/10" : "bg-slate-200"}`} />

                    {/* ONLY bullet points (no description, no tick icons).
                        marker: lets you color the bullet. [web:462][web:461] */}
                    <ul
                      className={`
                        mt-4 space-y-2 pl-5 list-disc
                        ${isDark ? "marker:text-[#f6ff82]" : "marker:text-[#003942]"}
                      `}
                    >
                      {selected.details.points.map((point) => (
                        <li
                          key={point}
                          className={`text-sm leading-relaxed ${isDark ? "text-white/70" : "text-slate-700"}`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
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
