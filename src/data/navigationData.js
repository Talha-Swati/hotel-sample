// Navigation items configuration
export const getNavItems = () => [
  { name: "Home", path: "/" },
  { 
    name: "Stays", 
    path: "/tours", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Riverside Cabins", path: "/trip/adventure", icon: "🏡" },
      { name: "Family Tiny Homes", path: "/trip/family", icon: "👨‍👩‍👧‍👦" },
      { name: "Couples Retreats", path: "/trip/romantic", icon: "💑" },
      { name: "Group Getaways", path: "/trip/corporate", icon: "🧑‍🤝‍🧑" },
      { name: "Custom Stay Request", path: "/custom-stay", icon: "⚙️" },
      { name: "Value Stays", path: "/trip/budget", icon: "💰" },
    ]
  },
  { 
    name: "Experiences", 
    path: "/destinations",
    hasDropdown: true,
    dropdownItems: [
      { name: "Apple 1: Razoo Creek", path: "/destination/apple-1-razoo-creek", icon: "" },
      { name: "Apple 2: Kona Meadows", path: "/destination/apple-2-kona-meadows", icon: "" },
      { name: "Triangle 1: Catalina Ridge", path: "/destination/triangle-1-catalina-ridge", icon: "" },
      { name: "Triangle 2: Rani Ridge", path: "/destination/triangle-2-rani-ridge", icon: "" },
      { name: "View All Experiences", path: "/destinations", icon: "" },
    ]
  },
  { 
    name: "Services", 
    path: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Stay Assistance", path: "/services/hotels", icon: "" },
      { name: "Local Transport", path: "/services/transport", icon: "" },
      { name: "Trip Protection", path: "/services/insurance", icon: "" },
      { name: "Photography Add-ons", path: "/services/photography", icon: "" },
    ]
  },
  { name: "Special Offers", path: "/offers", badge: "NEW" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Hero slider images
export const heroImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1920&q=80', // Hill country
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&q=80', // Cabin exterior
  'https://images.unsplash.com/photo-1500534314209-a26db0f5aa84?w=1920&q=80', // Open skies
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&q=80', // Tiny home
];
