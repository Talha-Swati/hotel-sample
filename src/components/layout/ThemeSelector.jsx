import React from 'react';

const ThemeSelector = ({ isDarkMode, setThemeMode }) => {
  return (
    <button
      onClick={() => setThemeMode(isDarkMode ? 'light' : 'dark')}
      className={`group relative p-1.5 xl:p-2.5 rounded-lg border backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 ${
        isDarkMode
          ? 'border-[rgba(201,163,106,0.26)] bg-[rgba(20,16,12,0.4)] hover:bg-[rgba(231,207,162,0.22)] hover:border-[rgba(231,207,162,0.55)] focus-visible:ring-[rgba(231,207,162,0.45)]'
          : 'border-[rgba(231,240,233,0.45)] bg-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.82)] focus-visible:ring-[rgba(231,240,233,0.58)]'
      }`}
      aria-label="Toggle theme"
    >
      <svg
        className={`h-5 w-5 xl:h-6 xl:w-6 transition-colors duration-300 ${
          isDarkMode
            ? 'text-[#E7CFA2] group-hover:text-[#FFF4E2]'
            : 'text-[#F4FBF6] group-hover:text-white'
        }`}
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
