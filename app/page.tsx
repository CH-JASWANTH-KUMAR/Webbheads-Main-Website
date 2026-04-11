"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import AboutUs from "@/components/AboutUs";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { isDark } = useTheme();
  const sectionBase = isDark ? "bg-transparent" : "bg-[#f5f7f5]";
  const sectionAlt = isDark ? "bg-transparent" : "bg-[#edf1ee]";
  const contactSection = isDark ? "bg-transparent" : "bg-[#1a3c34]";
  const footerSection = isDark ? "bg-transparent" : "bg-[#0f1f1b]";

  return (
    <main
      className={`
        relative isolate min-h-screen overflow-x-hidden
        transition-colors duration-300
        ${isDark ? "bg-[#05060A]" : "bg-[#f5f7f5]"}
      `}
    >
      <Navbar />
      <section className={sectionBase}>
        <Hero />
      </section>

      <section id="services" className={sectionAlt}>
        <Services />
      </section>

      <section className={sectionBase}>
        <Education />
      </section>

      <section id="process" className={sectionBase}>
        <Process />
      </section>

      <section id="portfolio" className={sectionAlt}>
        <CaseStudies />
      </section>

      <section id="pricing" className={sectionAlt}>
        <Pricing />
      </section>

      <section id="about" className={sectionBase}>
        <AboutUs />
      </section>

      <section className={sectionAlt}>
        <BeforeAfter />
      </section>

      <section className={sectionBase}>
        <Testimonials />
      </section>

      <section className={sectionAlt}>
        <FAQ />
      </section>

      <section id="contact" className={contactSection}>
        <ContactUs />
      </section>

      <section className={footerSection}>
        <Footer />
      </section>
    </main>
  );
}
