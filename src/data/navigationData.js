const UNDER_DEVELOPMENT_PATH = '/under-development';

const NAV_ITEMS = [
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
      { name: "Razoo Creek", path: "/destination/apple-1-razoo-creek", icon: "" },
      { name: "Kona Meadows", path: "/destination/apple-2-kona-meadows", icon: "" },
      { name: "Catalina Ridge", path: "/destination/triangle-1-catalina-ridge", icon: "" },
      { name: "Rani Ridge", path: "/destination/triangle-2-rani-ridge", icon: "" },
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

export const getNavItems = () =>
  NAV_ITEMS.map((item) => {
    const isAllowedLiveRoute = item.name === 'Home' || item.name === 'Stays' || item.name === 'Experiences';

    if (isAllowedLiveRoute) {
      return item;
    }

    return {
      ...item,
      path: UNDER_DEVELOPMENT_PATH,
      dropdownItems: item.dropdownItems
        ? item.dropdownItems.map((dropItem) => ({
            ...dropItem,
            path: UNDER_DEVELOPMENT_PATH
          }))
        : undefined
    };
  });
