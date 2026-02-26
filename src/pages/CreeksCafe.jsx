import PageLayout from '../components/layout/PageLayout';
import { useTheme } from '../context/ThemeContext';
import cafeOne from '../assets/prefab house portable container cafe/prefab house portable container cafe/cafe 1.avif';
import cafeTwo from '../assets/prefab house portable container cafe/prefab house portable container cafe/cafe 2.jpg';
import cafeThree from '../assets/prefab house portable container cafe/prefab house portable container cafe/cafe 3.avif';
import cafeFour from '../assets/prefab house portable container cafe/prefab house portable container cafe/cafe 4.avif';

const menuHighlights = [
  { title: 'Signature Coffee Bar', text: 'Espresso, pour-over coffee, and handpicked tea blends served fresh throughout the day.' },
  { title: 'Fresh Daily Kitchen', text: 'Curated breakfast and all-day light meals made for comfort, freshness, and flavor.' },
  { title: 'Outdoor Creekside Seating', text: 'Relaxed seating zones for calm mornings, conversations, and evening breaks.' },
  { title: 'Guest-Centered Service', text: 'Warm hospitality with fast service for both in-house guests and visitors.' }
];

const cafeTimings = [
  { label: 'Breakfast', value: '7:30 AM - 11:00 AM' },
  { label: 'All Day Cafe', value: '11:00 AM - 8:00 PM' },
  { label: 'Evening Drinks', value: '5:00 PM - 10:00 PM' }
];

const CreeksCafe = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageLayout
      seo={{
        title: 'Creekside Cafe | The Tiny Escape',
        description:
          'Visit Creekside Cafe at The Tiny Escape for handcrafted coffee, fresh meals, and a premium creekside cafe experience.',
        keywords: 'Tiny Escape cafe, creekside cafe, artisan coffee, fresh meals',
        url: '/creeks-cafe'
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
            backgroundImage: `url(${cafeTwo})`
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/15" />

        <div className="relative container mx-auto px-4 pb-14 md:pb-20">
          <span className="inline-flex rounded-full border border-[#A8C9B1]/70 bg-[#1F3A2A]/65 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#E7F0E6]">
            Food • Coffee • Lounge
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-bold text-white">Creekside Cafe</h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
            A premium cafe space with handcrafted drinks, fresh comfort food, and relaxed seating inspired by nature.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={cafeOne}
              alt="Coffee at Creekside Cafe"
              className="h-44 md:h-56 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={cafeThree}
              alt="Cafe interior"
              className="h-44 md:h-56 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={cafeFour}
              alt="Fresh cafe meal"
              className="col-span-2 h-52 md:h-64 w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-5 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
              The Creekside Cafe experience
            </h2>
            <div className="space-y-4">
              {menuHighlights.map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl p-4 border ${
                    isDarkMode
                      ? 'bg-[#0F1419] border-[#1F2A33]'
                      : 'bg-white border-[#DDE8DD]'
                  }`}
                >
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2A1F]'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1 ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {cafeTimings.map((slot) => (
                <div
                  key={slot.label}
                  className={`rounded-xl border p-4 ${
                    isDarkMode
                      ? 'bg-[#0B0C0E] border-[#1F2A33]'
                      : 'bg-[#F8FAFC] border-[#DDE8DD]'
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>{slot.label}</p>
                  <p className={`mt-1 text-sm font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>{slot.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 ${isDarkMode ? 'bg-[#141A1F]' : 'bg-[#F3F8F3]'}`}>
        <div className="container mx-auto px-4">
          <div className={`rounded-3xl p-6 md:p-8 border grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center ${
            isDarkMode ? 'bg-[#0F1419] border-[#1F2A33]' : 'bg-white border-[#DDE8DD]'
          }`}>
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                Reserve a table or private corner
              </h2>
              <p className={`mt-3 text-lg ${isDarkMode ? 'text-[#C9D6DF]' : 'text-[#475569]'}`}>
                Planning a celebration dinner, family brunch, or team meetup? Reach out and we’ll arrange the best seating for your group.
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
                  Reserve Now
                </a>
                <a
                  href="/contact"
                  className={`px-6 py-3 rounded-xl font-semibold border ${
                    isDarkMode
                      ? 'border-[#5F8C6A] text-[#A8C9B1]'
                      : 'border-[#1F3A2A] text-[#1F3A2A]'
                  }`}
                >
                  Contact Cafe
                </a>
              </div>
            </div>
            <img
              src={cafeTwo}
              alt="Creekside Cafe seating"
              className="w-full h-64 md:h-80 rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CreeksCafe;
