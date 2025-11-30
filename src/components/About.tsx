import { Globe, MessageSquare, TrendingDown, Briefcase } from 'lucide-react';

const stats = [
  { icon: Globe, value: '95', label: 'Countries Supported' },
  { icon: MessageSquare, value: '12', label: 'Languages Spoken' },
  { icon: TrendingDown, value: '4%', label: 'Employee Attrition Rate' },
  { icon: Briefcase, value: '7', label: 'Industries We Work With' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Who Are <span className="text-gradient-coral">We?</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2015, Newstel is a high quality contact centre based in Hamburg, Germany. 
                Newstel offers a complete <strong className="text-foreground">multilingual customer support</strong> operation 
                on demand. Our highly trained team – ready to answer tickets <strong className="text-foreground">24/7/365</strong> – 
                undergo regular retraining to keep them on the ball and ready for any eventuality.
              </p>
              <p>
                We operate an elastic <strong className="text-foreground">pay-as-you-go</strong> pricing system. 
                No task is too complex for Newstel. Just tell us what you require, and we'll see that it's done. 
                We have the technology and the expertise to <strong className="text-foreground">keep your customers happy</strong> and 
                your business running smoothly.
              </p>
              <p>
                Besides our headquarters in <strong className="text-foreground">Hamburg, Germany</strong>, we also have 
                contact centers in <strong className="text-foreground">Glasgow UK</strong>, 
                in <strong className="text-foreground">Manila, the Philippines</strong>, 
                <strong className="text-foreground"> Istanbul, Turkey</strong>, and <strong className="text-foreground">San Ġwann, Malta</strong>. 
                To ensure European quality standards apply across the entire organization, our regional quality managers work 
                hand in hand with the quality control team in our Hamburg headquarters.
              </p>
              <p>
                Our 200 plus employees – <strong className="text-foreground">native speakers from all over the world</strong> – 
                regularly receive instruction based on the customer service guidelines we have developed with you, 
                thus leaving them perfectly equipped to represent your brand when communicating with your customers.
              </p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
