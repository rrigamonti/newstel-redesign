import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VideoSection from '@/components/VideoSection';
import ClientLogos from '@/components/ClientLogos';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import About from '@/components/About';
import Values from '@/components/Values';
import Locations from '@/components/Locations';
import Technology from '@/components/Technology';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <VideoSection />
      <ClientLogos />
      <Testimonials />
      <Services />
      <About />
      <Values />
      <Locations />
      <Technology />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
