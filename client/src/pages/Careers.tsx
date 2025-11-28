import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Careers from "@/components/Careers";

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="pt-20">
        <Careers />
      </div>
      <Footer />
    </div>
  );
}
