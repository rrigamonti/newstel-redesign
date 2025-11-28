import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Values from "@/components/Values";
import Locations from "@/components/Locations";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
