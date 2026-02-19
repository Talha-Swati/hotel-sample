import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import ThemedPricingCard from '../components/common/ThemedPricingCard';
import PricingCardMedia from '../components/common/PricingCardMedia';
import { getAllStays } from '../data/staysData';
import { useHousesData } from '../hooks/useHousesData';
import { 
  FaUsers, 
  FaMountain, 
  FaClock,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

const Tours = () => {
  const { isDarkMode } = useTheme();
  const { houses, isLoading, isFallback } = useHousesData({ fallbackData: getAllStays() });
  const featuredHouses = houses.slice(0, 4);
  const averageRating = featuredHouses.length
    ? (featuredHouses.reduce((sum, stay) => sum + (stay.rating || 0), 0) / featuredHouses.length).toFixed(1)
    : '0.0';
  const greenGradients = [
    'from-[#1F3A2A] to-[#5F8C6A]',
    'from-[#2F5D3A] to-[#7BAF7C]',
    'from-[#254736] to-[#6E9B72]',
    'from-[#1C4A34] to-[#4F8A62]'
  ];

  return (
    <PageLayout
      seo={{
        title: 'The Tiny Escape Stays | Cabins, Tiny Homes, and Retreats',
        description: 'Explore The Tiny Escape stays, including couples retreats, family tiny homes, and riverside cabins. Calm, private, and nature-focused lodging.',
        keywords: 'The Tiny Escape, tiny home rentals, cabin stays, resort lodging, weekend getaway',
        url: '/tours'
      }}
    >
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden ${
        isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'
      }`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#22D3EE] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4DBBFF] rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
                isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
              } bg-clip-text text-transparent`}>
                Choose Your Tiny Escape Stay
              </h1>
              <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                Private tiny homes and cabins designed for calm, comfort, and unforgettable Texas landscapes
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaMountain className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">4 Featured Houses</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaUsers className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">Up to Sleeps 5</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaStar className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">{averageRating}/5 Guest Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Houses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {isFallback && (
              <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-amber-700 text-sm font-medium">
                Live houses API is unavailable. Showing local fallback data.
              </div>
            )}

            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Highlights of Our 4 Houses
              </h2>
              <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}>
                Compare features and starting prices, then open each house page for full gallery, amenities, and booking details.
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className={`h-80 rounded-2xl animate-pulse ${isDarkMode ? 'bg-[#141A1F]' : 'bg-[#E2E8F0]'}`} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredHouses.map((stay, index) => (
                  <ThemedPricingCard
                    key={stay.id || stay.slug}
                    title={stay.name}
                    subtitle={`${stay.location} • Sleeps ${stay.sleeps}`}
                    price={`$${stay.pricing?.standard?.price || 0}`}
                    priceNote="starting / night"
                    features={[
                      `Standard: $${stay.pricing?.standard?.price || 0} • Signature: $${stay.pricing?.signature?.price || 0} • Extended: $${stay.pricing?.extended?.price || 0}`,
                      ...(stay.highlights || []).slice(0, 3),
                      `${stay.bedrooms || 1} bed • ${stay.baths || 1} bath • ${stay.sizeSqFt || 420} sq ft`
                    ]}
                    isDarkMode={isDarkMode}
                    gradient={greenGradients[index % greenGradients.length]}
                    accentClass="text-[#7BAF7C]"
                    accentBorderClass="border-[#5F8C6A]"
                    accentBgClass="bg-[#2F5D3A] text-white"
                    highlightLabel={`${stay.rating || 4.8} ★ (${stay.reviews || 0} reviews)`}
                    ctaLabel="View House Details"
                    ctaHref={`/stay/${stay.slug}`}
                    footerLabel="Stay Type"
                    footerText={stay.shortDescription || stay.description || ''}
                    media={
                      <PricingCardMedia
                        imageSrc={stay.heroImage}
                        imageAlt={stay.name}
                        heightClass="h-48"
                        overlayClassName={
                          isDarkMode
                            ? 'bg-linear-to-t from-[#0B0C0E]/90 via-[#0B0C0E]/30 to-transparent'
                            : 'bg-linear-to-t from-black/70 via-black/20 to-transparent'
                        }
                        topRight={(
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            isDarkMode
                              ? 'bg-[#0B0C0E]/80 text-[#E0E7EE] border border-[#1F2A33]'
                              : 'bg-white/90 text-[#0F172A]'
                          }`}>
                            {stay.category || 'stay'}
                          </div>
                        )}
                      />
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-16 ${isDarkMode ? 'bg-[#141A1F]' : 'bg-[#F8FAFC]'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 ${
                isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
              } bg-clip-text text-transparent`}>
                Why Choose Tiny Escape?
              </h2>
              <p className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}>
                We make your stay effortless and restorative
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                { icon: <FaStar />, title: 'Local Hosts', desc: 'Helpful, responsive support' },
                { icon: <FaCheckCircle />, title: 'Transparent Rates', desc: 'No hidden fees' },
                { icon: <FaUsers />, title: 'Private Stays', desc: 'Quiet, low-density layouts' },
                { icon: <FaClock />, title: 'On-Call Help', desc: 'Fast responses when needed' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl text-center transition-all transform hover:-translate-y-1 ${
                    isDarkMode
                      ? 'bg-[#0F1419] hover:shadow-[0_22px_26px_-18px_rgba(148,163,184,0.22)]'
                      : 'bg-white border border-[#E2E8F0] hover:shadow-[0_22px_26px_-18px_rgba(71,85,105,0.16)]'
                  }`}
                >
                  <div className={`text-4xl mb-4 ${
                    isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 ${
          isDarkMode ? 'bg-linear-to-br from-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-[#EBF8FF] to-white'
        }`}>
          <div className="container mx-auto px-4 text-center">
              <h2 className={`text-4xl font-bold mb-6 ${
              isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'
            }`}>
              Need a Custom Stay?
            </h2>
            <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
              Tell us your dates, group size, and preferences. We will match you with the right tiny home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/custom-stay"
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                    : 'bg-[#1F3A2A] text-[#F7FBF7] hover:bg-[#2F5D3A] hover:shadow-lg hover:shadow-[#2F5D3A]/35'
                } transform hover:scale-105`}
              >
                Request Custom Stay
              </Link>
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 ${
                  isDarkMode
                    ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                    : 'border-[#1F3A2A] text-[#1F3A2A] hover:bg-[#1F3A2A] hover:text-[#F7FBF7]'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

    </PageLayout>
  );
};

export default Tours;
