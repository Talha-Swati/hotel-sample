import { memo } from 'react';
import { Link } from 'react-router-dom';
import { QUICK_LINKS, POPULAR_DESTINATIONS, CONTACT_INFO, COMPANY_INFO, LEGAL_LINKS } from '../../constants';
import logo from '../../assets/logo.png';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`border-t pt-16 pb-8 transition-colors ${
      isDarkMode ? 'border-[rgba(201,163,106,0.25)] bg-[#0B0C0E]' : 'border-[#D4E2D4] bg-linear-to-b from-[#FAF7F0] via-[#E9F1E5] to-[#DCEAD8]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 overflow-hidden rounded-xl bg-linear-to-br from-[#C9A36A] via-[#E7CFA2] to-[#8A6B45]">
                <img
                  src={logo}
                  alt="The Tiny Escape logo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#1F2A1F]'}`}>
                {COMPANY_INFO.name}
              </h3>
            </div>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#BFAE95]' : 'text-[#2F3A2F]'}`}>
              {COMPANY_INFO.tagline}
            </p>
          </div>
          <div>
            <h4 className={`font-bold mb-4 text-base ${isDarkMode ? 'text-[#F7E8D2]' : 'text-[#1F2A1F]'}`}>
              Stay Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`text-sm sm:text-base hover:text-[#1F3A2A] transition hover:underline ${
                      isDarkMode ? 'text-[#BFAE95]' : 'text-[#2F3A2F]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 text-base ${isDarkMode ? 'text-[#F7E8D2]' : 'text-[#1F2A1F]'}`}>
              Featured Stays
            </h4>
            <ul className="space-y-2">
              {POPULAR_DESTINATIONS.map((dest) => (
                <li key={dest.slug}>
                  <Link 
                    to={`/destination/${dest.slug}`} 
                    className={`text-sm sm:text-base hover:text-[#1F3A2A] transition hover:underline ${
                      isDarkMode ? 'text-[#BFAE95]' : 'text-[#2F3A2F]'
                    }`}
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className={`font-bold mb-4 text-base ${isDarkMode ? 'text-[#F7E8D2]' : 'text-[#1F2A1F]'}`}>
              Contact
            </h4>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-[#BFAE95]' : 'text-[#2F3A2F]'}`}>
              Email: {CONTACT_INFO.email}
            </p>
            <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-[#BFAE95]' : 'text-[#2F3A2F]'}`}>
              Phone: {CONTACT_INFO.phone}
            </p>
          </div>
        </div>
        <div className={`pt-8 border-t text-center text-xs sm:text-sm ${
          isDarkMode ? 'border-[rgba(201,163,106,0.2)] text-[#9B8A72]' : 'border-[rgba(31,58,42,0.2)] text-[#4B5F4B]'
        }`}>
          <p className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 flex-wrap">
            <span>{COMPANY_INFO.copyright}</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span>
              Powered and maintained by{' '}
              <a 
                href={COMPANY_INFO.poweredBy.url}
                target="_blank" 
                rel="noopener noreferrer"
                className={`font-semibold hover:underline transition ${
                  isDarkMode ? 'text-[#F1DDBA] hover:text-[#FFF4E2]' : 'text-[#1F3A2A] hover:text-[#1F2A1F]'
                }`}
              >
                {COMPANY_INFO.poweredBy.name}
              </a>
            </span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="flex gap-2">
              {LEGAL_LINKS.map((link, index) => (
                <span key={link.path} className="flex items-center gap-2">
                  {index > 0 && <span>|</span>}
                  <Link 
                    to={link.path}
                    className={`hover:underline transition ${
                      isDarkMode ? 'hover:text-[#C9A36A]' : 'hover:text-[#1F3A2A]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
