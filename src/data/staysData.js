import tinyHouse1 from "../assets/tiny house1.webp";
import tinyEscape3 from "../assets/tiny escape 3.jpg";

// Razzo Creek (Apple 1) images
import razzoCreek1 from "../assets/homes/razzo-creek/razzo-creek-1.jpg";
import razzoCreek2 from "../assets/homes/razzo-creek/razzo-creek-2.jpg";
import razzoCreek3 from "../assets/homes/razzo-creek/razzo-creek-3.jpg";

// Kona Meadow (Apple 2) images
import konaMeadow1 from "../assets/homes/kona-meadow/kona-meadow-1.jpg";
import konaMeadow2 from "../assets/homes/kona-meadow/kona-meadow-2.jpg";
import konaMeadow3 from "../assets/homes/kona-meadow/kona-meadow-3.jpg";

// Catalina Ridge (Triangle 1) images
import catalinaRidge1 from "../assets/homes/catalina-ridge/catalina-ridge-1.jpg";
import catalinaRidge2 from "../assets/homes/catalina-ridge/catalina-ridge-2.jpg";
import catalinaRidge3 from "../assets/homes/catalina-ridge/catalina-ridge-3.jpg";
import catalinaRidge4 from "../assets/homes/catalina-ridge/catalina-ridge-4.jpg";
import catalinaRidge5 from "../assets/homes/catalina-ridge/catalina-ridge-5.jpg";
import catalinaRidge6 from "../assets/homes/catalina-ridge/catalina-ridge-6.jpg";
import catalinaRidge7 from "../assets/homes/catalina-ridge/catalina-ridge-7.jpg";

// Rani Ridge (Triangle 2) images
import raniRidge1 from "../assets/homes/rani-ridge/rani-ridge-1.jpg";
import raniRidge2 from "../assets/homes/rani-ridge/rani-ridge-2.jpg";
import raniRidge3 from "../assets/homes/rani-ridge/rani-ridge-3.jpg";
import raniRidge4 from "../assets/homes/rani-ridge/rani-ridge-4.jpg";
import raniRidge5 from "../assets/homes/rani-ridge/rani-ridge-5.jpg";
import raniRidge6 from "../assets/homes/rani-ridge/rani-ridge-6.jpg";
import raniRidge7 from "../assets/homes/rani-ridge/rani-ridge-7.jpg";
import raniRidge8 from "../assets/homes/rani-ridge/rani-ridge-8.jpg";
import raniRidge9 from "../assets/homes/rani-ridge/rani-ridge-9.jpg";
import raniRidge10 from "../assets/homes/rani-ridge/rani-ridge-10.jpg";

export const staysData = [
  {
    id: "apple-1-razoo-creek",
    slug: "apple-1-razoo-creek",
    name: "Razoo Creek",
    tagline: "Cozy couples cabin",
    location: "Bruceville-Eddy, TX",
    shortDescription:
      "A quiet couples cabin with panoramic views, private firepit, and a warm, modern interior.",
    description:
      "Cedar Ridge is designed for slow mornings and golden-hour evenings. Enjoy a private deck, a full kitchen, and a cozy interior wrapped in warm wood and soft light. Perfect for a restorative weekend for two.",
    category: "couples",
    rating: 4.9,
    reviews: 15,
    sleeps: 2,
    bedrooms: 1,
    baths: 1,
    sizeSqFt: 420,
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    petFriendly: false,
    heroImage: razzoCreek1,
    gallery: [razzoCreek1, razzoCreek2, razzoCreek3],
    highlights: [
      "Private firepit with sunset views",
      "King bed with premium linens",
      "Full kitchen and coffee bar",
      "Self check-in and smart lock",
    ],
    amenities: [
      "Communal swimming pool",
      "Coffee and light bites",
      "Kitchenette",
      "Microwave",
      "Coffee maker",
      "Mini Fridge/Freezer",
      "Utensils",
      "Dining table",
      "Wine glasses",
      "HVAC",
      "Alexa",
      "Internet",
      "Linens",
      "Outdoor grill/utensils",
      "Ambient lighting",
      "Extra pillows and blankets",
      "Room darkening shades",
      "Smart TV",
      "Smart Check-in",
      "Pets not allowed",
      "Smoke/Carbon Monoxide Detector",
      "First aid kit",
      "Fire Extinguisher",
      "2 Parking spots per home",
      "Standing Shower",
      "Bathroom Essentials",
      "Horseback Riding",
      "Outdoor furniture",
      "Fire pit",
      "Hammock",
      "Pool",
      "Walking Trails",
      "Benchs",
      "Board games",
    ],
    amenityCategories: [
      {
        title: "Pool",
        items: ["Communal swimming pool"],
      },
      {
        title: "Cafe",
        items: ["Coffee and light bites"],
      },
      {
        title: "Kitchen & dining",
        items: [
          "Kitchenette",
          "Microwave",
          "Coffee maker",
          "Mini Fridge/Freezer",
          "Utensils",
          "Dining table",
          "Wine glasses",
        ],
      },
      {
        title: "General",
        items: [
          "HVAC",
          "Alexa",
          "Internet",
          "Linens",
          "Outdoor grill/utensils",
          "Ambient lighting",
          "Extra pillows and blankets",
          "Room darkening shades",
          "Smart TV",
          "Smart Check-in",
        ],
      },
      {
        title: "Policy",
        items: ["Pets not allowed"],
      },
      {
        title: "Safety",
        items: [
          "Smoke/Carbon Monoxide Detector",
          "First aid kit",
          "Fire Extinguisher",
        ],
      },
      {
        title: "Parking",
        items: ["2 Parking spots per home"],
      },
      {
        title: "Bathroom",
        items: ["Standing Shower", "Bathroom Essentials"],
      },
      {
        title: "Outdoors",
        items: [
          "Horseback Riding",
          "Outdoor furniture",
          "Fire pit",
          "Hammock",
          "Pool",
          "Walking Trails",
          "Benchs",
        ],
      },
      {
        title: "Entertainment",
        items: ["Board games", "Pool", "Horseback Riding"],
      },
    ],
    policies: [
      "Flexible rebooking up to 7 days before arrival",
      "Quiet hours after 10:00 PM",
      "ID required at check-in",
    ],
    houseRules: [
      "No smoking inside",
      "No parties or events",
      "Maximum 2 guests",
    ],
    pricing: {
      standard: {
        title: "Standard Rate",
        price: 159,
        features: ["Nightly rate", "Self check-in", "Private deck access"],
      },
      signature: {
        title: "Signature Rate",
        price: 169,
        popular: true,
        features: [
          "Priority view placement",
          "Early check-in (subject to availability)",
          "Welcome basket",
        ],
      },
      extended: {
        title: "Extended Stay",
        price: 175,
        features: [
          "3+ nights",
          "Mid-stay refresh",
          "Complimentary firewood bundle",
        ],
      },
    },
  },
  {
    id: "apple-2-kona-meadows",
    slug: "apple-2-kona-meadows",
    name: "Kona Meadows",
    tagline: "Family tiny home",
    location: "Bruceville-Eddy, TX",
    shortDescription:
      "Family-friendly tiny home steps from the water with generous outdoor space.",
    description:
      "Kona Meadows is ideal for relaxed family stays with a creek nearby, shaded seating, and an open-plan living area. Unplug and enjoy nature with plenty of space to gather.",
    category: "family",
    rating: 4.8,
    reviews: 18,
    sleeps: 4,
    bedrooms: 2,
    baths: 1,
    sizeSqFt: 520,
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    petFriendly: false,
    heroImage: konaMeadow2,
    gallery: [konaMeadow1, konaMeadow2, konaMeadow3],
    highlights: [
      "Creekside seating and hammock",
      "Two queen beds",
      "Outdoor dining and grill",
      "Creekside setting",
    ],
    amenities: [
      "Communal swimming pool",
      "Coffee and light bites",
      "Kitchenette",
      "Microwave",
      "Coffee maker",
      "Mini Fridge/Freezer",
      "Utensils",
      "Dining table",
      "Wine glasses",
      "HVAC",
      "Alexa",
      "Internet",
      "Linens",
      "Outdoor grill/utensils",
      "Ambient lighting",
      "Extra pillows and blankets",
      "Room darkening shades",
      "Smart TV",
      "Smart Check-in",
      "Pets not allowed",
      "Smoke/Carbon Monoxide Detector",
      "First aid kit",
      "Fire Extinguisher",
      "2 Parking spots per home",
      "Standing Shower",
      "Bathroom Essentials",
      "Horseback Riding",
      "Outdoor furniture",
      "Fire pit",
      "Hammock",
      "Pool",
      "Walking Trails",
      "Benchs",
      "Board games",
    ],
    amenityCategories: [
      {
        title: "Pool",
        items: ["Communal swimming pool"],
      },
      {
        title: "Cafe",
        items: ["Coffee and light bites"],
      },
      {
        title: "Kitchen & dining",
        items: [
          "Kitchenette",
          "Microwave",
          "Coffee maker",
          "Mini Fridge/Freezer",
          "Utensils",
          "Dining table",
          "Wine glasses",
        ],
      },
      {
        title: "General",
        items: [
          "HVAC",
          "Alexa",
          "Internet",
          "Linens",
          "Outdoor grill/utensils",
          "Ambient lighting",
          "Extra pillows and blankets",
          "Room darkening shades",
          "Smart TV",
          "Smart Check-in",
        ],
      },
      {
        title: "Policy",
        items: ["Pets not allowed"],
      },
      {
        title: "Safety",
        items: [
          "Smoke/Carbon Monoxide Detector",
          "First aid kit",
          "Fire Extinguisher",
        ],
      },
      {
        title: "Parking",
        items: ["2 Parking spots per home"],
      },
      {
        title: "Bathroom",
        items: ["Standing Shower", "Bathroom Essentials"],
      },
      {
        title: "Outdoors",
        items: [
          "Horseback Riding",
          "Outdoor furniture",
          "Fire pit",
          "Hammock",
          "Pool",
          "Walking Trails",
          "Benchs",
        ],
      },
      {
        title: "Entertainment",
        items: ["Board games", "Pool", "Horseback Riding"],
      },
    ],
    policies: [
      "Flexible rebooking up to 7 days before arrival",
      "Quiet hours after 10:00 PM",
    ],
    houseRules: [
      "No smoking inside",
      "No parties or events",
      "Maximum 4 guests",
    ],
    pricing: {
      standard: {
        title: "Standard Rate",
        price: 169,
        features: ["Nightly rate", "Outdoor dining area", "Creek access"],
      },
      signature: {
        title: "Signature Rate",
        price: 175,
        popular: true,
        features: [
          "Preferred creekside placement",
          "Late checkout (subject to availability)",
          "Welcome basket",
        ],
      },
      extended: {
        title: "Extended Stay",
        price: 180,
        features: [
          "3+ nights",
          "Mid-stay refresh",
          "Complimentary firewood bundle",
        ],
      },
    },
  },
  {
    id: "triangle-1-catalina-ridge",
    slug: "triangle-1-catalina-ridge",
    name: "Catalina Ridge",
    tagline: "Modern loft stay",
    location: "Bruceville-Eddy, TX",
    shortDescription:
      "Minimalist loft with vaulted ceilings, expansive glass, and a stargazing deck.",
    description:
      "Catalina Ridge blends modern architecture with Texas skies. Relax inside an airy, light-filled space or unwind outside under the stars.",
    category: "value",
    rating: 4.7,
    reviews: 12,
    sleeps: 3,
    bedrooms: 1,
    baths: 1,
    sizeSqFt: 460,
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    petFriendly: false,
    heroImage: catalinaRidge1,
    gallery: [
      catalinaRidge1,
      catalinaRidge2,
      catalinaRidge3,
      catalinaRidge4,
      catalinaRidge5,
      catalinaRidge6,
      catalinaRidge7,
    ],
    highlights: [
      "Vaulted ceilings and tall glass",
      "Dedicated workspace",
      "Stargazing deck",
      "Fast Wi-Fi",
    ],
    amenities: [
      "Communal swimming pool",
      "Coffee and light bites",
      "Kitchenette",
      "Microwave",
      "Coffee maker",
      "Mini Fridge/Freezer",
      "Utensils",
      "Dining table",
      "Wine glasses",
      "HVAC",
      "Alexa",
      "Internet",
      "Linens",
      "Outdoor grill/utensils",
      "Ambient lighting",
      "Extra pillows and blankets",
      "Room darkening shades",
      "Smart TV",
      "Smart Check-in",
      "Pets not allowed",
      "Smoke/Carbon Monoxide Detector",
      "First aid kit",
      "Fire Extinguisher",
      "2 Parking spots per home",
      "Standing Shower",
      "Bathroom Essentials",
      "Horseback Riding",
      "Outdoor furniture",
      "Fire pit",
      "Hammock",
      "Pool",
      "Walking Trails",
      "Benchs",
      "Board games",
    ],
    amenityCategories: [
      {
        title: "Pool",
        items: ["Communal swimming pool"],
      },
      {
        title: "Cafe",
        items: ["Coffee and light bites"],
      },
      {
        title: "Kitchen & dining",
        items: [
          "Kitchenette",
          "Microwave",
          "Coffee maker",
          "Mini Fridge/Freezer",
          "Utensils",
          "Dining table",
          "Wine glasses",
        ],
      },
      {
        title: "General",
        items: [
          "HVAC",
          "Alexa",
          "Internet",
          "Linens",
          "Outdoor grill/utensils",
          "Ambient lighting",
          "Extra pillows and blankets",
          "Room darkening shades",
          "Smart TV",
          "Smart Check-in",
        ],
      },
      {
        title: "Policy",
        items: ["Pets not allowed"],
      },
      {
        title: "Safety",
        items: [
          "Smoke/Carbon Monoxide Detector",
          "First aid kit",
          "Fire Extinguisher",
        ],
      },
      {
        title: "Parking",
        items: ["2 Parking spots per home"],
      },
      {
        title: "Bathroom",
        items: ["Standing Shower", "Bathroom Essentials"],
      },
      {
        title: "Outdoors",
        items: [
          "Horseback Riding",
          "Outdoor furniture",
          "Fire pit",
          "Hammock",
          "Pool",
          "Walking Trails",
          "Benchs",
        ],
      },
      {
        title: "Entertainment",
        items: ["Board games", "Pool", "Horseback Riding"],
      },
    ],
    policies: [
      "Flexible rebooking up to 7 days before arrival",
      "Quiet hours after 10:00 PM",
    ],
    houseRules: [
      "No smoking inside",
      "No parties or events",
      "Maximum 3 guests",
    ],
    pricing: {
      standard: {
        title: "Standard Rate",
        price: 149,
        features: ["Nightly rate", "Stargazing deck", "Self check-in"],
      },
      signature: {
        title: "Signature Rate",
        price: 159,
        popular: true,
        features: [
          "Preferred placement",
          "Welcome basket",
          "Late checkout (subject to availability)",
        ],
      },
      extended: {
        title: "Extended Stay",
        price: 165,
        features: ["3+ nights", "Weekly refresh", "Complimentary coffee kit"],
      },
    },
  },
  {
    id: "triangle-2-rani-ridge",
    slug: "triangle-2-rani-ridge",
    name: "Rani Ridge",
    tagline: "Group getaway",
    location: "Bruceville-Eddy, TX",
    shortDescription:
      "Spacious tiny home with wide views, a private deck, and room to unwind.",
    description:
      "Rani Ridge offers a peaceful hideaway with soft interiors and a large outdoor deck. Ideal for small groups who want a calm, comfortable base.",
    category: "group",
    rating: 4.8,
    reviews: 16,
    sleeps: 5,
    bedrooms: 2,
    baths: 1,
    sizeSqFt: 560,
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    petFriendly: false,
    heroImage: raniRidge1,
    gallery: [
      raniRidge1,
      raniRidge2,
      raniRidge3,
      raniRidge4,
      raniRidge5,
      raniRidge6,
      raniRidge7,
      raniRidge8,
      raniRidge9,
      raniRidge10,
    ],
    highlights: [
      "Large deck with open views",
      "Two bedrooms + sleeper sofa",
      "Outdoor dining",
      "Spacious deck",
    ],
    amenities: [
      "Communal swimming pool",
      "Coffee and light bites",
      "Kitchenette",
      "Microwave",
      "Coffee maker",
      "Mini Fridge/Freezer",
      "Utensils",
      "Dining table",
      "Wine glasses",
      "HVAC",
      "Alexa",
      "Internet",
      "Linens",
      "Outdoor grill/utensils",
      "Ambient lighting",
      "Extra pillows and blankets",
      "Room darkening shades",
      "Smart TV",
      "Smart Check-in",
      "Pets not allowed",
      "Smoke/Carbon Monoxide Detector",
      "First aid kit",
      "Fire Extinguisher",
      "2 Parking spots per home",
      "Standing Shower",
      "Bathroom Essentials",
      "Horseback Riding",
      "Outdoor furniture",
      "Fire pit",
      "Hammock",
      "Pool",
      "Walking Trails",
      "Benchs",
      "Board games",
    ],
    amenityCategories: [
      {
        title: "Pool",
        items: ["Communal swimming pool"],
      },
      {
        title: "Cafe",
        items: ["Coffee and light bites"],
      },
      {
        title: "Kitchen & dining",
        items: [
          "Kitchenette",
          "Microwave",
          "Coffee maker",
          "Mini Fridge/Freezer",
          "Utensils",
          "Dining table",
          "Wine glasses",
        ],
      },
      {
        title: "General",
        items: [
          "HVAC",
          "Alexa",
          "Internet",
          "Linens",
          "Outdoor grill/utensils",
          "Ambient lighting",
          "Extra pillows and blankets",
          "Room darkening shades",
          "Smart TV",
          "Smart Check-in",
        ],
      },
      {
        title: "Policy",
        items: ["Pets not allowed"],
      },
      {
        title: "Safety",
        items: [
          "Smoke/Carbon Monoxide Detector",
          "First aid kit",
          "Fire Extinguisher",
        ],
      },
      {
        title: "Parking",
        items: ["2 Parking spots per home"],
      },
      {
        title: "Bathroom",
        items: ["Standing Shower", "Bathroom Essentials"],
      },
      {
        title: "Outdoors",
        items: [
          "Horseback Riding",
          "Outdoor furniture",
          "Fire pit",
          "Hammock",
          "Pool",
          "Walking Trails",
          "Benchs",
        ],
      },
      {
        title: "Entertainment",
        items: ["Board games", "Pool", "Horseback Riding"],
      },
    ],
    policies: [
      "Flexible rebooking up to 7 days before arrival",
      "Quiet hours after 10:00 PM",
    ],
    houseRules: [
      "No smoking inside",
      "No parties or events",
      "Maximum 5 guests",
    ],
    pricing: {
      standard: {
        title: "Standard Rate",
        price: 159,
        features: ["Nightly rate", "Outdoor dining", "Self check-in"],
      },
      signature: {
        title: "Signature Rate",
        price: 169,
        popular: true,
        features: [
          "Preferred placement",
          "Welcome basket",
          "Late checkout (subject to availability)",
        ],
      },
      extended: {
        title: "Extended Stay",
        price: 175,
        features: [
          "3+ nights",
          "Mid-stay refresh",
          "Complimentary firewood bundle",
        ],
      },
    },
  },
];

export const getAllStays = () => staysData;

export const getStayBySlug = (slug) =>
  staysData.find((stay) => stay.slug === slug);
