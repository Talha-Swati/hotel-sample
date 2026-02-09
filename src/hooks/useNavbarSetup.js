import { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Custom hook for consistent navbar setup across all pages
 * Eliminates duplicate code for navbar state management and props
 */
export const useNavbarSetup = () => {
  const { isDarkMode, setThemeMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navbarProps = useMemo(() => ({
    isDarkMode,
    mobileMenuOpen,
    setMobileMenuOpen,
    setThemeMode,
  }), [isDarkMode, mobileMenuOpen, setThemeMode]);

  return { navbarProps, isDarkMode };
};
