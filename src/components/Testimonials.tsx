import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  logo: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Newstel has transformed our customer service operations. Their multilingual support team handles our global customers with professionalism and efficiency. The 24/7 availability has been a game-changer for our business.",
    author: "Sarah Mitchell",
    position: "Head of Customer Experience",
    company: "Urban Outfitters",
    logo: "/clients/client-urbanoutfitters.webp",
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Newstel has significantly reduced our operational costs while improving customer satisfaction. Their team seamlessly integrates with our brand values and delivers exceptional service consistently.",
    author: "James Chen",
    position: "Operations Director",
    company: "Bloom & Wild",
    logo: "/clients/client-bloomandwild.webp",
    rating: 5,
  },
  {
    id: 3,
    quote: "The scalability Newstel offers is unmatched. During our peak seasons, they effortlessly scale up to meet demand, and their quality never wavers. It's like having an extension of our own team.",
    author: "Emma Thompson",
    position: "Customer Success Manager",
    company: "OnBuy",
    logo: "/clients/client-onbuy.webp",
    rating: 5,
  },
  {
    id: 4,
    quote: "Newstel's technology integration made the transition seamless. Their team is responsive, professional, and truly understands the e-commerce landscape. Our customer lifetime value has increased significantly.",
    author: "Michael Rodriguez",
    position: "VP of Operations",
    company: "NordicTrack",
    logo: "/clients/client-nordictrack.webp",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our <span className="text-coral">Clients Say</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with Newstel.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-coral/20 text-6xl font-serif">"</div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < currentTestimonial.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-slate-700 text-center mb-8 leading-relaxed">
                {currentTestimonial.quote}
              </blockquote>

              {/* Company Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={currentTestimonial.logo}
                  alt={currentTestimonial.company}
                  className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Author Info */}
              <div className="text-center">
                <p className="font-semibold text-lg text-slate-900">
                  {currentTestimonial.author}
                </p>
                <p className="text-slate-600">
                  {currentTestimonial.position}
                </p>
                <p className="text-coral font-medium">
                  {currentTestimonial.company}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-coral text-slate-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-coral text-slate-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-coral w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
