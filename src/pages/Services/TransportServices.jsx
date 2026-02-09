import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import ThemedPricingCard from '../../components/common/ThemedPricingCard';
import { servicesData } from '../../data/servicesData';

const TransportServices = () => {
  const { isDarkMode } = useTheme();
  const transportData = servicesData.transport;
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <PageLayout
      seo={{
        title: 'Transfers and Local Rides | Tiny Escape Texas',
        description: 'Smooth airport transfers and Hill Country rides with trusted local drivers and clean vehicles.',
        keywords: 'Texas airport transfer, Hill Country drivers, local rides, Tiny Escape transport',
        url: '/services/transport'
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
          style={{ backgroundImage: `url('${transportData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-emerald-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{transportData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {transportData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {transportData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {transportData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Vehicle Fleet */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Vehicle Options for Your Stay
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportData.vehicleTypes.map((vehicle, index) => {
              const features = [
                `Capacity: ${vehicle.capacity}`,
                `Luggage: ${vehicle.luggage}`,
                vehicle.bestFor ? `Best for: ${vehicle.bestFor}` : null,
                ...vehicle.features
              ].filter(Boolean);
              return (
                <ThemedPricingCard
                  key={vehicle.id}
                  title={vehicle.name}
                  price={vehicle.price}
                  features={features}
                  isDarkMode={isDarkMode}
                  themeKey="transportVehicle"
                  themeIndex={index}
                  ctaLabel="Book Now"
                  ctaHref="/custom-tour"
                  isSelected={selectedVehicle === index}
                  onClick={() => setSelectedVehicle(selectedVehicle === index ? null : index)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Additional Ride Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportData.services.map((service, index) => (
              <ThemedPricingCard
                key={index}
                title={service.name}
                subtitle={service.description}
                price={service.price}
                priceNote="service"
                features={service.features}
                isDarkMode={isDarkMode}
                themeKey="transportService"
                themeIndex={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Why Choose Our Ride Service
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportData.whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {reason.title}
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-[#475569]'}>
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-linear-to-r from-green-50 to-emerald-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Ready to Book a Transfer?
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>
            Safe, comfortable, and reliable rides for your entire stay
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-tour"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Book a Ride
            </Link>
            <Link
              to="/services"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
              }`}
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

    </PageLayout>
  );
};

export default TransportServices;
