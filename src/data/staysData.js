import tinyHouse1 from '../assets/tiny house1.webp';
import tinyEscape3 from '../assets/tiny escape 3.jpg';

export const staysData = [
  {
    id: 'apple-1-razoo-creek',
    slug: 'apple-1-razoo-creek',
    name: 'Apple 1: Razoo Creek',
    tagline: 'Apple 1 stay',
    location: 'Texas Hill Country',
    shortDescription: 'A quiet couples cabin with panoramic views, private firepit, and a warm, modern interior.',
    description: 'Cedar Ridge is designed for slow mornings and golden-hour evenings. Enjoy a private deck, a full kitchen, and a cozy interior wrapped in warm wood and soft light. Perfect for a restorative weekend for two.',
    category: 'couples',
    rating: 4.9,
    reviews: 128,
    sleeps: 2,
    bedrooms: 1,
    baths: 1,
    sizeSqFt: 420,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM',
    petFriendly: false,
    heroImage: tinyEscape3,
    gallery: [
      tinyEscape3,
      tinyEscape3,
      tinyEscape3,
      tinyEscape3
    ],
    highlights: [
      'Private firepit with sunset views',
      'King bed with premium linens',
      'Full kitchen and coffee bar',
      'Self check-in and smart lock'
    ],
    amenities: [
      'Private deck',
      'Firepit',
      'Full kitchen',
      'Wi-Fi',
      'AC and heating',
      'Outdoor shower'
    ],
    policies: [
      'Flexible rebooking up to 7 days before arrival',
      'Quiet hours after 10:00 PM',
      'ID required at check-in'
    ],
    houseRules: [
      'No smoking inside',
      'No parties or events',
      'Maximum 2 guests'
    ],
    pricing: {
      standard: {
        title: 'Standard Rate',
        price: 159,
        features: [
          'Nightly rate',
          'Self check-in',
          'Private deck access'
        ]
      },
      signature: {
        title: 'Signature Rate',
        price: 169,
        popular: true,
        features: [
          'Priority view placement',
          'Early check-in (subject to availability)',
          'Welcome basket'
        ]
      },
      extended: {
        title: 'Extended Stay',
        price: 175,
        features: [
          '3+ nights',
          'Mid-stay refresh',
          'Complimentary firewood bundle'
        ]
      }
    }
  },
  {
    id: 'apple-2-kona-meadows',
    slug: 'apple-2-kona-meadows',
    name: 'Apple 2: Kona Meadows',
    tagline: 'Apple 2 stay',
    location: 'Wimberley, TX',
    shortDescription: 'Family-friendly tiny home steps from the water with generous outdoor space.',
    description: 'Apple 2: Kona Meadows is ideal for relaxed family stays with a creek nearby, shaded seating, and an open-plan living area. Unplug and enjoy nature with plenty of space to gather.',
    category: 'family',
    rating: 4.8,
    reviews: 96,
    sleeps: 4,
    bedrooms: 2,
    baths: 1,
    sizeSqFt: 520,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM',
    petFriendly: true,
    heroImage: tinyHouse1,
    gallery: [
      tinyHouse1,
      tinyHouse1,
      tinyHouse1,
      tinyHouse1
    ],
    highlights: [
      'Creekside seating and hammock',
      'Two queen beds',
      'Outdoor dining and grill',
      'Pet friendly'
    ],
    amenities: [
      'Outdoor grill',
      'Covered porch',
      'Kitchenette',
      'Wi-Fi',
      'AC and heating',
      'Pet friendly'
    ],
    policies: [
      'Pet fee applies per stay',
      'Flexible rebooking up to 7 days before arrival',
      'Quiet hours after 10:00 PM'
    ],
    houseRules: [
      'No smoking inside',
      'No parties or events',
      'Maximum 4 guests'
    ],
    pricing: {
      standard: {
        title: 'Standard Rate',
        price: 169,
        features: [
          'Nightly rate',
          'Outdoor dining area',
          'Creek access'
        ]
      },
      signature: {
        title: 'Signature Rate',
        price: 175,
        popular: true,
        features: [
          'Preferred creekside placement',
          'Late checkout (subject to availability)',
          'Welcome basket'
        ]
      },
      extended: {
        title: 'Extended Stay',
        price: 180,
        features: [
          '3+ nights',
          'Mid-stay refresh',
          'Complimentary firewood bundle'
        ]
      }
    }
  },
  {
    id: 'triangle-1-catalina-ridge',
    slug: 'triangle-1-catalina-ridge',
    name: 'Triangle 1: Catalina Ridge',
    tagline: 'Triangle 1 stay',
    location: 'Dripping Springs, TX',
    shortDescription: 'Minimalist loft with vaulted ceilings, expansive glass, and a stargazing deck.',
    description: 'Triangle 1: Catalina Ridge blends modern architecture with Texas skies. Relax inside an airy, light-filled space or unwind outside under the stars.',
    category: 'value',
    rating: 4.7,
    reviews: 74,
    sleeps: 3,
    bedrooms: 1,
    baths: 1,
    sizeSqFt: 460,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM',
    petFriendly: false,
    heroImage: tinyHouse1,
    gallery: [
      tinyHouse1,
      tinyHouse1,
      tinyHouse1,
      tinyHouse1
    ],
    highlights: [
      'Vaulted ceilings and tall glass',
      'Dedicated workspace',
      'Stargazing deck',
      'Fast Wi-Fi'
    ],
    amenities: [
      'Stargazing deck',
      'Coffee bar',
      'Wi-Fi',
      'AC and heating',
      'Smart TV'
    ],
    policies: [
      'Flexible rebooking up to 7 days before arrival',
      'Quiet hours after 10:00 PM'
    ],
    houseRules: [
      'No smoking inside',
      'No parties or events',
      'Maximum 3 guests'
    ],
    pricing: {
      standard: {
        title: 'Standard Rate',
        price: 149,
        features: [
          'Nightly rate',
          'Stargazing deck',
          'Self check-in'
        ]
      },
      signature: {
        title: 'Signature Rate',
        price: 159,
        popular: true,
        features: [
          'Preferred placement',
          'Welcome basket',
          'Late checkout (subject to availability)'
        ]
      },
      extended: {
        title: 'Extended Stay',
        price: 165,
        features: [
          '3+ nights',
          'Weekly refresh',
          'Complimentary coffee kit'
        ]
      }
    }
  },
  {
    id: 'triangle-2-rani-ridge',
    slug: 'triangle-2-rani-ridge',
    name: 'Triangle 2: Rani Ridge',
    tagline: 'Triangle 2 stay',
    location: 'Marble Falls, TX',
    shortDescription: 'Spacious tiny home with wide views, a private deck, and room to unwind.',
    description: 'Triangle 2: Rani Ridge offers a peaceful hideaway with soft interiors and a large outdoor deck. Ideal for small groups who want a calm, comfortable base.',
    category: 'group',
    rating: 4.8,
    reviews: 88,
    sleeps: 5,
    bedrooms: 2,
    baths: 1,
    sizeSqFt: 560,
    checkIn: '3:00 PM',
    checkOut: '11:00 AM',
    petFriendly: true,
    heroImage: tinyHouse1,
    gallery: [
      tinyHouse1,
      tinyHouse1,
      tinyHouse1,
      tinyHouse1
    ],
    highlights: [
      'Large deck with open views',
      'Two bedrooms + sleeper sofa',
      'Outdoor dining',
      'Pet friendly'
    ],
    amenities: [
      'Large deck',
      'Outdoor dining',
      'Full kitchen',
      'Wi-Fi',
      'AC and heating',
      'Pet friendly'
    ],
    policies: [
      'Pet fee applies per stay',
      'Flexible rebooking up to 7 days before arrival',
      'Quiet hours after 10:00 PM'
    ],
    houseRules: [
      'No smoking inside',
      'No parties or events',
      'Maximum 5 guests'
    ],
    pricing: {
      standard: {
        title: 'Standard Rate',
        price: 159,
        features: [
          'Nightly rate',
          'Outdoor dining',
          'Self check-in'
        ]
      },
      signature: {
        title: 'Signature Rate',
        price: 169,
        popular: true,
        features: [
          'Preferred placement',
          'Welcome basket',
          'Late checkout (subject to availability)'
        ]
      },
      extended: {
        title: 'Extended Stay',
        price: 175,
        features: [
          '3+ nights',
          'Mid-stay refresh',
          'Complimentary firewood bundle'
        ]
      }
    }
  }
];

export const getAllStays = () => staysData;

export const getStayBySlug = (slug) => staysData.find((stay) => stay.slug === slug);
