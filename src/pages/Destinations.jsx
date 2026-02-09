import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getAllStays } from '../data/staysData';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import PageHero from '../components/common/PageHero';
import { MapPin, Star, Users, Search, Filter } from 'lucide-react';

const Destinations = () => {
  const { isDarkMode } = useTheme();
  const allStays = getAllStays();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSleeps, setSelectedSleeps] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Filter and sort destinations
  const filteredDestinations = useMemo(() => {
    let filtered = allStays;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(stay => stay.category === selectedCategory);
    }

    if (selectedSleeps !== 'all') {
      filtered = filtered.filter(stay => stay.sleeps >= parseInt(selectedSleeps));
    }

    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.pricing.standard.price - b.pricing.standard.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [allStays, searchQuery, selectedCategory, selectedSleeps, sortBy]);

  const getCategoryBadgeColor = (category) => {
    switch (category) {
      case 'couples':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'family':
        return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
      case 'group':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200';
      case 'value':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  return (
    <PageLayout
      seo={{
        title: 'Tiny Escape Stays | Cabins and Tiny Homes',
        description: 'Browse Tiny Escape stays across Texas. Compare sleep count, views, and nightly rates to find the right tiny home.',
        keywords: 'Tiny Escape stays, Texas tiny homes, cabin rentals, hill country lodging',
        url: '/destinations'
      }}
      className={isDarkMode ? '' : 'bg-[#F8FAFC]'}
    >
      {/* Hero Section */}
      <PageHero
        title="Explore All Stays"
        subtitle="Compare sleep count, views, and nightly rates to find your Tiny Escape"
        isDarkMode={isDarkMode}
      >
        <div className={`mt-8 text-sm ${isDarkMode ? 'text-blue-100' : 'text-[#2563EB]'}`}>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {allStays.length} Unique Stays
          </span>
        </div>
      </PageHero>

      {/* Filters Section */}
      <div className={`border-b shadow-md ${
        isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white border-[#E2E8F0]'
      }`}>
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'}`} />
              <input
                type="text"
                placeholder="Search stays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  isDarkMode
                    ? 'border-[#1E242B] bg-[#141A1F] text-[#E0E7EE]'
                    : 'border-[#CBD5E1] bg-white text-[#0F172A]'
                }`}
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? 'border-[#1E242B] bg-[#141A1F] text-[#E0E7EE]'
                  : 'border-[#CBD5E1] bg-white text-[#0F172A]'
              }`}
            >
              <option value="all">All Categories</option>
              <option value="couples">Couples</option>
              <option value="family">Family</option>
              <option value="group">Group</option>
              <option value="value">Value</option>
            </select>

            {/* Sleep Count Filter */}
            <select
              value={selectedSleeps}
              onChange={(e) => setSelectedSleeps(e.target.value)}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? 'border-[#1E242B] bg-[#141A1F] text-[#E0E7EE]'
                  : 'border-[#CBD5E1] bg-white text-[#0F172A]'
              }`}
            >
              <option value="all">Any Sleep Count</option>
              <option value="2">Sleeps 2+</option>
              <option value="4">Sleeps 4+</option>
              <option value="5">Sleeps 5+</option>
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                isDarkMode
                  ? 'border-[#1E242B] bg-[#141A1F] text-[#E0E7EE]'
                  : 'border-[#CBD5E1] bg-white text-[#0F172A]'
              }`}
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory !== 'all' || selectedSleeps !== 'all') && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>Active filters:</span>
              {searchQuery && (
                <span className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                }`}>
                  Search: {searchQuery}
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                }`}>
                  {selectedCategory}
                </span>
              )}
              {selectedSleeps !== 'all' && (
                <span className={`px-3 py-1 text-sm rounded-full ${
                  isDarkMode ? 'bg-orange-900 text-orange-200' : 'bg-orange-100 text-orange-800'
                }`}>
                  Sleeps {selectedSleeps}+
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedSleeps('all');
                }}
                className={`text-sm hover:underline ${isDarkMode ? 'text-blue-400' : 'text-[#2563EB]'}`}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 py-6">
        <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}>
          Showing {filteredDestinations.length} of {allStays.length} stays
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="container mx-auto px-4 pb-16">
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20">
            <Filter className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'}`} />
            <h3 className={`text-2xl font-semibold mb-2 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#0F172A]'}`}>
              No stays found
            </h3>
            <p className={isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}>
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destination/${destination.slug}`}
                className={`rounded-xl overflow-hidden shadow-lg ${
                  isDarkMode ? 'bg-[#141A1F]' : 'bg-white border border-[#E2E8F0]'
                }`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.heroImage}
                    alt={destination.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80`;
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBadgeColor(destination.category)}`}>
                      {destination.category}
                    </span>
                  </div>

                  {/* Sleeps Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/60 text-white rounded-full text-xs font-semibold">
                      Sleeps {destination.sleeps}
                    </span>
                  </div>

                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {destination.name}
                  </h3>

                  <p className={`text-sm mb-3 italic ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                    {destination.tagline}
                  </p>

                  <div className={`flex items-center gap-2 mb-4 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>

                  <p className={`text-sm mb-4 line-clamp-2 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'}`}>
                    {destination.description}
                  </p>

                  {/* Stats Row */}
                  <div className={`flex items-center justify-between mb-4 pb-4 border-b ${
                    isDarkMode ? 'border-gray-700' : 'border-[#E2E8F0]'
                  }`}>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                        {destination.rating}
                      </span>
                      <span className={`text-xs ${isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'}`}>
                        ({destination.reviews} reviews)
                      </span>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>
                      <Users className="w-4 h-4" />
                      <span>{destination.bedrooms} bed • {destination.baths} bath</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'}`}>Starting from</p>
                      <p className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-[#2563EB]'}`}>
                          ${destination.pricing.standard.price}
                      </p>
                      <p className={`text-xs ${isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'}`}>per night</p>
                    </div>
                    <div className={`px-4 py-2 rounded-lg ${
                      isDarkMode ? 'bg-[#22D3EE] text-[#0B0C0E]' : 'bg-[#2563EB] text-white'
                    }`}>
                      View Details
                    </div>
                  </div>

                  {/* Highlights Preview */}
                  <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-[#E2E8F0]'} `}>
                    <p className={`text-xs mb-2 ${isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'}`}>Top Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className={`text-xs px-2 py-1 rounded ${
                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-[#F8FAFC] text-[#475569]'
                          }`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

    </PageLayout>
  );
};

export default Destinations;
