"use client";

/**
 * ==========================================================================
 * PORTFOLIO SECTION - Selected Works Showcase
 * ==========================================================================
 * Displays featured real estate projects in a compact grid layout.
 * Smaller cards with working images and hover effects.
 * ==========================================================================
 */

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";

// Featured projects with verified working images
const projects = [
  {
    title: 'The Grand Estate',
    category: 'Web Development',
    description: 'Luxury villa showcase with 3D tours',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Skyline Towers',
    category: 'App Development',
    description: 'Mobile app for high-rise apartments',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Modern Living AI',
    category: 'AI Automation',
    description: 'Chatbot for property inquiries',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Azure Heights',
    category: 'Branding & UI',
    description: 'Complete brand identity redesign',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Palm Residences',
    category: 'CRM System',
    description: 'Custom lead management platform',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Urban Lofts',
    category: 'Virtual Tours',
    description: '360° interactive property tours',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export default function Portfolio() {
  const { isDark } = useTheme();
  
  return (
    <section id="portfolio" className={`py-20 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-[#003942]'} mb-3`}
            >
              Selected <span className={`${isDark ? 'text-white' : 'text-[#003942]'} underline decoration-[#f6ff82] decoration-4 underline-offset-4`}>Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-md`}
            >
              Our finest digital transformations in the luxury real estate sector.
            </motion.p>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#003942] text-white text-sm font-medium rounded-lg hover:bg-[#004d59] transition-colors"
          >
            View All <ExternalLink size={16} />
          </motion.a>
        </div>

        {/* Projects Grid - 3 columns on desktop, smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              {/* Image Container - Smaller aspect ratio */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-3 shadow-md">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003942]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Arrow */}
                <div className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-lg">
                  <ArrowUpRight size={16} className="text-[#003942]" />
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#003942] text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-[#003942]'} group-hover:underline group-hover:decoration-[#f6ff82] group-hover:decoration-2 group-hover:underline-offset-4 transition-all mb-1`}>
                  {project.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-sm`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
