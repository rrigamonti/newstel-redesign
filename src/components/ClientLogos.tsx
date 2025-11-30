import { useEffect, useState } from 'react';

const clients = [
  { name: 'Coway', logo: '/clients/client-coway.webp' },
  { name: 'BestMediaWeb', logo: '/clients/client-bestmediaweb.webp' },
  { name: 'Urban Outfitters', logo: '/clients/client-urbanoutfitters.webp' },
  { name: 'FanFuel', logo: '/clients/client-fanfuel.webp' },
  { name: 'Bloom & Wild', logo: '/clients/client-bloomandwild.webp' },
  { name: 'Parkdepot', logo: '/clients/client-parkdepot.webp' },
  { name: 'OnBuy', logo: '/clients/client-onbuy.webp' },
  { name: 'Wolfson Brands', logo: '/clients/client-wolfson.webp' },
  { name: 'Learnerbly', logo: '/clients/client-learnerbly.webp' },
  { name: 'NordicTrack', logo: '/clients/client-nordictrack.webp' },
];

export default function ClientLogos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView >= clients.length ? 0 : prev + itemsPerView));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          A Selection of Our Clients
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-8 md:gap-12">
            {visibleClients.map((client, index) => (
              <div
                key={`${client.name}-${currentIndex}-${index}`}
                className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerView)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-accent w-8'
                    : 'bg-border'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
