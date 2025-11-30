import { Cpu, Link2, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Technology() {
  return (
    <section id="technology" className="py-20 gradient-navy curve-bottom curve-top">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <Cpu className="h-10 w-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Seamless Technology Integration
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Seamless integration using in-place solutions or we can help you select and deploy new tools. 
            Our technology stack is designed to optimize customer service experiences and deliver measurable results.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Link2 className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Easy Integration</h3>
              <p className="text-white/70 text-sm">Connect with your existing systems effortlessly</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Settings className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Custom Solutions</h3>
              <p className="text-white/70 text-sm">Tailored technology to fit your unique needs</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Cpu className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Advanced Tools</h3>
              <p className="text-white/70 text-sm">Cutting-edge platforms for optimal performance</p>
            </div>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
          >
            Find Out About Our Technology Services
          </Button>
        </div>
      </div>
    </section>
  );
}
