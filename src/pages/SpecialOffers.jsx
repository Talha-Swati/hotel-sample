import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import { specialOfferPackages } from '../data/specialOffersData';

// Icons
import { FaClock, FaUsers, FaMapMarkerAlt, FaStar, FaTag, FaCalendarAlt, FaCheckCircle, FaArrowRight, FaFire } from 'react-icons/fa';


const SpecialOffers = () => {
  const { isDarkMode } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('all');

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Tiny Escape Special Offers",
    "description": "Limited-time stay offers and seasonal savings",
    "itemListElement": specialOfferPackages.map((pkg, index) => ({
      "@type": "Offer",
      "position": index + 1,
      "itemOffered": {
        "@type": "LodgingBusiness",
        "name": pkg.name,
        "description": pkg.description
      },
      "price": pkg.offerPrice,
      "priceCurrency": "USD",
      "priceValidUntil": pkg.validUntil,
      "availability": "https://schema.org/InStock"
    }))
  }), []);


  // Filter packages
  const filteredPackages = useMemo(() => {
    if (selectedFilter === 'all') return specialOfferPackages;
    if (selectedFilter === 'high-discount') return specialOfferPackages.filter(pkg => pkg.discount >= 20);
    if (selectedFilter === 'family') return specialOfferPackages.filter(pkg => pkg.stayType === 'Family');
    if (selectedFilter === 'couples') return specialOfferPackages.filter(pkg => pkg.stayType === 'Couples');
    return specialOfferPackages;
  }, [selectedFilter]);

  // Calculate days remaining
  const getDaysRemaining = (validUntil) => {
    const today = new Date();
    const endDate = new Date(validUntil);
    const diffTime = endDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const cardGradients = [
    'from-[#38BDF8] to-[#0284C7]',
    'from-[#A78BFA] to-[#7C3AED]',
    'from-[#34D399] to-[#10B981]',
    'from-[#F59E0B] to-[#F97316]'
  ];

  return (
    <PageLayout
      seo={{
        title: 'Tiny Escape Offers | Limited-Time Stays',
        description: 'Limited time savings on Tiny Escape stays across Texas. Book midweek resets, extended stays, and weekend specials.',
        keywords: 'Tiny Escape offers, Texas cabin deals, tiny home discounts, weekend specials',
        url: '/offers',
        structuredData
      }}
    >

        {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500 mb-6">
                <FaFire className="text-red-500" />
                <span className={`text-sm font-semibold ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                  Limited Time Offers
                </span>
              </div>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                Limited Time Tiny Escape Deals
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                Save on midweek resets, extended stays, and weekend escapes in the Texas Hill Country.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-[#E2E8F0]'
                  }`}
                >
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    {specialOfferPackages.length}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Active Offers</div>
                </div>
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-[#E2E8F0]'
                  }`}
                >
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>30%</div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Max Discount</div>
                </div>
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-[#E2E8F0]'
                  }`}
                >
                  <div className={`text-2xl font-bold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>$70</div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Avg Savings</div>
                </div>
                <div
                  className={`p-4 rounded-xl border ${
                    isDarkMode ? 'bg-[#141A1F] border-[rgba(34,211,238,0.2)]' : 'bg-white border-[#E2E8F0]'
                  }`}
                >
                  <div className={`text-2xl font-bold text-red-500`}>
                    {Math.min(...specialOfferPackages.map(p => getDaysRemaining(p.validUntil)))}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Days Left</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={`py-6 border-b ${isDarkMode ? 'border-[#1E242B]' : 'border-[#E2E8F0]'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { id: 'all', label: 'All Offers', icon: <FaTag /> },
                  { id: 'high-discount', label: 'High Discount (20%+)', icon: <FaFire /> },
                  { id: 'family', label: 'Family', icon: <FaUsers /> },
                  { id: 'couples', label: 'Couples', icon: <FaMapMarkerAlt /> }
                ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedFilter === filter.id
                      ? isDarkMode
                        ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-lg'
                        : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg'
                      : isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4] border border-[rgba(34,211,238,0.2)] hover:border-[#22D3EE]'
                      : 'bg-white text-[#334155] border border-[#E2E8F0] hover:border-[#2563EB]'
                  }`}
                >
                  {filter.icon}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {filteredPackages.map((pkg, index) => {
                const daysLeft = getDaysRemaining(pkg.validUntil);
                const savings = pkg.originalPrice - pkg.offerPrice;
                const gradient = cardGradients[index % cardGradients.length];

                return (
                  <div
                    key={pkg.id}
                    className={`relative rounded-2xl overflow-hidden border flex flex-col h-full ${
                      isDarkMode
                        ? 'bg-[#0B0C0E] border-[#1F2A33] shadow-[0_20px_50px_-30px_rgba(0,0,0,0.8)]'
                        : 'bg-white border-[#E2E8F0] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]'
                    }`}
                  >
                    <div className={`absolute left-0 top-0 h-full w-1.5 bg-linear-to-b ${gradient}`} />

                    {/* Image Section */}
                    <div className="relative h-44 overflow-hidden">
                      <div className={`absolute inset-0 bg-linear-to-t ${isDarkMode ? 'from-[#0B0C0E]' : 'from-slate-900'} to-transparent z-10`} />
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        decoding="async"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 z-10 flex items-end p-5">
                        <div className="flex w-full items-center justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-white/80">Special Offer</p>
                            <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                          </div>
                          <div className={`rounded-xl px-3 py-2 bg-linear-to-r ${gradient} shadow-lg`}>
                            <div className="text-2xl font-bold text-white">{pkg.discount}%</div>
                            <div className="text-[11px] text-white/90 tracking-wide">OFF</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-6 flex-1 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-white'}`}>
                      {/* Badge */}
                      {pkg.badge && (
                        <div className="mb-3">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                            isDarkMode
                              ? 'bg-[#0F1419] text-[#22D3EE] border border-[#1F2A33]'
                              : 'bg-[#EFF6FF] text-[#1D4ED8] border border-[#E2E8F0]'
                          }`}>
                            {pkg.badge}
                          </span>
                        </div>
                      )}

                      {/* Description */}
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>
                        {pkg.description}
                      </p>

                      {/* Details */}
                      <div className={`space-y-2 mb-5 text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                        <div className="flex items-center gap-2">
                          <FaClock className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                          <span>{pkg.stayType} Stay</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaUsers className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                          <span>{pkg.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaStar className="text-yellow-500" />
                          <span>{pkg.rating} ({pkg.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Countdown */}
                      <div className={`p-3 rounded-xl mb-4 ${isDarkMode ? 'bg-red-500/10 border border-red-500/30' : 'bg-red-50 border border-red-200'}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-red-500 font-semibold flex items-center gap-2">
                            <FaCalendarAlt />
                            Expires in {daysLeft} days
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Color Footer */}
                    <div className={`bg-linear-to-r ${gradient} px-5 py-4 text-white mt-auto`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-white/90">From</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold">${pkg.offerPrice}</span>
                            <span className="text-sm line-through text-white/80">${pkg.originalPrice}</span>
                          </div>
                          <p className="text-xs text-white/90">Save ${savings}</p>
                        </div>
                        <Link
                          to={pkg.link}
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                            isDarkMode
                              ? 'bg-[#0B0C0E]/90 text-white border border-white/20'
                              : 'bg-white text-[#0F172A]'
                          }`}
                        >
                          View Details <FaArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Book Now Section */}
        <section
          className={`py-16 ${
            isDarkMode ? 'bg-linear-to-r from-[#0F1419] to-[#141A1F]' : 'bg-linear-to-r from-[#F8FAFC] to-[#EFF6FF]'
          }`}
        >
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
              Why Book Now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  <FaTag className="mx-auto" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  Best Price Guarantee
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}>
                  Seasonal rates and transparent pricing
                </p>
              </div>
              <div className="text-center">
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  <FaCheckCircle className="mx-auto" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  Fast Response
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}>
                  We confirm availability within 24 hours
                </p>
              </div>
              <div className="text-center">
                <div className={`text-4xl mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  <FaCalendarAlt className="mx-auto" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  Flexible Policies
                </h3>
                <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}>
                  Free changes up to 7 days before arrival
                </p>
              </div>
            </div>
          </div>
        </section>

    </PageLayout>
  );
};

export default SpecialOffers;
