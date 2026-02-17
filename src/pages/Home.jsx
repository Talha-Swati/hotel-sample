import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getOrganizationSchema, getReviewSchema } from '../utils/structuredData';
import heroVideo from '../assets/videos/hero.mp4';

// Layout Components
import PageLayout from '../components/layout/PageLayout';

// Home Components
import HeroSection from '../components/home/HeroSection';
import FeaturedTours from '../components/home/FeaturedTours';

// Common Components
import FeatureFlipCard from '../components/common/FeatureFlipCard';

// Data
import tinyEscape3 from '../assets/tiny escape 3.jpg';
import tinyEscape5 from '../assets/tiny escape 5.jpg';
import tinyEscape7 from '../assets/tiny escape 7.jpeg';
import tinyEscape11 from '../assets/tiny escape 11.jpeg';
import horseRidingOne from '../assets/horse riding/horse riding/horse riding 1.jpg';
import horseRidingTwo from '../assets/horse riding/horse riding/horse riding 2.jpg';
import swimmingPoolThree from '../assets/swimming pool/swimming pool/swimming pool 3.jpg';
import cafeTwo from '../assets/prefab house portable container cafe/prefab house portable container cafe/cafe 2.jpg';

const INCLUDED_FEATURES = [
  {
    title: 'Modern Interiors',
    description: 'Thoughtfully styled spaces with clean design, warm materials, and comfort-first layouts.'
  },
  {
    title: 'Kitchenette Essentials',
    description: 'Practical kitchenette setup so you can prep light meals and enjoy easy mornings.'
  },
  {
    title: 'Plush Bedding',
    description: 'Quality linens and cozy bedding designed to support deep, restful sleep.'
  },
  {
    title: 'Heating + AC',
    description: 'Reliable climate control in every season for a consistently comfortable stay.'
  },
  {
    title: 'Fire Pit (Included with Stay)',
    description: 'A dedicated fire pit setup is included with your stay for cozy evenings outdoors.'
  },
  {
    title: 'Smart Self Check-In',
    description: 'Smart locks for seamless arrival with privacy and convenience from the start.'
  }
];

const EXPERIENCE_ADDONS = [
  {
    title: 'Horseback Riding',
    note: 'Scenic guided rides through peaceful countryside routes near the property.',
    image: horseRidingOne,
    count: 'Add-on activity',
    link: '/destinations#horseback-riding'
  },
  {
    title: 'Swimming Pool',
    note: 'Cool off and unwind with pool time as part of your stay experience.',
    image: swimmingPoolThree,
    count: 'Add-on activity',
    link: '/destinations'
  },
  {
    title: 'ATV Adventure',
    note: 'Add an ATV session for a fun, high-energy outdoor ride.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
    count: 'Add-on activity',
    link: '/destinations#atv-adventure'
  },
  {
    title: 'Trails',
    note: 'Explore nearby nature trails at your own pace for morning or sunset walks.',
    image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1400&q=80',
    count: 'Included experience',
    link: '/destinations#trails'
  },
  {
    title: 'Fire Pit (Included with Stay)',
    note: 'Your stay includes a fire pit for relaxed nights and meaningful conversations.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1400&q=80',
    count: 'Included with stay',
    link: '/destinations'
  }
];

const LOCATION_HIGHLIGHTS = [
  'Brazos kayaking (30 min)',
  'Magnolia Market (20 min)',
  'Belton Lake (30 min)',
  'Small-town antique shops',
  'Mother Neff trails + picnic spots',
  'Kissing Tree Vineyards + live music',
  'Eagles Landing homestyle dining'
];

const Home = () => {
  const { isDarkMode } = useTheme();

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
  const structuredData = useMemo(
    () => ({
      ...getOrganizationSchema(),
      ...getReviewSchema({ averageRating: '4.9', count: '1250' })
    }),
    []
  );

  const underDevelopmentPath = '/under-development';


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
      <HeroSection isDarkMode={isDarkMode} videoSrc={heroVideo} />


          {/* Featured Stays Section */}
          <FeaturedTours isDarkMode={isDarkMode} />

          {/* What's Included Section */}
          <section aria-labelledby="whats-included" className={`relative py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
            isDarkMode ? 'bg-[#14110E]' : 'bg-[#EAF3EA]'
          }`}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <header className="text-center mb-12 md:mb-20 reveal-on-scroll" data-reveal>
              <h2 id="whats-included" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'}>What’s </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Included</span>
              </h2>
              <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
                All homes include modern comforts and thoughtful essentials for an easy, restorative stay
              </p>
            </header>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] sm:gap-3 md:gap-6">
              {INCLUDED_FEATURES.map((item, index) => (
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
        <section aria-labelledby="destinations" className={`relative py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-linear-to-b from-[#0F0D0A] via-[#171310] to-[#0F0D0A]' : 'bg-linear-to-b from-[#F6FAF4] via-[#EAF3EA] to-[#F3F7F2]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <header className="text-center mb-12 md:mb-20 reveal-on-scroll" data-reveal>
              <h2 id="destinations" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
                <span className={isDarkMode ? 'text-[#F2F6F9]' : 'text-[#1F2A1F]'}>Explore </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Experiences</span>
              </h2>
              <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
                Add a little adventure to your escape — relax or roam with activities for every mood
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
              {EXPERIENCE_ADDONS.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className={`group flex flex-col md:flex-row overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 reveal-on-scroll ${
                    isDarkMode
                      ? 'bg-[#16120F] border-[rgba(201,163,106,0.25)] hover:border-[rgba(201,163,106,0.45)]'
                      : 'bg-white border-[#DDE8DD] hover:border-[#CFE3CF]'
                  }`}
                  data-reveal
                  style={{ transitionDelay: `${120 + index * 80}ms` }}
                >
                  <div className={`md:w-2/5 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] ${isDarkMode ? 'bg-[#1A140F]' : 'bg-[#E3EFE3]'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-widest ${
                        isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'
                      }`}>
                        Add-On
                      </p>
                      <h3 className={`text-lg sm:text-xl font-bold mb-1.5 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}`}>{item.note}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`text-sm ${isDarkMode ? 'text-[#CDBEAC]' : 'text-[#6B7C6B]'}`}>
                        {item.count}
                      </span>
                      <span className={`text-sm font-semibold ${isDarkMode ? 'text-[#E7CFA2]' : 'text-[#2F5D3A]'}`}>
                        Request →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section aria-labelledby="stay-notes" className={`relative py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${
          isDarkMode ? 'bg-[#14110E]' : 'bg-[#F3F7F2]'
        }`}>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <header className="text-center mb-12 md:mb-20 reveal-on-scroll" data-reveal>
              <h2 id="stay-notes" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
                <span className={isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}>Coming </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>Soon</span>
              </h2>
              <p className={`text-base sm:text-lg md:text-xl ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
                Even more reasons to escape — we’re building a destination that continues to grow
              </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Two Container Pools',
                  image: swimmingPoolThree,
                  body: 'Sustainable, stylish pools designed for hot Texas days and easy afternoons.'
                },
                {
                  title: 'On-Site Café',
                  image: cafeTwo,
                  body: 'Locally roasted coffee, fresh pastries, light bites, and good vibes.'
                },
                {
                  title: 'More Packages & Rentals',
                  image: horseRidingTwo,
                  body: 'Additional activity packages and rental options are available on request.'
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
                  <div className="p-5 sm:p-6">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
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

        {/* About */}
        <section
          aria-labelledby="testimonials"
          className={`relative py-16 md:py-24 lg:py-32 overflow-hidden transition-colors duration-500 img-section ${
          isDarkMode ? 'bg-[#120F0C]' : 'bg-[#EAF0E8]'
        }`}
          style={{ '--cta-bg-image': `url(${tinyEscape11})` }}
        >

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
            <header className="text-center mb-12 md:mb-20 reveal-on-scroll" data-reveal>
              <h2 id="testimonials" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
                <span className="text-white">Built With </span>
                <span className={`bg-clip-text text-transparent ${
                  isDarkMode ? 'bg-linear-to-r from-[#C9A36A] to-[#E7CFA2]' : 'bg-linear-to-r from-[#A3D3A6] to-[#DDF2DE]'
                }`}>Heart</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90">
                Designed to heal — a family-owned passion project inspired by nature, thoughtful design, and slow living
              </p>
            </header>

          <div
            className={`mx-auto max-w-6xl p-6 sm:p-10 rounded-3xl border backdrop-blur-lg reveal-on-scroll ${
              isDarkMode
                ? 'bg-[rgba(16,13,11,0.32)] border-[rgba(201,163,106,0.45)] shadow-[0_30px_70px_-45px_rgba(0,0,0,0.72)]'
                : 'bg-[rgba(255,255,255,0.18)] border-[rgba(231,240,233,0.58)] shadow-[0_30px_70px_-45px_rgba(0,0,0,0.45)]'
            }`}
            data-reveal
          >
            <p className="text-base sm:text-lg leading-relaxed text-white/95">
              The Tiny Escape is a family-owned passion project born from a love of nature, thoughtful design, and slow living. We believe tiny spaces can create big transformations through rest, creativity, and quality time. From each home interior to the layout of our land, every detail is built to help you feel peaceful, connected, and inspired.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={`relative py-16 md:py-20 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? 'bg-[#120F0C]' : 'bg-[#F3F7F2]'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>
              Location
            </h2>
            <p className={isDarkMode ? 'text-[#A79C8C]' : 'text-[#2F5D3A]'}>
              102 CR 499, Eddy, TX 76524
            </p>
            <p className={`mt-2 max-w-3xl mx-auto ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#3E4F3E]'}`}>
              Perfectly placed between Waco (20 minutes) and Temple (10 minutes), with easy access to dining, trails, river activities, and small-town charm.
            </p>
          </div>
          <div className={`overflow-hidden rounded-3xl border shadow-2xl ${
            isDarkMode ? 'border-[rgba(201,163,106,0.3)]' : 'border-[#CFE3CF]'
          }`}>
            <iframe
              title="Tiny Escape location map"
              src="https://www.google.com/maps?q=cr498%20Bruceville-Eddy%20TX%20United%20States&output=embed"
              className="h-[280px] sm:h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {LOCATION_HIGHLIGHTS.map((item) => (
              <div
                key={item}
                className={`rounded-lg border px-3 py-2 text-[13px] leading-tight ${
                  isDarkMode
                    ? 'border-[rgba(201,163,106,0.2)] bg-[rgba(22,18,15,0.75)] text-[#CDBEAC]'
                    : 'border-[#DDE8DD] bg-white text-[#3E4F3E]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className={`border-b ${isDarkMode ? 'border-gray-800' : 'border-[#DDE8DD]'}`} />

      {/* CTA Section */}
      <section
        className="relative py-14 sm:py-20 md:py-24 min-h-[56vh] sm:min-h-[70vh] overflow-hidden img-section"
        style={{ '--cta-bg-image': `url(${tinyEscape7})` }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="cta-cut-card tiny-cta-frame grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center px-4 md:px-8 py-10 md:py-14"
            style={{
              '--cta-frame-gradient': isDarkMode
                ? 'linear-gradient(90deg, rgba(14, 22, 17, 0.78), rgba(14, 22, 17, 0.38))'
                : 'linear-gradient(90deg, rgba(231, 240, 231, 0.82), rgba(231, 240, 231, 0.48))',
              '--cta-frame-border': isDarkMode
                ? 'rgba(159, 215, 174, 0.35)'
                : 'rgba(255, 255, 255, 0.7)',
              '--cta-frame-text': isDarkMode ? '#F6EFE6' : '#1F2A1F',
              '--cta-frame-muted': isDarkMode ? '#E2EFE6' : '#2B3B2F',
              '--cta-accent': isDarkMode ? '#9FD7AE' : '#2F5D3A',
              '--cta-accent-strong': isDarkMode ? '#8BCF9F' : '#1F3A2A',
              '--cta-glass-bg': isDarkMode
                ? 'rgba(14, 22, 17, 0.72)'
                : 'rgba(255, 255, 255, 0.7)',
              '--cta-glass-border': isDarkMode
                ? 'rgba(159, 215, 174, 0.35)'
                : 'rgba(255, 255, 255, 0.85)',
              '--cta-icon-bg': isDarkMode ? '#8BCF9F' : '#B7E0C2',
              '--cta-icon-text': isDarkMode ? '#0E1A12' : '#1F3A2A',
              '--cta-btn-primary-bg': isDarkMode ? '#8BCF9F' : '#1F3A2A',
              '--cta-btn-primary-text': isDarkMode ? '#0E1A12' : '#F7FBF7',
              '--cta-btn-secondary-border': isDarkMode ? '#9FD7AE' : '#1F3A2A',
              '--cta-btn-secondary-text': isDarkMode ? '#DFF4E5' : '#1F3A2A',
              '--cta-btn-secondary-hover-bg': isDarkMode ? '#9FD7AE' : '#1F3A2A',
              '--cta-btn-secondary-hover-text': isDarkMode ? '#0E1A12' : '#F7FBF7'
            }}
          >
            <div>
              <p className="tiny-cta-kicker">
                Get Started
              </p>
              <h2 className="tiny-cta-title" style={{ fontFamily: 'Playfair Display, serif' }}>
                Design Your Tiny Escape
              </h2>
              <p className="tiny-cta-subtitle">
                Tell us your dates, style, and pace. We will pair you with a quiet cabin, the right view, and a stay that feels effortless.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to={underDevelopmentPath} className="tiny-cta-primary">
                  View Stays
                </Link>
                <Link to={underDevelopmentPath} className="tiny-cta-secondary">
                  Request Availability
                </Link>
              </div>
            </div>

            <div
              className="tiny-cta-glass"
            >
                {[
                {
                  label: 'Early Bird Savings',
                  text: 'Reserve early to unlock calm-season pricing.',
                  icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                  </svg>
                )
                },
                {
                  label: 'Extended Stay Rewards',
                  text: 'Stay 3+ nights for extra savings and perks.',
                  icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 3l3 6 6 .8-4.5 4.4 1 6-5.5-3-5.5 3 1-6L3 9.8 9 9l3-6z" />
                  </svg>
                )
                },
                {
                  label: 'Seasonal Nature Offers',
                  text: 'Limited-time stays for blooms, stars, and cool nights.',
                  icon: (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2v20M4 12h16" />
                    <path d="M7 5c1.5 2 8.5 2 10 0M7 19c1.5-2 8.5-2 10 0" />
                  </svg>
                )
                }
              ].map((item) => (
                <div key={item.label} className="tiny-cta-feature">
                  <span className="tiny-cta-icon">
                    {item.icon}
                  </span>
                  <div>
                    <p className="tiny-cta-feature-title">{item.label}</p>
                    <p className="tiny-cta-feature-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Home;
