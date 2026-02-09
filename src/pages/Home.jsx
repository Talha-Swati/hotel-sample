import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getOrganizationSchema, getReviewSchema } from '../utils/structuredData';

// Layout Components
import PageLayout from '../components/layout/PageLayout';

// Home Components
import HeroSection from '../components/home/HeroSection';
import FeaturedTours from '../components/home/FeaturedTours';

// Common Components
import FeatureFlipCard from '../components/common/FeatureFlipCard';
import SectionHeader from '../components/common/SectionHeader';

// Data
import { heroImages } from '../data/navigationData';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  // State Management
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider - 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Memoize HeroSection props
  const heroProps = {
    isDarkMode,
    currentSlide,
    setCurrentSlide,
    heroImages,
  };

  // Structured data for SEO
  const structuredData = {
    ...getOrganizationSchema(),
    ...getReviewSchema({ averageRating: "4.9", count: "1250" })
  };

  return (
    <PageLayout
      seo={{
        title: "Tiny Escape Texas | Tiny Homes and Resort Stays",
        description: "Tiny Escape offers calm, design-forward tiny homes and cabins in Texas. Private decks, wide skies, and easy check-in for a restorative stay.",
        keywords: "Tiny Escape Texas, tiny home resort, cabins in Texas, hill country stay, weekend getaway",
        url: "/",
        structuredData
      }}
    >
      {/* Hero Section */}
      <HeroSection {...heroProps} />

          {/* Featured Stays Section */}
          <FeaturedTours isDarkMode={isDarkMode} />

          {/* Section Separator */}
          <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} aria-hidden="true" />

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-choose-us" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
            isDarkMode ? 'bg-[#14110E]' : 'bg-[#F7F0E6]'
          }`}>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="why-choose-us" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Why Choose </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#8A6B45] to-[#C9A36A]'
                }`}>Tiny Escape</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#374151]'}`}>
                A Texas tiny home escape designed for slow mornings, warm sunsets, and quiet, private stays
              </p>
            </header>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Calm and Private',
                  description: 'Low-density layouts, private decks, and quiet outdoor space around every cabin.'
                },
                {
                  title: 'Design-Forward',
                  description: 'Warm materials, clean lines, and details that feel boutique and intentional.'
                },
                {
                  title: 'Nature First',
                  description: 'Hill Country skies, scenic trails, and firepit nights built into the stay.'
                },
                {
                  title: 'Easy Arrival',
                  description: 'Streamlined check-in, clear directions, and local support when you need it.'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="reveal-on-scroll"
                  data-reveal
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <FeatureFlipCard
                    icon=""
                    title={item.title}
                    description={item.description}
                    isDarkMode={isDarkMode}
                  />
                </div>
              ))}
            </article>
          </div>
        </section>

        {/* Section Separator */}
        <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} aria-hidden="true" />

        {/* Experiences Grid */}
        <section aria-labelledby="destinations" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-linear-to-b from-[#0F0D0A] via-[#171310] to-[#0F0D0A]' : 'bg-linear-to-b from-white via-[#F7F0E6] to-[#FFF9F1]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="destinations" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Explore </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#8A6B45] to-[#C9A36A]'
                }`}>Experiences</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#374151]'}`}>
                Curated moments for slow stays, from stargazing decks to creekside hammocks
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: 'Hill Country Trails',
                  note: 'Guided sunrise loops and creekside breaks.',
                  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
                  count: '8 signature moments'
                },
                {
                  title: 'Stargazing Nights',
                  note: 'Low-light decks with zero city glow.',
                  image: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80',
                  count: '6 signature moments'
                },
                {
                  title: 'Creekside Mornings',
                  note: 'Coffee, quiet water, and easy trails.',
                  image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80',
                  count: '7 signature moments'
                },
                {
                  title: 'Golden Hour Views',
                  note: 'Warm light, long shadows, slow evenings.',
                  image: 'https://images.unsplash.com/photo-1500534314209-a26db0f5aa84?auto=format&fit=crop&w=900&q=80',
                  count: '5 signature moments'
                },
                {
                  title: 'Firepit Evenings',
                  note: 'Private firepits with stocked wood bundles.',
                  image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
                  count: '4 signature moments'
                },
                {
                  title: 'Local Wineries',
                  note: 'Curated lists and easy transport add-ons.',
                  image: 'https://images.unsplash.com/photo-1470325907602-7e7f98b8f26b?auto=format&fit=crop&w=900&q=80',
                  count: '6 signature moments'
                }
              ].map((item, index) => (
                <Link
                  key={item.title}
                  to="/destinations"
                  className={`group flex flex-col md:flex-row overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 reveal-on-scroll ${
                    isDarkMode
                      ? 'bg-[#16120F] border-[rgba(201,163,106,0.25)] hover:border-[rgba(201,163,106,0.45)]'
                      : 'bg-white border-[#E2E8F0] hover:border-[#E7D4BA]'
                  }`}
                  data-reveal
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <div className={`md:w-2/5 min-h-[220px] md:min-h-[240px] ${isDarkMode ? 'bg-[#1A140F]' : 'bg-[#F5EADB]'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-widest ${
                        isDarkMode ? 'text-[#C9A36A]' : 'text-[#8A6B45]'
                      }`}>
                        Experience
                      </p>
                      <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#0F172A]'}`}>
                        {item.title}
                      </h3>
                      <p className={isDarkMode ? 'text-[#A79C8C]' : 'text-[#475569]'}>{item.note}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-[#CDBEAC]' : 'text-[#64748B]'}`}>
                        {item.count}
                      </span>
                      <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#E7CFA2]' : 'text-[#5B442A]'}`}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stay Notes */}
        <section aria-labelledby="stay-notes" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#14110E]' : 'bg-[#FFF9F1]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="stay-notes" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1A202C]'}>Stay </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#8A6B45] to-[#C9A36A]'
                }`}>Notes</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#374151]'}`}>
                A few pro touches that make the stay feel effortless
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Arrival Rituals',
                  image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800',
                  body: 'Pre-stocked coffee, soft lighting, and a welcome note so your first hour feels calm.'
                },
                {
                  title: 'Restorative Details',
                  image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800',
                  body: 'Premium linens, warm woods, and simple design that invites you to slow down.'
                },
                {
                  title: 'Concierge Add-ons',
                  image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800',
                  body: 'Local guides, dining reservations, and sunrise hikes organized before you arrive.'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 reveal-on-scroll ${
                    isDarkMode
                      ? 'bg-[#16120F] border-[rgba(201,163,106,0.25)] hover:border-[rgba(201,163,106,0.45)]'
                      : 'bg-white border-[#E2E8F0] hover:border-[#E7D4BA]'
                  }`}
                  data-reveal
                  style={{ transitionDelay: `${120 + index * 90}ms` }}
                >
                  <div className="h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#0F172A]'}`}>
                      {item.title}
                    </h3>
                    <p className={isDarkMode ? 'text-[#A79C8C]' : 'text-[#475569]'}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} aria-hidden="true" />

        {/* Testimonials */}
        <section aria-labelledby="testimonials" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#120F0C]' : 'bg-[#FFF9F1]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="testimonials" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}>Guest </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#8A6B45] to-[#C9A36A]'
                }`}>Stories</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#374151]'}`}>
                Real notes from guests who reset, reconnect, and unplug with Tiny Escape
              </p>
            </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', country: 'Austin, TX', text: 'The cabin felt private and calm. The firepit nights were perfect and check-in was effortless.' },
              { name: 'Michael Schmidt', country: 'San Antonio, TX', text: 'Beautiful design and super clean. We loved the sunrise views and quiet mornings.' },
              { name: 'Emma Williams', country: 'Dallas, TX', text: 'Everything we needed for a weekend reset. Great communication and a peaceful setting.' }
            ].map((review, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border transition-colors reveal-on-scroll ${
                isDarkMode ? 'bg-[rgba(26,22,18,0.7)] border-[rgba(201,163,106,0.25)]' : 'bg-white border-[#E2E8F0] shadow-sm'
                }`}
                data-reveal
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={`https://i.pravatar.cc/60?img=${i+1}`} alt={review.name} loading="lazy" decoding="async" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1A202C]'}`}>{review.name}</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#64748B]'}`}>{review.country}</p>
                  </div>
                </div>
                <p className={isDarkMode ? 'text-[#CDBEAC]' : 'text-[#374151]'}>{review.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} />

      {/* Gallery Preview */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-linear-to-b from-[#0F0D0A] to-[#171310]' : 'bg-linear-to-b from-[#FFF9F1] to-[#F5EADB]'
      }`}>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="reveal-on-scroll" data-reveal>
            <SectionHeader
              title="Tiny Escape"
              accent="Gallery"
              subtitle="A glimpse of our cabins, views, and quiet corners"
              isDarkMode={isDarkMode}
              className="mb-20"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1500534314209-a26db0f5aa84?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1500534314209-a26db0f5aa84?auto=format&fit=crop&w=700&q=80'
              },
              {
                src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
                fallback: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=80'
              }
            ].map((image, i) => (
              <Link
                key={image.src}
                to="/gallery"
                className={`group relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all reveal-on-scroll ${
                  isDarkMode ? 'border border-[rgba(201,163,106,0.2)]' : 'border border-[#E2E8F0]'
                }`}
                data-reveal
                style={{ transitionDelay: `${120 + i * 60}ms` }}
              >
                <img
                  src={image.src}
                  alt={`Tiny Escape gallery photo ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(event) => {
                    event.currentTarget.src = image.fallback;
                  }}
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                  isDarkMode
                    ? 'bg-linear-to-t from-[rgba(16,13,11,0.9)] via-[rgba(16,13,11,0.35)] to-transparent'
                    : 'bg-linear-to-t from-[rgba(15,23,42,0.55)] to-transparent'
                }`} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal-on-scroll" data-reveal>
            <Link to="/gallery" className={`inline-block px-8 py-4 rounded-xl border-2 font-bold transition-all hover:scale-105 ${
              isDarkMode ? 'border-[#C9A36A] text-[#E7CFA2] hover:bg-[rgba(201,163,106,0.12)]' : 'border-[#8A6B45] text-[#5B442A] hover:bg-[rgba(201,163,106,0.12)]'
            }`}>
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#E2E8F0]'}`} />

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-linear-to-br from-[#1A140F] via-[#5B442A] to-[#C9A36A]' : 'bg-linear-to-br from-[#8A6B45] via-[#C9A36A] to-[#E7CFA2]'
        }`} />
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center reveal-on-scroll" data-reveal>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            Plan Your Tiny Escape
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Share your dates and preferences. We will help you choose the right stay.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/tours" className={`px-12 py-6 rounded-2xl text-lg font-bold uppercase shadow-lg hover:scale-110 transition-all ${
              isDarkMode ? 'bg-[#0F0D0A] text-[#E7CFA2]' : 'bg-[#1A120A] text-[#F7E8D2]'
            }`}>
              View Stays
            </Link>
            <Link to="/book-now" className={`px-12 py-6 bg-transparent border-3 rounded-2xl text-lg font-bold uppercase transition-all ${
              isDarkMode
                ? 'border-[#F2EEE7] text-[#F2EEE7] hover:bg-[#F2EEE7] hover:text-[#5B442A]'
                : 'border-[#FFF4E2] text-[#FFF4E2] hover:bg-[#FFF4E2] hover:text-[#5B442A]'
            }`}>
              Request Availability
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Home;
