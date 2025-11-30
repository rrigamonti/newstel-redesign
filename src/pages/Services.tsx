import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, Users, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "24/7 Customer Support",
      icon: <Phone className="w-12 h-12" />,
      features: [
        "Inbound & Outbound",
        "Native Multilingual",
        "Omnichannel Support",
        "Email, Chat, Phone, Social Media"
      ]
    },
    {
      title: "Back-office Support (BPO)",
      icon: <Users className="w-12 h-12" />,
      features: [
        "Quality Scoring",
        "Follow-Up Services",
        "Feedback & Review Moderation",
        "Administrative Support"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "EXPRESS",
      description: "Flexible start-up pricing for low volume customer service contacts.",
      features: [
        "Shared agents",
        "Flexible pricing",
        "Multilingual agents",
        "Email support",
        "Call back service"
      ],
      contract: "30 day rolling contract",
      scaling: "10% 7-day resource scaling",
      whoFor: "Great for clients just starting out and are not sure what their call volumes are going to be.",
      bgColor: "bg-gray-100",
      textColor: "text-[#2C3E50]",
      buttonColor: "bg-[#2C3E50] hover:bg-[#34495E]"
    },
    {
      name: "BUSINESS",
      description: "Dedicated agents to support you and your brand when and where you need them.",
      features: [
        "Dedicated agents",
        "Omnichannel support",
        "24/7 availability",
        "Multilingual agents",
        "No initial setup fee"
      ],
      contract: "30 day rolling contract",
      scaling: "10% 7-day resource scaling",
      whoFor: "Great for clients that want just-in-time responsive customer service for their brand.",
      bgColor: "bg-[#2C3E50]",
      textColor: "text-white",
      buttonColor: "bg-[#FF6B6B] hover:bg-[#FF5252]"
    },
    {
      name: "ENTERPRISE",
      description: "Fully dedicated team of 10+ agents supporting your brand, your way.",
      features: [
        "Fully dedicated agents",
        "Omnichannel support",
        "24/7 availability",
        "Multilingual agents",
        "No initial setup fee"
      ],
      contract: "30 day rolling contract",
      scaling: "10% 7-day resource scaling",
      whoFor: "Great for clients that want an embedded team without the overhead of managing it",
      bgColor: "bg-[#FFE5E5]",
      textColor: "text-[#2C3E50]",
      buttonColor: "bg-[#FF6B6B] hover:bg-[#FF5252]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <PageHero 
        title="Our Services"
        subtitle="Multilingual customer service that feels in-house, not outsourced"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#2C3E50]">
            Our Multilingual Customer Services
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We create customer experiences that are so closely aligned with your brand, they feel in-house, not outsourced. Our services map your customer's journey right from the moment they visit your site, helping your business to grow without sacrificing quality or efficiency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[#FF6B6B] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2C3E50]">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">Pricing</h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            We offer simple tiered all-inclusive pricing to match your business growth
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`${tier.bgColor} ${tier.textColor} p-8 rounded-lg shadow-lg`}>
                <h3 className="text-3xl font-bold mb-4">{tier.name}</h3>
                <p className={`mb-6 ${tier.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#FF6B6B] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${tier.buttonColor} text-white mb-6`}>
                  Get Started
                </Button>

                <div className={`text-sm mb-4 ${tier.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p>{tier.contract}</p>
                  <p>{tier.scaling}</p>
                </div>

                <div className={`border-t pt-4 ${tier.textColor === 'text-white' ? 'border-gray-600' : 'border-gray-300'}`}>
                  <p className="font-semibold mb-2">Who is this for?</p>
                  <p className={`text-sm ${tier.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tier.whoFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B6B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Become an Introducer</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with us and earn commission by introducing new clients to our services
          </p>
          <Button className="bg-white text-[#FF6B6B] hover:bg-gray-100 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
