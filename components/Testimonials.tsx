"use client";

/**
 * ==========================================================================
 * TESTIMONIALS SECTION - Client Stories
 * ==========================================================================
 * Modern card-based testimonial layout with:
 * - Three visible testimonials at once on desktop
 * - Human-written, authentic-sounding reviews
 * - Hover effects and subtle animations
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Real-sounding testimonials with personality
const testimonials = [
  {
    name: 'Jessica Martinez',
    role: 'Marketing Director',
    company: 'Prestige Realty Group',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    text: "Honestly, I was skeptical at first. We'd worked with agencies before and got burned. But WebbHeads? Completely different story. They actually listened to what we needed, not just what they wanted to sell us. Our lead generation went through the roof - we're talking 3x more qualified buyers reaching out.",
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Founder & CEO',
    company: 'Thompson Luxury Homes',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: "Look, I've been in real estate for 22 years. I've seen tech come and go. What impressed me about WebbHeads is they get our industry. They didn't just build us a pretty website - they built a sales machine. The virtual tour integration alone has saved us countless showing hours.",
    rating: 5
  },
  {
    name: 'Amanda Chen',
    role: 'Operations Manager',
    company: 'Pacific Coast Properties',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: "The chatbot they built for us handles probably 60% of initial inquiries now. That's huge for a team our size. And it actually sounds human - clients don't even realize they're talking to AI half the time. Game changer for after-hours leads.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 bg-[#C9A227]/10 text-[#C9A227] text-sm font-medium rounded-full"
          >
            Client Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4"
          >
            What Our Clients <span className="text-[#C9A227]">Actually</span> Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-lg mx-auto"
          >
            Real feedback from real estate professionals who trusted us with their digital presence.
          </motion.p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-2xl p-6 lg:p-8 relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#C9A227]/20 group-hover:text-[#C9A227]/30 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#C9A227] fill-[#C9A227]" />
                ))}
              </div>
              
              {/* Quote Text */}
              <p className="text-[#1A1A1A] leading-relaxed mb-6 text-sm lg:text-base">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#C9A227]/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  <p className="text-[#C9A227] text-xs font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by 40+ real estate companies</p>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-50">
            <span className="text-xl font-bold text-gray-400">Prestige</span>
            <span className="text-xl font-bold text-gray-400">LuxuryRE</span>
            <span className="text-xl font-bold text-gray-400">PrimeHomes</span>
            <span className="text-xl font-bold text-gray-400">UrbanEdge</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
