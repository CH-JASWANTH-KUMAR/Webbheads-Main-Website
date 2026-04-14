"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, LayoutGroup, MotionConfig, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

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
  const { tr } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const gradientTextClass = isDark
    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]"
    : "bg-clip-text text-transparent bg-gradient-to-r from-[#1a3c34] via-[#155461] to-[#0b6a78]";
  const sectionBg = "bg-transparent";
  const heading = isDark ? "text-white" : "text-[#0f1f1b]";
  const sub = isDark ? "text-white/55" : "text-[#4a6660]";

  const card = isDark
    ? "bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white border border-[#dce8e2] shadow-[0_4px_24px_rgba(26,60,52,0.07)]";

  const localizedFaqs = faqs.map((faq) => {
    const map = {
      "How does the design process work?": {
        q: "డిజైన్ ప్రక్రియ ఎలా జరుగుతుంది?",
        a: "ముందుగా మీ లక్ష్యాలు, టార్గెట్ ఆడియన్స్, మరియు బ్రాండ్ విజన్‌ను అర్థం చేసుకోవడానికి డిస్కవరీ కాల్ చేస్తాం. తర్వాత రీసెర్చ్, వైర్‌ఫ్రేమ్, డిజైన్, డెవలప్‌మెంట్, మరియు లాంచ్ దశల్లో ముందుకు వెళ్తాం.",
      },
      "How long does it take to complete a project?": {
        q: "ఒక ప్రాజెక్ట్ పూర్తి కావడానికి ఎంత సమయం పడుతుంది?",
        a: "ప్రాజెక్ట్ విస్తృతిపై ఆధారపడి టైమ్‌లైన్ మారుతుంది. ల్యాండింగ్ పేజ్ 1-2 వారాలు, పూర్తి వెబ్‌సైట్ సాధారణంగా 4-8 వారాలు పడుతుంది.",
      },
      "How do we communicate throughout the project?": {
        q: "ప్రాజెక్ట్ మొత్తం సమయంలో కమ్యూనికేషన్ ఎలా ఉంటుంది?",
        a: "షెడ్యూల్ చేసిన వీడియో కాల్స్, త్వరిత అప్డేట్స్ కోసం WhatsApp, మరియు ప్రోగ్రెస్ ట్రాకింగ్ టూల్స్ ద్వారా కమ్యూనికేట్ చేస్తాం.",
      },
      "Do you offer end-to-end product development?": {
        q: "మీరు ఎండ్-టు-ఎండ్ ప్రోడక్ట్ డెవలప్‌మెంట్ అందిస్తారా?",
        a: "అవును. స్ట్రాటజీ, డిజైన్, డెవలప్‌మెంట్, టెస్టింగ్, డిప్లాయ్‌మెంట్, మరియు కొనసాగింపు సపోర్ట్ వరకు పూర్తిగా నిర్వహిస్తాం.",
      },
      "What if I need more revisions?": {
        q: "నాకు మరిన్ని రివిజన్లు కావాలంటే?",
        a: "మా ప్యాకేజీల్లో రివిజన్ రౌండ్లు ఉంటాయి. అవసరమైతే అదనపు రివిజన్లను కూడా ఫ్లెక్సిబుల్‌గా అందిస్తాం.",
      },
      "Do you offer custom solutions?": {
        q: "మీరు కస్టమ్ పరిష్కారాలు ఇస్తారా?",
        a: "ఖచ్చితంగా. మీ అవసరాలు, బడ్జెట్‌కు సరిపోయేలా టైలర్డ్ ప్యాకేజ్ రూపొందిస్తాం.",
      },
      "How can you assure a proper workflow?": {
        q: "సరైన వర్క్‌ఫ్లోను మీరు ఎలా నిర్ధారిస్తారు?",
        a: "క్లియర్ మైల్స్‌టోన్స్, రెగ్యులర్ చెక్-ఇన్స్, మరియు ట్రాన్స్‌పరెంట్ రిపోర్టింగ్‌తో నిరూపిత అజైల్ విధానాన్ని అనుసరిస్తాం.",
      },
      "How can we get started?": {
        q: "మనం ఎలా ప్రారంభించాలి?",
        a: "కింద ఉన్న బటన్ ద్వారా ఫ్రీ కన్సల్టేషన్ కాల్ బుక్ చేయండి. మీ అవసరాలకు సరిపోయే స్పష్టమైన ప్రతిపాదనను అందిస్తాం.",
      },
    } as Record<string, { q: string; a: string }>;

    const localized = map[faq.question];
    return {
      question: localized ? tr(faq.question, localized.q) : faq.question,
      answer: localized ? tr(faq.answer, localized.a) : faq.answer,
    };
  });
  const localizedLeftFaqs = localizedFaqs.filter((_, i) => i % 2 === 0);
  const localizedRightFaqs = localizedFaqs.filter((_, i) => i % 2 === 1);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const FaqItem = ({
    faq,
    index,
  }: {
    faq: (typeof faqs)[number];
    index: number;
  }) => {
    const isOpen = openIndex === index;

    return (
      <motion.article
        layout
        transition={{ layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        className={`
          w-full rounded-2xl md:rounded-3xl p-5 md:p-6 backdrop-blur select-none overflow-hidden
          ${card}
          ${isDark ? "hover:bg-white/10" : "hover:border-[#b8d0c5]"}
          ${isOpen ? (isDark ? "bg-white/10" : "bg-white") : ""}
        `}
      >
        <button
          type="button"
          onClick={() => toggleFAQ(index)}
          className="w-full text-left focus:outline-none"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
        >
          <motion.div layout="position" className="flex items-center justify-between gap-4">
            <h3
              className={`text-base md:text-lg font-semibold pr-4 md:pr-8 ${
                isDark ? "text-white" : "text-[#0f1f1b]"
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
                animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.06 : 1 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center justify-center"
              >
                <Plus className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </motion.div>
            </div>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`faq-answer-${index}`}
              key={`faq-answer-${index}`}
              initial={{ height: 0, opacity: 0, y: -14 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -14 }}
              transition={{
                height: { duration: 1.35, ease: [0.65, 0, 0.35, 1] },
                opacity: { duration: 1.0, ease: [0.65, 0, 0.35, 1] },
                y: { duration: 1.35, ease: [0.65, 0, 0.35, 1] },
              }}
              className="overflow-hidden"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 1.15, delay: 0.18, ease: [0.65, 0, 0.35, 1] }}
                className={`
                  pt-4 leading-relaxed text-sm md:text-base
                  ${isDark ? "text-white/70" : "text-[#4a6660]"}
                `}
              >
                {faq.answer}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    );
  };

  return (
    <MotionConfig reducedMotion="never">
      <section className={`relative py-16 md:py-24 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div
            className={`
              inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs md:text-sm font-medium
              ${isDark ? "bg-white/5 text-white/75" : "bg-[#f6ff82] text-[#1a3c34]"}
            `}
          >
            <span
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#1a3c34]"
              }`}
            />
              <span>{tr("FAQ", "ప్రశ్నలు")}</span>
          </div>

          <h2 className={`text-3xl md:text-5xl font-bold ${heading} mb-4`}>
            {tr("Questions", "ప్రశ్నలు")} <span className={gradientTextClass}>{tr("Answered", "సమాధానాలు")}</span>
          </h2>

          <p className={`${sub} text-base md:text-lg max-w-2xl mx-auto`}>
            {tr("Find answers to the most common questions below.", "క్రింద సాధారణంగా అడిగే ప్రశ్నలకు సమాధానాలు చూడండి.")}
          </p>
        </div>

        <LayoutGroup>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start">
            <div className="space-y-4">
              {localizedLeftFaqs.map((faq, colIdx) => (
                <FaqItem key={faq.question} faq={faq} index={colIdx * 2} />
              ))}
            </div>

            <div className="space-y-4">
              {localizedRightFaqs.map((faq, colIdx) => (
                <FaqItem key={faq.question} faq={faq} index={colIdx * 2 + 1} />
              ))}
            </div>
          </div>
        </LayoutGroup>
      </div>
      </section>
    </MotionConfig>
  );
}
