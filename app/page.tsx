"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
// import AuthorityStrip from '@/components/AuthorityStrip'; // Commented out temporarily
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import AboutUs from '@/components/AboutUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { isDark } = useTheme();
  
  return (
    <main className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#001a1f]' : 'bg-white'}`}>
      <Navbar />
      <Hero />
      <Education />
      {/* <AuthorityStrip /> */}{/* Commented out temporarily */}
      <section id="process">
        <Process />
      </section>
      <section id="portfolio">
        <CaseStudies />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </main>
  );
}
