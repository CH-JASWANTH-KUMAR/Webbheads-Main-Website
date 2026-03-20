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

  return (
    <main
      className={`
        relative isolate min-h-screen overflow-x-hidden
        transition-colors duration-300
        ${isDark ? "bg-[#05060A]" : "bg-[#f5f8fc]"}
      `}
    >
      <Navbar />
      <Hero />

      <section id="services">
        <Services />
      </section>

      <Education />

      <section id="process">
        <Process />
      </section>

      <section id="portfolio">
        <CaseStudies />
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
