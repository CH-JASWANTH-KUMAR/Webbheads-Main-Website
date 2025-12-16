"use client";

/**
 * TESTIMONIALS SECTION — NO BORDERS
 * - Removed card borders
 * - Removed author divider border-top (replaced with a subtle bg line)
 * - Removed pill border (replaced with soft filled pill)
 */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const testimonials = [
  {
    name: "Jessica Martinez",
    role: "Marketing Director",
    company: "Prestige Realty Group",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    text: `Honestly, I was skeptical at first. We'd worked with agencies before and got burned. But WebbHeads? Completely different story. They actually listened to what we needed, not just what they wanted to sell us. Our lead generation went through the roof - we're talking 3x more qualified buyers reaching out.`,
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder & CEO",
    company: "Thompson Luxury Homes",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    text: `Look, I've been in real estate for 22 years. I've seen tech come and go. What impressed me about WebbHeads is they get our industry. They didn't just build us a pretty website - they built a sales machine. The virtual tour integration alone has saved us countless showing hours.`,
    rating: 5,
  },
  {
    name: "Amanda Chen",
    role: "Operations Manager",
    company: "Pacific Coast Properties",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    text: `The chatbot they built for us handles probably 60% of initial inquiries now. That's huge for a team our size. And it actually sounds human - clients don't even realize they're talking to AI half the time. Game changer for after-hours leads.`,
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Sales Director",
    company: "Elite Properties NYC",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    text: `We went from losing 70% of leads due to slow follow-up to having a 95% response rate within 5 minutes. The automation system WebbHeads set up completely transformed our sales process. ROI was visible within the first month.`,
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Agency Owner",
    company: "Coastal Realty Co.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    text: `I was spending 5 hours a day on admin work. Now it's maybe 30 minutes. The CRM and automation setup they did gave me my life back. Plus, our conversion rate went from 15% to 42%. Best investment we ever made.`,
    rating: 5,
  },
  {
    name: "Robert Kim",
    role: "Broker",
    company: "Metro Living Realty",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    text: `The website they built loads in under 2 seconds. Our old site took 8 seconds. That change alone cut our bounce rate by 60%. More people staying on site = more leads = more sales. Simple math, huge results.`,
    rating: 5,
  },
];

const doubledTestimonials = [...testimonials, ...testimonials];

function TestimonialCard({
  testimonial,
  isDark,
}: {
  testimonial: (typeof testimonials)[0];
  isDark: boolean;
}) {
  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";

  // NO borders
  const cardBase = isDark
    ? "bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

  const textMain = isDark ? "text-white/80" : "text-slate-800";
  const textMuted = isDark ? "text-white/55" : "text-slate-600";
  const dividerBg = isDark ? "bg-white/10" : "bg-slate-200"; // not a border

  return (
    <div
      className={`flex-shrink-0 w-[400px] rounded-2xl p-6 backdrop-blur transition-shadow duration-300 mx-3 ${cardBase}`}
    >
      <div className="mb-4 text-black/10 dark:text-white/10">
        <Quote size={32} fill="currentColor" />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="text-[#f6ff82] fill-[#f6ff82]" />
        ))}
      </div>

      <p className={`${textMain} leading-relaxed mb-6 text-sm line-clamp-4`}>&ldquo;{testimonial.text}&rdquo;</p>

      {/* Divider replaced (no border-t) */}
      <div className="pt-4">
        <div className={`h-px w-full ${dividerBg}`} />
      </div>

      <div className="flex items-center gap-4 pt-4">
        {/* Gradient ring avatar (this is padding + gradient, not a border) */}
        <div className={`rounded-full p-[2px] ${brandGradient}`}>
          <div className={`w-12 h-12 rounded-full overflow-hidden ${isDark ? "bg-black/30" : "bg-white"}`}>
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <h4 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"} text-sm`}>{testimonial.name}</h4>
          <p className={`${textMuted} text-xs`}>{testimonial.role}</p>
          <p className={`${isDark ? "text-white/70" : "text-slate-700"} text-xs font-medium`}>{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { isDark } = useTheme();

  const brandGradient = "bg-gradient-to-r from-[#f6ff82] to-[#003942]";
  const sectionBg = "bg-transparent";
  const subText = isDark ? "text-white/55" : "text-slate-600";
  const overlayFrom = isDark ? "from-[#05060A]" : "from-white";

  // Pill without border
  const pillBg = isDark ? "bg-white/5 text-white/80" : "bg-slate-100 text-slate-700";

  return (
    <section className={`py-20 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-12">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-sm font-medium ${pillBg}`}
          >
            <span className={`w-2 h-2 rounded-full ${isDark ? "bg-[#f6ff82]" : "bg-[#003942]"}`} />
            Client Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Our Customers <span className={`bg-clip-text text-transparent ${brandGradient}`}>Love Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${subText} max-w-lg mx-auto`}
          >
            Real feedback from teams and individuals who rely on us to power their real estate business.
          </motion.p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-6">
        <div
          className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${overlayFrom} to-transparent z-10 pointer-events-none`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${overlayFrom} to-transparent z-10 pointer-events-none`}
        />

        <motion.div
          className="flex"
          animate={{ x: [0, -2400] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" },
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} isDark={isDark} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="relative">
        <div
          className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${overlayFrom} to-transparent z-10 pointer-events-none`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${overlayFrom} to-transparent z-10 pointer-events-none`}
        />

        <motion.div
          className="flex"
          animate={{ x: [-2400, 0] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 45, ease: "linear" },
          }}
        >
          {[...doubledTestimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} isDark={isDark} />
          ))}
        </motion.div>
      </div>

      {/* Trust Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-6 md:px-12 lg:px-20 mt-12"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 text-center">
          <div className="px-6">
            <p className={`text-4xl font-bold bg-clip-text text-transparent ${brandGradient}`}>40+</p>
            <p className={`${subText} text-sm`}>Happy Clients</p>
          </div>

          {/* Vertical separators without borders */}
          <div className={`w-px h-12 ${isDark ? "bg-white/10" : "bg-slate-200"} hidden md:block`} />

          <div className="px-6">
            <p className={`text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              4.9<span className="text-[#f6ff82]">★</span>
            </p>
            <p className={`${subText} text-sm`}>Average Rating</p>
          </div>

          <div className={`w-px h-12 ${isDark ? "bg-white/10" : "bg-slate-200"} hidden md:block`} />

          <div className="px-6">
            <p className={`text-4xl font-bold bg-clip-text text-transparent ${brandGradient}`}>98%</p>
            <p className={`${subText} text-sm`}>Would Recommend</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
