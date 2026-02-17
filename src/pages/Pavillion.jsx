import PageLayout from '../components/layout/PageLayout';
import { useTheme } from '../context/ThemeContext';
import pavilionHero from '../assets/Pavilion images/Pavilion images/pavilion 2.jpg';
import pavilionOne from '../assets/Pavilion images/Pavilion images/pavilion 1.webp';
import pavilionThree from '../assets/Pavilion images/Pavilion images/pavilion 3.jpg';
import pavilionFour from '../assets/Pavilion images/Pavilion images/pavilion 4.jpg';
import pavilionFive from '../assets/Pavilion images/Pavilion images/pavilion 5.jpg';

const pavilionHighlights = [
  {
    title: 'Architectural Open-Air Design',
    text: 'Vaulted timber structure with an elegant, resort-style look for events and premium gatherings.'
  },
  {
    title: 'Evening Fire-Lit Ambience',
    text: 'Soft lighting and fire features create a warm setting for dinners, celebrations, and late-night conversations.'
  },
  {
    title: 'Flexible Event Layout',
    text: 'Suitable for private dinners, birthdays, mini functions, and curated guest experiences.'
  },
  {
    title: 'Scenic Backdrop',
    text: 'Manicured surroundings and clean sight-lines make every moment photo-ready.'
  }
];

const pavilionStats = [
  { label: 'Event Capacity', value: '40-60 Guests' },
  { label: 'Best Time', value: 'Sunset to Night' },
  { label: 'Use Cases', value: 'Celebrations, Dining, Socials' }
];

const Pavillion = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageLayout
      seo={{
        title: 'Pavillion | The Tiny Escape',
        description:
          'Discover the Tiny Escape Pavillion — a premium open-air venue for scenic gatherings, fire-lit evenings, and memorable events.',
        keywords: 'Tiny Escape pavilion, open air venue, resort pavilion, private events, fire-lit evenings',
        url: '/pavillion'
      }}
    >
      <section
        className={`relative min-h-[62vh] flex items-end ${
          isDarkMode ? 'bg-[#0B0C0E]' : 'bg-[#F8FAFC]'
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${pavilionHero})`
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/15" />

        <div className="relative container mx-auto px-4 pb-14 md:pb-20">
          <span className="inline-flex rounded-full border border-[#A8C9B1]/70 bg-[#1F3A2A]/65 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#E7F0E6]">
            Signature Venue
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white">Pavillion</h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
            A premium open-air destination designed for elegant evenings, celebrations, and curated guest experiences.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-5 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
              Why this pavilion stands out
            </h2>
            <div className="space-y-4">
              {pavilionHighlights.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl p-5 border ${
                    isDarkMode
                      ? 'bg-[#0F1419] border-[#1F2A33]'
                      : 'bg-white border-[#DDE8DD]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2A1F]'}`}>{item.title}</h3>
                  <p className={`mt-1 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'}`}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              {pavilionStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border p-4 ${
                    isDarkMode
                      ? 'bg-[#0B0C0E] border-[#1F2A33]'
                      : 'bg-[#F8FAFC] border-[#DDE8DD]'
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>{stat.label}</p>
                  <p className={`mt-1 text-sm font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={pavilionOne}
              alt="Pavillion seating area"
              className="h-44 md:h-56 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={pavilionThree}
              alt="Pavillion scenic view"
              className="h-44 md:h-56 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={pavilionFour}
              alt="Pavillion at sunset"
              className="col-span-2 h-52 md:h-64 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDarkMode ? 'bg-[#141A1F]' : 'bg-[#F3F8F3]'}`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
            <img
              src={pavilionFive}
              alt="Pavillion event layout"
              className="w-full h-64 md:h-80 rounded-3xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Plan your pavilion evening
              </h2>
              <p className={`mt-3 text-lg ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'}`}>
                Tell us your occasion, preferred setup, and guest count. Our team will help you shape a smooth and memorable experience.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/book-now"
                  className={`px-6 py-3 rounded-xl font-semibold ${
                    isDarkMode
                      ? 'bg-linear-to-r from-[#1F3A2A] to-[#5F8C6A] text-[#F7FBF7]'
                      : 'bg-[#1F3A2A] text-[#F7FBF7]'
                  }`}
                >
                  Request Availability
                </a>
                <a
                  href="/contact"
                  className={`px-6 py-3 rounded-xl font-semibold border ${
                    isDarkMode
                      ? 'border-[#5F8C6A] text-[#A8C9B1]'
                      : 'border-[#1F3A2A] text-[#1F3A2A]'
                  }`}
                >
                  Contact Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Pavillion;
