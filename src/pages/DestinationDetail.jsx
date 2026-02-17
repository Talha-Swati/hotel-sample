import { useEffect, useMemo, useState, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import ThemedPricingCard from '../components/common/ThemedPricingCard';
import { getStayBySlug } from '../data/staysData';
import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaBed,
  FaBath,
  FaHome,
  FaCheck,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const DestinationDetail = memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const stay = useMemo(() => getStayBySlug(slug), [slug]);

  useEffect(() => {
    if (!stay) {
      navigate('/tours');
    }
  }, [navigate, stay]);

  useEffect(() => {
    if (!stay?.gallery?.length) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === stay.gallery.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [stay?.gallery?.length]);

  if (!stay) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-white text-[#0F172A]'
      }`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#22D3EE] mx-auto mb-4"></div>
          <p className="text-lg">Loading stay details...</p>
        </div>
      </div>
    );
  }

  const handleBookNow = (rate) => {
    navigate('/book-now', {
      state: {
        packageData: {
          title: stay.name,
          price: rate.price,
          duration: 'Per night',
          currency: 'USD',
          stayType: rate.title,
          source: `stay-${slug}`
        }
      }
    });
  };

  const seo = {
    title: `${stay.name} | The Tiny Escape`,
    description: stay.shortDescription,
    keywords: `The Tiny Escape, ${stay.name}, tiny home, cabin stay, ${stay.location}`,
    url: `/destination/${stay.slug}`,
    image: stay.heroImage
  };

  const pricingOrder = ['standard', 'signature', 'extended'];

  return (
    <PageLayout
      seo={seo}
      className={isDarkMode ? 'bg-[#0B0C0E] text-[#E0E7EE]' : 'bg-[#F8FAFC] text-[#0F172A]'}
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {stay.gallery.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  filter: 'brightness(0.7)'
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentImageIndex((prev) =>
            prev === 0 ? stay.gallery.length - 1 : prev - 1
          )}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentImageIndex((prev) =>
            prev === stay.gallery.length - 1 ? 0 : prev + 1
          )}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <FaChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {stay.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-4xl">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#22D3EE]/80">
                  {stay.tagline}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {stay.name}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90 mb-6">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#22D3EE]" />
                  <span>{stay.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>{stay.rating} ({stay.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#22D3EE]" />
                  <span>Sleeps {stay.sleeps}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed className="text-[#22D3EE]" />
                  <span>{stay.bedrooms} beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-[#22D3EE]" />
                  <span>{stay.baths} bath</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHome className="text-[#22D3EE]" />
                  <span>{stay.sizeSqFt} sq ft</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#rates"
                  className="px-6 py-3 bg-[#22D3EE] hover:bg-[#4DBBFF] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  View Rates
                </a>
                <a
                  href="#amenities"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all"
                >
                  Amenities
                </a>
                <button
                  onClick={() => navigate('/book-now', { state: { packageData: { title: stay.name } } })}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all border border-white/30"
                >
                  Request Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Overview
              </h2>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#334155]'}`}>
                {stay.description}
              </p>
            </section>

            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Highlights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stay.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className={`flex items-start gap-3 p-4 rounded-lg ${
                      isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'
                    }`}
                  >
                    <FaCheck className="text-[#22D3EE] mt-1 shrink-0" />
                    <span className={isDarkMode ? 'text-[#C9D6DF]' : 'text-[#334155]'}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section id="amenities">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {stay.amenities.map((item) => (
                  <div
                    key={item}
                    className={`p-3 rounded-lg text-sm text-center ${
                      isDarkMode ? 'bg-[#0F1419] text-[#C9D6DF]' : 'bg-[#F8FAFC] text-[#475569]'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white border border-[#E2E8F0]'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  House Rules
                </h3>
                <ul className="space-y-2">
                  {stay.houseRules.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${
                      isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'
                    }`}>
                      <FaCheck className="text-[#22D3EE] mt-1 shrink-0" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white border border-[#E2E8F0]'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  Policies
                </h3>
                <ul className="space-y-2">
                  {stay.policies.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${
                      isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'
                    }`}>
                      <FaCheck className="text-[#22D3EE] mt-1 shrink-0" size={12} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="rates">
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Rates
              </h2>
              <p className={`mb-5 text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>
                From ${stay.pricing.standard.price} per night • Signature ${stay.pricing.signature.price} • Extended ${stay.pricing.extended.price}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingOrder.map((tier, index) => {
                  const rate = stay.pricing[tier];
                  if (!rate) return null;

                  return (
                    <ThemedPricingCard
                      key={tier}
                      title={rate.title}
                      price={`$${rate.price}`}
                      priceNote="per night"
                      features={rate.features}
                      isDarkMode={isDarkMode}
                      themeKey="destinationPricing"
                      themeIndex={index}
                      highlightLabel={rate.popular ? 'Most Popular' : undefined}
                      ctaLabel="Request Availability"
                      onCtaClick={() => handleBookNow(rate)}
                      footerLabel="Check-in"
                      footerText={`${stay.checkIn} • Check-out ${stay.checkOut}`}
                    />
                  );
                })}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC] border border-[#E2E8F0]'}`}>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className={`text-sm font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                      Check-in / Check-out
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#64748B]'}`}>
                      {stay.checkIn} / {stay.checkOut}
                    </p>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                      Pet Friendly
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#64748B]'}`}>
                      {stay.petFriendly ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-linear-to-br from-[#22D3EE] to-[#4DBBFF] text-white">
                <h3 className="text-xl font-bold mb-4">Need help choosing?</h3>
                <p className="text-sm mb-4 text-white/90">
                  Share your dates and preferences and we will match you with the best stay.
                </p>
                <button
                  onClick={() => navigate('/book-now', { state: { packageData: { title: stay.name } } })}
                  className="w-full py-3 bg-white text-[#22D3EE] rounded-lg font-semibold hover:bg-gray-100 transition-all"
                >
                  Request Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
});

DestinationDetail.displayName = 'DestinationDetail';

export default DestinationDetail;
