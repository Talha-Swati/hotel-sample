import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import UnderDevelopment from './pages/UnderDevelopment';

const Home = lazy(() => import('./pages/Home'));
const Tours = lazy(() => import('./pages/Tours'));
const Destinations = lazy(() => import('./pages/Destinations'));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Reviews = lazy(() => import('./pages/Reviews'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const SpecialOffers = lazy(() => import('./pages/SpecialOffers'));
const BookNow = lazy(() => import('./pages/BookNow'));
const CustomStayRequest = lazy(() => import('./pages/CustomStayRequest'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const Services = lazy(() => import('./pages/Services/Services'));
const HotelBooking = lazy(() => import('./pages/Services/HotelBooking'));
const TransportServices = lazy(() => import('./pages/Services/TransportServices'));
const TravelInsurance = lazy(() => import('./pages/Services/TravelInsurance'));
const PhotographyServices = lazy(() => import('./pages/Services/PhotographyServices'));
const AdventureTours = lazy(() => import('./pages/Trip/AdventureTours'));
const FamilyTours = lazy(() => import('./pages/Trip/FamilyTours'));
const RomanticStays = lazy(() => import('./pages/Trip/RomanticStays'));
const CorporateTours = lazy(() => import('./pages/Trip/CorporateTours'));
const BudgetTours = lazy(() => import('./pages/Trip/BudgetTours'));
const App = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destination/:slug" element={<DestinationDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/offers" element={<SpecialOffers />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="/custom-stay" element={<CustomStayRequest />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/hotels" element={<HotelBooking />} />
              <Route path="/services/transport" element={<TransportServices />} />
              <Route path="/services/insurance" element={<TravelInsurance />} />
              <Route path="/services/photography" element={<PhotographyServices />} />
              <Route path="/trip/adventure" element={<AdventureTours />} />
              <Route path="/trip/family" element={<FamilyTours />} />
              <Route path="/trip/romantic" element={<RomanticStays />} />
              <Route path="/trip/corporate" element={<CorporateTours />} />
              <Route path="/trip/budget" element={<BudgetTours />} />
              <Route path="/under-development" element={<UnderDevelopment />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;

