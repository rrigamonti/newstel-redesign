import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Hamburg, Germany', x: '52%', y: '32%', color: 'bg-coral' },
  { name: 'Glasgow, UK', x: '48%', y: '30%', color: 'bg-coral' },
  { name: 'Istanbul, Turkey', x: '58%', y: '40%', color: 'bg-coral' },
  { name: 'Malta', x: '52%', y: '45%', color: 'bg-coral' },
  { name: 'Manila, Philippines', x: '82%', y: '52%', color: 'bg-coral' },
];

export default function WorldMap() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 px-4">
      {/* Map Container */}
      <div className="relative w-full aspect-[2/1] bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg">
        {/* World Map Image */}
        <img
          src="/world-map.png"
          alt="World Map"
          className="w-full h-full object-contain opacity-20"
        />
        
        {/* Location Markers */}
        {locations.map((location, index) => (
          <div
            key={index}
            className="absolute group cursor-pointer"
            style={{
              left: location.x,
              top: location.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Pulse Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-coral rounded-full animate-ping opacity-20"></div>
            </div>
            
            {/* Marker Pin */}
            <div className="relative flex items-center justify-center w-10 h-10 bg-coral rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            
            {/* Location Label */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-navy text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-semibold">
                {location.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-navy rotate-45"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md">
          <div className="w-3 h-3 bg-coral rounded-full"></div>
          <span className="text-sm font-medium text-slate-700">
            Global Office Locations
          </span>
        </div>
      </div>
    </div>
  );
}
