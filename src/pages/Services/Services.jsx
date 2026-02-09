import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import { servicesData } from '../../data/servicesData';

const Services = () => {
  const { isDarkMode } = useTheme();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      ...servicesData.hotels,
      path: '/services/hotels',
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      ...servicesData.transport,
      path: '/services/transport',
      color: 'green',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      ...servicesData.guides,
      path: '/services/guides',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      ...servicesData.visa,
      path: '/services/visa',
      color: 'orange',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      ...servicesData.insurance,
      path: '/services/insurance',
      color: 'teal',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      ...servicesData.photography,
      path: '/services/photography',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <PageLayout
      seo={{
        title: 'Guest Services | Tiny Escape Texas',
        description: 'Complete stay services for Tiny Escape guests: curated stays, transfers, local guides, concierge planning, protection, and memory sessions.',
        keywords: 'Texas tiny stays services, Hill Country concierge, local guides, airport transfers, stay add-ons',
        url: '/services'
      }}
      className={`transition-colors duration-500 ${isDarkMode ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-linear-to-b from-[#F8FAFC] to-white text-[#0F172A]'}`}
    >

      <div className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)' }}>
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Complete Travel Services</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Concierge, local guides, and thoughtful add-ons for Texas Hill Country stays</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/custom-tour" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Plan a Custom Stay</Link>
              <a href="#services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">Explore Services</a>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>Our Services</h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[#475569]'}`}>Lodging-first support for Tiny Escape guests, built for comfort, ease, and clear pricing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={service.path} to={service.path} onMouseEnter={() => setHoveredService(index)} onMouseLeave={() => setHoveredService(null)} className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isDarkMode ? 'bg-linear-to-br from-[#141A1F] to-[#0B0C0E] border border-[rgba(34,211,238,0.1)] hover:border-[rgba(34,211,238,0.3)]' : 'bg-white border border-[#E2E8F0] hover:border-[#93C5FD]'}`}>
                <div className={`h-48 bg-linear-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                    <p className="text-sm opacity-90">{service.tagline}</p>
                  </div>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16"></div>
                  </div>
                </div>
                <div className="p-6">
                  <p className={`mb-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>{service.description}</p>
                  <div className={`flex items-center gap-2 font-semibold group-hover:gap-4 transition-all ${isDarkMode ? 'text-[#22D3EE]' : `text-${service.color}-600`}`}>
                    Explore Service
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${service.gradient} transform origin-left transition-transform ${hoveredService === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`py-20 px-4 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-linear-to-br from-[#EFF6FF] via-white to-[#F5F3FF]'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>Ready to Plan Your Stay?</h2>
          <p className={`text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>We handle the details, you enjoy the quiet, the views, and the reset</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/custom-tour" className={`px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:from-[#4DBBFF] hover:to-[#22D3EE]' : 'bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'}`}>Plan Your Custom Stay</Link>
            <Link to="/contact" className={`px-8 py-4 rounded-lg font-semibold transition-all ${isDarkMode ? 'bg-[#141A1F] text-white hover:bg-[#1A2229] border border-[rgba(34,211,238,0.2)]' : 'bg-white text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0]'} shadow-lg`}>Contact Us</Link>
          </div>
        </div>
      </div>
      
    </PageLayout>
  );
};

export default Services;

