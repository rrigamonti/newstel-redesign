export default function WorldMap() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 px-4">
      {/* Map Container */}
      <div className="relative w-full">
        {/* Official Newstel Locations Map */}
        <img
          src="/newstel-locations-map.png"
          alt="Newstel Global Locations - Hamburg, Glasgow, Istanbul, Malta, Manila"
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}
