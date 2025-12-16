"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
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

  const cardBase = isDark
    ? "bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
    : "bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

  const textMain = isDark ? "text-white/80" : "text-slate-800";
  const textMuted = isDark ? "text-white/55" : "text-slate-600";
  const dividerBg = isDark ? "bg-white/10" : "bg-slate-200";

  return (
    // Updated width to be responsive: 300px on mobile, 400px on md+
    <div
      className={`flex-shrink-0 w-[300px] md:w-[400px] rounded-2xl p-5 md:p-6 backdrop-blur mx-3 ${cardBase}`}
    >
      <div className="mb-4 text-black/10 dark:text-white/10">
        <Quote size={28} className="md:w-8 md:h-8" fill="currentColor" />
      </div>

      <p
        className={`${textMain} leading-relaxed mb-6 text-sm line-clamp-4 text-xs md:text-sm`}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="pt-4">
        <div className={`h-px w-full ${dividerBg}`} />
      </div>

      <div className="flex items-center gap-4 pt-4">
        <div className={`rounded-full p-[2px] ${brandGradient}`}>
          <div
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ${
              isDark ? "bg-black/30" : "bg-white"
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h4
            className={`font-semibold ${
              isDark ? "text-white" : "text-slate-900"
            } text-sm truncate`}
          >
            {testimonial.name}
          </h4>
          <p className={`${textMuted} text-xs truncate`}>{testimonial.role}</p>
          <p
            className={`${
              isDark ? "text-white/70" : "text-slate-700"
            } text-xs font-medium truncate`}
          >
            {testimonial.company}
          </p>
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

  const pillBg = isDark
    ? "bg-white/5 text-white/80"
    : "bg-slate-100 text-slate-700";

  // Bottom avatars: first 3 same, 4th replaced with Robert (testimonials[5])
  const bottomAvatars = [
    testimonials[0],
    testimonials[1],
    testimonials[2],
    testimonials[5],
  ];

  return (
    <section className={`py-16 md:py-20 overflow-hidden ${sectionBg}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-xs md:text-sm font-medium ${pillBg}`}
          >
            <span
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                isDark ? "bg-[#f6ff82]" : "bg-[#003942]"
              }`}
            />
            Client Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Our Customers{" "}
            <span className={`bg-clip-text text-transparent ${brandGradient}`}>
              Love Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`${subText} max-w-lg mx-auto text-sm md:text-base`}
          >
            Real feedback from teams and individuals who rely on us to power
            their real estate business.
          </motion.p>
        </div>
      </div>

      {/* Marquee Row */}
      <div className="relative mb-10">
        <div
          className={`absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r ${overlayFrom} to-transparent z-10 pointer-events-none`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l ${overlayFrom} to-transparent z-10 pointer-events-none`}
        />

        <motion.div
          className="flex"
          // Animate to -50% to ensure smooth looping regardless of total pixel width
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {doubledTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isDark={isDark}
            />
          ))}
        </motion.div>
      </div>

      {/* Avatar-group + gradient stat */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-0">
          <div className="flex -space-x-2 sm:pr-4">
            {bottomAvatars.map((t, idx) => (
              <div
                key={idx}
                className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden
                  ${isDark ? "ring-2 ring-black/40" : "ring-2 ring-white"}
                `}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className={`${subText} text-sm md:text-base`}>
            <span
              className={`font-semibold bg-clip-text text-transparent ${brandGradient}`}
            >
              Over 40+
            </span>{" "}
            people gave us review
          </p>
        </div>
      </div>
    </section>
  );
}
