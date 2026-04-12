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
  const sectionClass = isDark
    ? "bg-transparent"
    : "bg-[#f8faf8] border-t border-[#e8f0ec]";

  return (
    <main
      className={`
        relative isolate min-h-screen overflow-x-hidden
        transition-colors duration-300
        ${isDark ? "bg-[#05060A]" : "bg-[#f8faf8]"}
      `}
    >
      <Navbar />
      <section className={sectionClass}>
        <Hero />
      </section>

      <section id="services" className={sectionClass}>
        <Services />
      </section>

      <section className={sectionClass}>
        <Education />
      </section>

      <section id="process" className={sectionClass}>
        <Process />
      </section>

      <section id="portfolio" className={sectionClass}>
        <CaseStudies />
      </section>

      <section id="pricing" className={sectionClass}>
        <Pricing />
      </section>

      <section id="about" className={sectionClass}>
        <AboutUs />
      </section>

      <section className={sectionClass}>
        <BeforeAfter />
      </section>

      <section className={sectionClass}>
        <Testimonials />
      </section>

      <section className={sectionClass}>
        <FAQ />
      </section>

      <section id="contact" className={sectionClass}>
        <ContactUs />
      </section>

      <section className={sectionClass}>
        <Footer />
      </section>
    </main>
  );
}
