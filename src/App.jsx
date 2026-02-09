import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import Tours from './pages/Tours';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import SpecialOffers from './pages/SpecialOffers';
import BookNow from './pages/BookNow';
import CustomTourBuilder from './pages/CustomTourBuilder';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Services from './pages/Services/Services';
import HotelBooking from './pages/Services/HotelBooking';
import TransportServices from './pages/Services/TransportServices';
import TourGuides from './pages/Services/TourGuides';
import VisaAssistance from './pages/Services/VisaAssistance';
import TravelInsurance from './pages/Services/TravelInsurance';
import PhotographyServices from './pages/Services/PhotographyServices';
import AdventureTours from './pages/Trip/AdventureTours';
import FamilyTours from './pages/Trip/FamilyTours';
import HoneymoonTours from './pages/Trip/HoneymoonTours';
import CorporateTours from './pages/Trip/CorporateTours';
import BudgetTours from './pages/Trip/BudgetTours';

const App = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter>
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
            <Route path="/custom-tour" element={<CustomTourBuilder />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/hotels" element={<HotelBooking />} />
            <Route path="/services/transport" element={<TransportServices />} />
            <Route path="/services/guides" element={<TourGuides />} />
            <Route path="/services/visa" element={<VisaAssistance />} />
            <Route path="/services/insurance" element={<TravelInsurance />} />
            <Route path="/services/photography" element={<PhotographyServices />} />
            <Route path="/trip/adventure" element={<AdventureTours />} />
            <Route path="/trip/family" element={<FamilyTours />} />
            <Route path="/trip/honeymoon" element={<HoneymoonTours />} />
            <Route path="/trip/corporate" element={<CorporateTours />} />
            <Route path="/trip/budget" element={<BudgetTours />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;

