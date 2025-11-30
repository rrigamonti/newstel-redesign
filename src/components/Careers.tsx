import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { icon: Users, text: 'Flexible work environment' },
  { icon: TrendingUp, text: 'Career growth opportunities' },
  { icon: Heart, text: 'Live your best life' },
  { icon: Briefcase, text: 'Growing company' },
];

export default function Careers() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 mb-6">
                <Briefcase className="h-4 w-4" />
                <span className="text-sm font-medium">We're Hiring</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join Our <span className="text-gradient-coral">Team!</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Interested in working in a growing customer success company where you can flourish in a 
                flexible environment, drive your own career growth and live your best life? This is what 
                working at Newstel Worldwide is all about!
              </p>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                Check Out Our Career Opportunities
              </Button>
            </div>

            {/* Right Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      {benefit.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
