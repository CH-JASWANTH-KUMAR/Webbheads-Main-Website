import Hero from '@/components/Hero';
import AuthorityStrip from '@/components/AuthorityStrip';
import Services from '@/components/Services';
import Proof from '@/components/Proof';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Portfolio from '@/components/Portfolio';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AuthorityStrip />
      <Services />
      <Proof />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <AboutUs />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
