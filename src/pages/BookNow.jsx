import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import { contactInfo } from '../data/contactData';
import { getWhatsAppLink } from '../utils/helpers';
import { 
  FaCalendarAlt,
  FaUsers, 
  FaCheckCircle,
  FaLock,
  FaInfoCircle,
  FaWhatsapp
} from 'react-icons/fa';

const BookNow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const phoneContact = contactInfo.find((item) => item.iconKey === 'phone');
  const whatsappLink = getWhatsAppLink(phoneContact?.details);

  // Get stay data from navigation state or default
  const packageData = location.state?.packageData || {
    title: 'Custom Stay Request',
    price: 0,
    duration: 'Flexible dates',
    currency: 'USD'
  };

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Guest Information
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    country: '',
    nationality: '',

    // Stay Details
    adults: '1',
    children: '0',
    checkIn: '',
    checkOut: '',
    pets: 'no',
    specialRequests: '',

    // Stay Preferences
    unitType: 'studio',
    view: 'hill',
    addOns: [],

    // Confirmation
    agreeToTerms: false
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const toggleAddOn = (value) => {
    setBookingData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(value)
        ? prev.addOns.filter(item => item !== value)
        : [...prev.addOns, value]
    }));
  };

  const getNights = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0;
    const start = new Date(bookingData.checkIn);
    const end = new Date(bookingData.checkOut);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would process the request
    console.log('Stay request submitted:', bookingData);
    setBookingConfirmed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const countryCodes = [
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+971', country: 'UAE' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+82', country: 'South Korea' },
    { code: '+65', country: 'Singapore' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+52', country: 'Mexico' }
  ];

  const progressSteps = [
    { number: 1, title: 'Guest Info', icon: <FaUsers /> },
    { number: 2, title: 'Stay Details', icon: <FaCalendarAlt /> },
    { number: 3, title: 'Preferences', icon: <FaCheckCircle /> },
    { number: 4, title: 'Review', icon: <FaInfoCircle /> }
  ];

  if (bookingConfirmed) {
    return (
      <PageLayout
        seo={{
          title: 'Request Received - Tiny Escape',
          description: 'Your stay request has been received',
          url: '/book-now'
        }}
      >
        <div className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-linear-to-b from-white to-[#F8FAFB] text-[#0F172A]'
        }`}>
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <FaCheckCircle className="text-8xl text-green-500 mx-auto mb-6" />
                <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  Request Received!
                </h1>
                <p className={`text-xl mb-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                  Thank you for choosing Tiny Escape
                </p>
              </div>

              <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white border border-[#E2E8F0]'} ${
                isDarkMode
                  ? 'shadow-[0_10px_24px_-18px_rgba(0,0,0,0.7)]'
                  : 'shadow-[0_10px_24px_-18px_rgba(15,23,42,0.18)]'
              } mb-8`}>
                <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                  What Happens Next
                </h2>
                <div className={`text-left space-y-4 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <p>We review availability and match your dates with the best stay</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <p>You will receive a reply within 24 hours with options and pricing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <p>We confirm your stay once you approve the final details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                    <p>Check-in instructions are sent 48 hours before arrival</p>
                  </div>
                </div>

                <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'} `}>
                  <p className={`font-semibold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                    Need help right away?
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => navigate('/')}
                  className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                      : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                  } transform hover:scale-105`}
                >
                  Back to Home
                </button>
                <button
                  onClick={() => navigate('/tours')}
                  className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 border-2 ${
                    isDarkMode
                      ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                      : 'border-[#2563EB] text-[#1D4ED8] hover:bg-[#2563EB] hover:text-white'
                  }`}
                >
                  Explore Stays
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      seo={{
        title: 'Request Availability | The Tiny Escape',
        description: 'Request dates for Tiny Escape stays in Texas. Quick response, transparent options, and calm, private lodging.',
        keywords: 'Tiny Escape request, tiny home availability, Texas cabin stay, resort lodging inquiry',
        url: '/book-now'
      }}
    >

        {/* Hero */}
        <section className={`relative py-12 ${isDarkMode ? 'bg-linear-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-linear-to-br from-white via-[#EBF8FF] to-white'}`}>
          <div className="container mx-auto px-4">
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${
              isDarkMode ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA]'
            } bg-clip-text text-transparent`}>
              Request Availability
            </h1>
            <p className={`text-center ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
              {packageData.title}
            </p>
          </div>
        </section>

        {/* Progress Bar */}
        <div className={`py-4 backdrop-blur-lg border-b ${isDarkMode ? 'bg-[#0B0C0E]/95 border-[#1E242B]' : 'bg-white/95 border-[#E2E8F0]'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              {progressSteps.map((item, idx) => (
                <div key={item.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= item.number
                        ? isDarkMode
                          ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E]'
                          : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white'
                        : isDarkMode
                        ? 'bg-[#1E242B] text-[#8B949E]'
                        : 'bg-[#F8FAFC] text-[#94A3B8]'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`mt-2 text-xs hidden md:block ${
                      step >= item.number
                        ? isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                      : isDarkMode ? 'text-[#8B949E]' : 'text-[#94A3B8]'
                    }`}>
                      {item.title}
                    </span>
                  </div>
                  {idx < progressSteps.length - 1 && (
                    <div className={`h-1 flex-1 mx-2 ${
                      step > item.number
                        ? isDarkMode ? 'bg-[#22D3EE]' : 'bg-[#3B82F6]'
                      : isDarkMode ? 'bg-[#1E242B]' : 'bg-[#E2E8F0]'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <form onSubmit={step === 4 ? handleSubmit : handleNextStep}>
                  <div className={`p-8 rounded-2xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white border border-[#E2E8F0]'} ${
                    isDarkMode
                      ? 'shadow-[0_10px_24px_-18px_rgba(0,0,0,0.7)]'
                      : 'shadow-[0_10px_24px_-18px_rgba(15,23,42,0.18)]'
                  }`}>
                    
                    {/* Step 1: Guest Information */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                          Guest Information
                        </h2>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={bookingData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="John Smith"
                            className={`w-full px-4 py-3 rounded-lg border transition-all ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8]'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={bookingData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="john@example.com"
                              className={`w-full px-4 py-3 rounded-lg border transition-all ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                  : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder-[#94A3B8]'
                              } focus:outline-none focus:ring-2 focus:ring-opacity-20`}
                            />
                          </div>

                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                              Phone Number *
                            </label>
                            <div className="flex gap-2">
                              <select
                                name="countryCode"
                                value={bookingData.countryCode}
                                onChange={handleInputChange}
                                className={`px-3 py-3 rounded-lg border ${
                                  isDarkMode
                                    ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                    : 'bg-white border-[#CBD5E1]'
                                } focus:outline-none`}
                              >
                                {countryCodes.map((item) => (
                                  <option key={item.code} value={item.code}>
                                    {item.code}
                                  </option>
                                ))}
                              </select>
                              <input
                                type="tel"
                                name="phone"
                                value={bookingData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="1234567890"
                                className={`flex-1 px-4 py-3 rounded-lg border ${
                                  isDarkMode
                                    ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                    : 'bg-white border-[#CBD5E1] placeholder-[#94A3B8]'
                                } focus:outline-none focus:ring-2`}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                              Country of Residence *
                            </label>
                            <input
                              type="text"
                              name="country"
                              value={bookingData.country}
                              onChange={handleInputChange}
                              required
                              placeholder="United States"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                  : 'bg-white border-[#CBD5E1] placeholder-[#94A3B8]'
                              } focus:outline-none focus:ring-2`}
                            />
                          </div>

                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                              Nationality *
                            </label>
                            <input
                              type="text"
                              name="nationality"
                              value={bookingData.nationality}
                              onChange={handleInputChange}
                              required
                              placeholder="American"
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                  : 'bg-white border-[#CBD5E1] placeholder-[#94A3B8]'
                              } focus:outline-none focus:ring-2`}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Stay Details */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                          Stay Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                              Number of Adults *
                            </label>
                            <select
                              name="adults"
                              value={bookingData.adults}
                              onChange={handleInputChange}
                              required
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                  : 'bg-white border-[#CBD5E1]'
                              } focus:outline-none focus:ring-2`}
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                              Number of Children (Under 12)
                            </label>
                            <select
                              name="children"
                              value={bookingData.children}
                              onChange={handleInputChange}
                              className={`w-full px-4 py-3 rounded-lg border ${
                                isDarkMode
                                  ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                  : 'bg-white border-[#CBD5E1]'
                              } focus:outline-none focus:ring-2`}
                            >
                              {[0, 1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>{num}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Check-in Date *
                          </label>
                          <input
                            type="date"
                            name="checkIn"
                            value={bookingData.checkIn}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                : 'bg-white border-[#CBD5E1]'
                            } focus:outline-none focus:ring-2`}
                          />
                        </div>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Check-out Date *
                          </label>
                          <input
                            type="date"
                            name="checkOut"
                            value={bookingData.checkOut}
                            onChange={handleInputChange}
                            required
                            min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                : 'bg-white border-[#CBD5E1]'
                            } focus:outline-none focus:ring-2`}
                          />
                        </div>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Bringing Pets?
                          </label>
                          <select
                            name="pets"
                            value={bookingData.pets}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE]'
                                : 'bg-white border-[#CBD5E1]'
                            } focus:outline-none focus:ring-2`}
                          >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>

                        <div>
                          <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Special Requests or Notes
                          </label>
                          <textarea
                            name="specialRequests"
                            value={bookingData.specialRequests}
                            onChange={handleInputChange}
                            rows="4"
                            placeholder="Accessibility, celebrations, arrival timing, or anything else to know..."
                            className={`w-full px-4 py-3 rounded-lg border ${
                              isDarkMode
                                ? 'bg-[#0F1419] border-[#1E242B] text-[#E0E7EE] placeholder-[#8B949E]'
                                : 'bg-white border-[#CBD5E1] placeholder-[#94A3B8]'
                            } focus:outline-none focus:ring-2`}
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Stay Preferences */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                          Stay Preferences
                        </h2>

                        <div>
                          <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Unit Type
                          </label>
                          <div className="grid md:grid-cols-4 gap-4">
                            {[
                              { value: 'studio', label: 'Studio', note: 'Compact and cozy' },
                              { value: 'loft', label: 'Loft', note: 'Extra sleeping nook' },
                              { value: 'family', label: 'Family', note: 'Sleeps 4-6' },
                              { value: 'premium', label: 'Premium', note: 'Top-tier finishes' }
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  bookingData.unitType === option.value
                                    ? isDarkMode
                                      ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                      : 'border-[#2563EB] bg-blue-50'
                                    : isDarkMode
                                    ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                    : 'border-[#E2E8F0] hover:border-[#93C5FD]'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="unitType"
                                  value={option.value}
                                  checked={bookingData.unitType === option.value}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className={`font-bold mb-1 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                                    {option.label}
                                  </div>
                                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                                    {option.note}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            View Preference
                          </label>
                          <div className="grid md:grid-cols-4 gap-4">
                            {[
                              { value: 'hill', label: 'Hill Country' },
                              { value: 'river', label: 'Creekside' },
                              { value: 'meadow', label: 'Meadow' },
                              { value: 'forest', label: 'Woodland' }
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  bookingData.view === option.value
                                    ? isDarkMode
                                      ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                      : 'border-[#2563EB] bg-blue-50'
                                    : isDarkMode
                                    ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                    : 'border-[#E2E8F0] hover:border-[#93C5FD]'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="view"
                                  value={option.value}
                                  checked={bookingData.view === option.value}
                                  onChange={handleInputChange}
                                  className="sr-only"
                                />
                                <div className="text-center">
                                  <div className={`font-bold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                                    {option.label}
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className={`block mb-3 font-semibold ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#374151]'}`}>
                            Add-ons
                          </label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              { value: 'firewood', label: 'Firewood Bundle' },
                              { value: 'late-checkout', label: 'Late Checkout' },
                              { value: 'welcome-basket', label: 'Welcome Basket' },
                              { value: 'extra-linens', label: 'Extra Linens' }
                            ].map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                                  bookingData.addOns.includes(option.value)
                                    ? isDarkMode
                                      ? 'border-[#22D3EE] bg-[#22D3EE]/10'
                                      : 'border-[#2563EB] bg-blue-50'
                                    : isDarkMode
                                    ? 'border-[#1E242B] hover:border-[#22D3EE]/50'
                                    : 'border-[#E2E8F0] hover:border-[#93C5FD]'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={bookingData.addOns.includes(option.value)}
                                  onChange={() => toggleAddOn(option.value)}
                                  className="mr-3"
                                />
                                <span className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                                  {option.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                          Review and Submit
                        </h2>

                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-[#BFDBFE]'} `}>
                          <div className="flex items-start gap-3">
                            <FaInfoCircle className="text-blue-500 mt-1" />
                            <div className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                              <p className="font-semibold mb-1">Request Review:</p>
                              <p>We will confirm availability and send final details before any payment is required.</p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'} `}>
                            <div className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Dates</div>
                            <div className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                              {bookingData.checkIn || 'TBD'} to {bookingData.checkOut || 'TBD'}
                            </div>
                          </div>
                          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'} `}>
                            <div className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Guests</div>
                            <div className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                              {parseInt(bookingData.adults) + parseInt(bookingData.children)} guests
                            </div>
                          </div>
                          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'} `}>
                            <div className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>Unit</div>
                            <div className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                              {bookingData.unitType}
                            </div>
                          </div>
                          <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-[#0F1419]' : 'bg-[#F8FAFC]'} `}>
                            <div className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-[#8B949E]' : 'text-[#64748B]'}`}>View</div>
                            <div className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                              {bookingData.view}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={bookingData.agreeToTerms}
                            onChange={handleInputChange}
                            required
                            className="mt-1 w-5 h-5"
                          />
                          <label className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                            I agree to the <a href="/terms-conditions" className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}>Terms & Conditions</a> and <a href="/privacy-policy" className={isDarkMode ? 'text-[#22D3EE]' : 'text-[#2563EB]'}>Privacy Policy</a>
                          </label>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className={`flex gap-4 mt-8 pt-6 border-t ${isDarkMode ? 'border-[#1E242B]' : 'border-[#E2E8F0]'}`}>
                      {step > 1 && (
                        <button
                          type="button"
                          onClick={handlePreviousStep}
                          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                            isDarkMode
                              ? 'bg-[#1E242B] text-[#C4CCD4] hover:bg-[#2A3038]'
                              : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#E2E8F0]'
                          }`}
                        >
                          Previous
                        </button>
                      )}
                      <button
                        type="submit"
                        className={`flex-1 px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                          isDarkMode
                            ? 'bg-linear-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                            : 'bg-linear-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                        } transform hover:scale-105`}
                      >
                        {step === 4 ? 'Submit Request' : 'Continue'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Summary Sidebar */}
              <div>
                <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white border border-[#E2E8F0]'} ${
                  isDarkMode
                    ? 'shadow-[0_10px_24px_-18px_rgba(0,0,0,0.7)]'
                    : 'shadow-[0_10px_24px_-18px_rgba(15,23,42,0.18)]'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                    Request Summary
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                      Stay
                    </div>
                    <div className={`font-semibold ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}`}>
                      {packageData.title}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                      Dates: {bookingData.checkIn || 'TBD'} to {bookingData.checkOut || 'TBD'}
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#475569]'}`}>
                      Nights: {getNights() || 'TBD'}
                    </div>
                  </div>

                  <div className={`border-t pt-4 space-y-2 ${isDarkMode ? 'border-[#1E242B]' : 'border-[#E2E8F0]'} `}>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}>Guests:</span>
                      <span className={isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}>
                        {parseInt(bookingData.adults) + parseInt(bookingData.children)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}>Unit:</span>
                      <span className={isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}>
                        {bookingData.unitType}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}>View:</span>
                      <span className={isDarkMode ? 'text-[#E0E7EE]' : 'text-[#0F172A]'}>
                        {bookingData.view}
                      </span>
                    </div>
                  </div>

                  <div className={`border-t mt-4 pt-4 ${isDarkMode ? 'border-[#1E242B]' : 'border-[#E2E8F0]'} `}>
                    <div className={`text-sm ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                      We will confirm availability and pricing after review.
                    </div>
                  </div>

                  <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-green-500/10' : 'bg-green-50 border border-green-200'} `}>
                    <div className="flex items-center gap-2 text-green-500 font-semibold mb-2">
                      <FaLock />
                      <span>Secure Request</span>
                    </div>
                    <p className={`text-xs ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#475569]'}`}>
                      Your information is protected and never shared
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    </PageLayout>
  );
};

export default BookNow;
