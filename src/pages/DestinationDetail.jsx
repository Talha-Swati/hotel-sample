import { useEffect, useMemo, useState, memo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import PageLayout from "../components/layout/PageLayout";
import ThemedPricingCard from "../components/common/ThemedPricingCard";
import { getStayBySlug } from "../data/staysData";
import { getHouseBySlug, getHousePackagesBySlug } from "../services/houses";
import { getDestinationSchema } from "../utils/structuredData";
import { normalizeHouseToStay } from "../utils/houseDataNormalizer";
import { getRatePlanBySlug } from "../utils/stayPricing";
import AvailabilityCalendar from "../components/stays/AvailabilityCalendar";
import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaBed,
  FaBath,
  FaHome,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaSwimmingPool,
  FaCoffee,
  FaUtensils,
  FaFire,
  FaSnowflake,
  FaChair,
  FaWineGlass,
  FaWind,
  FaMicrophone,
  FaWifi,
  FaLightbulb,
  FaMoon,
  FaTv,
  FaKey,
  FaBan,
  FaDog,
  FaExclamationTriangle,
  FaBriefcaseMedical,
  FaParking,
  FaShower,
  FaHorse,
  FaTree,
  FaWalking,
  FaChess,
  FaShieldAlt,
  FaGamepad,
  FaBlender,
} from "react-icons/fa";

// ─── Icon maps ────────────────────────────────────────────────────────────────

const AMENITY_ICONS = {
  "Communal swimming pool": FaSwimmingPool,
  "Coffee and light bites": FaCoffee,
  Kitchenette: FaUtensils,
  Microwave: FaBlender,
  "Coffee maker": FaCoffee,
  "Mini Fridge/Freezer": FaSnowflake,
  Utensils: FaUtensils,
  "Dining table": FaChair,
  "Wine glasses": FaWineGlass,
  HVAC: FaWind,
  Alexa: FaMicrophone,
  Internet: FaWifi,
  Linens: FaBed,
  "Outdoor grill/utensils": FaFire,
  "Ambient lighting": FaLightbulb,
  "Extra pillows and blankets": FaBed,
  "Room darkening shades": FaMoon,
  "Smart TV": FaTv,
  "Smart Check-in": FaKey,
  "Pets not allowed": FaBan,
  "Pets allowed": FaDog,
  "Smoke/Carbon Monoxide Detector": FaExclamationTriangle,
  "First aid kit": FaBriefcaseMedical,
  "Fire Extinguisher": FaFire,
  "2 Parking spots per home": FaParking,
  "Standing Shower": FaShower,
  "Bathroom Essentials": FaBath,
  "Horseback Riding": FaHorse,
  "Outdoor furniture": FaChair,
  "Fire pit": FaFire,
  Hammock: FaTree,
  Pool: FaSwimmingPool,
  "Walking Trails": FaWalking,
  Benches: FaChair,
  Benchs: FaChair,
  "Board games": FaChess,
};

const CATEGORY_ICONS = {
  Pool: FaSwimmingPool,
  Cafe: FaCoffee,
  "Kitchen & dining": FaUtensils,
  General: FaHome,
  Policy: FaDog,
  Safety: FaShieldAlt,
  Parking: FaParking,
  Bathroom: FaShower,
  Outdoors: FaTree,
  Entertainment: FaGamepad,
};

// ─── Component ────────────────────────────────────────────────────────────────

const DestinationDetail = memo(() => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const localStay = useMemo(() => getStayBySlug(slug), [slug]);
  const prefilledDates = useMemo(() => {
    const checkIn = location.state?.prefillDates?.checkIn;
    const checkOut = location.state?.prefillDates?.checkOut;

    if (!checkIn || !checkOut) return null;

    const ymdRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!ymdRegex.test(checkIn) || !ymdRegex.test(checkOut)) return null;

    return { checkIn, checkOut };
  }, [
    location.state?.prefillDates?.checkIn,
    location.state?.prefillDates?.checkOut,
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [stay, setStay] = useState(localStay || null);
  const [isLoadingStay, setIsLoadingStay] = useState(!localStay);
  const [fallbackToast, setFallbackToast] = useState("");
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  useEffect(() => {
    setStay(localStay || null);
    setIsLoadingStay(!localStay);
  }, [localStay]);

  useEffect(() => {
    if (!fallbackToast) return undefined;
    const timeout = setTimeout(() => setFallbackToast(""), 4500);
    return () => clearTimeout(timeout);
  }, [fallbackToast]);

  useEffect(() => {
    let mounted = true;

    const hydrateStayFromApi = async () => {
      if (!localStay) setIsLoadingStay(true);

      try {
        const [houseResponse, packagesResponse] = await Promise.allSettled([
          getHouseBySlug(slug),
          getHousePackagesBySlug(slug),
        ]);

        const house =
          houseResponse.status === "fulfilled"
            ? houseResponse.value?.data
            : null;
        const packages =
          packagesResponse.status === "fulfilled"
            ? packagesResponse.value?.data || []
            : [];

        if (!house) throw new Error("House data missing from API response");

        const mergedStay = normalizeHouseToStay({
          house,
          packages,
          fallbackStay: localStay,
        });

        if (mounted) {
          setStay(mergedStay);
          setIsLoadingStay(false);
        }
      } catch (_error) {
        if (!mounted) return;

        if (localStay) {
          setStay(localStay);
          setFallbackToast(
            "Live rates are unavailable right now. Showing local fallback data.",
          );
          setIsLoadingStay(false);
        } else {
          setIsLoadingStay(false);
          navigate("/tours");
        }
      }
    };

    hydrateStayFromApi();
    return () => {
      mounted = false;
    };
  }, [localStay, navigate, slug]);

  useEffect(() => {
    if (!stay?.gallery?.length) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === stay.gallery.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [stay?.gallery?.length]);

  useEffect(() => {
    if (!isAmenitiesModalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsAmenitiesModalOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isAmenitiesModalOpen]);

  if (isLoadingStay || !stay) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "bg-[#0B0C0E] text-[#E0E7EE]" : "bg-white text-[#0F172A]"
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#2F5D3A] mx-auto mb-4" />
          <p className="text-lg">Loading stay details...</p>
        </div>
      </div>
    );
  }

  const handleBookNow = (rate, packageCode) => {
    navigate("/book-now", {
      state: {
        packageData: {
          title: stay.name,
          price: rate.price,
          duration: "Per night",
          currency: "USD",
          stayType: rate.title,
          source: `stay-${slug}`,
          packageCode,
          ...(prefilledDates ? { prefillDates: prefilledDates } : {}),
        },
      },
    });
  };

  const seo = {
    title: `${stay.name} | The Tiny Escape`,
    description: stay.shortDescription,
    keywords: `The Tiny Escape, ${stay.name}, tiny home, cabin stay, ${stay.location}`,
    url: `/stay/${stay.slug}`,
    image: stay.heroImage,
    structuredData: getDestinationSchema(stay),
  };

  const standardRate = stay.pricing?.standard;
  const amenities = stay.amenities || [];
  const amenityCategories = stay.amenityCategories || [];
  const hasAmenityCategories = amenityCategories.length > 0;
  const totalAmenitiesCount = hasAmenityCategories
    ? amenityCategories.reduce(
        (count, cat) => count + (cat.items?.length || 0),
        0,
      )
    : amenities.length;
  const previewAmenities = amenities.slice(0, 6);
  const ratePlan = getRatePlanBySlug(stay.slug);
  const displayRate = ratePlan
    ? {
        ...standardRate,
        price: ratePlan.weekday,
        title: "Stay Rate",
        features: [
          `Weekday: $${ratePlan.weekday}`,
          `Weekend (Fri-Sat): $${ratePlan.weekend}`,
          "Horseback add-on (for 2): $150",
          "Cleaning fee: $50",
        ],
      }
    : standardRate;

  return (
    <PageLayout
      seo={seo}
      className={
        isDarkMode
          ? "bg-[#0B0C0E] text-[#E0E7EE]"
          : "bg-[#F8FAFC] text-[#0F172A]"
      }
    >
      {/* Toast */}
      {fallbackToast && (
        <div className="fixed top-24 right-4 z-[60] max-w-sm">
          <div className="px-4 py-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-700 text-sm font-medium shadow-lg">
            {fallbackToast}
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          {stay.gallery.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  filter: "brightness(0.7)",
                }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev === 0 ? stay.gallery.length - 1 : prev - 1,
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev === stay.gallery.length - 1 ? 0 : prev + 1,
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
        >
          <FaChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {stay.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75 w-2"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-4xl">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#22D3EE]/80">
                  {stay.tagline}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {stay.name}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/90 mb-6">
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#22D3EE]" />
                  <span>{stay.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>
                    {stay.rating} ({stay.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="text-[#22D3EE]" />
                  <span>Sleeps {stay.sleeps}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBed className="text-[#22D3EE]" />
                  <span>{stay.bedrooms} beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-[#22D3EE]" />
                  <span>{stay.baths} bath</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHome className="text-[#22D3EE]" />
                  <span>{stay.sizeSqFt} sq ft</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#pricing-card"
                  className="px-6 py-3 bg-[#22D3EE] hover:bg-[#4DBBFF] text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                >
                  View Pricing
                </a>
                <a
                  href="#amenities"
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all"
                >
                  Amenities
                </a>
                <button
                  onClick={() =>
                    navigate("/book-now", {
                      state: {
                        packageData: {
                          title: stay.name,
                          source: `stay-${stay.slug}`,
                          packageCode: "standard",
                          ...(prefilledDates
                            ? { prefillDates: prefilledDates }
                            : {}),
                        },
                      },
                    })
                  }
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg transition-all border border-white/30"
                >
                  Request Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2
                className={`text-3xl font-bold mb-6 ${
                  isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                }`}
              >
                Overview
              </h2>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-[#C9D6DF]" : "text-[#334155]"
                }`}
              >
                {stay.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {(stay.highlights || []).slice(0, 6).map((highlight) => (
                  <span
                    key={highlight}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode
                        ? "bg-[#0F1419] text-[#C9D6DF]"
                        : "bg-[#F1F5F9] text-[#334155]"
                    }`}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </section>

            {/* ── Amenities Section ── */}
            <section id="amenities">
              <h2
                className={`text-3xl font-bold mb-2 ${
                  isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                }`}
              >
                Amenities
              </h2>

              {/* Preview grid — icon card style */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {previewAmenities.map((item, index) => {
                  const Icon = AMENITY_ICONS[item] || FaCheck;
                  return (
                    <div
                      key={`${item}-${index}`}
                      className={`flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                        isDarkMode
                          ? "bg-[#0F1419] border-[#1E2A1E] hover:border-[#2F5D3A]"
                          : "bg-white border-[#E8F0E8] hover:border-[#2F5D3A]"
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                          isDarkMode ? "bg-[#1A2E1A]" : "bg-[#EAF3EA]"
                        }`}
                      >
                        <Icon
                          size={15}
                          className={
                            isDarkMode ? "text-[#6BAF7A]" : "text-[#2F5D3A]"
                          }
                        />
                      </div>
                      <span
                        className={`text-sm font-medium leading-tight ${
                          isDarkMode ? "text-[#C9D6DF]" : "text-[#2D3748]"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Show all button */}
              {amenities.length > 6 && (
                <button
                  type="button"
                  onClick={() => setIsAmenitiesModalOpen(true)}
                  className={`mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDarkMode
                      ? "border-[#2F5D3A] text-[#6BAF7A] hover:bg-[#1A2E1A]"
                      : "border-[#1F3A2A] text-[#1F3A2A] hover:bg-[#EAF3EA]"
                  }`}
                >
                  <span>Show all {totalAmenitiesCount} amenities</span>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      isDarkMode
                        ? "bg-[#2F5D3A] text-white"
                        : "bg-[#1F3A2A] text-white"
                    }`}
                  >
                    +
                  </span>
                </button>
              )}
            </section>

            {/* House Rules + Policies */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`p-6 rounded-xl ${
                  isDarkMode
                    ? "bg-[#0F1419]"
                    : "bg-white border border-[#E2E8F0]"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                  }`}
                >
                  House Rules
                </h3>
                <ul className="space-y-2">
                  {stay.houseRules.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${
                        isDarkMode ? "text-[#C9D6DF]" : "text-[#475569]"
                      }`}
                    >
                      <FaCheck
                        className="text-[#2F5D3A] mt-1 shrink-0"
                        size={12}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  isDarkMode
                    ? "bg-[#0F1419]"
                    : "bg-white border border-[#E2E8F0]"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                  }`}
                >
                  Policies
                </h3>
                <ul className="space-y-2">
                  {stay.policies.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${
                        isDarkMode ? "text-[#C9D6DF]" : "text-[#475569]"
                      }`}
                    >
                      <FaCheck
                        className="text-[#2F5D3A] mt-1 shrink-0"
                        size={12}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right column — pricing */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Availability Calendar */}
              <AvailabilityCalendar
                isDarkMode={isDarkMode}
                staySlug={stay.slug}
                stayName={stay.name}
              />

              {displayRate && (
                <div
                  id="pricing-card"
                  className="max-w-md mx-auto lg:max-w-none"
                >
                  <ThemedPricingCard
                    title={displayRate.title}
                    price={
                      ratePlan
                        ? `$${ratePlan.weekday} / $${ratePlan.weekend}`
                        : `$${displayRate.price}`
                    }
                    priceNote={ratePlan ? "weekday / weekend" : "per night"}
                    features={displayRate.features}
                    isDarkMode={isDarkMode}
                    themeKey="destinationPricing"
                    themeIndex={0}
                    ctaLabel="Request Availability"
                    onCtaClick={() => handleBookNow(displayRate, "standard")}
                    footerLabel="Check-in"
                    footerText={`${stay.checkIn} • Check-out ${stay.checkOut}`}
                    className="min-h-[560px]"
                  />
                </div>
              )}

              <div
                className={`p-6 rounded-xl ${
                  isDarkMode
                    ? "bg-[#0F1419]"
                    : "bg-[#F8FAFC] border border-[#E2E8F0]"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                  }`}
                >
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                      }`}
                    >
                      Check-in / Check-out
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-[#C9D6DF]" : "text-[#64748B]"
                      }`}
                    >
                      {stay.checkIn} / {stay.checkOut}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isDarkMode ? "text-[#E0E7EE]" : "text-[#0F172A]"
                      }`}
                    >
                      Capacity
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-[#C9D6DF]" : "text-[#64748B]"
                      }`}
                    >
                      Sleeps {stay.sleeps} · {stay.bedrooms} bed{stay.bedrooms !== 1 ? "s" : ""} · {stay.baths} bath
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Amenities Modal ── */}
      {isAmenitiesModalOpen && (
        <div
          className="fixed inset-0 z-80 bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 pt-24 md:pt-28"
          style={{ animation: "fadeIn 0.2s ease-out" }}
          onClick={() => setIsAmenitiesModalOpen(false)}
        >
          <div
            className={`w-full max-w-3xl max-h-[calc(100vh-8rem)] md:max-h-[calc(100vh-9rem)] rounded-2xl overflow-hidden shadow-2xl flex flex-col ${
              isDarkMode ? "bg-[#0D1710]" : "bg-white"
            }`}
            style={{ animation: "scaleIn 0.25s ease-out" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className={`flex items-center justify-between px-8 py-5 border-b ${
                isDarkMode
                  ? "border-[#1E3A1E] bg-[#0A1309]"
                  : "border-[#E8F0E8] bg-[#F5FAF5]"
              }`}
            >
              <div>
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-[#E0E7EE]" : "text-[#1A2E1A]"
                  }`}
                >
                  Amenities
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    isDarkMode ? "text-[#8A9BAC]" : "text-[#64748B]"
                  }`}
                >
                  {stay.name}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close amenities"
                onClick={() => setIsAmenitiesModalOpen(false)}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                  isDarkMode
                    ? "bg-[#1A2E1A] hover:bg-[#243C24] text-[#C9D6DF]"
                    : "bg-[#E8F0E8] hover:bg-[#D0E4D0] text-[#334155]"
                }`}
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Modal body — scrollable */}
            <div className="overflow-y-auto flex-1 px-8 py-6">
              {hasAmenityCategories ? (
                <div className="space-y-0">
                  {amenityCategories.map((category, categoryIndex) => {
                    const CatIcon = CATEGORY_ICONS[category.title] || FaCheck;
                    const isLast =
                      categoryIndex === amenityCategories.length - 1;

                    return (
                      <section
                        key={`${category.title}-${categoryIndex}`}
                        className={`py-6 ${
                          !isLast
                            ? `border-b ${
                                isDarkMode
                                  ? "border-[#1E3A1E]"
                                  : "border-[#E8F0E8]"
                              }`
                            : ""
                        }`}
                      >
                        {/* Category header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              isDarkMode ? "bg-[#1A3A1A]" : "bg-[#EAF3EA]"
                            }`}
                          >
                            <CatIcon
                              size={17}
                              className={
                                isDarkMode ? "text-[#6BAF7A]" : "text-[#1F3A2A]"
                              }
                            />
                          </div>
                          <h4
                            className={`text-base font-bold tracking-wide ${
                              isDarkMode ? "text-[#E0E7EE]" : "text-[#1A2E1A]"
                            }`}
                          >
                            {category.title}
                          </h4>
                          <span
                            className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full ${
                              isDarkMode
                                ? "bg-[#1A3A1A] text-[#6BAF7A]"
                                : "bg-[#EAF3EA] text-[#2F5D3A]"
                            }`}
                          >
                            {category.items?.length || 0}
                          </span>
                        </div>

                        {/* Items — 2-column icon grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                          {(category.items || []).map((item, itemIndex) => {
                            const ItemIcon = AMENITY_ICONS[item] || FaCheck;
                            return (
                              <div
                                key={`${category.title}-${item}-${itemIndex}`}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                  isDarkMode
                                    ? "hover:bg-[#1A2E1A]"
                                    : "hover:bg-[#F5FAF5]"
                                }`}
                              >
                                <div
                                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                                    isDarkMode ? "bg-[#1A3A1A]" : "bg-[#EAF3EA]"
                                  }`}
                                >
                                  <ItemIcon
                                    size={12}
                                    className={
                                      isDarkMode
                                        ? "text-[#6BAF7A]"
                                        : "text-[#2F5D3A]"
                                    }
                                  />
                                </div>
                                <span
                                  className={`text-sm ${
                                    isDarkMode
                                      ? "text-[#C9D6DF]"
                                      : "text-[#334155]"
                                  }`}
                                >
                                  {item}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : (
                // Fallback flat grid (no categories)
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {amenities.map((item, index) => {
                    const Icon = AMENITY_ICONS[item] || FaCheck;
                    return (
                      <div
                        key={`${item}-${index}`}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
                          isDarkMode
                            ? "hover:bg-[#1A2E1A]"
                            : "hover:bg-[#F5FAF5]"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isDarkMode ? "bg-[#1A3A1A]" : "bg-[#EAF3EA]"
                          }`}
                        >
                          <Icon
                            size={12}
                            className={
                              isDarkMode ? "text-[#6BAF7A]" : "text-[#2F5D3A]"
                            }
                          />
                        </div>
                        <span
                          className={`text-sm ${
                            isDarkMode ? "text-[#C9D6DF]" : "text-[#334155]"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Modal footer */}
            <div
              className={`px-8 py-4 border-t flex items-center justify-between ${
                isDarkMode
                  ? "border-[#1E3A1E] bg-[#0A1309]"
                  : "border-[#E8F0E8] bg-[#F5FAF5]"
              }`}
            >
              <p
                className={`text-xs ${
                  isDarkMode ? "text-[#6A7F6A]" : "text-[#94A3B8]"
                }`}
              >
                Press <kbd className="font-mono">Esc</kbd> to close
              </p>
              <button
                type="button"
                onClick={() => setIsAmenitiesModalOpen(false)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] ${
                  isDarkMode
                    ? "bg-[#2F5D3A] hover:bg-[#3A7048] text-white"
                    : "bg-[#1F3A2A] hover:bg-[#2F5D3A] text-white"
                }`}
              >
                Close
              </button>
            </div>
          </div>

          {/* Keyframe animations injected inline */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.95) translateY(8px); }
              to   { opacity: 1; transform: scale(1)    translateY(0);   }
            }
          `}</style>
        </div>
      )}
    </PageLayout>
  );
});

DestinationDetail.displayName = "DestinationDetail";

export default DestinationDetail;
