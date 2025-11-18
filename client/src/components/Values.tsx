const values = [
  {
    title: 'Adaptive',
    description: 'We shape ourselves around what you, the client, needs and can adapt quickly to change',
    icon: '/Adaptive.png',
  },
  {
    title: 'Efficient',
    description: 'Making things simple and doing things efficiently is our key to a highly motivated and productive team',
    icon: '/Efficient.png',
  },
  {
    title: 'Team-shaped',
    description: 'We invest in our team so they have extensive opportunities for growth, training and development',
    icon: '/Teamshaped.png',
  },
  {
    title: 'Customer Focused',
    description: 'We are dedicated to enhancing customer satisfaction and building strong customer relationships',
    icon: '/Customer-Focused.png',
  },
];

export default function Values() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Wavy Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-32 text-gray-200"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,0 L0,0 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-32 text-gray-200"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 C240,32 480,32 720,64 C960,96 1200,96 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-coral">Values</span>
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Badge Icon */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-48 h-48 md:w-56 md:h-56 object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
