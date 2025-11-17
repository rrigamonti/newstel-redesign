import { Headphones, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Complete multilingual customer service operation on demand with highly trained teams ready to answer tickets 24/7/365.',
    features: [
      'Inbound & Outbound',
      'Native Multilingual',
      'Omnichannel Support',
      'E-commerce Expertise',
      'Quality Assurance',
      'Scalable Teams',
    ],
  },
  {
    icon: FileText,
    title: 'Back-office Support (BPO)',
    description: 'Comprehensive business process outsourcing services to streamline your operations and enhance efficiency.',
    features: [
      'Quality Scoring',
      'Follow-Up Services',
      'Feedback & Review Moderation',
      'Data Processing',
      'Administrative Support',
      'Document Management',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Offer a Complete{' '}
            <span className="text-gradient-coral">Multilingual Customer Service</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our services help clients proactively drive lifetime value across the full customer journey – 
            from brand awareness through to brand advocacy – whether it's Sales, Customer Service or Back-office Support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-border bg-card"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-coral text-white">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-card-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Discover Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
