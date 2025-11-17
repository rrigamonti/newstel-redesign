import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VideoSection from '@/components/VideoSection';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <VideoSection />
      <ClientLogos />
      <Services />
      <Footer />
    </div>
  );
}
