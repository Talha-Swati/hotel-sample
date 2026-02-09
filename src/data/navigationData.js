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
      { name: "Couples Retreats", path: "/trip/honeymoon", icon: "💑" },
      { name: "Group Getaways", path: "/trip/corporate", icon: "🧑‍🤝‍🧑" },
      { name: "Custom Stay Request", path: "/custom-tour", icon: "⚙️" },
      { name: "Value Stays", path: "/trip/budget", icon: "💰" },
    ]
  },
  { 
    name: "Experiences", 
    path: "/destinations",
    hasDropdown: true,
    dropdownItems: [
      { name: "Cedar Ridge Cabin", path: "/destination/cedar-ridge", icon: "" },
      { name: "Riverstone Retreat", path: "/destination/riverstone-retreat", icon: "" },
      { name: "Mesa Loft", path: "/destination/mesa-loft", icon: "" },
      { name: "Prairie House", path: "/destination/prairie-house", icon: "" },
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
      { name: "Local Hosts", path: "/services/guides", icon: "" },
      { name: "Concierge Help", path: "/services/visa", icon: "" },
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
