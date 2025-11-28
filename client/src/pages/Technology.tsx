import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

export default function Technology() {
  const technologies = [
    { category: "Helpdesk", logo: "/tech/zendesk.jpg", name: "Zendesk" },
    { category: "Helpdesk", logo: "/tech/freshdesk.jpg", name: "Freshdesk" },
    { category: "CRM", logo: "/tech/salesforce.jpg", name: "Salesforce" },
    { category: "Ecommerce", logo: "/tech/shopify.jpg", name: "Shopify" },
    { category: "Ecommerce", logo: "/tech/magento.jpg", name: "Magento" },
    { category: "Ecommerce", logo: "/tech/woocommerce.jpg", name: "WooCommerce" },
    { category: "Reviews", logo: "/tech/trustpilot.jpg", name: "Trustpilot" },
    { category: "Reviews", logo: "/tech/yotpo.jpg", name: "Yotpo" },
    { category: "Project Management", logo: "/tech/jira.jpg", name: "Jira" },
    { category: "Social Media", logo: "/tech/hootsuite.jpg", name: "Hootsuite" },
    { category: "Contact Center", logo: "/tech/puzzel.jpg", name: "Puzzel" },
  ];

  const services = [
    "Specialized services to unlock the full capabilities of your customer helpdesk software, ensuring optimal performance and efficiency.",
    "Advanced expertise in cutting-edge AI technology, leveraging innovative solutions to enhance your customer service operations.",
    "Comprehensive support throughout the entire lifecycle, from initial setup and integration to ongoing enhancements and detailed reporting, streamlining your operations for maximum effectiveness.",
    "Proficient in working with and optimizing leading customer service software, including Zendesk, Freshdesk, Puzzel, and Salesforce, tailored to meet your specific business requirements.",
    "Deployment of customer service tools, including chatbots, on a variety of ecommerce platforms such as Shopify, Woocommerce, Magento, and Mollie, providing a seamless and responsive customer experience across diverse online retail environments."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-[#2C3E50] text-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Technology</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            Seamless integration with your existing systems
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xl text-center text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We use technology to seamlessly support our global team, allowing us to optimise the customer service experience and pass the benefits on to you and your customers. Drawing on years of experience in customer support systems, we offer clients seamless integration using in-place solutions, or we can help you select and deploy new tools.
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <p className="text-[#FF6B6B] font-semibold mb-4">{tech.category}</p>
                <div className="h-16 flex items-center justify-center mb-4">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50]">
            Integration and Optimisation Services
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#FF6B6B] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg leading-relaxed">{service}</p>
              </div>
            ))}
          </div>

          {/* Case Study Example */}
          <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg border-l-4 border-[#FF6B6B]">
            <p className="text-gray-700 text-lg leading-relaxed italic">
              We helped online marketplace OnBuy.com to create substantial improvements to its Zendesk workflows by developing changes to processes, queues, triggers, and automations, all aimed at improving efficiency and delivering a better customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Statement */}
      <section className="py-16 bg-[#2C3E50] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center max-w-5xl mx-auto leading-relaxed">
            We offer a service to evaluate, advise upon, and implement new technologies or optimisations that have a significant impact on process efficiency and improving customer profitability.
          </h2>
        </div>
      </section>

      <Footer />
    </div>
  );
}
