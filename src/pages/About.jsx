import { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import config from '../config';
import { FaQuoteLeft, FaMountain, FaUsers, FaHeart, FaAward, FaGlobeAsia, FaHandshake, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  const { isDarkMode } = useTheme();

  const teamMembers = [
    {
      id: 1,
      name: 'Avery Cole',
      position: 'Founder',
      avatar: 'https://ui-avatars.com/api/?name=Avery+Cole&background=22D3EE&color=fff&size=300&bold=true',
      bio: 'Shapes the Tiny Escape vision with a focus on calm, quality, and thoughtful guest experiences across Texas.',
      expertise: ['Hospitality Design', 'Guest Experience', 'Brand Strategy', 'Operations'],
      achievements: [
        'Built a collection of design-forward tiny homes',
        'Launched guest-first operations across Texas',
        'Introduced low-impact, nature-friendly stays',
        'Featured in regional travel guides'
      ]
    },
    {
      id: 2,
      name: 'Jordan Reed',
      position: 'Operations Lead',
      avatar: 'https://ui-avatars.com/api/?name=Jordan+Reed&background=4DBBFF&color=fff&size=300&bold=true',
      bio: 'Leads day-to-day operations, ensuring every stay is smooth, clean, and ready for arrival.',
      expertise: ['Operations Management', 'Quality Assurance', 'Vendor Coordination', 'Guest Care'],
      achievements: [
        'Maintains a 4.9+ guest satisfaction score',
        'Built a reliable local support network',
        'Streamlined self check-in processes',
        'Developed property care standards'
      ]
    },
    {
      id: 3,
      name: 'Maya Patel',
      position: 'Experience Designer',
      avatar: 'https://ui-avatars.com/api/?name=Maya+Patel&background=60A5FA&color=fff&size=300&bold=true',
      bio: 'Designs stay details that feel calm, intentional, and premium from arrival to checkout.',
      expertise: ['Interior Styling', 'Service Design', 'Content Direction', 'Guest Journey'],
      achievements: [
        'Curated signature stay themes',
        'Built welcome experiences with local makers',
        'Introduced seasonal stay updates',
        'Improved guest communication flows'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <FaHeart />,
      title: 'Calm and Care',
      description: 'Every stay is designed for comfort, quiet, and an easy pace.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust & Transparency',
      description: 'Clear policies, responsive support, and no surprises.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Thoughtful design, clean spaces, and consistent quality.'
    },
    {
      icon: <FaGlobeAsia />,
      title: 'Local Roots',
      description: 'We work with local makers and partners across Texas.'
    }
  ];

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '4.9★', label: 'Guest Rating' },
    { number: '20+', label: 'Unique Stays' },
    { number: '12', label: 'Miles to Town' }
  ];

  // SEO structured data
  const structuredData = useMemo(() => {
    const siteUrl = (config.site.url || '').replace(/\/$/, '');

    return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Tiny Escape",
    "description": "Design-forward tiny homes and cabin stays in Texas.",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "Avery Cole",
        "jobTitle": "Founder"
      },
      {
        "@type": "Person",
        "name": "Jordan Reed",
        "jobTitle": "Operations Lead"
      },
      {
        "@type": "Person",
        "name": "Maya Patel",
        "jobTitle": "Experience Designer"
      }
    ]
    };
  }, []);

  return (
    <PageLayout
      seo={{
        title: "About The Tiny Escape | Tiny Home Stays",
        description: "Meet the team behind Tiny Escape. We design calm, design-forward tiny home stays across Texas.",
        keywords: "Tiny Escape team, Texas tiny home stays, cabin resort, hill country lodging",
        url: "/about",
        structuredData
      }}
    >
      {/* Hero Section */}
        <section
          id="top"
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-[#F8FAFF] via-[#E6F4FF] to-[#F8FAFF]'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'}`}>
                <FaUsers className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                About Tiny Escape
              </h1>
              <p className={`text-lg md:text-xl mb-10 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                Design-forward tiny homes and calm escapes across Texas since 2019
              </p>

              <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                <div className={`rounded-2xl p-[1px] ${isDarkMode ? 'bg-[#1A2129]' : 'bg-[#DCE7F3]'}`}>
                  <div className={`h-full rounded-2xl p-6 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-white border border-[#E2E8F0]'} text-left`}>
                    <div className="flex items-center gap-3 mb-3">
                      <FaQuoteLeft className={`${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} text-xl`} />
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                        Our Mission
                      </h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'} text-sm leading-relaxed`}>
                      Create calm, intentional stays that help guests slow down and reconnect.
                    </p>
                  </div>
                </div>

                <div className={`rounded-2xl p-[1px] ${isDarkMode ? 'bg-[#1A2129]' : 'bg-[#DCE7F3]'}`}>
                  <div className={`h-full rounded-2xl p-6 ${isDarkMode ? 'bg-[#0B0C0E]' : 'bg-white border border-[#E2E8F0]'} text-left`}>
                    <div className="flex items-center gap-3 mb-3">
                      <FaMountain className={`${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'} text-xl`} />
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                        Experience Promise
                      </h3>
                    </div>
                    <p className={`${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'} text-sm leading-relaxed`}>
                      Clean spaces, clear details, and quiet nights from first message to checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Index */}
        <section className={`py-4 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'} border-y ${isDarkMode ? 'border-[#1F2A33]' : 'border-[#E2E8F0]'}`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'Leadership', href: '#team' },
                { label: 'Stats', href: '#stats' },
                { label: 'What We Do', href: '#what-we-do' },
                { label: 'Values', href: '#values' },
                { label: 'Start Now', href: '#cta' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    isDarkMode
                      ? 'bg-[#0B0C0E] text-[#C4CCD4] hover:text-[#22D3EE] border border-[#1F2A33]'
                      : 'bg-[#F8FAFC] text-[#0F172A] hover:text-[#2563EB] border border-[#E2E8F0]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F1F5F9]'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
              Meet Our Leadership Team
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <div key={member.id}>
                  <div
                    className={`rounded-3xl p-[1px] ${
                      isDarkMode
                        ? 'bg-linear-to-br from-[#1F2A33] via-[#0F1419] to-[#1E293B]'
                        : 'bg-linear-to-br from-[#DCE7F3] via-white to-[#E2E8F0]'
                    }`}
                  >
                    <div
                      className={`rounded-3xl h-full overflow-hidden flex flex-col ${
                        isDarkMode ? 'bg-[#0F1419]' : 'bg-white'
                      } shadow-xl`}
                    >
                      <div className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="relative">
                            <div
                              className={`rounded-full p-[3px] ${
                                isDarkMode
                                  ? 'bg-linear-to-r from-[#22D3EE] via-[#2DD4BF] to-[#4DBBFF]'
                                  : 'bg-linear-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]'
                              }`}
                            >
                              <div className={`rounded-full p-1 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'} shadow-lg`}>
                                <img
                                  src={member.avatar}
                                  alt={member.name}
                                  loading="lazy"
                                  decoding="async"
                                  className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover object-[50%_20%]"
                                />
                              </div>
                            </div>
                            <span
                              className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold shadow-md ${
                                isDarkMode
                                  ? 'bg-[#0B0C0E] text-[#22D3EE] border border-[#1F2A33]'
                                  : 'bg-white text-[#1D4ED8] border border-[#E2E8F0]'
                              }`}
                            >
                              {member.position}
                            </span>
                          </div>

                          <h3 className={`mt-6 text-xl md:text-2xl font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                            {member.name}
                          </h3>

                          <div
                            className={`mt-4 w-full rounded-xl border-l-4 px-4 py-3 text-left ${
                              isDarkMode
                                ? 'bg-[#0B0C0E] border-[#22D3EE] text-[#C4CCD4]'
                                : 'bg-[#F8FAFC] border-[#3B82F6] text-[#475569]'
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{member.bio}</p>
                          </div>
                        </div>

                        <div
                          className={`mt-5 rounded-xl p-4 ${
                            isDarkMode
                              ? 'bg-[#0B0C0E] border border-[#1F2A33]'
                              : 'bg-white border border-[#E2E8F0]'
                          }`}
                        >
                          <p className={`text-xs uppercase tracking-wide font-semibold ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>
                            Focus Areas
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {member.expertise.slice(0, 3).map((skill, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  isDarkMode
                                    ? 'bg-[#22D3EE]/10 text-[#22D3EE]'
                                    : 'bg-[#E0F2FE] text-[#0284C7]'
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center p-6 rounded-xl transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-[#0B0C0E] hover:shadow-[0_22px_26px_-18px_rgba(148,163,184,0.24)]'
                      : 'bg-white border border-[#E2E8F0] hover:shadow-[0_22px_26px_-18px_rgba(71,85,105,0.16)]'
                  }`}
                >
                  <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="what-we-do" className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F1F5F9]'}`}>
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  What We Do
                </h2>
                <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                  We design tiny home stays across Texas with calm interiors, clear details, and a guest-first approach from booking to checkout.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {['Hill Country', 'Wimberley', 'Dripping Springs', 'Marble Falls', 'Fredericksburg', 'Canyon Lake'].map((region) => (
                    <span
                      key={region}
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDarkMode ? 'bg-[#22D3EE]/10 text-[#22D3EE]' : 'bg-white border border-[#E2E8F0] text-[#0F172A]'
                      }`}
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Curated Spaces', desc: 'Design-forward interiors and calm outdoor settings.' },
                  { title: 'Local Touches', desc: 'Thoughtful details from Texas makers.' },
                  { title: 'Easy Arrival', desc: 'Self check-in and clear, simple guidance.' },
                  { title: 'Transparent Rates', desc: 'No hidden fees or surprise add-ons.' }
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-xl p-5 transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-[#0B0C0E] text-[#C4CCD4] hover:shadow-[0_22px_26px_-18px_rgba(148,163,184,0.22)]'
                        : 'bg-white border border-[#E2E8F0] text-[#475569] hover:shadow-[0_22px_26px_-18px_rgba(71,85,105,0.16)]'
                    }`}
                  >
                    <h3 className={`text-base font-semibold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section id="values" className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl text-center transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-[#0B0C0E] hover:shadow-[0_26px_22px_-20px_rgba(148,163,184,0.2)]'
                      : 'bg-white border border-[#E2E8F0] hover:shadow-[0_26px_22px_-20px_rgba(71,85,105,0.16)]'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'
                  }`}>
                    <div className={`text-3xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                    {value.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="cta"
          className={`py-16 ${
            isDarkMode ? 'bg-linear-to-r from-[#0F1419] to-[#141A1F]' : 'bg-linear-to-r from-[#F8FAFC] to-[#EFF6FF]'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
              Ready for Your Tiny Escape?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
              Book a calm, design-forward stay and slow down in Texas
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/destinations"
                className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                    : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                } transform hover:scale-105`}
              >
                Explore Stays
              </a>
              <a
                href="/contact"
                className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 border-2 ${
                  isDarkMode
                    ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                    : 'border-[#2563EB] text-[#1D4ED8] hover:bg-[#2563EB] hover:text-white'
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
    </PageLayout>
  );
};

export default About;
