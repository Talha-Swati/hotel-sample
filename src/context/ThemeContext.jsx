/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(() => {
    // Load theme from localStorage or default to 'dark'
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'light' ? 'light' : 'dark';
  });

  // Compute dark mode based on theme setting
  const isDarkMode = themeMode === 'dark';

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', themeMode);
  }, [themeMode]);

  // Sync theme to document for global styling hooks
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', themeMode);
    root.style.colorScheme = themeMode;
  }, [themeMode]);

  const value = {
    themeMode,
    setThemeMode,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
