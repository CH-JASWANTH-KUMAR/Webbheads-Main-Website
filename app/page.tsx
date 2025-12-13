import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import AuthorityStrip from '@/components/AuthorityStrip';
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Education />
      <AuthorityStrip />
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
