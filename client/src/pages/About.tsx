import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Values from '@/components/Values';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <About />
        <Values />
        <Locations />
      </div>
      <Footer />
    </div>
  );
}
