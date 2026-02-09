import React, { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavItems } from '../../data/navigationData';
import ThemeSelector from './ThemeSelector';
import logo from '../../assets/logo.jpg';

const Navbar = ({ isDarkMode, mobileMenuOpen, setMobileMenuOpen, setThemeMode }) => {
  const navItems = getNavItems();
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  const toggleDropdown = (index) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-xl shadow-lg transition-colors duration-500 ${
      isDarkMode
        ? 'border-[rgba(201,163,106,0.25)] bg-[rgba(11,10,9,0.95)]'
        : 'border-[rgba(25,12,6,0.6)] wood-texture-light'
    }`}>
      <div className="w-full mx-auto flex items-center justify-between px-2 lg:px-3 xl:px-6 py-2 lg:py-2 xl:py-4" style={{maxWidth: 'calc(100vw - 1rem)'}}>
        {/* Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <div className="relative">
            <div className="relative flex h-11 w-11 lg:h-12 lg:w-12 xl:h-16 xl:w-16 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#C9A36A] via-[#E7CFA2] to-[#8A6B45] transition-all">
              <img
                src={logo}
                alt="The Tiny Escape logo"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 xl:gap-2 lg:flex flex-shrink lg:ml-3 xl:ml-4">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item.path}
                className={`group/link relative px-1 xl:px-3 py-1.5 xl:py-2 text-[10px] xl:text-sm font-semibold transition-all duration-300 flex items-center gap-0.5 xl:gap-1 whitespace-nowrap ${
                  isDarkMode
                    ? 'text-[#D6C5AE] hover:text-[#F7E8D2]'
                    : 'text-[#F7E8D2] hover:text-[#FFF4E2]'
                }`}
              >
                {item.name}
                {item.badge && (
                  <span className="ml-0.5 xl:ml-1 rounded-md bg-linear-to-r from-[#D1965A] to-[#F1C281] px-0.5 xl:px-1.5 py-0.5 text-[7px] xl:text-[9px] font-black uppercase tracking-wider text-[#1A120A] shadow-lg animate-pulse">
                    {item.badge}
                  </span>
                )}
                {item.hasDropdown && (
                  <svg className="h-2.5 w-2.5 xl:h-3.5 xl:w-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-linear-to-r from-[#E7CFA2] to-[#FFF4E2]" />
                )}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-[#E7CFA2] to-[#FFF4E2] transition-all duration-300 group-hover/link:w-full" />
              </Link>
              
              {item.hasDropdown && item.dropdownItems && (
                <div className={`absolute left-0 top-full mt-2 ${item.name === 'Destinations' ? 'w-[520px]' : 'w-64'} rounded-xl border shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50 backdrop-blur-xl ${
                  isDarkMode
                    ? 'bg-[rgba(18,15,12,0.78)] border-[rgba(201,163,106,0.2)]'
                    : 'bg-[rgba(25,12,6,0.88)] border-[rgba(255,244,226,0.2)] shadow-[rgba(0,0,0,0.25)]'
                }`}>
                  <div className={item.name === 'Destinations' ? 'p-2 grid grid-cols-2 gap-1' : 'p-2'}>
                    {item.dropdownItems.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropItem.path}
                        className={`block px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                          isDarkMode
                            ? 'text-[#D6C5AE] hover:bg-[rgba(201,163,106,0.15)] hover:text-[#F7E8D2]'
                            : 'text-[#F7E8D2] hover:bg-[rgba(255,244,226,0.12)] hover:text-[#FFF4E2]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {dropItem.icon && <span className="text-lg">{dropItem.icon}</span>}
                          <span>{dropItem.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-0.5 xl:gap-3 flex-shrink-0 ml-auto">
          <Link to="/book-now" className={`hidden lg:flex items-center gap-0.5 xl:gap-2 rounded-md xl:rounded-xl bg-linear-to-r px-1.5 xl:px-4 py-1 xl:py-2.5 text-[9px] xl:text-sm font-bold uppercase tracking-tight xl:tracking-wider shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap ${
            isDarkMode
                ? 'from-[#C9A36A] to-[#E7CFA2] text-[#1A120A] shadow-[0_0_20px_rgba(201,163,106,0.35)] hover:shadow-[0_0_30px_rgba(231,207,162,0.45)]'
                : 'from-[#8A6B45] to-[#D9B882] text-[#1A120A] shadow-[0_0_20px_rgba(138,107,69,0.35)] hover:shadow-[0_0_30px_rgba(217,184,130,0.45)]'
          }`}>
            <svg className="h-3 w-3 xl:h-4 xl:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="hidden xl:inline">Request Availability</span>
            <span className="xl:hidden">Request</span>
          </Link>
          
          <ThemeSelector 
            isDarkMode={isDarkMode}
            setThemeMode={setThemeMode}
          />
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex lg:hidden h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-sm transition-colors duration-300 ${
              isDarkMode
                ? 'border-[rgba(201,163,106,0.3)] bg-[rgba(20,16,12,0.6)] text-[#E7CFA2]'
                : 'border-[rgba(255,244,226,0.4)] bg-[rgba(25,12,6,0.4)] text-[#FFF4E2]'
            }`}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`border-t backdrop-blur-xl lg:hidden transition-colors duration-500 ${
          isDarkMode
            ? 'border-[rgba(201,163,106,0.25)] bg-[rgba(11,10,9,0.98)]'
            : 'border-[rgba(25,12,6,0.6)] wood-texture-light'
        }`}>
          <nav className="mx-auto max-w-7xl px-6 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-opacity-10 last:border-0 py-2">
                <div className="flex items-center">
                  <Link
                    to={item.path}
                    className={`flex-1 flex items-center py-3 text-base font-semibold transition-all duration-200 hover:pl-2 ${
                      isDarkMode
                        ? 'text-[#D6C5AE] hover:text-[#F7E8D2]'
                        : 'text-[#F7E8D2] hover:text-[#FFF4E2]'
                    }`}
                    onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {item.name}
                      {item.badge && (
                        <span className="rounded-md bg-linear-to-r from-[#D1965A] to-[#F1C281] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#1A120A] shadow-lg">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`p-3 transition-transform duration-200 ${
                        openDropdowns[index] ? 'rotate-180' : ''
                      }`}
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                {item.hasDropdown && item.dropdownItems && openDropdowns[index] && (
                  <div className={`ml-4 space-y-1 mt-2 pb-2 border-l-2 pl-4 ${
                    isDarkMode ? 'border-[#C9A36A]/30' : 'border-[#FFF4E2]/35'
                  }`}>
                    {item.dropdownItems.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropItem.path}
                        className={`block py-2.5 px-3 text-sm rounded-lg transition-all duration-200 hover:pl-5 ${
                          isDarkMode
                            ? 'text-[#BFAE95] hover:bg-[rgba(201,163,106,0.12)] hover:text-[#F7E8D2]'
                            : 'text-[#EAD7C1] hover:bg-[rgba(255,244,226,0.12)] hover:text-[#FFF4E2]'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-2">
                          {dropItem.icon && <span className="text-base">{dropItem.icon}</span>}
                          <span>{dropItem.name}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/book-now"
              className={`mt-6 mb-2 w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r px-6 py-4 text-sm font-bold uppercase tracking-wider shadow-lg transition-transform active:scale-95 ${
                isDarkMode
                  ? 'from-[#C9A36A] to-[#E7CFA2] text-[#1A120A]'
                  : 'from-[#8A6B45] to-[#D9B882] text-[#1A120A]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Request Availability
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default memo(Navbar);
