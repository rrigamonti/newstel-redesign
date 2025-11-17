import { MapPin, Building2, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const locations = [
  {
    city: 'Hamburg',
    country: 'Germany',
    badge: 'Newstel HQ',
    icon: Building2,
    services: ['Account Management', 'Operations & Technology', 'Training & Quality'],
  },
  {
    city: 'Glasgow',
    country: 'UK',
    badge: 'English CX',
    icon: Users,
    services: ['Account Management', 'Training & Quality'],
  },
  {
    city: 'Istanbul',
    country: 'Turkey',
    badge: 'Multilingual CX',
    icon: MapPin,
    services: ['European Language Support', 'Back Office Support'],
  },
  {
    city: 'San Ġwann',
    country: 'Malta',
    badge: 'Multilingual CX',
    icon: Award,
    services: ['Multilingual Speakers', 'Specific Languages'],
  },
  {
    city: 'Manila',
    country: 'Philippines',
    badge: 'English CX',
    icon: Users,
    services: ['C2 Level English', '24/7 Support'],
  },
];

export default function Locations() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-coral">Locations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Global presence with European quality standards across all locations
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => {
            const Icon = location.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {location.badge}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-card-foreground">
                    {location.city}
                  </CardTitle>
                  <p className="text-muted-foreground">{location.country}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {location.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-card-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
