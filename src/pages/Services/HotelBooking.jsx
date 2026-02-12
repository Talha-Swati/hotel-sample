import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import ThemedPricingCard from '../../components/common/ThemedPricingCard';
import PricingCardMedia from '../../components/common/PricingCardMedia';
import { servicesData } from '../../data/servicesData';
import tinyHouseFallback from '../../assets/tiny house1.webp';
import tinyEscapeFallbackOne from '../../assets/tiny escape 2.jpg';
import tinyEscapeFallbackTwo from '../../assets/tiny escape 3.jpg';

const HotelBooking = () => {
  const { isDarkMode } = useTheme();
  const hotelData = servicesData.hotels;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const fallbackHotelImages = [tinyHouseFallback, tinyEscapeFallbackOne, tinyEscapeFallbackTwo];

  const locations = ['all', 'Texas Hill Country', 'Wimberley', 'Dripping Springs', 'Marble Falls'];

  const filteredProperties = hotelData.featuredProperties.filter(property => {
    const categoryMatch = selectedCategory === 'all' || property.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || property.location.includes(selectedLocation);
    return categoryMatch && locationMatch;
  });

  return (
    <PageLayout
      seo={{
        title: 'Stay Booking | The Tiny Escape',
        description: 'Handpicked tiny homes and cabins in the Texas Hill Country. Curated stays with clear pricing and thoughtful details.',
        keywords: 'Texas tiny home booking, Hill Country cabins, Wimberley stays, Dripping Springs lodging',
        url: '/services/hotels'
      }}
      className={`transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-linear-to-b from-[#F8FAFC] to-white text-[#0F172A]'
    }`}
    >

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${hotelData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{hotelData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {hotelData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {hotelData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {hotelData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Stay Categories in Texas Hill Country
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {hotelData.categories.map((category, index) => (
              <ThemedPricingCard
                key={category.id}
                title={category.name}
                subtitle={category.description}
                price={category.priceRange}
                features={category.features}
                isDarkMode={isDarkMode}
                themeKey="hotelCategory"
                themeIndex={index}
              />
            ))}
          </div>

          {/* Filters */}
          <div className={`p-6 rounded-xl mb-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white border border-[#E2E8F0]'} shadow-md`}>
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-[#F8FAFC] text-[#0F172A]'
                  }`}
                >
                  <option value="all">All Categories</option>
                  <option value="budget">Value</option>
                  <option value="comfort">Comfort</option>
                  <option value="luxury">Signature</option>
                </select>
              </div>
              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className={`px-4 py-2 rounded-lg ${
                    isDarkMode ? 'bg-gray-700 text-white' : 'bg-[#F8FAFC] text-[#0F172A]'
                  }`}
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>
                      {loc === 'all' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Properties */}
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Featured Tiny Stays
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProperties.map((property, index) => {
              const amenities = property.amenities.slice(0, 4);
              const localFallback = fallbackHotelImages[index % fallbackHotelImages.length];
              const hotelImage = property.image || localFallback;
              const features = [
                `Rating: ${property.rating} (${property.reviews} reviews)`,
                `Category: ${property.category}`,
                ...amenities
              ];

              return (
                <ThemedPricingCard
                  key={property.id}
                  title={property.name}
                  subtitle={`📍 ${property.location}`}
                  price={`$${property.price}`}
                  priceNote="per night"
                  features={features}
                  isDarkMode={isDarkMode}
                  themeKey="hotelProperty"
                  themeIndex={index}
                  ctaLabel="Book Now"
                  ctaHref="/custom-stay"
                  footerText={property.description}
                  media={
                    <PricingCardMedia
                      imageSrc={hotelImage}
                      imageAlt={property.name}
                      heightClass="h-56"
                      fallbackSrc={localFallback}
                      topRight={(
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          property.category === 'luxury' ? 'bg-purple-100 text-purple-800' :
                          property.category === 'comfort' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {property.category}
                        </div>
                      )}
                    />
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Easy Booking Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {hotelData.bookingProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {step.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-[#475569]'}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Need Help Choosing?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
            Our team can help you find the perfect stay for your reset
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-stay"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Plan a Custom Stay
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]'
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
export default HotelBooking;
