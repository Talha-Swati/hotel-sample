import React from 'react';

const ThemeSelector = ({ isDarkMode, setThemeMode }) => {
  return (
    <button
      onClick={() => setThemeMode(isDarkMode ? 'light' : 'dark')}
      className={`group relative p-1.5 xl:p-2.5 rounded-lg transition-all duration-300 ${
        isDarkMode
          ? 'hover:bg-[rgba(201,163,106,0.16)]'
          : 'hover:bg-[rgba(138,107,69,0.15)]'
      }`}
      aria-label="Toggle theme"
    >
      <svg
        className={`h-5 w-5 xl:h-6 xl:w-6 ${isDarkMode ? 'text-[#E7CFA2]' : 'text-[#8A6B45]'}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <g>
          <rect x="11" y="2" width="2" height="4" rx="1" />
          <rect x="11" y="18" width="2" height="4" rx="1" />
          <rect x="2" y="11" width="4" height="2" rx="1" />
          <rect x="18" y="11" width="4" height="2" rx="1" />
          <rect x="4.2" y="4.2" width="2" height="4" rx="1" transform="rotate(-45 5.2 6.2)" />
          <rect x="17.8" y="15.8" width="2" height="4" rx="1" transform="rotate(-45 18.8 17.8)" />
          <rect x="15.8" y="4.2" width="2" height="4" rx="1" transform="rotate(45 16.8 6.2)" />
          <rect x="4.2" y="15.8" width="2" height="4" rx="1" transform="rotate(45 5.2 17.8)" />
        </g>
      </svg>
    </button>
  );
};

export default ThemeSelector;
