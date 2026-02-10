import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import ThemedPricingCard from '../../components/common/ThemedPricingCard';
import PricingCardMedia from '../../components/common/PricingCardMedia';
import { staysData } from '../../data/staysData';

const AdventureTours = () => {
  const { isDarkMode } = useTheme();
  const featuredStays = staysData.filter((stay) =>
    ['triangle-1-catalina-ridge', 'triangle-2-rani-ridge', 'apple-2-kona-meadows'].includes(stay.slug)
  );

  const highlights = [
    'Trail-friendly gear storage',
    'Quick access to Hill Country hikes',
    'Flexible late return when available'
  ];

  const addOns = [
    'Guided sunrise hike',
    'Bike or paddle board rental',
    'Trailhead drop-off and pickup',
    'Packed picnic and hydration kit'
  ];

  return (
    <PageLayout
      seo={{
        title: 'Adventure Stays | The Tiny Escape',
        description: 'Adventure-ready tiny homes with easy access to trails, swimming holes, and outdoor escapes across Texas Hill Country.',
        keywords: 'Texas adventure stays, Hill Country cabins, hiking stays, outdoor escapes',
        url: '/trip/adventure'
      }}
      className={`transition-colors duration-500 ${
        isDarkMode
          ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
          : 'bg-linear-to-b from-white to-[#F8FAFC] text-[#0F172A]'
      }`}
    >
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920"
            alt="Adventure stays"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="w-full h-full object-cover opacity-20"
          />
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? 'bg-linear-to-br from-[#0B0C0E] via-[#103B2F] to-[#0B0C0E]'
                : 'bg-linear-to-br from-white via-[#ECFDF3] to-white'
            } opacity-90`}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 mb-6 rounded-full border backdrop-blur-sm px-6 py-3 ${
              isDarkMode
                ? 'border-[rgba(34,197,94,0.3)] bg-[rgba(20,26,31,0.6)]'
                : 'border-[#DCFCE7] bg-[rgba(255,255,255,0.85)]'
            }`}
          >
            <span className="text-2xl">Adventure</span>
            <span
              className={`text-sm font-bold uppercase tracking-wider ${
                isDarkMode ? 'text-[#22C55E]' : 'text-[#16A34A]'
              }`}
            >
              Basecamp Ready
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Adventure-ready
            <span
              className={`block bg-clip-text text-transparent ${
                isDarkMode
                  ? 'bg-linear-to-r from-[#22C55E] to-[#86EFAC]'
                  : 'bg-linear-to-r from-[#16A34A] to-[#4ADE80]'
              }`}
            >
              stays in the Hill Country
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'
            }`}
          >
            Spend your days outside and your nights in a cozy, design-forward stay built for active resets.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item}
                className={`p-6 rounded-xl border ${
                  isDarkMode ? 'bg-[#141A1F] border-[#1E242B]' : 'bg-white border-[#E2E8F0]'
                }`}
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stays */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Featured Adventure Stays
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredStays.map((stay, index) => (
              <ThemedPricingCard
                key={stay.id}
                title={stay.name}
                subtitle={stay.location}
                price={`$${stay.pricing.standard.price}`}
                priceNote="per night"
                features={[
                  `Sleeps ${stay.sleeps}`,
                  `${stay.bedrooms} bedroom`,
                  stay.highlights[0],
                  stay.highlights[1]
                ]}
                isDarkMode={isDarkMode}
                themeKey="adventureStay"
                themeIndex={index}
                ctaLabel="View Stay"
                ctaHref={`/destinations/${stay.slug}`}
                footerText={stay.shortDescription}
                media={
                  <PricingCardMedia
                    imageSrc={stay.heroImage}
                    imageAlt={stay.name}
                    heightClass="h-56"
                  />
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Popular Adventure Add-ons
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((item) => (
              <div
                key={item}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-[#F8FAFC] border border-[#E2E8F0]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Ready to Plan Your Adventure Stay?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
            Tell us your dates and we will match you with the best basecamp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/book-now"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Check Availability
            </Link>
            <Link
              to="/custom-stay"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode
                  ? 'bg-[#141A1F] text-white hover:bg-[#1A2229]'
                  : 'bg-white text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
              }`}
            >
              Build a Custom Stay
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdventureTours;
