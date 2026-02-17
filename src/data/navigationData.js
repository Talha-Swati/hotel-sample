const UNDER_DEVELOPMENT_PATH = '/under-development';

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { 
    name: "Stays", 
    path: "/tours", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Razoo Creek", path: "/destination/apple-1-razoo-creek", icon: "" },
      { name: "Kona Meadows", path: "/destination/apple-2-kona-meadows", icon: "" },
      { name: "Catalina Ridge", path: "/destination/triangle-1-catalina-ridge", icon: "" },
      { name: "Rani Ridge", path: "/destination/triangle-2-rani-ridge", icon: "" },
    ]
  },
  { 
    name: "Experiences", 
    path: "/destinations",
    hasDropdown: false
  },
  { name: "Gallery", path: "/gallery" },
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
