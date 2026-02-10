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
import tinyEscape2 from '../assets/tiny escape 2.jpg';
import tinyEscape3 from '../assets/tiny escape 3.jpg';
import tinyEscape4 from '../assets/tiny escape 4.jpg';
import tinyEscape5 from '../assets/tiny escape 5.jpg';
import tinyHouse1 from '../assets/tiny house1.webp';
import newYearVideo from '../assets/videos/New Year Celebration video.mp4';

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
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));
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

    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (inView) {
        el.classList.add('reveal-in');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [isDarkMode]);

  // Memoize HeroSection props
  const heroProps = {
    isDarkMode,
    currentSlide,
    setCurrentSlide,
    heroImages
  };

  // Structured data for SEO
  const structuredData = {
    ...getOrganizationSchema(),
    ...getReviewSchema({ averageRating: "4.9", count: "1250" })
  };

  const recentMoments = [
    {
      title: 'New Year Celebration',
      src: newYearVideo,
      poster: tinyEscape3,
      description: 'Grateful for your support as we welcome a year of peaceful escapes.'
    }
  ];


  return (
    <PageLayout
      seo={{
        title: "The Tiny Escape | Tiny Homes and Resort Stays",
        description: "The Tiny Escape offers calm, design-forward tiny homes and cabins. Private decks, wide skies, and easy check-in for a restorative stay.",
        keywords: "The Tiny Escape, tiny home resort, cabin stays, weekend getaway, design-forward stays",
        url: "/",
        structuredData
      }}
    >
      {/* Hero Section */}
      <HeroSection {...heroProps} />

          {/* Featured Stays Section */}
          <FeaturedTours isDarkMode={isDarkMode} />

          {/* Why Choose Us Section */}
          <section aria-labelledby="why-choose-us" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
            isDarkMode ? 'bg-[#14110E]' : 'bg-[#EAF3EA]'
          }`}>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="why-choose-us" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'}>Why Choose </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Tiny Escape</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
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
        <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#DDE8DD]'}`} aria-hidden="true" />

        {/* Experiences Grid */}
        <section aria-labelledby="destinations" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-linear-to-b from-[#0F0D0A] via-[#171310] to-[#0F0D0A]' : 'bg-linear-to-b from-[#F6FAF4] via-[#EAF3EA] to-[#F3F7F2]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="destinations" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'}>Explore </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Experiences</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
                Curated moments for slow stays, from stargazing decks to creekside hammocks
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: 'Hill Country Trails',
                  note: 'Guided sunrise loops and creekside breaks.',
                  image: tinyEscape2,
                  count: '8 signature moments'
                },
                {
                  title: 'Stargazing Nights',
                  note: 'Low-light decks with zero city glow.',
                  image: tinyEscape3,
                  count: '6 signature moments'
                },
                {
                  title: 'Creekside Mornings',
                  note: 'Coffee, quiet water, and easy trails.',
                  image: tinyEscape4,
                  count: '7 signature moments'
                },
                {
                  title: 'Golden Hour Views',
                  note: 'Warm light, long shadows, slow evenings.',
                  image: tinyEscape5,
                  count: '5 signature moments'
                },
                {
                  title: 'Firepit Evenings',
                  note: 'Private firepits with stocked wood bundles.',
                  image: tinyEscape2,
                  count: '4 signature moments'
                },
                {
                  title: 'Local Wineries',
                  note: 'Curated lists and easy transport add-ons.',
                  image: tinyEscape3,
                  count: '6 signature moments'
                }
              ].map((item, index) => (
                <Link
                  key={item.title}
                  to="/destinations"
                  className={`group flex flex-col md:flex-row overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 reveal-on-scroll ${
                    isDarkMode
                      ? 'bg-[#16120F] border-[rgba(201,163,106,0.25)] hover:border-[rgba(201,163,106,0.45)]'
                      : 'bg-white border-[#DDE8DD] hover:border-[#CFE3CF]'
                  }`}
                  data-reveal
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <div className={`md:w-2/5 min-h-[220px] md:min-h-[240px] ${isDarkMode ? 'bg-[#1A140F]' : 'bg-[#E3EFE3]'}`}>
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
                        isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'
                      }`}>
                        Experience
                      </p>
                      <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
                        {item.title}
                      </h3>
                      <p className={isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}>{item.note}</p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-[#CDBEAC]' : 'text-[#6B7C6B]'}`}>
                        {item.count}
                      </span>
                      <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#E7CFA2]' : 'text-[#2F5D3A]'}`}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Moments */}
        <section aria-labelledby="recent-moments" className={`relative py-20 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#14110E]' : 'bg-[#F3F7F2]'
        }`}>
          <div className="mx-auto max-w-7xl px-6">
            <header className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                  isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'
                }`}>
                  Recent Moments
                </p>
                <h2 id="recent-moments" className={`mt-2 text-3xl md:text-4xl font-bold ${
                  isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'
                }`}>
                  Tiny Escape in motion
                </h2>
              </div>
              <Link
                to="/gallery"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                  isDarkMode ? 'text-[#E7CFA2] hover:text-[#F2EEE7]' : 'text-[#2F5D3A] hover:text-[#1F2A1F]'
                }`}
              >
                View gallery
                <span aria-hidden="true">→</span>
              </Link>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentMoments.map((video) => (
                <div key={video.title} className="w-full space-y-3">
                  <article
                    className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isDarkMode
                        ? 'bg-[#16120F] border-[rgba(201,163,106,0.25)] hover:border-[rgba(201,163,106,0.45)] hover:-translate-y-1'
                        : 'bg-white border-[#DDE8DD] hover:border-[#CFE3CF] hover:-translate-y-1'
                    }`}
                  >
                    <div className="relative">
                      <video
                        src={video.src}
                        className="h-[200px] w-full object-cover"
                        poster={video.poster}
                        muted
                        playsInline
                        loop
                        controls
                      />
                      <div className={`absolute inset-0 pointer-events-none ${
                        isDarkMode
                          ? 'bg-linear-to-t from-[rgba(11,12,14,0.5)] via-transparent to-transparent'
                          : 'bg-linear-to-t from-[rgba(243,247,242,0.35)] via-transparent to-transparent'
                      }`} />
                    </div>
                    <div className="p-5">
                      <h3 className={`text-lg font-bold ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
                        {video.title}
                      </h3>
                    </div>
                  </article>
                  <p className={`text-sm ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}`}>
                    {video.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Stay Notes */}
        <section aria-labelledby="stay-notes" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#14110E]' : 'bg-[#F3F7F2]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="stay-notes" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}>Stay </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Notes</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
                A few pro touches that make the stay feel effortless
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Arrival Rituals',
                  image: tinyEscape4,
                  body: 'Pre-stocked coffee, soft lighting, and a welcome note so your first hour feels calm.'
                },
                {
                  title: 'Restorative Details',
                  image: tinyEscape5,
                  body: 'Premium linens, warm woods, and simple design that invites you to slow down.'
                },
                {
                  title: 'Concierge Add-ons',
                  image: tinyEscape2,
                  body: 'Local guides, dining reservations, and sunrise hikes organized before you arrive.'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 reveal-on-scroll ${
                    isDarkMode
                      ? 'bg-[#16120F] border-[rgba(201,163,106,0.25)] hover:border-[rgba(201,163,106,0.45)]'
                      : 'bg-white border-[#DDE8DD] hover:border-[#CFE3CF]'
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
                    <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
                      {item.title}
                    </h3>
                    <p className={isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <hr className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-[#DDE8DD]'}`} aria-hidden="true" />

        {/* Testimonials */}
        <section aria-labelledby="testimonials" className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#120F0C]' : 'bg-[#F3F7F2]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <header className="text-center mb-20 reveal-on-scroll" data-reveal>
              <h2 id="testimonials" className="text-4xl md:text-5xl font-bold mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'}>Guest </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Stories</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
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
                isDarkMode ? 'bg-[rgba(26,22,18,0.7)] border-[rgba(201,163,106,0.25)]' : 'bg-white border-[#DDE8DD] shadow-sm'
                }`}
                data-reveal
                style={{ transitionDelay: `${120 + i * 120}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img src={`https://i.pravatar.cc/60?img=${i+1}`} alt={review.name} loading="lazy" decoding="async" className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'}`}>{review.name}</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#6B7C6B]'}`}>{review.country}</p>
                  </div>
                </div>
                <p className={isDarkMode ? 'text-[#CDBEAC]' : 'text-[#3E4F3E]'}>{review.text}</p>
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
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#DDE8DD]'}`} />

      {/* Gallery Preview */}
      <section className={`relative py-32 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-linear-to-b from-[#0F0D0A] to-[#171310]' : 'bg-linear-to-b from-[#E8EFE1] to-[#D0E0CD]'
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
              { src: tinyEscape2, fallback: tinyHouse1 },
              { src: tinyEscape3, fallback: tinyHouse1 },
              { src: tinyEscape4, fallback: tinyHouse1 },
              { src: tinyEscape5, fallback: tinyHouse1 },
              { src: tinyHouse1, fallback: tinyEscape2 },
              { src: tinyEscape3, fallback: tinyHouse1 },
              { src: tinyEscape4, fallback: tinyHouse1 },
              { src: tinyEscape5, fallback: tinyHouse1 }
            ].map((image, i) => (
              <Link
                key={image.src}
                to="/gallery"
                className={`group relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all reveal-on-scroll ${
                  isDarkMode ? 'border border-[rgba(201,163,106,0.2)]' : 'border border-[#C7D5C7]'
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
                    : 'bg-linear-to-t from-[rgba(20,40,30,0.65)] to-transparent'
                }`} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal-on-scroll" data-reveal>
            <Link to="/gallery" className={`inline-block px-8 py-4 rounded-xl border-2 font-bold transition-all hover:scale-105 ${
              isDarkMode ? 'border-[#C9A36A] text-[#E7CFA2] hover:bg-[rgba(201,163,106,0.12)]' : 'border-[#1F3A2A] text-white bg-linear-to-r from-[#1F3A2A] to-[#5F8C6A] hover:shadow-[0_16px_28px_-20px_rgba(31,58,42,0.5)]'
            }`}>
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`relative py-20 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#120F0C]' : 'bg-[#F3F7F2]'
      }`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
              Find Us
            </h2>
            <p className={isDarkMode ? 'text-[#A79C8C]' : 'text-[#2F5D3A]'}>
              CR498, Bruceville-Eddy, TX, United States
            </p>
          </div>
          <div className={`overflow-hidden rounded-3xl border shadow-2xl ${
            isDarkMode ? 'border-[rgba(201,163,106,0.3)]' : 'border-[#CFE3CF]'
          }`}>
            <iframe
              title="Tiny Escape location map"
              src="https://www.google.com/maps?q=cr498%20Bruceville-Eddy%20TX%20United%20States&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#DDE8DD]'}`} />

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-linear-to-br from-[#1A140F] via-[#5B442A] to-[#C9A36A]' : 'bg-linear-to-br from-[#2F5D3A] via-[#4A7C59] to-[#7BAF7C]'
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
              isDarkMode ? 'bg-[#0F0D0A] text-[#E7CFA2]' : 'bg-[#1F2A1F] text-[#EAF3EA]'
            }`}>
              View Stays
            </Link>
            <Link to="/book-now" className={`px-12 py-6 bg-transparent border-3 rounded-2xl text-lg font-bold uppercase transition-all ${
              isDarkMode
                ? 'border-[#F2EEE7] text-[#F2EEE7] hover:bg-[#F2EEE7] hover:text-[#5B442A]'
                : 'border-[#EAF3EA] text-[#EAF3EA] hover:bg-[#EAF3EA] hover:text-[#2F5D3A]'
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
