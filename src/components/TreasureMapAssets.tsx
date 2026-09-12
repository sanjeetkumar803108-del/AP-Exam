import React from 'react';

/**
 * High-fidelity 2D Vector assets for the Pirate Treasure Island Map
 * Matching the exact vintage parchment, lush islands, rivers, ponds, animals,
 * trees, rocks, compass rose, and red X from the reference design.
 */

export const CompassRose: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none" className="select-none">
    {/* Concentric rings */}
    <circle cx="0" cy="0" r="48" fill="none" stroke="#78471f" strokeWidth="0.9" strokeDasharray="2,2" opacity="0.45" />
    <circle cx="0" cy="0" r="44" fill="none" stroke="#6d3f19" strokeWidth="1.3" opacity="0.6" />
    <circle cx="0" cy="0" r="32" fill="none" stroke="#78471f" strokeWidth="0.8" opacity="0.4" />
    <circle cx="0" cy="0" r="16" fill="none" stroke="#78471f" strokeWidth="0.7" opacity="0.3" />

    {/* Crosshairs */}
    <line x1="-50" y1="0" x2="50" y2="0" stroke="#78471f" strokeWidth="0.9" opacity="0.5" />
    <line x1="0" y1="-50" x2="0" y2="50" stroke="#78471f" strokeWidth="0.9" opacity="0.5" />

    {/* Diagonal rays */}
    <line x1="-28" y1="-28" x2="28" y2="28" stroke="#78471f" strokeWidth="0.7" opacity="0.35" />
    <line x1="28" y1="-28" x2="-28" y2="28" stroke="#78471f" strokeWidth="0.7" opacity="0.35" />

    {/* North Star Point */}
    <polygon points="0,-42 5,-10 0,0" fill="#6d3f19" opacity="0.85" />
    <polygon points="0,-42 -5,-10 0,0" fill="#c49a6c" opacity="0.75" />

    {/* South Star Point */}
    <polygon points="0,42 -5,10 0,0" fill="#6d3f19" opacity="0.85" />
    <polygon points="0,42 5,10 0,0" fill="#c49a6c" opacity="0.75" />

    {/* East Star Point */}
    <polygon points="42,0 10,5 0,0" fill="#6d3f19" opacity="0.85" />
    <polygon points="42,0 10,-5 0,0" fill="#c49a6c" opacity="0.75" />

    {/* West Star Point */}
    <polygon points="-42,0 -10,-5 0,0" fill="#6d3f19" opacity="0.85" />
    <polygon points="-42,0 -10,5 0,0" fill="#c49a6c" opacity="0.75" />

    {/* Diagonal Intermediate Points */}
    <polygon points="26,-26 8,-4 0,0" fill="#78471f" opacity="0.65" />
    <polygon points="26,-26 4,-8 0,0" fill="#d4ad80" opacity="0.6" />

    <polygon points="-26,-26 -4,-8 0,0" fill="#78471f" opacity="0.65" />
    <polygon points="-26,-26 -8,-4 0,0" fill="#d4ad80" opacity="0.6" />

    <polygon points="26,26 4,8 0,0" fill="#78471f" opacity="0.65" />
    <polygon points="26,26 8,4 0,0" fill="#d4ad80" opacity="0.6" />

    <polygon points="-26,26 -8,4 0,0" fill="#78471f" opacity="0.65" />
    <polygon points="-26,26 -4,8 0,0" fill="#d4ad80" opacity="0.6" />

    {/* Cardinal Letters in classic antique serif */}
    <text x="0" y="-46" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fontWeight="900" fill="#4a2a10">N</text>
    <text x="0" y="56" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="900" fill="#4a2a10">S</text>
    <text x="49" y="4" textAnchor="start" fontFamily="Georgia, serif" fontSize="11" fontWeight="900" fill="#4a2a10">E</text>
    <text x="-49" y="4" textAnchor="end" fontFamily="Georgia, serif" fontSize="11" fontWeight="900" fill="#4a2a10">W</text>

    {/* Center brass pivot */}
    <circle cx="0" cy="0" r="4.5" fill="#5c3817" />
    <circle cx="0" cy="0" r="2" fill="#f5ecd8" />
  </g>
);

export const SeaMonster: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none" className="select-none" opacity="0.8">
    {/* Water ripples under monster */}
    <path d="M -8,38 C 4,36 16,40 28,37 M 32,38 C 44,36 56,40 68,37 M 72,38 C 84,36 96,40 108,37" stroke="#78471f" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.45" />

    {/* Sea serpent head and arched neck */}
    <path
      d="M 2,36 C 4,24 8,12 12,0 C 14,-8 22,-16 28,-14 C 32,-13 32,-8 28,-4 C 24,0 18,8 16,24 C 15,29 16,33 17,36"
      stroke="#5c3817"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />

    {/* Eye and cute smiling mouth */}
    <circle cx="26" cy="-11" r="1.3" fill="#5c3817" />
    <path d="M 30,-7 C 28,-5 25,-6 23,-5" stroke="#5c3817" strokeWidth="1.2" strokeLinecap="round" fill="none" />

    {/* Head crest / horns */}
    <path d="M 18,-15 L 20,-20 L 23,-15 L 25,-19 L 27,-14" stroke="#5c3817" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Hump 1 */}
    <path d="M 28,36 C 32,20 46,18 52,36" stroke="#5c3817" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    {/* Dorsal spines on hump 1 */}
    <path d="M 36,25 L 38,20 L 41,24 L 43,20 L 46,25" stroke="#5c3817" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

    {/* Hump 2 */}
    <path d="M 58,36 C 62,24 72,22 78,36" stroke="#5c3817" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M 65,28 L 67,23 L 70,27" stroke="#5c3817" strokeWidth="1.2" strokeLinecap="round" fill="none" />

    {/* Tail curling out of ocean */}
    <path d="M 84,36 C 88,26 95,22 93,12 C 91,6 87,10 88,16" stroke="#5c3817" strokeWidth="1.7" strokeLinecap="round" fill="none" />
    {/* Water splash ripples */}
    <path d="M 80,38 C 86,36 92,39 98,37" stroke="#78471f" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
  </g>
);

export const PalmDoodle: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none" className="select-none" opacity="0.7">
    {/* Dune mound */}
    <path d="M -12,20 C -4,15 12,14 26,20" stroke="#78471f" strokeWidth="1" strokeLinecap="round" fill="none" />
    {/* Tree 1 */}
    <path d="M 0,18 C -2,8 2,2 5,-8" stroke="#6d3f19" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M 5,-8 C 0,-12 -8,-10 -12,-6 M 5,-8 C 2,-16 -3,-18 -7,-15 M 5,-8 C 8,-17 14,-17 16,-13 M 5,-8 C 12,-12 18,-11 20,-6 M 5,-8 C 12,-3 17,2 18,8" stroke="#6d3f19" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    {/* Tree 2 (smaller) */}
    <path d="M 12,18 C 11,10 14,5 17,-3" stroke="#6d3f19" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    <path d="M 17,-3 C 13,-6 8,-5 5,-2 M 17,-3 C 16,-10 12,-11 9,-9 M 17,-3 C 19,-10 24,-10 25,-7 M 17,-3 C 22,-5 26,-3 27,1" stroke="#6d3f19" strokeWidth="1.1" strokeLinecap="round" fill="none" />
  </g>
);

export const OceanWaves: React.FC<{ x: number; y: number; count?: number }> = ({ x, y, count = 2 }) => (
  <g transform={`translate(${x}, ${y})`} pointerEvents="none" className="select-none" opacity="0.45">
    {Array.from({ length: count }).map((_, i) => (
      <path
        key={i}
        d={`M 0,${i * 8} C 4,${i * 8 - 3} 8,${i * 8 + 3} 12,${i * 8} M 14,${i * 8} C 18,${i * 8 - 3} 22,${i * 8 + 3} 26,${i * 8}`}
        stroke="#78471f"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    ))}
  </g>
);

export const RedXMark: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none" className="select-none">
    {/* Soft drop shadow */}
    <line x1="-12" y1="-12" x2="12" y2="12" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" opacity="0.25" transform="translate(1, 2)" />
    <line x1="12" y1="-12" x2="-12" y2="12" stroke="#000000" strokeWidth="5.5" strokeLinecap="round" opacity="0.25" transform="translate(1, 2)" />

    {/* Primary bold red brush strokes */}
    <line x1="-12" y1="-12" x2="12" y2="12" stroke="#dc2626" strokeWidth="5.5" strokeLinecap="round" />
    <line x1="12" y1="-12" x2="-12" y2="12" stroke="#dc2626" strokeWidth="5.5" strokeLinecap="round" />

    {/* Core crimson highlight */}
    <line x1="-10" y1="-10" x2="10" y2="10" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="-10" x2="-10" y2="10" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
  </g>
);

export const PalmTree2D: React.FC<{ x: number; y: number; scale?: number; rotation?: number }> = ({
  x,
  y,
  scale = 1,
  rotation = 0
}) => (
  <g transform={`translate(${x}, ${y}) scale(${scale}) rotate(${rotation})`} pointerEvents="none" className="select-none">
    {/* Ground contact shadow */}
    <ellipse cx="6" cy="22" rx="14" ry="4" fill="#000000" opacity="0.18" />

    {/* Curved woody trunk */}
    <path
      d="M 4,22 C 3,12 8,6 12,-6"
      fill="none"
      stroke="#7c4a22"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <path
      d="M 4,22 C 3,12 8,6 12,-6"
      fill="none"
      stroke="#965a2d"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="2,3"
    />

    {/* Coconuts cluster */}
    <circle cx="9" cy="-4" r="2.8" fill="#4a2a11" />
    <circle cx="14" cy="-3" r="2.8" fill="#3a1e08" />
    <circle cx="11" cy="-7" r="2.4" fill="#5a3416" />

    {/* 5 lush green palm fronds with multi-tone depth */}
    {/* Left downward arch */}
    <path d="M 12,-6 C 4,-10 -6,-6 -14,2" fill="none" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 12,-6 C 4,-10 -6,-6 -14,2" fill="none" stroke="#86efac" strokeWidth="1.8" strokeLinecap="round" />

    {/* Left upward arch */}
    <path d="M 12,-6 C 6,-18 -2,-22 -10,-18" fill="none" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 12,-6 C 6,-18 -2,-22 -10,-18" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" />

    {/* Center top arch */}
    <path d="M 12,-6 C 15,-20 20,-22 23,-16" fill="none" stroke="#22c55e" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 12,-6 C 15,-20 20,-22 23,-16" fill="none" stroke="#bbf7d0" strokeWidth="1.8" strokeLinecap="round" />

    {/* Right upward arch */}
    <path d="M 12,-6 C 20,-15 30,-13 32,-3" fill="none" stroke="#16a34a" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 12,-6 C 20,-15 30,-13 32,-3" fill="none" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" />

    {/* Right downward arch */}
    <path d="M 12,-6 C 22,1 30,6 30,15" fill="none" stroke="#15803d" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M 12,-6 C 22,1 30,6 30,15" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
  </g>
);

export const FacetedRock2D: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none" className="select-none">
    {/* Rock shadow */}
    <ellipse cx="0" cy="12" rx="20" ry="6" fill="#000000" opacity="0.22" />

    {/* Main polygonal boulder */}
    {/* Top light facet */}
    <polygon points="-14,6 -5,-14 9,-9 16,5 5,12 -12,11" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="0.5" />
    {/* Left illuminated facet */}
    <polygon points="-14,6 -5,-14 0,3 -12,11" fill="#64748b" />
    {/* Right shaded facet */}
    <polygon points="-5,-14 9,-9 16,5 5,12 0,3" fill="#475569" />
    {/* Deep bottom shadow facet */}
    <polygon points="16,5 13,11 5,12" fill="#334155" />
  </g>
);

export const SteppingStone: React.FC<{ x: number; y: number; scale?: number }> = ({ x, y, scale = 1 }) => (
  <g transform={`translate(${x}, ${y}) scale(${scale})`} pointerEvents="none" className="select-none">
    {/* Water ripple ring around stone */}
    <ellipse cx="0" cy="0" rx="17" ry="9" fill="none" stroke="#0284c7" strokeWidth="1.2" opacity="0.4" />
    <ellipse cx="0" cy="0" rx="14" ry="7" fill="#0369a1" opacity="0.25" />
    {/* Sandy ring */}
    <ellipse cx="0" cy="-1" rx="12" ry="6" fill="#eed8a1" />
    {/* Rock top */}
    <polygon points="-8,2 -2,-7 6,-5 9,2 2,6 -6,5" fill="#94a3b8" />
    <polygon points="-8,2 -2,-7 0,1 -6,5" fill="#64748b" />
    <polygon points="-2,-7 6,-5 9,2 2,6 0,1" fill="#475569" />
  </g>
);

export const ExplorerMascot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`}>
    {/* Ambient shadow underneath */}
    <div className="w-9 h-2.5 bg-black/30 rounded-full blur-[1px] absolute -bottom-1" />

    {/* Mascot Face & Explorer Safari Hat */}
    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-300 via-amber-200 to-amber-100 border-2 border-white shadow-md flex items-center justify-center relative overflow-hidden ring-3 ring-amber-500/40">
      {/* Safari Hat brim */}
      <div className="absolute -top-1 inset-x-0 h-4 bg-gradient-to-b from-[#b45309] to-[#92400e] rounded-t-full border-b border-[#78350f]" />
      {/* Safari Hat ribbon */}
      <div className="absolute top-2.5 inset-x-1 h-1 bg-[#451a03]" />
      {/* Friendly smiling face */}
      <div className="mt-2.5 flex flex-col items-center">
        {/* Eyes */}
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-2 bg-[#271508] rounded-full" />
          <div className="w-1.5 h-2 bg-[#271508] rounded-full" />
        </div>
        {/* Rosy cheeks */}
        <div className="flex items-center justify-between w-6 -mt-0.5">
          <div className="w-1.5 h-1 bg-rose-400/60 rounded-full blur-[0.5px]" />
          <div className="w-1.5 h-1 bg-rose-400/60 rounded-full blur-[0.5px]" />
        </div>
        {/* Smile */}
        <div className="w-2.5 h-1 border-b-2 border-[#451a03] rounded-full -mt-0.5" />
      </div>
    </div>
  </div>
);
