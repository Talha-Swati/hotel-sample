import { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import heroAllHomes from '../assets/homes/all-homes/all-homes-1.jpg';
import { useTheme } from '../context/ThemeContext';
import PageLayout from '../components/layout/PageLayout';
import { getAllStays } from '../data/staysData';
import { useHousesData } from '../hooks/useHousesData';
import { checkBookingAvailability } from '../services/bookings';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

/* ── helpers ── */
const formatYMD = (date) => {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};

const formatDisplay = (date) => {
  if (!date) return '';
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const GUEST_OPTIONS = [1, 2, 3, 4, 5];

const Tours = () => {
  const { isDarkMode } = useTheme();
  const { houses, isLoading, isFallback } = useHousesData({ fallbackData: getAllStays() });
  const allHouses = useMemo(() => houses.slice(0, 4), [houses]);

  /* ── search state ── */
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [openPicker, setOpenPicker] = useState(null); // 'checkin' | 'checkout' | 'guests' | null
  const [searched, setSearched] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [availabilityMap, setAvailabilityMap] = useState({}); // slug → true/false/null

  /* ── availability check ── */
  const handleSearch = useCallback(async () => {
    if (!checkIn || !checkOut) {
      setSearchError('Please select both check-in and check-out dates.');
      return;
    }
    if (checkOut <= checkIn) {
      setSearchError('Check-out must be after check-in.');
      return;
    }
    setSearchError('');
    setSearching(true);
    setSearched(false);

    try {
      const results = await Promise.all(
        allHouses.map(async (stay) => {
          try {
            const res = await checkBookingAvailability({
              houseSlug: stay.slug,
              checkIn: formatYMD(checkIn),
              checkOut: formatYMD(checkOut),
            });
            return [stay.slug, res?.available !== false];
          } catch {
            return [stay.slug, null]; // unknown — show it
          }
        })
      );
      setAvailabilityMap(Object.fromEntries(results));
      setSearched(true);
    } catch {
      setSearchError('Something went wrong. Please try again.');
    } finally {
      setSearching(false);
    }
  }, [checkIn, checkOut, allHouses]);

  const handleClear = () => {
    setCheckIn(null);
    setCheckOut(null);
    setGuests(1);
    setSearched(false);
    setAvailabilityMap({});
    setSearchError('');
    setOpenPicker(null);
  };

  /* ── filtered list ── */
  const visibleHouses = useMemo(() => {
    if (!searched) return allHouses;
    return allHouses.filter((h) => availabilityMap[h.slug] !== false);
  }, [searched, allHouses, availabilityMap]);

  const unavailableCount = useMemo(() => {
    if (!searched) return 0;
    return allHouses.filter((h) => availabilityMap[h.slug] === false).length;
  }, [searched, allHouses, availabilityMap]);

  /* ── date picker helpers ── */
  const disabledCheckIn = { before: new Date() };
  const disabledCheckOut = checkIn ? { before: new Date(checkIn.getTime() + 86400000) } : { before: new Date() };

  return (
    <PageLayout
      seo={{
        title: 'Our Stays | The Tiny Escape',
        description: 'Browse and book our tiny homes. Check availability for your dates and find the perfect cabin in Bruceville-Eddy, Texas.',
        keywords: 'The Tiny Escape, tiny home rentals, cabin stays, book tiny home, Texas getaway',
        url: '/tours',
      }}
    >
      {/* ── Page Hero + Search Bar (one unified section) ── */}
      <section className="relative pt-24 md:pt-28 pb-12">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroAllHomes})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isDarkMode ? 'rgba(10,8,6,0.75)' : 'rgba(15,28,20,0.65)',
          }}
        />
        {/* Content + Search Bar together */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.22em] font-bold mb-3 text-[#A8E6A3]">
              Bruceville-Eddy, Texas
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Find Your Stay
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto">
              Select your dates to check availability for your perfect tiny escape.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 rounded-2xl overflow-visible border shadow-2xl
            sm:rounded-full
            "
            style={{
              background: isDarkMode ? 'rgba(26,20,15,0.97)' : 'rgba(255,255,255,0.97)',
              border: isDarkMode ? '1px solid rgba(201,163,106,0.35)' : '1.5px solid rgba(200,223,200,0.9)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Check-In */}
            <div className="relative flex-1">
              <button
                onClick={() => setOpenPicker(openPicker === 'checkin' ? null : 'checkin')}
                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors rounded-full sm:rounded-none sm:rounded-l-full ${
                  isDarkMode ? 'hover:bg-white/5' : 'hover:bg-[#F3F7F2]'
                }`}
              >
                <svg className={`h-5 w-5 flex-shrink-0 ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.8"/>
                  <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`}>Check-In</p>
                  <p className={`text-sm font-semibold ${checkIn ? (isDarkMode ? 'text-white' : 'text-[#1F2A1F]') : (isDarkMode ? 'text-[#6B6055]' : 'text-[#9CAE9C]')}`}>
                    {checkIn ? formatDisplay(checkIn) : 'Add date'}
                  </p>
                </div>
              </button>
              {openPicker === 'checkin' && (
                <div className={`absolute top-full left-0 mt-2 z-50 rounded-2xl shadow-2xl border p-2 ${
                  isDarkMode ? 'bg-[#1A140F] border-[rgba(201,163,106,0.3)]' : 'bg-white border-[#DDE8DD]'
                }`}>
                  <DayPicker
                    mode="single"
                    selected={checkIn}
                    onSelect={(d) => { setCheckIn(d); setOpenPicker('checkout'); }}
                    disabled={disabledCheckIn}
                    fromMonth={new Date()}
                  />
                </div>
              )}
            </div>

            {/* Divider */}
            <div className={`hidden sm:block h-8 w-px ${isDarkMode ? 'bg-[rgba(201,163,106,0.2)]' : 'bg-[#DDE8DD]'}`} />

            {/* Check-Out */}
            <div className="relative flex-1">
              <button
                onClick={() => setOpenPicker(openPicker === 'checkout' ? null : 'checkout')}
                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors ${
                  isDarkMode ? 'hover:bg-white/5' : 'hover:bg-[#F3F7F2]'
                }`}
              >
                <svg className={`h-5 w-5 flex-shrink-0 ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.8"/>
                  <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`}>Check-Out</p>
                  <p className={`text-sm font-semibold ${checkOut ? (isDarkMode ? 'text-white' : 'text-[#1F2A1F]') : (isDarkMode ? 'text-[#6B6055]' : 'text-[#9CAE9C]')}`}>
                    {checkOut ? formatDisplay(checkOut) : 'Add date'}
                  </p>
                </div>
              </button>
              {openPicker === 'checkout' && (
                <div className={`absolute top-full left-0 mt-2 z-50 rounded-2xl shadow-2xl border p-2 ${
                  isDarkMode ? 'bg-[#1A140F] border-[rgba(201,163,106,0.3)]' : 'bg-white border-[#DDE8DD]'
                }`}>
                  <DayPicker
                    mode="single"
                    selected={checkOut}
                    onSelect={(d) => { setCheckOut(d); setOpenPicker(null); }}
                    disabled={disabledCheckOut}
                    fromMonth={checkIn || new Date()}
                  />
                </div>
              )}
            </div>

            {/* Divider */}
            <div className={`hidden sm:block h-8 w-px ${isDarkMode ? 'bg-[rgba(201,163,106,0.2)]' : 'bg-[#DDE8DD]'}`} />

            {/* Guests */}
            <div className="relative">
              <button
                onClick={() => setOpenPicker(openPicker === 'guests' ? null : 'guests')}
                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors ${
                  isDarkMode ? 'hover:bg-white/5' : 'hover:bg-[#F3F7F2]'
                }`}
              >
                <svg className={`h-5 w-5 flex-shrink-0 ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.8" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="1.8"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
                <div>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`}>Guests</p>
                  <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-[#1F2A1F]'}`}>{guests} {guests === 1 ? 'guest' : 'guests'}</p>
                </div>
              </button>
              {openPicker === 'guests' && (
                <div className={`absolute top-full right-0 mt-2 z-50 rounded-2xl shadow-2xl border overflow-hidden w-40 ${
                  isDarkMode ? 'bg-[#1A140F] border-[rgba(201,163,106,0.3)]' : 'bg-white border-[#DDE8DD]'
                }`}>
                  {GUEST_OPTIONS.map((n) => (
                    <button
                      key={n}
                      onClick={() => { setGuests(n); setOpenPicker(null); }}
                      className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                        guests === n
                          ? isDarkMode ? 'bg-[#2F5D3A] text-white' : 'bg-[#EAF3EA] text-[#1F3A2A] font-bold'
                          : isDarkMode ? 'text-[#D6C5AE] hover:bg-white/5' : 'text-[#1F2A1F] hover:bg-[#F3F7F2]'
                      }`}
                    >
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="px-2 py-2 sm:py-1.5">
              <button
                onClick={handleSearch}
                disabled={searching}
                className="flex items-center gap-2 rounded-full bg-[#1F3A2A] hover:bg-[#2F5D3A] text-white font-bold px-6 py-3 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg whitespace-nowrap"
              >
                {searching ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70"/>
                    </svg>
                    Searching…
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                      <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Search
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Error + Clear */}
          {searchError && (
            <p className="mt-3 text-center text-sm text-red-300 font-medium">{searchError}</p>
          )}
          {searched && (
            <div className="mt-3 flex items-center justify-between px-1">
              <p className="text-sm text-white/70">
                {visibleHouses.length === 0
                  ? 'No homes available for those dates.'
                  : `${visibleHouses.length} home${visibleHouses.length !== 1 ? 's' : ''} available${unavailableCount > 0 ? ` · ${unavailableCount} unavailable (hidden)` : ''}`}
              </p>
              <button onClick={handleClear} className="text-sm font-semibold text-[#A8E6A3] underline hover:text-white transition">
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Close pickers when clicking outside */}
        {openPicker && (
          <div className="fixed inset-0 z-30" onClick={() => setOpenPicker(null)} />
        )}
      </section>

      {/* ── Stays Grid ── */}
      <section className={`relative z-0 py-12 md:py-16 transition-colors duration-500 ${isDarkMode ? 'bg-[#0F0D0A]' : 'bg-[#F5F9F3]'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {isFallback && (
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-700 text-sm font-medium">
              Live availability API is unavailable. Showing all homes — dates may not reflect real bookings.
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-96 rounded-3xl animate-pulse ${isDarkMode ? 'bg-[#1A140F]' : 'bg-[#E3EFE3]'}`} />
              ))}
            </div>
          ) : visibleHouses.length === 0 ? (
            /* No results */
            <div className="text-center py-20">
              <svg className={`mx-auto h-16 w-16 mb-4 ${isDarkMode ? 'text-[#3A2E25]' : 'text-[#C8DFC8]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                No homes available for those dates
              </h3>
              <p className={`text-sm mb-6 ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}`}>
                Try different dates or contact us — we may have options not listed here.
              </p>
              <div className="flex gap-3 justify-center">
                <button onClick={handleClear} className="rounded-xl bg-[#1F3A2A] text-white px-6 py-2.5 text-sm font-bold hover:bg-[#2F5D3A] transition">
                  Try Different Dates
                </button>
                <Link to="/contact" className={`rounded-xl border-2 px-6 py-2.5 text-sm font-bold transition ${isDarkMode ? 'border-[#C9A36A] text-[#C9A36A]' : 'border-[#1F3A2A] text-[#1F3A2A]'}`}>
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleHouses.map((stay) => {
                const isUnknown = searched && availabilityMap[stay.slug] === null;

                return (
                  <Link
                    key={stay.slug}
                    to={`/stay/${stay.slug}${checkIn && checkOut ? `?checkIn=${formatYMD(checkIn)}&checkOut=${formatYMD(checkOut)}&guests=${guests}` : ''}`}
                    className={`group flex flex-col overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)] ${
                      isDarkMode
                        ? 'bg-[#16120F] border-[rgba(201,163,106,0.2)] hover:border-[rgba(201,163,106,0.5)]'
                        : 'bg-white border-[#DDE8DD] hover:border-[#8FBA8F] shadow-md'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={stay.heroImage}
                        alt={stay.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* Availability badge */}
                      {searched && (
                        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                          isUnknown
                            ? 'bg-yellow-500/90 text-black'
                            : 'bg-[#2F5D3A] text-white'
                        }`}>
                          {isUnknown ? '● Check dates' : '✓ Available'}
                        </div>
                      )}

                      {/* Category pill */}
                      <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                        isDarkMode ? 'bg-black/50 text-[#C9A36A]' : 'bg-white/80 text-[#1F3A2A]'
                      }`}>
                        {stay.category || 'Tiny Home'}
                      </div>

                      {/* Rating overlaid on image bottom */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                        <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <svg className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="text-white text-xs font-bold">{stay.rating || '4.9'}</span>
                          <span className="text-white/70 text-xs">({stay.reviews || '0'} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3
                            className={`text-2xl font-bold mb-1 leading-tight ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {stay.name}
                          </h3>
                          <p className={`text-sm flex items-center gap-1 ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#6B7C6B]'}`}>
                            <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            {stay.location}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div className={`text-2xl font-black ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F3A2A]'}`}>
                            ${stay.pricing?.standard?.price || '—'}
                          </div>
                          <div className={`text-xs ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#6B7C6B]'}`}>per night</div>
                        </div>
                      </div>

                      {/* Quick stats row */}
                      <div className={`flex items-center gap-4 py-3 mb-4 border-y text-sm ${isDarkMode ? 'border-[rgba(255,255,255,0.07)] text-[#A79C8C]' : 'border-[#EEF4EE] text-[#4B5F4B]'}`}>
                        <span className="flex items-center gap-1.5">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                          Sleeps {stay.sleeps}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                          {stay.bedrooms} bed{stay.bedrooms !== 1 ? 's' : ''}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2"/></svg>
                          {stay.sizeSqFt || '—'} sq ft
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-5 flex-1">
                        {(stay.highlights || []).slice(0, 3).map((h, i) => (
                          <li key={i} className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-[#C0B8AE]' : 'text-[#334155]'}`}>
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-[#1A3A1A]' : 'bg-[#EAF3EA]'}`}>
                              <svg className={`h-3 w-3 ${isDarkMode ? 'text-[#6BAF7A]' : 'text-[#2F5D3A]'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                              </svg>
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div className={`rounded-2xl py-3.5 px-6 text-center font-bold text-sm transition-all duration-300 group-hover:shadow-lg ${
                        isDarkMode
                          ? 'bg-[#1F3A2A] text-white group-hover:bg-[#2F5D3A]'
                          : 'bg-[#1F3A2A] text-white group-hover:bg-[#2F5D3A]'
                      }`}>
                        View This Stay →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={`py-14 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-[#120F0C]' : 'bg-[#EAF3EA]'}`}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-10 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Stay With Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '★', title: 'Local Hosts', desc: 'Warm, responsive support always available' },
              { icon: '✓', title: 'No Hidden Fees', desc: 'Transparent, honest pricing on every stay' },
              { icon: '◎', title: 'Private Stays', desc: 'Quiet, low-density — your own space' },
              { icon: '⟳', title: 'Easy Booking', desc: 'Simple request process, fast confirmation' },
            ].map((item) => (
              <div
                key={item.title}
                className={`p-5 rounded-2xl border transition-all ${
                  isDarkMode
                    ? 'bg-[#16120F] border-[rgba(201,163,106,0.15)]'
                    : 'bg-white border-[#DDE8DD]'
                }`}
              >
                <div className={`text-2xl mb-2 ${isDarkMode ? 'text-[#C9A36A]' : 'text-[#2F5D3A]'}`}>{item.icon}</div>
                <h3 className={`text-sm font-bold mb-1 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}>{item.title}</h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={`py-14 transition-colors duration-500 ${isDarkMode ? 'bg-[#0F0D0A]' : 'bg-[#F3F7F2]'}`}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-3 ${isDarkMode ? 'text-[#F2EEE7]' : 'text-[#1F2A1F]'}`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ready to Book?
          </h2>
          <p className={`text-sm sm:text-base mb-6 ${isDarkMode ? 'text-[#A79C8C]' : 'text-[#4B5F4B]'}`}>
            Pick your dates above or contact us directly — we confirm quickly.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/contact"
              className={`rounded-xl border-2 px-6 py-3 text-sm font-bold transition-all hover:scale-105 ${
                isDarkMode
                  ? 'border-[#C9A36A] text-[#C9A36A] hover:bg-[rgba(201,163,106,0.1)]'
                  : 'border-[#1F3A2A] text-[#1F3A2A] hover:bg-[rgba(31,58,42,0.08)]'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Tours;
