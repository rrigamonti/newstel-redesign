import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Hamburg', x: 51, y: 35, country: 'Germany' },
  { name: 'Glasgow', x: 48, y: 32, country: 'UK' },
  { name: 'Istanbul', x: 58, y: 42, country: 'Turkey' },
  { name: 'Malta', x: 52, y: 48, country: 'Malta' },
  { name: 'Manila', x: 82, y: 52, country: 'Philippines' },
];

export default function WorldMap() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-12">
      <svg
        viewBox="0 0 100 60"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* World map simplified outline */}
        <g fill="oklch(0.95 0 0)" stroke="oklch(0.85 0 0)" strokeWidth="0.2">
          {/* Europe */}
          <path d="M 45 30 L 48 28 L 52 29 L 55 27 L 58 29 L 60 32 L 58 35 L 55 36 L 52 35 L 48 33 L 45 32 Z" />
          
          {/* Asia */}
          <path d="M 60 25 L 65 23 L 70 24 L 75 26 L 80 28 L 85 30 L 88 33 L 90 36 L 88 40 L 85 43 L 80 45 L 75 46 L 70 45 L 65 43 L 62 40 L 60 37 L 58 33 L 60 29 Z" />
          
          {/* Africa */}
          <path d="M 48 38 L 52 37 L 56 38 L 58 42 L 60 46 L 58 50 L 55 52 L 52 53 L 48 52 L 45 50 L 43 46 L 45 42 Z" />
          
          {/* North America */}
          <path d="M 15 20 L 20 18 L 25 19 L 30 21 L 33 24 L 35 28 L 33 32 L 30 34 L 25 35 L 20 33 L 15 30 L 12 26 L 13 22 Z" />
          
          {/* South America */}
          <path d="M 25 40 L 28 38 L 32 39 L 34 42 L 35 46 L 33 50 L 30 53 L 27 54 L 24 53 L 22 50 L 21 46 L 23 42 Z" />
          
          {/* Australia */}
          <path d="M 78 48 L 82 47 L 86 48 L 88 51 L 87 54 L 84 56 L 80 56 L 77 54 L 76 51 Z" />
        </g>

        {/* Location markers */}
        {locations.map((location, index) => (
          <g key={index} className="cursor-pointer group">
            {/* Marker circle */}
            <circle
              cx={location.x}
              cy={location.y}
              r="1.5"
              fill="oklch(0.66 0.19 25.09)"
              className="transition-all group-hover:r-2"
            />
            {/* Marker dot */}
            <circle
              cx={location.x}
              cy={location.y}
              r="0.5"
              fill="white"
            />
            {/* Label */}
            <text
              x={location.x}
              y={location.y - 3}
              textAnchor="middle"
              className="text-[2.5px] font-semibold fill-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {location.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <MapPin className="w-5 h-5 text-coral" />
        <span className="text-sm text-slate-600">
          Our Global Locations: Hamburg, Glasgow, Istanbul, Malta, Manila
        </span>
      </div>
    </div>
  );
}
