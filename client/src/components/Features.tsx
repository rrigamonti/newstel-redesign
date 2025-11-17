import { DollarSign, TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: DollarSign,
    title: 'Low Cost, High Quality',
    description: 'Our training and QA processes produce best-in-class Average Handling Times (AHTs). Our rigorous training and QA means our agents carry more autonomy to deliver your customer service.',
  },
  {
    icon: TrendingUp,
    title: 'Rapid Scaling Up and Down',
    description: 'As eCommerce experts, we understand the peaks and troughs of online retailing and are experienced at rapidly scaling up and down according to client sales volumes.',
  },
  {
    icon: Users,
    title: 'Driving Customer Lifetime Value',
    description: 'By bringing the human element to customer interactions, we turn enquiries into cross-selling and upselling opportunities, increasing order values and conversion rates.',
  },
  {
    icon: Zap,
    title: 'Efficiency Through Technology',
    description: 'We use technology to seamlessly support our global team, allowing us to optimise the customer service experience and pass the benefits on to you and your customers.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Combining Technology and People to Deliver Efficient{' '}
            <span className="text-gradient-coral">Customer Service</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
