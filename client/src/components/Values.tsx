import { Sparkles, Zap, TrendingUp, Heart } from 'lucide-react';

const values = [
  {
    icon: Sparkles,
    title: 'Client-Centric Adaptability',
    description: 'We shape ourselves around what you, the client, needs and can adapt quickly to change',
  },
  {
    icon: Zap,
    title: 'Simplicity & Efficiency',
    description: 'Making things simple and doing things efficiently is our key to a highly motivated and productive team',
  },
  {
    icon: TrendingUp,
    title: 'Team Investment',
    description: 'We invest in our team so they have extensive opportunities for growth, training and development',
  },
  {
    icon: Heart,
    title: 'Customer Satisfaction',
    description: 'We are dedicated to enhancing customer satisfaction and building strong customer relationships',
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-coral">Values</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
