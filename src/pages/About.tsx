import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Values from "@/components/Values";
import Locations from "@/components/Locations";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHero 
        title="About Us"
        subtitle="A global team delivering exceptional customer service experiences"
      />
      <About />
      <Values />
      <Locations />
      <Footer />
    </div>
  );
}
