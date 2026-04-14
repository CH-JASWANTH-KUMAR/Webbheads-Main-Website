"use client";

/**
 * ==========================================================================
 * SERVICES SECTION - WebbHeads Offerings
 * ==========================================================================
 * Displays the 6 core services we offer to real estate clients
 * Features: Hover effects, gradient backgrounds, entrance animations
 * ==========================================================================
 */

import { motion, useReducedMotion } from 'framer-motion';
import { Code, Smartphone, Bot, Calendar, BarChart3, Box } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

// Service offerings data - each has an icon, title, and description
const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Your property listings, beautifully presented online. Buyers find you, trust you, and call you - without you lifting a finger.',
    animation: 'website'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'A mobile app your buyers actually want to use. Browse properties, book viewings, and close deals - all from their phone.',
    animation: 'app'
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Never lose a lead to slow replies again. AI responds to every inquiry instantly - even at 2am - so you wake up to warm leads.',
    animation: 'ai'
  },
  {
    icon: Calendar,
    title: 'Booking Systems',
    description: 'Buyers pick a time, show up, and you close. No back-and-forth calls. No missed viewings. Just a full calendar that runs itself.',
    animation: 'booking'
  },
  {
    icon: BarChart3,
    title: 'CRM & Dashboards',
    description: 'See every lead, every deal, and every rupee - in one place. Know exactly what is working and where your next deal is coming from.',
    animation: 'dashboard'
  },
  {
    icon: Box,
    title: 'Virtual Staging',
    description: 'Let buyers walk through your property from their sofa. No travel, no empty rooms - just a stunning tour that sells the feeling.',
    animation: 'staging'
  }
]

function ServiceMiniAnimation({
  type,
  isDark,
  prefersReducedMotion,
}: {
  type: string;
  isDark: boolean;
  prefersReducedMotion: boolean;
}) {
  const accent = isDark ? '#f6ff82' : '#1f4f3a';
  const secondary = isDark ? '#b8c7b9' : '#5a6b63';
  const panel = isDark ? 'rgba(246,255,130,0.08)' : 'rgba(31,79,58,0.1)';

  if (type === 'website') {
    return (
      <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
        <rect x="6" y="7" width="108" height="38" rx="10" fill={panel} stroke={accent} strokeOpacity="0.35" />
        <rect x="14" y="13" width="92" height="5" rx="2.5" fill={accent} fillOpacity="0.18" />
        <motion.path
          d="M28 30 L22 26 L28 22"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={prefersReducedMotion ? { x: 0 } : { x: [-1, 1, -1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M46 22 L40 26 L46 30"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={prefersReducedMotion ? { x: 0 } : { x: [1, -1, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M54 33 L60 19"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <motion.rect
          x="72"
          y="20"
          width="34"
          height="14"
          rx="4"
          fill={accent}
          fillOpacity="0.14"
          stroke={accent}
          strokeOpacity="0.5"
          animate={prefersReducedMotion ? { x: 72 } : { x: [72, 76, 72] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="80" cy="27" r="1.6" fill={accent} fillOpacity="0.75" />
        <circle cx="87" cy="27" r="1.6" fill={accent} fillOpacity="0.55" />
      </svg>
    );
  }

  if (type === 'app') {
    return (
      <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
        <rect x="43" y="6" width="34" height="40" rx="8" fill={panel} stroke={accent} strokeOpacity="0.5" />
        <circle cx="60" cy="41" r="2" fill={accent} fillOpacity="0.8" />
        <rect x="49" y="13" width="22" height="3" rx="1.5" fill={secondary} fillOpacity="0.45" />
        <motion.rect
          x="49"
          y="20"
          width="22"
          height="7"
          rx="3"
          fill={accent}
          fillOpacity="0.22"
          stroke={accent}
          strokeOpacity="0.55"
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.1, repeat: Infinity }}
        />
        <motion.circle
          cx="82"
          cy="14"
          r="4"
          fill={accent}
          animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.22, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </svg>
    );
  }

  if (type === 'ai') {
    return (
      <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
        <motion.path
          d="M24 26 H60 M60 26 H96 M60 26 V12 M60 26 V40"
          stroke={accent}
          strokeWidth="1.8"
          strokeDasharray="4 4"
          animate={prefersReducedMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
        {[{ x: 24, y: 26 }, { x: 60, y: 12 }, { x: 60, y: 26 }, { x: 60, y: 40 }, { x: 96, y: 26 }].map((n) => (
          <motion.circle
            key={`${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r="4.2"
            fill={panel}
            stroke={accent}
            strokeOpacity="0.8"
            animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.08, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, delay: (n.x + n.y) * 0.002 }}
          />
        ))}
      </svg>
    );
  }

  if (type === 'booking') {
    return (
      <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
        <rect x="22" y="9" width="76" height="34" rx="8" fill={panel} stroke={accent} strokeOpacity="0.45" />
        <path d="M22 18 H98" stroke={accent} strokeOpacity="0.45" />
        <rect x="32" y="24" width="12" height="9" rx="2" fill={secondary} fillOpacity="0.4" />
        <rect x="48" y="24" width="12" height="9" rx="2" fill={secondary} fillOpacity="0.4" />
        <motion.rect
          x="64"
          y="24"
          width="12"
          height="9"
          rx="2"
          fill={accent}
          fillOpacity="0.24"
          stroke={accent}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.9, repeat: Infinity }}
        />
        <motion.path
          d="M82 29 L86 33 L92 25"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: [0, 1, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, times: [0, 0.6, 1] }}
        />
      </svg>
    );
  }

  if (type === 'dashboard') {
    return (
      <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
        <rect x="16" y="10" width="88" height="32" rx="8" fill={panel} stroke={accent} strokeOpacity="0.35" />
        {[0, 1, 2, 3].map((i) => (
          <motion.rect
            key={i}
            x={26 + i * 14}
            y={32 - i * 2}
            width="8"
            height={10 + i * 3}
            rx="2"
            fill={accent}
            fillOpacity="0.22"
            stroke={accent}
            strokeOpacity="0.55"
            animate={prefersReducedMotion ? { y: 32 - i * 2 } : { y: [34 - i * 2, 30 - i * 2, 34 - i * 2] }}
            transition={{ duration: 1.9, repeat: Infinity, delay: i * 0.12 }}
          />
        ))}
        <motion.path
          d="M30 30 L46 24 L60 26 L78 18 L92 20"
          fill="none"
          stroke={accent}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: [0.25, 1, 1] }}
          transition={{ duration: 1.7, repeat: Infinity, times: [0, 0.65, 1] }}
        />
      </svg>
    );
  }

  if (type === 'staging') {
    return (
      <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
        <path d="M60 8 L86 20 L60 32 L34 20 Z" fill={panel} stroke={accent} strokeOpacity="0.65" />
        <path d="M34 20 V32 L60 44 V32" fill="none" stroke={accent} strokeOpacity="0.65" />
        <path d="M86 20 V32 L60 44" fill="none" stroke={accent} strokeOpacity="0.65" />
        <motion.path
          d="M60 8 L60 44"
          stroke={accent}
          strokeDasharray="4 4"
          strokeWidth="1.5"
          animate={prefersReducedMotion ? { strokeDashoffset: 0 } : { strokeDashoffset: [-8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 52" className="h-10 w-24" aria-hidden="true">
      <motion.path d="M18 34 L40 20 L58 26 L78 14 L102 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" animate={prefersReducedMotion ? { pathLength: 1 } : { pathLength: [0.2, 1, 1] }} transition={prefersReducedMotion ? { duration: 0 } : { duration: 2.3, repeat: Infinity }} />
    </svg>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Services() {
  const { isDark } = useTheme();
  const { tr } = useLanguage();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const gradientTextClass = isDark
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#f6ff82] via-[#ecfa98] to-[#d8ea7c]'
    : 'text-transparent bg-clip-text bg-gradient-to-r from-[#1a3c34] via-[#155461] to-[#0b6a78]';

  const handleCardMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    event.currentTarget.style.setProperty('--mx', `${x}px`);
    event.currentTarget.style.setProperty('--my', `${y}px`);
  };

  const localizedServices = services.map((service) => {
    const translated = {
      'Website Development': tr('Website Development', 'వెబ్‌సైట్ డెవలప్‌మెంట్'),
      'App Development': tr('App Development', 'యాప్ డెవలప్‌మెంట్'),
      'AI Automation': tr('AI Automation', 'AI ఆటోమేషన్'),
      'Booking Systems': tr('Booking Systems', 'బుకింగ్ సిస్టమ్స్'),
      'CRM & Dashboards': tr('CRM & Dashboards', 'CRM & డాష్‌బోర్డ్స్'),
      'Virtual Staging': tr('Virtual Staging', 'వర్చువల్ స్టేజింగ్'),
    } as Record<string, string>;

    const translatedDescription = {
      'Website Development': tr(
        'Your property listings, beautifully presented online. Buyers find you, trust you, and call you - without you lifting a finger.',
        'మీ ప్రాపర్టీ లిస్టింగ్స్ ఆన్‌లైన్‌లో అద్భుతంగా కనిపించేలా చేస్తాం. కొనుగోలుదారులు మిమ్మల్ని కనుగొని, నమ్మి, మీకే కాల్ చేస్తారు.'
      ),
      'App Development': tr(
        'A mobile app your buyers actually want to use. Browse properties, book viewings, and close deals - all from their phone.',
        'మీ కొనుగోలుదారులు నిజంగా ఉపయోగించే మొబైల్ యాప్. ప్రాపర్టీలు చూడటం, విజిట్ బుక్ చేయటం, డీల్ క్లోజ్ చేయటం అన్నీ ఫోన్‌లోనే.'
      ),
      'AI Automation': tr(
        'Never lose a lead to slow replies again. AI responds to every inquiry instantly - even at 2am - so you wake up to warm leads.',
        'స్లో రిప్లై వల్ల లీడ్ కోల్పోకండి. AI ప్రతి ఇన్‌క్వైరీకి వెంటనే స్పందిస్తుంది, రాత్రి సమయంలో కూడా.'
      ),
      'Booking Systems': tr(
        'Buyers pick a time, show up, and you close. No back-and-forth calls. No missed viewings. Just a full calendar that runs itself.',
        'కొనుగోలుదారులు సమయం ఎంచుకుని వస్తారు, మీరు డీల్ క్లోజ్ చేస్తారు. అటూ ఇటూ కాల్స్ అవసరం లేదు, మిస్‌డ్ విజిట్స్ ఉండవు.'
      ),
      'CRM & Dashboards': tr(
        'See every lead, every deal, and every rupee - in one place. Know exactly what is working and where your next deal is coming from.',
        'ప్రతి లీడ్, ప్రతి డీల్, ప్రతి రూపాయి ఒకే చోట కనిపిస్తుంది. ఏది పని చేస్తోందో స్పష్టంగా తెలుస్తుంది.'
      ),
      'Virtual Staging': tr(
        'Let buyers walk through your property from their sofa. No travel, no empty rooms - just a stunning tour that sells the feeling.',
        'కొనుగోలుదారులు ఇంటి నుంచే మీ ప్రాపర్టీని అనుభవించేలా చేస్తాం. ప్రయాణం అవసరం లేదు, గదులు ఖాళీగా కనిపించవు.'
      ),
    } as Record<string, string>;

    return {
      ...service,
      title: translated[service.title] ?? service.title,
      description: translatedDescription[service.title] ?? service.description,
    };
  });
  
  return (
    <section className={`relative overflow-hidden py-14 md:py-16 ${isDark ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#1f4f3a]'}`}
          >
            {tr('Our Expertise in', 'మా నైపుణ్యం')} <span className={gradientTextClass}>{tr('Real Estate Tech', 'రియల్ ఎస్టేట్ టెక్')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`max-w-2xl mx-auto text-base md:text-lg ${isDark ? 'text-gray-400' : 'text-[#4a6660]'}`}
          >
            {tr(
              'Comprehensive digital solutions designed to elevate your real estate business.',
              'మీ రియల్ ఎస్టేట్ బిజినెస్‌ను ముందుకు తీసుకెళ్లే సమగ్ర డిజిటల్ పరిష్కారాలు.'
            )}
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {localizedServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : isDark
                  ? { y: -2 }
                  : { y: -3 }
              }
              onMouseMove={handleCardMouseMove}
              className={`group relative isolate overflow-hidden rounded-2xl p-6 md:p-7 shadow-sm transition-all duration-200 ease-out [--mx:50%] [--my:50%] ${
                isDark
                  ? 'bg-white/10 backdrop-blur-md border border-white/10 hover:shadow-[0_24px_60px_rgba(246,255,130,0.12)]'
                  : 'bg-white border border-[#dce8e2] hover:border-[#1a3c34] hover:shadow-[0_8px_24px_rgba(26,60,52,0.08)]'
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isDark
                    ? 'bg-[radial-gradient(280px_circle_at_var(--mx)_var(--my),rgba(246,255,130,0.2),transparent_60%)]'
                    : 'bg-[radial-gradient(280px_circle_at_var(--mx)_var(--my),rgba(31,79,58,0.16),transparent_62%)]'
                }`}
              />

              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl p-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  isDark
                    ? 'bg-gradient-to-br from-[#f6ff82]/75 via-white/20 to-[#003942]/65'
                    : 'bg-gradient-to-br from-[#1f4f3a]/70 via-[#2d6a4f]/35 to-[#dbe94a]/80'
                }`}
              >
                <div className={`h-full w-full rounded-2xl ${isDark ? 'bg-black/55' : 'bg-white'}`} />
              </div>

              <div className="relative z-10 mb-5 flex items-center justify-between gap-3">
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { rotate: 6, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isDark
                      ? 'bg-[#f6ff82]/10 text-[#f6ff82] group-hover:bg-[#f6ff82] group-hover:text-[#003942]'
                      : 'bg-[#1f4f3a]/8 text-[#1f4f3a] group-hover:bg-[#1f4f3a] group-hover:text-[#dbe94a]'
                  }`}
                >
                  <service.icon size={24} strokeWidth={1.5} />
                </motion.div>

                <div className={`opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-lg px-2 py-1 ${
                  isDark ? 'bg-black/25 border border-white/10' : 'bg-[#edf1ee] border border-[#dce8e2]'
                }`}>
                  <ServiceMiniAnimation
                    type={service.animation}
                    isDark={isDark}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>
              </div>

              <h3 className={`relative z-10 text-xl md:text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-[#1f4f3a]'}`}>
                {service.title}
              </h3>
              <p className={`relative z-10 text-sm md:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-[#4a6660]'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
