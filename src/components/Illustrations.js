import React from 'react';

// Floating Cloud
export const Cloud = ({ className = '', size = 'md', color = 'white' }) => {
  const sizes = {
    sm: 'w-16 h-10',
    md: 'w-24 h-14',
    lg: 'w-32 h-20'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path
          d="M 20 40 Q 20 25 35 25 Q 35 15 50 15 Q 65 15 65 25 Q 80 25 80 40 Q 80 50 65 50 L 35 50 Q 20 50 20 40"
          fill={color}
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

// Star
export const StarDecor = ({ className = '', size = 'md', color = '#FFD93D' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 2 L15 9 L22 9 L17 14 L19 21 L12 16 L5 21 L7 14 L2 9 L9 9 Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

// Heart
export const HeartDecor = ({ className = '', size = 'md', color = '#FF6B9D' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={color}
        />
      </svg>
    </div>
  );
};

// Rainbow
export const RainbowDecor = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-16 h-10',
    md: 'w-24 h-14',
    lg: 'w-32 h-20'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#FF6B6B" strokeWidth="5" strokeLinecap="round" />
        <path d="M 15 50 A 35 35 0 0 1 85 50" fill="none" stroke="#FFA06B" strokeWidth="5" strokeLinecap="round" />
        <path d="M 20 50 A 30 30 0 0 1 80 50" fill="none" stroke="#FFD93D" strokeWidth="5" strokeLinecap="round" />
        <path d="M 25 50 A 25 25 0 0 1 75 50" fill="none" stroke="#6BCB77" strokeWidth="5" strokeLinecap="round" />
        <path d="M 30 50 A 20 20 0 0 1 70 50" fill="none" stroke="#4D96FF" strokeWidth="5" strokeLinecap="round" />
        <path d="M 35 50 A 15 15 0 0 1 65 50" fill="none" stroke="#9D4EDD" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Butterfly
export const ButterflyDecor = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Left wing */}
        <ellipse cx="30" cy="40" rx="20" ry="25" fill="#FF6B9D" opacity="0.8" />
        <ellipse cx="25" cy="45" rx="15" ry="20" fill="#FFB3E6" opacity="0.8" />
        {/* Right wing */}
        <ellipse cx="70" cy="40" rx="20" ry="25" fill="#9D4EDD" opacity="0.8" />
        <ellipse cx="75" cy="45" rx="15" ry="20" fill="#C9A0FF" opacity="0.8" />
        {/* Body */}
        <ellipse cx="50" cy="50" rx="4" ry="20" fill="#6B4EFF" />
        {/* Antennae */}
        <path d="M 48 35 Q 45 25 42 20" stroke="#6B4EFF" strokeWidth="2" fill="none" />
        <path d="M 52 35 Q 55 25 58 20" stroke="#6B4EFF" strokeWidth="2" fill="none" />
        <circle cx="42" cy="20" r="2" fill="#6B4EFF" />
        <circle cx="58" cy="20" r="2" fill="#6B4EFF" />
      </svg>
    </div>
  );
};

// Flower
export const FlowerDecor = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Petals */}
        <circle cx="50" cy="30" r="12" fill="#FF6B9D" />
        <circle cx="70" cy="50" r="12" fill="#FFB3E6" />
        <circle cx="50" cy="70" r="12" fill="#FF6B9D" />
        <circle cx="30" cy="50" r="12" fill="#FFB3E6" />
        <circle cx="62" cy="38" r="12" fill="#FFA0E0" />
        <circle cx="62" cy="62" r="12" fill="#FFA0E0" />
        <circle cx="38" cy="62" r="12" fill="#FFA0E0" />
        <circle cx="38" cy="38" r="12" fill="#FFA0E0" />
        {/* Center */}
        <circle cx="50" cy="50" r="10" fill="#FFD93D" />
      </svg>
    </div>
  );
};
