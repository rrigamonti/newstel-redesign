import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-navy curve-bottom">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-medium">24/7 Multilingual Support Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Digitally-led
            <br />
            <span className="text-gradient-coral bg-gradient-coral bg-clip-text text-transparent">
              Multilingual
            </span>
            <br />
            Customer Service
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in">
            Experience exceptional service at Newstel, where our offerings include 24/7 multilingual 
            customer support, Business Process Outsourcing (BPO) services, and specialized expertise 
            in both inbound and outbound interactions, with a specific focus on E-commerce.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 h-auto gap-2 group"
            >
              <Phone className="h-5 w-5" />
              Call +44 (20) 4519 7469
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base px-8 py-6 h-auto gap-2 group"
            >
              Book a Free Consultation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">95</div>
              <div className="text-sm text-white/70">Countries Supported</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">12</div>
              <div className="text-sm text-white/70">Languages Spoken</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">4%</div>
              <div className="text-sm text-white/70">Attrition Rate</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/70">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
