import React from 'react';

export const ProductPouchSVG = ({ type = 'yellow', title = '', weight = '80gms' }) => {
  // Config per type
  const configs = {
    yellow: {
      bgGradientStart: '#FFF1B5',
      bgGradientEnd: '#F9D849',
      accentColor: '#0F4028',
      labelBg: '#FAF5E4',
      pouchBorder: '#E6C42A',
      titleText: 'Banana Chips',
      subText: 'Classic Salted',
      badgeText: '100% Natural',
      illustration: (
        <g transform="translate(60, 115)">
          {/* Banana slices */}
          <circle cx="20" cy="15" r="14" fill="#FFE57F" stroke="#E6C200" strokeWidth="2"/>
          <circle cx="20" cy="15" r="6" fill="#FFF9C4"/>
          <circle cx="45" cy="22" r="12" fill="#FFE57F" stroke="#E6C200" strokeWidth="2"/>
          <circle cx="45" cy="22" r="5" fill="#FFF9C4"/>
        </g>
      )
    },
    green: {
      bgGradientStart: '#A8E6CF',
      bgGradientEnd: '#4CAF50',
      accentColor: '#0A3B1F',
      labelBg: '#E8F5E9',
      pouchBorder: '#388E3C',
      titleText: 'Jackfruit Chips',
      subText: 'Naturally Sweet',
      badgeText: 'Real Fruit',
      illustration: (
        <g transform="translate(55, 110)">
          {/* Jackfruit pod illustration */}
          <path d="M15,30 Q30,5 45,30 Q30,45 15,30 Z" fill="#FFB74D" stroke="#F57C00" strokeWidth="2"/>
          <circle cx="30" cy="25" r="3" fill="#E65100"/>
        </g>
      )
    },
    orange: {
      bgGradientStart: '#FFD3B6',
      bgGradientEnd: '#FF8B42',
      accentColor: '#0F4028',
      labelBg: '#FFF3E0',
      pouchBorder: '#E65100',
      titleText: 'Kabuli Chana',
      subText: 'Salt & Pepper',
      badgeText: 'High Protein',
      illustration: (
        <g transform="translate(55, 115)">
          {/* Chana / Chickpea seeds */}
          <circle cx="20" cy="15" r="8" fill="#FFE0B2" stroke="#FB8C00" strokeWidth="2"/>
          <circle cx="36" cy="18" r="9" fill="#FFE0B2" stroke="#FB8C00" strokeWidth="2"/>
          <circle cx="28" cy="28" r="8" fill="#FFE0B2" stroke="#FB8C00" strokeWidth="2"/>
        </g>
      )
    },
    teal: {
      bgGradientStart: '#B2EBF2',
      bgGradientEnd: '#00B4D8',
      accentColor: '#064E3B',
      labelBg: '#E0F7FA',
      pouchBorder: '#00838F',
      titleText: 'Banana Chips',
      subText: 'Salt & Pepper',
      badgeText: 'Light & Crispy',
      illustration: (
        <g transform="translate(60, 115)">
          {/* Banana slice + spice dots */}
          <circle cx="20" cy="15" r="14" fill="#FFF59D" stroke="#FBC02D" strokeWidth="2"/>
          <circle cx="42" cy="20" r="10" fill="#FFF59D" stroke="#FBC02D" strokeWidth="2"/>
          <circle cx="18" cy="12" r="1.5" fill="#37474F"/>
          <circle cx="23" cy="18" r="1.5" fill="#37474F"/>
        </g>
      )
    }
  };

  const conf = configs[type] || configs.yellow;

  return (
    <svg width="170" height="205" viewBox="0 0 170 205" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.12))', transition: 'transform 0.3s ease' }}>
      <defs>
        <linearGradient id={`bg-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={conf.bgGradientStart} />
          <stop offset="100%" stopColor={conf.bgGradientEnd} />
        </linearGradient>
        <linearGradient id="foilHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4"/>
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0"/>
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0"/>
          <stop offset="100%" stopColor="#000000" stopOpacity="0.15"/>
        </linearGradient>
      </defs>

      {/* Pouch Base Shape with Top Notch */}
      <path d="M 25 15 L 145 15 L 155 190 C 155 196, 145 200, 85 200 C 25 200, 15 196, 15 190 Z" fill={`url(#bg-${type})`} stroke={conf.pouchBorder} strokeWidth="1.5" />
      
      {/* Glossy Overlay */}
      <path d="M 25 15 L 145 15 L 155 190 C 155 196, 145 200, 85 200 C 25 200, 15 196, 15 190 Z" fill="url(#foilHighlight)" />

      {/* Top Zip Seal Lines */}
      <line x1="20" y1="22" x2="150" y2="22" stroke="#000000" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="20" y1="26" x2="150" y2="26" stroke="#000000" strokeOpacity="0.15" strokeWidth="1"/>

      {/* Notch indicator */}
      <path d="M 15 24 L 20 24" stroke="#444" strokeWidth="1.5"/>
      <path d="M 155 24 L 150 24" stroke="#444" strokeWidth="1.5"/>

      {/* Brand Header */}
      <text x="85" y="44" textAnchor="middle" fill={conf.accentColor} fontFamily="Outfit, sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.5">PureBë</text>
      <text x="85" y="53" textAnchor="middle" fill={conf.accentColor} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="500" fontSize="7" opacity="0.8">Snacking made healthy</text>

      {/* Product Label Card */}
      <rect x="25" y="60" width="120" height="90" rx="8" fill={conf.labelBg} opacity="0.95" stroke="#FFFFFF" strokeWidth="1.5" />

      {/* Label Title */}
      <text x="85" y="76" textAnchor="middle" fill={conf.accentColor} fontFamily="Outfit, sans-serif" fontWeight="700" fontSize="11">{title || conf.titleText}</text>
      <text x="85" y="87" textAnchor="middle" fill="#666" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="8">— {conf.subText} —</text>

      {/* Illustration */}
      {conf.illustration}

      {/* Bottom Pouch Badge Bar */}
      <rect x="35" y="156" width="100" height="18" rx="9" fill={conf.accentColor} />
      <text x="85" y="168" textAnchor="middle" fill="#FFFFFF" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.4">100% VACUUM FRIED</text>

      {/* Weight label */}
      <text x="85" y="188" textAnchor="middle" fill={conf.accentColor} fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="9">{weight}</text>
    </svg>
  );
};
