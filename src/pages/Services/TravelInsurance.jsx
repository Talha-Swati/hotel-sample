import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import PageLayout from '../../components/layout/PageLayout';
import ThemedPricingCard from '../../components/common/ThemedPricingCard';
import { servicesData } from '../../data/servicesData';

const TravelInsurance = () => {
  const { isDarkMode } = useTheme();
  const insuranceData = servicesData.insurance;
  const [selectedPlan, setSelectedPlan] = useState(insuranceData.plans[1]); // Default to comprehensive

  return (
    <PageLayout
      seo={{
        title: 'Stay Protection | The Tiny Escape',
        description: 'Optional coverage for stay interruptions, trip changes, and personal items while you travel.',
        keywords: 'stay protection, travel coverage, trip interruption, Tiny Escape insurance',
        url: '/services/insurance'
      }}
      className={`transition-colors duration-500 ${
      isDarkMode
        ? 'bg-linear-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]'
        : 'bg-linear-to-b from-white to-[#F8FAFC] text-[#0F172A]'
    }`}
    >

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${insuranceData.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/90 to-cyan-900/90"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="text-6xl mb-4">{insuranceData.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {insuranceData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              {insuranceData.tagline}
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              {insuranceData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Choose Your Coverage
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {insuranceData.plans.map((plan, index) => {
              const coverageFeatures = [
                `Medical: ${plan.coverage.medical}`,
                `Evacuation: ${plan.coverage.evacuation}`,
                `Baggage: ${plan.coverage.baggage}`,
                `Cancellation: ${plan.coverage.cancellation}`
              ];

              return (
                <ThemedPricingCard
                  key={plan.id}
                  title={plan.name}
                  price={plan.price}
                  priceNote={plan.duration}
                  features={[...coverageFeatures, ...plan.features]}
                  isDarkMode={isDarkMode}
                  themeKey="insurancePlan"
                  themeIndex={index}
                  highlightLabel={plan.recommended ? 'Recommended' : undefined}
                  ctaLabel={selectedPlan.id === plan.id ? 'Selected' : 'Select Plan'}
                  onCtaClick={() => setSelectedPlan(plan)}
                  isSelected={selectedPlan.id === plan.id}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* What's Covered */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                What's Covered
              </h2>
              <ul className="space-y-3">
                {insuranceData.covered.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-teal-600 text-xl mt-1">✓</span>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-[#475569]'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                What's Not Covered
              </h2>
              <ul className="space-y-3">
                {insuranceData.notCovered.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-xl mt-1">✗</span>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-[#475569]'}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Claim Process */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Easy Claim Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {insuranceData.claimProcess.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-600 flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-[#64748B]'}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-teal-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            24/7 Emergency Assistance
          </h2>
          <div className={`p-8 rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'} mb-1`}>
                  Hotline
                </div>
                <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {insuranceData.emergencyContacts.hotline}
                </div>
              </div>
              <div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'} mb-1`}>
                  Email
                </div>
                <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {insuranceData.emergencyContacts.email}
                </div>
              </div>
              <div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-[#64748B]'} mb-1`}>
                  WhatsApp
                </div>
                <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                  {insuranceData.emergencyContacts.whatsapp}
                </div>
              </div>
            </div>
            <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-600' : 'bg-teal-100'}`}>
              <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
                Available: {insuranceData.emergencyContacts.available}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
            Get Covered Today
          </h2>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-[#64748B]'}`}>
            Don't take risks - secure comprehensive coverage for your journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/custom-stay"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Insurance Quote
            </Link>
            <Link
              to="/contact"
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#E2E8F0]'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

    </PageLayout>
  );
};

export default TravelInsurance;
