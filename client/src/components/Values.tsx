import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    title: 'Adaptive',
    description: 'We shape ourselves around what you, the client, needs and can adapt quickly to change',
    icon: '/value-adaptive.png',
  },
  {
    title: 'Efficient',
    description: 'Making things simple and doing things efficiently is our key to a highly motivated and productive team',
    icon: '/value-efficient.png',
  },
  {
    title: 'Team-shaped',
    description: 'We invest in our team so they have extensive opportunities for growth, training and development',
    icon: '/value-teamshaped.png',
  },
  {
    title: 'Customer Focused',
    description: 'We are dedicated to enhancing customer satisfaction and building strong customer relationships',
    icon: '/value-customer-focused.png',
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-coral">Values</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card text-center"
            >
              <CardContent className="pt-8 pb-6 px-6">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img
                      src={value.icon}
                      alt={value.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
