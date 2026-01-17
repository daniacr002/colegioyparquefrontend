import React from 'react';

const RainbowLogo = ({ size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`${sizes[size]} relative animate-pulse`}>
      {/* Rainbow arc */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer red arc */}
        <path
          d="M 10 50 A 40 40 0 0 1 90 50"
          fill="none"
          stroke="#FF6B6B"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Orange arc */}
        <path
          d="M 15 50 A 35 35 0 0 1 85 50"
          fill="none"
          stroke="#FFA06B"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Yellow arc */}
        <path
          d="M 20 50 A 30 30 0 0 1 80 50"
          fill="none"
          stroke="#FFD93D"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Green arc */}
        <path
          d="M 25 50 A 25 25 0 0 1 75 50"
          fill="none"
          stroke="#6BCB77"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Blue arc */}
        <path
          d="M 30 50 A 20 20 0 0 1 70 50"
          fill="none"
          stroke="#4D96FF"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Purple arc */}
        <path
          d="M 35 50 A 15 15 0 0 1 65 50"
          fill="none"
          stroke="#9D4EDD"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default RainbowLogo;
