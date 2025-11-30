import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Careers from "@/components/Careers";

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHero 
        title="Careers"
        subtitle="Join our global team and make a difference in customer service"
      />
      <Careers />
      <Footer />
    </div>
  );
}
