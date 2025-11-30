import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

export default function WhyUs() {
  const testimonials = [
    {
      quote: "We have been impressed with the knowledge and dedication of the agents provided by Newstel. The core team is now very much part of the Chilly's Bottles team. They join in our 'weekly huddles' and despite working remotely we all feel as one united team. They are not simply a provider, they are a partner. They understand our business and suggest new tactics and methods which can improve our business. We will definitely be working with Newstel on a long-term basis and are excited about where they can help us take our business.",
      author: "Ellis Rickard",
      title: "Head of Customer Experience",
      company: "Chilly's Bottles",
      logo: "/clients/client-bloomandwild.webp"
    },
    {
      quote: "Newstel has helped to significantly increase our customer lifetime value. Like us, they are a very modern growing company that combines manpower with new technologies to offer the best solution to their customers. Newstel's proactive approach means it is constantly looking at ways to further optimise our customer support operations to provide our customers with only the highest level of support. To work with a partner that can manage the support side of our business without the need to be micromanaged has been a huge advantage and has enabled us to focus on building our core business for the future.",
      author: "Scott Dingwall",
      title: "CEO",
      company: "Wolfson Brands",
      logo: "/clients/client-wolfson.webp"
    }
  ];

  const reasons = [
    {
      number: "1",
      title: "Cost effective service, with high flexibility",
      description: "We don't do complex pricing with lots of add ons, or try to tie you into long term contracts. We know that growing businesses need expert support that can hit the ground running and can scale up (and then down) to meet business peaks and troughs. We also know that clients need to be able to plan and forecast costs with certainty.",
      features: [
        "Simple, transparent pricing, with an hourly rate that includes things like account management, the development of learning material, high level quality assurance and management reporting.",
        "The flexibility to scale resources up or down to manage peak service periods and volume spikes at short notice and at no additional cost to the agreed hourly rate.",
        "No long term tie-in – we offer monthly rolling contracts as standard (although almost all of our clients stay with us for years!)"
      ]
    },
    {
      number: "2",
      title: "The right team for your requirements",
      description: "We are proud of our reputation for creating customer experiences that are so closely aligned with your brand, they feel in-house, not outsourced. The key is in having a team that is passionate about performance, quality and enhancing our clients' brands through excellent customer service.",
      subdescription: "Our multilingual team comprises only native speakers, who are trained and experienced in omnichannel customer contact, including telephone, email, chat and social media, as well as back office support across multiple systems.",
      highlight: "Because we specialise in ecommerce support, we are fast to set up, with the assurance that we always have capacity to support your needs."
    },
    {
      number: "3",
      title: "A partnership approach to continuous improvement and customer lifetime value",
      description: "We are far more than a \"people in seats\" business. Our team continuously looks for areas where we can help clients to improve processes and generate efficiencies. This could be through the streamlining of processes, more effective use of helpdesk software, or through our expert technology solutions, such as process automation, flowbots and abandoned cart recovery systems.",
      highlight: "We have an amazing track record of helping clients to improve customer deflection rates, reduce average handling times (AHTs), optimise costs and significantly improve customer lifetime value."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#2C3E50] text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Why Us?</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            If you're a growing ecommerce business looking for first class, cost effective customer service and back office support, then we are a great fit for you!
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#2C3E50]">
            What our clients say
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Don't just take our word for it – here's what our clients say about us:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF6B6B] text-[#FF6B6B]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-[#2C3E50]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Reasons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#2C3E50]">
            Three great reasons to work with us
          </h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {reasons.map((reason, index) => (
              <div key={index} className="border-l-4 border-[#FF6B6B] pl-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#FF6B6B] text-white rounded-full flex items-center justify-center text-3xl font-bold">
                    {reason.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {reason.description}
                    </p>
                    {reason.subdescription && (
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {reason.subdescription}
                      </p>
                    )}
                    {reason.features && (
                      <ul className="space-y-3 mb-4">
                        {reason.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-[#FF6B6B] mt-1">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {reason.highlight && (
                      <p className="text-[#2C3E50] font-semibold bg-gray-50 p-4 rounded-lg border-l-4 border-[#FF6B6B]">
                        {reason.highlight}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
