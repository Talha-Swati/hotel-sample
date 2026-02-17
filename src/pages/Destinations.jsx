import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import horseRidingOne from '../assets/horse riding/horse riding/horse riding 1.jpg';
import swimmingPoolThree from '../assets/swimming pool/swimming pool/swimming pool 3.jpg';

const EXPERIENCE_SECTIONS = [
  {
    id: 'horseback-riding',
    title: 'Horseback Riding',
    description:
      'Scenic guided horseback rides through open countryside trails near the property. A calm and memorable outdoor experience for couples, families, and first-time riders.',
    image: horseRidingOne,
    imageAlt: 'Horseback riding experience',
    imageOnRight: true
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description:
      'Cool off and unwind in our swimming pool area, designed for relaxed afternoons and quiet evenings during your stay.',
    image: swimmingPoolThree,
    imageAlt: 'Swimming pool experience',
    imageOnRight: false
  },
  {
    id: 'trails',
    title: 'Trails',
    description:
      'Discover nearby nature trails for gentle morning walks and sunset strolls with scenic views and peaceful surroundings.',
    image:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Nature trail experience',
    imageOnRight: true
  },
  {
    id: 'firepit',
    title: 'Firepit',
    description:
      'Gather around the firepit after sunset for cozy conversations, warm drinks, and a classic outdoor stay experience.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Firepit experience',
    imageOnRight: false
  },
  {
    id: 'atv-adventure',
    title: 'ATV Adventure',
    description:
      'Add an ATV session for a high-energy off-road ride and a fun adventure break during your stay.',
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'ATV adventure experience',
    imageOnRight: true
  }
];

const Destinations = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageLayout
      seo={{
        title: 'Experiences | The Tiny Escape',
        description:
          'Explore all Tiny Escape experiences in one place: horseback riding, swimming pool, trails, firepit, and ATV adventure.',
        keywords:
          'Tiny Escape experiences, horseback riding, swimming pool, trails, firepit, ATV adventure',
        url: '/destinations'
      }}
      className={isDarkMode ? '' : 'bg-[#F8FAFC]'}
    >
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 pb-20 md:pb-28">
        <header className="mb-14 md:mb-20 reveal-on-scroll" data-reveal>
          <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent ${
            isDarkMode
              ? 'bg-linear-to-r from-[#A8C9B1] to-[#5F8C6A]'
              : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
          }`}>
            EXPERIENCES
          </h1>
          <p className={`mt-4 max-w-3xl text-lg md:text-2xl leading-relaxed ${isDarkMode ? 'text-[#B7C0CC]' : 'text-[#334155]'}`}>
            Explore every experience in one place with a clean, section-by-section journey.
          </p>
        </header>

        <div className="space-y-16 md:space-y-24">
        {EXPERIENCE_SECTIONS.map((section, index) => {
          const contentOrderClass = section.imageOnRight ? 'md:order-1' : 'md:order-2';
          const imageOrderClass = section.imageOnRight ? 'md:order-2' : 'md:order-1';

          return (
            <article
              key={section.id}
              id={section.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center reveal-on-scroll"
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className={`${contentOrderClass}`}>
                <p className={`mb-3 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>
                  Experience {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className={`text-3xl md:text-6xl font-extrabold uppercase tracking-tight mb-4 bg-clip-text text-transparent ${
                  isDarkMode
                    ? 'bg-linear-to-r from-[#A8C9B1] to-[#5F8C6A]'
                    : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C]'
                }`}>
                  {section.title}
                </h2>
                <p className={`text-base md:text-xl lg:text-2xl md:leading-[1.45] leading-relaxed ${isDarkMode ? 'text-[#B7C0CC]' : 'text-[#334155]'}`}>
                  {section.description}
                </p>
                <div className="mt-8">
                  <Link
                    to="/book-now"
                    className={`inline-flex items-center justify-center min-w-[170px] rounded-full px-6 py-3 text-lg font-semibold transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-linear-to-r from-[#1F3A2A] to-[#5F8C6A] text-[#F7FBF7] hover:from-[#5F8C6A] hover:to-[#1F3A2A]'
                        : 'bg-linear-to-r from-[#2F5D3A] to-[#7BAF7C] text-white hover:from-[#7BAF7C] hover:to-[#2F5D3A]'
                    }`}
                  >
                    Book Your Stay
                  </Link>
                </div>
              </div>

              <div className={`${imageOrderClass}`}>
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[280px] sm:h-[340px] md:h-[390px] lg:h-[430px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </article>
          );
        })}
        </div>
      </section>
    </PageLayout>
  );
};

export default Destinations;
