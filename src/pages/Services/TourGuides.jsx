import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import ThemedPricingCard from '../../components/common/ThemedPricingCard';
import { servicesData } from '../../data/servicesData';

const TourGuides = () => {
  const { isDarkMode } = useTheme();
  const guidesData = servicesData.guides;

  return (
    <PageLayout
      seo={{
        title: 'Local Guides | Tiny Escape Texas',
        description: 'Book local guides and hosts for Hill Country hikes, food tours, and curated experiences during your Tiny Escape stay.',
        keywords: 'Texas local guides, Hill Country host, Tiny Escape experiences, private guides',
        url: '/services/guides'
      }}
      className={`transition-colors duration-500 ${isDarkMode ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-linear-to-b from-white to-[#F8FAFC] text-[#0F172A]'}`}
    >
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[420px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${guidesData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-900/90 to-indigo-900/80"></div>
        </div>

        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{guidesData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{guidesData.name}</h1>
            <p className="text-xl md:text-2xl mb-6">{guidesData.tagline}</p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">{guidesData.description}</p>
          </div>
        </div>
      </div>

      {/* Guides */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Featured Local Guides
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {guidesData.guides.map((guide, index) => (
              <ThemedPricingCard
                key={guide.id}
                title={guide.name}
                subtitle={guide.specialization}
                price={guide.price}
                priceNote={guide.experience}
                features={[
                  `Languages: ${guide.languages.join(', ')}`,
                  `Rating: ${guide.rating} (${guide.reviews} reviews)`,
                  ...guide.expertise.slice(0, 3)
                ]}
                isDarkMode={isDarkMode}
                themeKey="localGuide"
                themeIndex={index}
                ctaLabel="Request Guide"
                ctaHref="/custom-tour"
                footerText={guide.bio}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Service Options */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Service Options
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidesData.services.map((service, index) => (
              <ThemedPricingCard
                key={service.name}
                title={service.name}
                price={service.price}
                features={service.features}
                isDarkMode={isDarkMode}
                themeKey="guideService"
                themeIndex={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Qualifications */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Why Book a Local Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {guidesData.qualifications.map((item) => (
              <div
                key={item}
                className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white border border-[#E2E8F0] text-[#475569]'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-linear-to-br from-purple-50 to-indigo-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Ready to Add a Local Guide?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
            Tell us your dates and preferences, and we will match the right host.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Request a Guide
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-[#0F172A] hover:bg-[#E2E8F0] border border-[#E2E8F0]'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TourGuides;
