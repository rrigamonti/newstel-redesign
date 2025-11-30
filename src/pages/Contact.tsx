import Navigation from '@/components/Navigation';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help your business"
      />
      <Contact />
      <Footer />
    </div>
  );
}
