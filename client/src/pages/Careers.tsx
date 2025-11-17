import Navigation from '@/components/Navigation';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Careers />
      </div>
      <Footer />
    </div>
  );
}
