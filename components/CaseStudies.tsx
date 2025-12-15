"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useLayoutEffect, useMemo, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

// --- Sub-component to handle scroll locking strictly within the Modal's lifecycle ---
function ScrollLock() {
  useLayoutEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const originalStyle = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

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
];

const cardHoverVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

const imageHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.12 },
};

const revealTransition = { duration: 0.35, ease: "easeOut" as const };

const imageScaleTransition = {
  scale: {
    type: "tween" as const,
    ease: [0.22, 1, 0.36, 1] as const,
    duration: 1.05,
  },
};

const CARD_SHELL =
  "group relative block overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.18)] will-change-transform";

// LANDSCAPE ratio (4:3) instead of portrait (3:4). [web:202]
const CARD_ASPECT = "relative aspect-[4/3] overflow-hidden";

const OVERLAY_WASH = "pointer-events-none absolute inset-0 bg-black/18";
const OVERLAY_BOTTOM =
  "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent";

const CHIP =
  "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium bg-black/35 text-white";

const CTA =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold bg-black/35 text-white transition-colors duration-300 hover:bg-black/45";

const TITLE_SHADOW = "drop-shadow-[0_10px_18px_rgba(0,0,0,0.55)]";
const BODY_SHADOW = "drop-shadow-[0_8px_14px_rgba(0,0,0,0.45)]";

function CaseStudyCard({
  study,
  revealDelay = 0,
}: {
  study: CaseStudy;
  revealDelay?: number;
}) {
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...revealTransition, delay: revealDelay }}
      whileHover="hover"
      animate="rest"
      variants={cardHoverVariants}
      className={CARD_SHELL}
    >
      <div className={CARD_ASPECT}>
        <motion.img
          src={study.image}
          alt={study.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
          variants={imageHoverVariants}
          transition={imageScaleTransition}
        />

        <div className={OVERLAY_WASH} />
        <div className={OVERLAY_BOTTOM} />

        <div className="absolute left-4 top-4 right-4">
          <div className={CHIP}>{study.category}</div>
        </div>

        <div className="absolute left-4 right-4 bottom-4 text-white">
          <h3 className={`text-lg font-semibold leading-snug ${TITLE_SHADOW}`}>
            {study.title}
          </h3>

          <p
            className={`mt-1 text-xs leading-relaxed text-white/90 line-clamp-2 ${BODY_SHADOW}`}
          >
            {study.description}
          </p>

          <div className="mt-4">
            <div className={CTA}>
              <span className="tracking-wide">Read more</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function CaseStudies() {
  const [showAll, setShowAll] = useState(false);
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";

  const heading = isDark ? "text-white" : "text-slate-900";
  const sub = isDark ? "text-white/55" : "text-slate-600";

  const preview = useMemo(() => caseStudies.slice(0, 3), []);

  const modalBackdrop = isDark ? "bg-black" : "bg-white";
  const modalText = isDark ? "text-white" : "text-slate-900";
  const modalSubText = isDark ? "text-white/70" : "text-slate-600";
  const modalCloseBtn = isDark
    ? "bg-white/10 hover:bg-white/20"
    : "bg-black/5 hover:bg-black/10";
  const modalCloseIcon = isDark ? "text-white" : "text-slate-900";

  return (
    <section className={`py-20 ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={revealTransition}
          className="mb-12"
        >
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium
              ${isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700"}
            `}
          >
            <span className="w-2 h-2 bg-[#f6ff82] rounded-full" />
            <span>Our Work</span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 ${heading}`}
          >
            Case{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Studies
            </span>
          </h2>

          <p className={`max-w-lg ${sub}`}>
            See how we&apos;ve helped leading real estate agencies transform
            their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((study, idx) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              revealDelay={idx * 0.06}
            />
          ))}

          <motion.button
            type="button"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...revealTransition, delay: 0.22 }}
            whileHover={{ y: -6, scale: 1.01 }}
            onClick={() => setShowAll(true)}
            className={`
              relative overflow-hidden rounded-2xl cursor-pointer
              shadow-[0_18px_45px_rgba(0,0,0,0.18)]
              aspect-[4/3] flex items-center justify-center
              ${isDark ? "bg-white/5" : "bg-white"}
            `}
          >
            <div className="text-center px-8">
              <h3
                className={`text-2xl font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                View All Projects
              </h3>
              <p
                className={`mt-2 text-sm ${
                  isDark ? "text-white/60" : "text-slate-600"
                }`}
              >
                Explore our complete portfolio
              </p>

              <div className="mt-6 inline-flex">
                <span
                  className={`
                    inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold
                    ${brandGradient} ${isDark ? "text-[#003942]" : "text-white"}
                    transition-opacity hover:opacity-95
                    shadow-[0_10px_24px_rgba(0,0,0,0.12)]
                  `}
                >
                  View All
                </span>
              </div>
            </div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showAll && (
          <motion.div
            key="case-studies-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ transform: "translateZ(0)" }}
            className={`fixed inset-0 z-50 ${modalBackdrop} overflow-y-auto will-change-opacity`}
            onClick={() => setShowAll(false)}
          >
            <ScrollLock />

            <button
              onClick={() => setShowAll(false)}
              className={`fixed top-6 right-6 z-50 w-12 h-12 rounded-full ${modalCloseBtn} flex items-center justify-center transition-colors`}
              aria-label="Close"
              type="button"
            >
              <X className={`w-6 h-6 ${modalCloseIcon}`} />
            </button>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
              onClick={(e) => e.stopPropagation()}
              className="container mx-auto px-6 py-20"
            >
              <div className="text-center mb-12">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-3 ${modalText}`}
                >
                  All{" "}
                  <span
                    className={`bg-clip-text text-transparent ${brandGradient}`}
                  >
                    Case Studies
                  </span>
                </h2>
                <p className={modalSubText}>
                  {caseStudies.length} successful projects delivered
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {caseStudies.map((study) => (
                  <CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
