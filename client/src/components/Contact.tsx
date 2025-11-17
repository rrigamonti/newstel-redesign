import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+44 (20) 4519 7469', '+49 (40) 80813915'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@newstel.com'],
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    details: ['Hamburg, Germany'],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Talk to <span className="text-gradient-coral">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us to find out more! Our team are standing by and ready to help add value across your entire customer journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Summary of how we can help
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-card-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional CTA */}
            <div className="p-8 rounded-2xl gradient-coral text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="mb-6 text-white/90">
                Book a free consultation with our team today and discover how we can transform your customer service.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-accent hover:bg-white/90 w-full"
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
