interface PageHeroProps {
  title: string;
  subtitle?: string;
  showWave?: boolean;
}

export default function PageHero({ title, subtitle, showWave = true }: PageHeroProps) {
  return (
    <section className="relative bg-[#2C3E50] text-white pt-32 pb-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            {subtitle}
          </p>
        )}
      </div>
      
      {showWave && (
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
}
