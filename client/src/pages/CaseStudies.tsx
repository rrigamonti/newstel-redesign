import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Wolfson Brands",
      description: "How we helped Wolfson Brands significantly increase customer lifetime value through proactive customer support optimization.",
      image: "/clients/wolfson.png",
      results: [
        "Increased customer lifetime value",
        "Optimized support operations",
        "Reduced need for micromanagement"
      ]
    },
    {
      title: "Chilly's Bottles",
      description: "Building a united remote team that feels like one cohesive unit, joining weekly huddles and suggesting new tactics to improve business.",
      image: "/case-studies/Chilly-s-logo-_-Brands-cover.jpg.webp",
      results: [
        "Seamless team integration",
        "Proactive business improvement",
        "Long-term partnership"
      ]
    },
    {
      title: "OnBuy.com",
      description: "Creating substantial improvements to Zendesk workflows through process optimization, queue management, and automation.",
      image: "/case-studies/image_processing20240923-2-dtv0hw.png",
      results: [
        "Improved Zendesk workflows",
        "Enhanced efficiency",
        "Better customer experience"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#2C3E50] text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            Real results from real partnerships
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">{study.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-5 h-5 text-[#FF6B6B] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
                    Read Full Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#2C3E50]">Ready to achieve similar results?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow with exceptional customer service
          </p>
          <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
