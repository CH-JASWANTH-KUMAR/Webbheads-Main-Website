"use client";

/**
 * FAQ SECTION — WebbHeads theme (2 equal columns, no sidebar) — NO BORDERS
 * Smooth dropdown effect using CSS grid rows (0fr -> 1fr), inspired by ActivityDropdown.
 * This avoids Framer Motion layout animations that can make siblings feel like they animate. [web:67][web:71]
 */

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

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
  const sectionBg = "bg-transparent";
  const heading = isDark ? "text-white" : "text-slate-900";
  const sub = isDark ? "text-white/55" : "text-slate-600";

  const card = isDark
    ? "bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

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
      <div className="w-full">
        {/* Header */}
        <button
          type="button"
          onClick={() => toggleFAQ(index)}
          className={`
            w-full text-left rounded-3xl p-6 backdrop-blur select-none
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${card}
            ${isDark ? "hover:bg-white/10" : "hover:bg-slate-50"}
            ${isOpen ? (isDark ? "bg-white/10" : "bg-white") : ""}
            focus:outline-none
          `}
        >
          <div className="flex items-center justify-between gap-4">
            <h3
              className={`text-lg font-semibold pr-8 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {faq.question}
            </h3>

            <div
              className={`
                h-10 w-10 shrink-0 rounded-full flex items-center justify-center
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${isDark ? "bg-white/10 text-white" : "bg-slate-900 text-white"}
              `}
            >
              {isOpen ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </div>
          </div>

          {/* Answer (ActivityDropdown-style grid reveal) [web:67][web:71] */}
          <div
            className={`
              grid
              transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
              ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
            `}
          >
            <div className="overflow-hidden">
              <p
                className={`
                  mt-4 leading-relaxed
                  transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${isOpen ? "translate-y-0" : "-translate-y-1"}
                  ${isDark ? "text-white/70" : "text-slate-600"}
                `}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        </button>
      </div>
    );
  };

  return (
    <section className={`relative py-24 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium backdrop-blur
              border border-transparent bg-origin-border
              ${isDark ? "text-white/75" : "text-slate-700"}
              [background-image:linear-gradient(${
                isDark ? "#05060A" : "#ffffff"
              },${isDark ? "#05060A" : "#ffffff"}),linear-gradient(90deg,#f6ff82,#003942)]
            `}
          >
            <span className="w-2 h-2 bg-[#f6ff82] rounded-full" />
            <span>FAQ</span>
          </div>

          <h2 className={`text-4xl md:text-5xl font-bold ${heading} mb-4`}>
            Questions{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Answered
            </span>
          </h2>

          <p className={`${sub} text-lg max-w-2xl mx-auto`}>
            Find answers to the most common questions below.
          </p>
        </div>

        {/* Two equal columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}
