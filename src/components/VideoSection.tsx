export default function VideoSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why You Should Work With <span className="text-gradient-coral">Us</span>
            </h2>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/video-poster.jpg"
              >
                <source
                  src="https://newstel.com/wp-content/uploads/2024/10/Newstel.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
