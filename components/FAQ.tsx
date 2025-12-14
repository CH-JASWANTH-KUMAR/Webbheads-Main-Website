"use client";

/**
 * ==========================================================================
 * FAQ SECTION - Questions Answered (webbheads.com style)
 * ==========================================================================
 * Accordion-style FAQ section with:
 * - Clean expandable questions
 * - Smooth animations
 * - Contact CTA sidebar
 * ==========================================================================
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, Mail } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";

// FAQ data - customize questions and answers as needed
const faqs = [
  {
    question: 'How does the design process work?',
    answer: 'We start with a discovery call to understand your goals, target audience, and brand vision. Then we move through research, wireframing, design, development, and launch phases. You\'ll have full visibility and input at every stage.'
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'Timelines vary based on project scope. A property landing page takes 1-2 weeks. A full real estate website with CRM integration typically takes 4-8 weeks. Enterprise solutions may take 8-12 weeks. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'How do we communicate throughout the project?',
    answer: 'We use a combination of scheduled video calls, WhatsApp for quick updates, and project management tools for tracking progress. You\'ll have a dedicated project manager as your single point of contact.'
  },
  {
    question: 'Do you offer end-to-end product development?',
    answer: 'Yes! We handle everything from strategy and design to development, testing, deployment, and ongoing support. Our premium packages include CRM setup, automation workflows, AI chatbots, and team training.'
  },
  {
    question: 'What if I need more revisions?',
    answer: 'All our packages include multiple revision rounds. If you need additional revisions beyond the included scope, we offer flexible add-on options. Our goal is to ensure you\'re 100% satisfied with the final result.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Absolutely. While we have standard packages, most of our clients need customized solutions. We\'ll work with you to create a tailored package that fits your specific requirements and budget.'
  },
  {
    question: 'How can you assure a proper workflow?',
    answer: 'We follow a proven agile methodology with clear milestones, regular check-ins, and transparent reporting. You\'ll always know exactly where your project stands and what\'s coming next.'
  },
  {
    question: 'How can we get started?',
    answer: 'Simple! Book a free consultation call using the button below. We\'ll discuss your needs, provide recommendations, and give you a clear proposal with pricing and timeline. No pressure, no obligations.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isDark } = useTheme();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-24 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f6ff82] rounded-full mb-6"><span className="w-2 h-2 bg-[#003942] rounded-full" />
            <span className="text-sm font-medium text-[#003942]">FAQ</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'} mb-4`}>
            Questions <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] to-[#d4e682]' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003942] to-[#005f73]'}`}>Answered</span>
          </h2>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg max-w-2xl mx-auto`}>
            We&apos;re here to help you and solve objections. Find answers to the most common questions below.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* FAQ Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-[#003942] text-white' 
                        : isDark ? 'bg-[#002428] text-white hover:bg-[#003942]/50' : 'bg-gray-50 text-[#003942] hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        openIndex === index ? 'bg-[#f6ff82]' : 'bg-[#003942]/10'
                      }`}>
                        {openIndex === index ? (
                          <Minus className={`w-4 h-4 ${openIndex === index ? 'text-[#003942]' : 'text-[#003942]'}`} />
                        ) : (
                          <Plus className="w-4 h-4 text-[#003942]" />
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="sticky top-24 bg-gradient-to-br from-[#003942] to-[#004d59] rounded-3xl p-8 text-white">
              <div className="w-16 h-16 rounded-2xl bg-[#f6ff82]/20 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-[#f6ff82]" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Still have questions?
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Feel free to mail us for any enquiries. We typically respond within 24 hours.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                webbheadsmarketing@gmail.com
              </p>

              <a 
                href="#contact" 
                className="block w-full py-4 bg-[#f6ff82] text-[#003942] font-semibold rounded-xl text-center hover:bg-[#D4B03B] transition-colors"
              >
                Contact Sales Now
              </a>

              <a 
                href="https://cal.com/webb-heads" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-3 py-4 bg-white/10 text-white font-semibold rounded-xl text-center hover:bg-white/20 transition-colors"
              >
                Book a Free Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
