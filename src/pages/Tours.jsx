import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import TourCategoryCard from '../components/common/TourCategoryCard';
import { baseTourCategories } from '../data/tourCategoriesData';
import { 
  FaUsers, 
  FaMountain, 
  FaClock,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

const Tours = () => {
  const { isDarkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const tourCategories = baseTourCategories.map((category) =>
    category.id === 'all'
      ? {
          ...category,
          color: category.colorLight
        }
      : category
  );

  const filteredTours = selectedCategory === 'all' 
    ? tourCategories.filter(cat => cat.id !== 'all')
    : tourCategories.filter(cat => cat.id === selectedCategory);

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
                  <span className="font-semibold">20+ Unique Stays</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaUsers className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">4.9/5 Guest Reviews</span>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                } shadow-lg`}>
                  <FaStar className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} />
                  <span className="font-semibold">Texas Hill Country</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className={`py-6 backdrop-blur-lg border-b ${
          isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-[#E2E8F0]'
        }`}>
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
              {tourCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? isDarkMode
                        ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] shadow-lg shadow-[#22D3EE]/50'
                        : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg shadow-blue-500/50'
                      : isDarkMode
                      ? 'bg-[#141A1F] text-[#C4CCD4] hover:bg-[#1E242B]'
                      : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
                  } transform hover:scale-105`}
                >
                  <span className="text-lg">
                    {category.icon && <category.icon />}
                  </span>
                  <span>{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : isDarkMode ? 'bg-[#0F1419]' : 'bg-white'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stays Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredTours.map((tour) => (
                    <TourCategoryCard key={tour.id} tour={tour} isDarkMode={isDarkMode} />
                  ))}
            </div>
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
                    : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                } transform hover:scale-105`}
              >
                Request Custom Stay
              </Link>
              <Link
                to="/contact"
                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 ${
                  isDarkMode
                    ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                    : 'border-[#2563EB] text-[#1D4ED8] hover:bg-[#2563EB] hover:text-white'
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
