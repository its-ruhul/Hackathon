import React from 'react';

export default function SpiralBinding() {
  const holes = Array.from({ length: 15 });

  return (
    <div style={{
      position: 'absolute',
      left: '-30px', /* Shift it to straddle the border */
      top: '40px',
      bottom: '40px',
      width: '60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 2000,
      pointerEvents: 'none'
    }}>
      {holes.map((_, i) => (
        <svg 
          key={i} 
          width="60" 
          height="30" 
          viewBox="0 0 60 30" 
          fill="none" 
          style={{ 
            filter: 'drop-shadow(3px 4px 3px rgba(0,0,0,0.4))'
          }}
        >
          {/* Background hole left (simulates the hole in the back cover/desk) */}
          <ellipse cx="10" cy="15" rx="4" ry="6" fill="#1a1a1a" />
          
          {/* Front hole right (on the page) */}
          <ellipse cx="50" cy="15" rx="4" ry="6" fill="#1a1a1a" />

          {/* Core metallic ring wire */}
          <path 
            d="M 10,15 C 10,-5 50,-5 50,15" 
            stroke="url(#metalGrad)" 
            strokeWidth="5" 
            strokeLinecap="round" 
          />
          {/* Inner highlight for 3D metallic feel */}
          <path 
            d="M 12,14 C 15,2 45,2 48,14" 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            opacity="0.8"
          />
          {/* Bottom shadow curve inside the hook */}
          <path 
            d="M 10,16 C 10,25 50,25 50,16" 
            stroke="#1a1a1a" 
            strokeWidth="4" 
            strokeLinecap="round" 
            opacity="0.3"
          />
          <path 
            d="M 10,16 C 10,25 50,25 50,16" 
            stroke="url(#metalGrad)" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />

          <defs>
            <linearGradient id="metalGrad" x1="0" y1="0" x2="60" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4a4a4a" />
              <stop offset="30%" stopColor="#cfcfcf" />
              <stop offset="70%" stopColor="#8a8a8a" />
              <stop offset="100%" stopColor="#303030" />
            </linearGradient>
          </defs>
        </svg>
      ))}
    </div>
  );
}
