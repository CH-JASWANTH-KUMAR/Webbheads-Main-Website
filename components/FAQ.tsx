"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, LayoutGroup } from "framer-motion";

const faqs = [
  {
    question: "How does the design process work?",
    answer:
      "We start with a discovery call to understand your goals, target audience, and brand vision. Then we move through research, wireframing, design, development, and launch phases. You'll have full visibility and input at every stage.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary based on project scope. A property landing page takes 1-2 weeks. A full real estate website with CRM integration typically takes 4-8 weeks. Enterprise solutions may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "How do we communicate throughout the project?",
    answer:
      "We use a combination of scheduled video calls, WhatsApp for quick updates, and project management tools for tracking progress. You'll have a dedicated project manager as your single point of contact.",
  },
  {
    question: "Do you offer end-to-end product development?",
    answer:
      "Yes! We handle everything from strategy and design to development, testing, deployment, and ongoing support. Our premium packages include CRM setup, automation workflows, AI chatbots, and team training.",
  },
  {
    question: "What if I need more revisions?",
    answer:
      "All our packages include multiple revision rounds. If you need additional revisions beyond the included scope, we offer flexible add-on options. Our goal is to ensure you're 100% satisfied with the final result.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Absolutely. While we have standard packages, most of our clients need customized solutions. We'll work with you to create a tailored package that fits your specific requirements and budget.",
  },
  {
    question: "How can you assure a proper workflow?",
    answer:
      "We follow a proven agile methodology with clear milestones, regular check-ins, and transparent reporting. You'll always know exactly where your project stands and what's coming next.",
  },
  {
    question: "How can we get started?",
    answer:
      "Simple! Book a free consultation call using the button below. We'll discuss your needs, provide recommendations, and give you a clear proposal with pricing and timeline. No pressure, no obligations.",
  },
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = isDark ? "bg-transparent" : "bg-[#f3f7fb]";
  const heading = isDark ? "text-white" : "text-slate-900";
  const sub = isDark ? "text-white/55" : "text-slate-600";

  const card = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white border border-[#003942]/12 shadow-[0_12px_30px_rgba(15,23,42,0.08)]";

  const toggleFAQ = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const FaqItem = ({
    faq,
    index,
  }: {
    faq: (typeof faqs)[number];
    index: number;
  }) => {
    const isOpen = openIndex === index;

    return (
      <motion.div
        className={`
          w-full rounded-2xl md:rounded-3xl p-5 md:p-6 backdrop-blur select-none overflow-hidden
          ${card}
          ${isDark ? "hover:bg-white/10" : "hover:bg-slate-50"}
          ${isOpen ? (isDark ? "bg-white/10" : "bg-white") : ""}
        `}
      >
        <button
          type="button"
          onClick={() => toggleFAQ(index)}
          className="w-full text-left focus:outline-none"
          aria-expanded={isOpen}
        >
          <motion.div layout="position" className="flex items-center justify-between gap-4">
            <h3
              className={`text-base md:text-lg font-semibold pr-4 md:pr-8 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {faq.question}
            </h3>
            <div
              className={`
                h-8 w-8 md:h-10 md:w-10 shrink-0 rounded-full flex items-center justify-center
                transition-colors duration-300
                ${isDark ? "bg-white/10 text-white" : "bg-[#003942] text-white"}
              `}
            >
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center"
              >
                <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.div>
            </div>
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { type: "spring", stiffness: 170, damping: 24, mass: 0.35 },
            opacity: { duration: 0.22, ease: "easeOut" },
          }}
          className="overflow-hidden"
          aria-hidden={!isOpen}
        >
          <motion.p
            initial={false}
            animate={{ y: isOpen ? 0 : -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`
              pt-4 leading-relaxed text-sm md:text-base
              ${isDark ? "text-white/70" : "text-slate-700"}
            `}
          >
            {faq.answer}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs md:text-sm font-medium
              ${isDark ? "bg-white/5 text-white/75" : "bg-slate-100 text-slate-700"}
            `}
          >
            <span
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
              }`}
            />
            <span>FAQ</span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold ${heading} mb-4`}
          >
            Questions{" "}
            <span
              className={`bg-clip-text text-transparent ${brandGradient}`}
            >
              Answered
            </span>
          </h2>

          <p
            className={`${sub} text-base md:text-lg max-w-2xl mx-auto`}
          >
            Find answers to the most common questions below.
          </p>
        </div>

        {/* LayoutGroup ensures shared layout animations don't conflict */}
        <LayoutGroup>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
            <div className="space-y-4">
              {leftFaqs.map((faq, colIdx) => (
                <FaqItem key={faq.question} faq={faq} index={colIdx * 2} />
              ))}
            </div>

            <div className="space-y-4">
              {rightFaqs.map((faq, colIdx) => (
                <FaqItem key={faq.question} faq={faq} index={colIdx * 2 + 1} />
              ))}
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
