const UNDER_DEVELOPMENT_PATH = '/under-development';

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { 
    name: "Stays", 
    path: "/tours", 
    hasDropdown: true,
    dropdownItems: [
      { name: "Razoo Creek", path: "/stay/apple-1-razoo-creek", icon: "" },
      { name: "Kona Meadows", path: "/stay/apple-2-kona-meadows", icon: "" },
      { name: "Catalina Ridge", path: "/stay/triangle-1-catalina-ridge", icon: "" },
      { name: "Rani Ridge", path: "/stay/triangle-2-rani-ridge", icon: "" },
    ]
  },
  { name: "Pavillion", path: "/pavillion" },
  { name: "Creeks cafe", path: "/creeks-cafe" },
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
    const isAllowedLiveRoute =
      item.name === 'Home' ||
      item.name === 'Stays' ||
      item.name === 'Pavillion' ||
      item.name === 'Creeks cafe' ||
      item.name === 'Experiences';

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
