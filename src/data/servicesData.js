// Services Data - Complete service offerings

export const servicesData = {
  hotels: {
    id: 'hotels',
    name: 'Stay Booking',
    slug: 'hotels',
    icon: '',
    tagline: 'Curated Tiny Stays, Trusted Quality',
    description: 'Handpicked tiny homes and cabins across the Texas Hill Country with thoughtful design, quiet settings, and clear pricing.',
    heroImage: 'https://images.unsplash.com/photo-1566073171259-6a40f3e9e391?w=1920&q=80',
    
    categories: [
      {
        id: 'budget',
        name: 'Value Stays',
        priceRange: '$145 to $185 per night',
        description: 'Design-forward and budget-friendly escapes',
        features: ['Fast Wi-Fi', 'Self check-in', 'Full kitchen', 'Outdoor seating', 'Quiet setting', 'Simple pricing']
      },
      {
        id: 'comfort',
        name: 'Comfort Stays',
        priceRange: '$185 to $240 per night',
        description: 'Room to breathe with upgraded amenities',
        features: ['Outdoor dining', 'Covered porch', 'Upgraded bedding', 'Coffee bar', 'Pet friendly options', 'Dedicated workspace']
      },
      {
        id: 'luxury',
        name: 'Signature Retreats',
        priceRange: '$240 to $320 per night',
        description: 'Premium cabins with elevated views and extras',
        features: ['Private decks', 'Firepit setup', 'Welcome basket', 'Early check-in when available', 'Premium linens', 'Best views']
      }
    ],

    featuredProperties: [
      {
        id: 'cedar-ridge',
        name: 'Cedar Ridge Cabin',
        location: 'Texas Hill Country',
        category: 'luxury',
        rating: 4.9,
        reviews: 128,
        price: 219,
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
        amenities: ['Private deck', 'Firepit', 'Full kitchen', 'Fast Wi-Fi', 'King bed', 'Self check-in'],
        description: 'Sunset ridge views with a private deck, firepit, and a warm modern interior.'
      },
      {
        id: 'riverstone-retreat',
        name: 'Riverstone Retreat',
        location: 'Wimberley, TX',
        category: 'comfort',
        rating: 4.8,
        reviews: 96,
        price: 259,
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
        amenities: ['Creek access', 'Outdoor dining', 'Pet friendly', 'Kitchenette', 'Wi-Fi', 'Covered porch'],
        description: 'Creekside tiny home with generous outdoor space and family-friendly comfort.'
      },
      {
        id: 'mesa-loft',
        name: 'Mesa Loft',
        location: 'Dripping Springs, TX',
        category: 'budget',
        rating: 4.7,
        reviews: 74,
        price: 179,
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
        amenities: ['Stargazing deck', 'Coffee bar', 'Dedicated workspace', 'Smart TV', 'Fast Wi-Fi', 'Self check-in'],
        description: 'Minimalist loft with vaulted ceilings and a stargazing deck.'
      },
      {
        id: 'prairie-house',
        name: 'Prairie House',
        location: 'Marble Falls, TX',
        category: 'comfort',
        rating: 4.8,
        reviews: 88,
        price: 239,
        image: 'https://images.unsplash.com/photo-1500534314209-a26db0f5aa84?w=800&q=80',
        amenities: ['Large deck', 'Outdoor dining', 'Full kitchen', 'Pet friendly', 'Two bedrooms', 'Self check-in'],
        description: 'Spacious tiny home with open skies, a private deck, and room to unwind.'
      }
    ],

    bookingProcess: [
      { step: 1, title: 'Choose Your Stay', desc: 'Pick the cabin or tiny home that fits your vibe' },
      { step: 2, title: 'Select Dates', desc: 'Choose check-in and check-out dates' },
      { step: 3, title: 'Add Extras', desc: 'Concierge, local guides, and add-ons' },
      { step: 4, title: 'Confirm Reservation', desc: 'Secure your stay and receive arrival details' }
    ]
  },

  transport: {
    id: 'transport',
    name: 'Transfers and Local Rides',
    slug: 'transport',
    icon: '',
    tagline: 'Smooth Arrivals, Easy Days',
    description: 'Trusted local drivers, clean vehicles, and reliable scheduling for airport runs and Hill Country day trips.',
    heroImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80',

    vehicleTypes: [
      {
        id: 'sedan',
        name: 'Sedan',
        capacity: '4 passengers',
        luggage: '2 to 3 bags',
        price: '$65/transfer',
        features: ['AC', 'Quiet ride', 'Airport pickup', 'Flexible timing', 'Fuel included'],
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80',
        bestFor: 'Airport transfers, couples'
      },
      {
        id: 'suv',
        name: 'SUV',
        capacity: '6 passengers',
        luggage: '4 to 5 bags',
        price: '$95/transfer',
        features: ['Spacious', 'AC', 'Luggage room', 'Premium ride', 'Fuel included'],
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80',
        bestFor: 'Families, small groups'
      },
      {
        id: 'sprinter',
        name: 'Sprinter Van',
        capacity: '10 passengers',
        luggage: '8 to 10 bags',
        price: '$180/transfer',
        features: ['Group friendly', 'AC', 'USB charging', 'Plenty of space', 'Fuel included'],
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80',
        bestFor: 'Group arrivals, events'
      },
      {
        id: 'local-ride',
        name: 'Local Ride',
        capacity: '2 to 4 passengers',
        luggage: 'Light luggage',
        price: '$45/hour',
        features: ['Flexible stops', 'Local tips', 'Short errands', 'AC', 'Fuel included'],
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80',
        bestFor: 'Wine tastings, dinner runs'
      }
    ],

    services: [
      {
        name: 'Airport Transfers',
        description: 'Pickup and drop-off for Austin and nearby airports',
        price: 'From $65',
        features: ['Flight tracking', 'Meet and greet', 'Luggage assistance', 'Flexible timing']
      },
      {
        name: 'Hill Country Day Trips',
        description: 'Scenic drives and winery stops',
        price: 'From $220/day',
        features: ['Custom route', 'Multiple stops', 'Local tips', 'AC vehicles']
      },
      {
        name: 'Dinner and Event Runs',
        description: 'Evening transfers and event transport',
        price: 'From $90',
        features: ['On-time pickup', 'Local recommendations', 'Flexible return', 'AC vehicles']
      },
      {
        name: 'Group Shuttle',
        description: 'Coordinated transport for groups',
        price: 'Custom pricing',
        features: ['Multiple vehicles', 'Event coordination', 'Group logistics', 'On-site support']
      }
    ],

    whyChooseUs: [
      { title: 'Local Pros', desc: 'Drivers who know the Hill Country roads' },
      { title: 'Insured Vehicles', desc: 'Full coverage for peace of mind' },
      { title: 'Clean Rides', desc: 'Well maintained vehicles and tidy interiors' },
      { title: 'Flexible Support', desc: 'Schedule updates and quick responses' }
    ]
  },

  guides: {
    id: 'guides',
    name: 'Local Guides',
    slug: 'guides',
    icon: '',
    tagline: 'Local Insight, Easy Planning',
    description: 'Curated local hosts for Hill Country hikes, food tours, and private experiences built around your stay.',
    heroImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1920&q=80',

    guides: [
      {
        id: 'guide-1',
        name: 'Maya Torres',
        specialization: 'Hill Country Trails',
        experience: '9 years',
        languages: ['English', 'Spanish'],
        rating: 4.9,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        certifications: ['Wilderness First Aid', 'Leave No Trace', 'Trail Steward'],
        expertise: ['Sunrise hikes', 'Waterfall loops', 'Wildflower trails'],
        price: '$95/session',
        bio: 'Guides sunrise hikes and mellow trail days with a focus on pacing, safety, and great views.'
      },
      {
        id: 'guide-2',
        name: 'Eli Parker',
        specialization: 'Food and Music',
        experience: '7 years',
        languages: ['English'],
        rating: 4.8,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        certifications: ['Austin Food Guide', 'Event Host'],
        expertise: ['Live music nights', 'BBQ tastings', 'Local coffee routes'],
        price: '$85/session',
        bio: 'Designs laid-back itineraries for live music, BBQ, and small-town charm.'
      },
      {
        id: 'guide-3',
        name: 'Riley Nguyen',
        specialization: 'Wellness and Nature',
        experience: '6 years',
        languages: ['English', 'Vietnamese'],
        rating: 4.9,
        reviews: 142,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
        certifications: ['Yoga Instructor', 'Forest Bathing Guide'],
        expertise: ['Quiet mornings', 'Breathwork', 'Outdoor reset'],
        price: '$110/session',
        bio: 'Creates calming, slow-paced experiences built around nature, breathwork, and unplugging.'
      },
      {
        id: 'guide-4',
        name: 'Jordan Blake',
        specialization: 'Family Adventures',
        experience: '8 years',
        languages: ['English'],
        rating: 4.7,
        reviews: 87,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
        certifications: ['Family Experience Host', 'Child Safety', 'First Aid'],
        expertise: ['Riverside days', 'Wildlife spotting', 'Picnic planning'],
        price: '$90/session',
        bio: 'Plans easy outdoor adventures with plenty of breaks, snacks, and kid-friendly stops.'
      }
    ],

    services: [
      {
        name: 'Half Day Guiding',
        price: '$85 to $120',
        features: ['3 to 4 hours', 'Local expertise', 'Flexible pacing', 'Great for arrivals']
      },
      {
        name: 'Full Day Guiding',
        price: '$140 to $200',
        features: ['6 to 8 hours', 'Custom stops', 'Local recommendations', 'Photo assistance']
      },
      {
        name: 'Signature Experiences',
        price: '$180 to $260',
        features: ['Private sessions', 'Premium routes', 'Host included', 'Tailored planning']
      },
      {
        name: 'Group Hosting',
        price: '$45 to $70 per person',
        features: ['Small groups', 'Coordinated timing', 'Shared experiences', 'Cost effective']
      }
    ],

    qualifications: [
      'Background Verified',
      'First Aid Trained',
      'Local Area Experts',
      'Guest Experience Training',
      'Safety Focused',
      'Professional Hosts'
    ]
  },

  visa: {
    id: 'visa',
    name: 'Concierge Services',
    slug: 'visa',
    icon: '',
    tagline: 'Personal Touches, Handled',
    description: 'Pre-arrival planning, add-ons, and local coordination so your stay feels effortless.',
    heroImage: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80',

    visaTypes: [
      {
        id: 'essentials',
        name: 'Essentials Concierge',
        duration: '1 to 3 nights',
        processing: 'Response within 6 hours',
        price: '$45 (service fee)',
        eligibility: 'Booked guests',
        description: 'Arrival basics and local coordination for a smooth check-in.',
        requirements: [
          'Arrival time and flight info',
          'Preferred check-in window',
          'Grocery or snack list',
          'Special requests or allergies'
        ]
      },
      {
        id: 'celebration',
        name: 'Celebration Concierge',
        duration: '2 to 5 nights',
        processing: 'Response within 4 hours',
        price: '$95 (service fee)',
        eligibility: 'Booked guests',
        description: 'Romance or celebration touches with curated add-ons.',
        requirements: [
          'Occasion details',
          'Preferred arrival time',
          'Gift or floral preferences',
          'Dietary notes for welcome treats'
        ]
      },
      {
        id: 'executive',
        name: 'Executive Concierge',
        duration: '3 to 7 nights',
        processing: 'Response within 2 hours',
        price: '$165 (service fee)',
        eligibility: 'Booked guests',
        description: 'Priority planning, local hosts, and coordinated schedules.',
        requirements: [
          'Arrival and departure times',
          'Preferred pace and activities',
          'Transportation needs',
          'Team or group details'
        ]
      }
    ],

    countries: [
      { name: 'Text Message', processing: '15 to 30 minutes', notes: 'Best for arrival day updates' },
      { name: 'Email', processing: '2 to 6 hours', notes: 'Ideal for itinerary requests' },
      { name: 'Phone Call', processing: 'Same day', notes: 'Great for time sensitive changes' },
      { name: 'WhatsApp', processing: '1 to 3 hours', notes: 'Fast coordination for add-ons' }
    ],

    process: [
      { step: 1, title: 'Request', desc: 'Tell us your dates, vibe, and priorities' },
      { step: 2, title: 'Plan', desc: 'We propose a tailored set of add-ons and local picks' },
      { step: 3, title: 'Confirm', desc: 'Approve what you want and share arrival details' },
      { step: 4, title: 'Prepare', desc: 'We coordinate timing, partners, and access' },
      { step: 5, title: 'Enjoy', desc: 'Arrive to a stay that feels already handled' }
    ],

    ourServices: [
      'Early check-in and late checkout requests',
      'Grocery pre-stocking',
      'Private local guide matching',
      'Transportation coordination',
      'Celebration setups and surprises',
      'Wellness and spa bookings',
      'Local restaurant recommendations',
      'Itinerary planning and timing support'
    ]
  },

  insurance: {
    id: 'insurance',
    name: 'Stay Protection',
    slug: 'insurance',
    icon: '',
    tagline: 'Peace of Mind for Your Stay',
    description: 'Optional coverage for trip changes, unexpected interruptions, and personal items while you travel.',
    heroImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',

    plans: [
      {
        id: 'basic',
        name: 'Basic Coverage',
        price: '$25',
        duration: 'Up to 3 nights',
        recommended: false,
        coverage: {
          medical: '$10,000',
          evacuation: '$5,000',
          baggage: '$500',
          cancellation: '$1,000',
          delay: '$200'
        },
        features: [
          'Emergency medical coverage',
          'Trip delay coverage',
          'Lost baggage protection',
          '24/7 helpline',
          'Basic evacuation coverage'
        ]
      },
      {
        id: 'comprehensive',
        name: 'Comprehensive Plan',
        price: '$50',
        duration: 'Up to 5 nights',
        recommended: true,
        coverage: {
          medical: '$50,000',
          evacuation: '$25,000',
          baggage: '$2,000',
          cancellation: '$5,000',
          delay: '$500'
        },
        features: [
          'Extended medical coverage',
          'Trip cancellation protection',
          'Lost baggage and documents',
          'Flight delay compensation',
          'Emergency evacuation',
          'Personal liability',
          '24/7 support'
        ]
      },
      {
        id: 'premium',
        name: 'Premium Protection',
        price: '$100',
        duration: 'Up to 10 nights',
        recommended: false,
        coverage: {
          medical: '$100,000',
          evacuation: '$50,000',
          baggage: '$5,000',
          cancellation: '$10,000',
          delay: '$1,000'
        },
        features: [
          'Maximum medical coverage',
          'Trip interruption',
          'Rental car coverage',
          'Emergency evacuation',
          'VIP assistance services',
          'Concierge support',
          'Legal assistance'
        ]
      }
    ],

    covered: [
      'Medical emergencies and hospitalization',
      'Emergency evacuation',
      'Trip cancellation or interruption',
      'Lost, stolen, or damaged baggage',
      'Flight delays and missed connections',
      'Personal liability',
      '24/7 emergency assistance'
    ],

    notCovered: [
      'Pre existing medical conditions (unless declared)',
      'Intentional self injury',
      'Illegal activities',
      'Extreme sports (basic plans)',
      'Travel to restricted areas',
      'Pregnancy related issues (after 24 weeks)',
      'Mental health issues (unless specified)'
    ],

    claimProcess: [
      { step: 1, title: 'Report Incident', desc: 'Contact the 24/7 helpline' },
      { step: 2, title: 'Documentation', desc: 'Gather required documents and receipts' },
      { step: 3, title: 'Submit Claim', desc: 'Fill and submit the claim form online' },
      { step: 4, title: 'Review', desc: 'Claims reviewed within 48 hours' },
      { step: 5, title: 'Settlement', desc: 'Claim settled within 7 to 10 business days' }
    ],

    emergencyContacts: {
      hotline: '+1 (512) 555-0147',
      email: 'support@tinyescape.co',
      whatsapp: '+1 (512) 555-0147',
      available: '24/7'
    }
  },

  photography: {
    id: 'photography',
    name: 'Memory Sessions',
    slug: 'photography',
    icon: '',
    tagline: 'Capture the Stay',
    description: 'Professional sessions for couples, families, and celebrations with natural light and relaxed direction.',
    heroImage: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920&q=80',

    photographers: [
      {
        id: 'photo-1',
        name: 'Jordan Lee',
        specialization: 'Lifestyle & Couples',
        experience: '8 years',
        rating: 4.9,
        reviews: 148,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
        portfolio: '200+ sessions documented',
        equipment: ['Canon R6', 'Prime lenses', 'Natural light kit'],
        price: '$250/session'
      },
      {
        id: 'photo-2',
        name: 'Casey Rivera',
        specialization: 'Family & Celebrations',
        experience: '6 years',
        rating: 4.8,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        portfolio: 'Family and anniversary specialist',
        equipment: ['Sony A7 IV', 'Prime lenses', 'Portable lighting'],
        price: '$220/session'
      }
    ],

    packages: [
      {
        id: 'hourly',
        name: 'Mini Session',
        price: '$150',
        duration: '45 minutes',
        features: [
          'Professional photographer',
          '20 to 30 edited photos',
          'Online gallery',
          'Basic retouching',
          'Same day highlights (5 photos)'
        ],
        bestFor: 'Arrivals, quick memories'
      },
      {
        id: 'daily',
        name: 'Half Day Session',
        price: '$320',
        duration: '3 hours',
        recommended: true,
        features: [
          'Professional photographer',
          '80 to 120 edited photos',
          'Online gallery',
          'Professional editing',
          'Next day preview (15 photos)'
        ],
        bestFor: 'Couples, families, celebrations'
      },
      {
        id: 'tour',
        name: 'Full Day Session',
        price: '$520',
        duration: '6 hours',
        features: [
          'Dedicated photographer',
          '150 to 220 edited photos',
          'Video highlights',
          'Professional editing',
          'USB and cloud delivery'
        ],
        bestFor: 'Events, proposals, milestones'
      },
      {
        id: 'video',
        name: 'Video Highlight Reel',
        price: '$280',
        duration: 'Custom',
        features: [
          'Professional videographer',
          '4K video recording',
          'Professional editing',
          '2 to 4 min highlight reel',
          'Music licensing included'
        ],
        bestFor: 'Reels, anniversary keepsakes'
      }
    ],

    services: [
      {
        name: 'Golden Hour Add-On',
        description: 'Sunset timing and glow-focused editing',
        price: '+$60',
        features: ['Golden hour timing', 'Warm color grade', 'Extra edits', 'Flexible scheduling']
      },
      {
        name: 'Extra Retouching',
        description: 'Enhanced retouching for select images',
        price: '$5/photo',
        features: ['Skin retouching', 'Object cleanup', 'Color grading', 'Natural finish']
      },
      {
        name: 'Photo Book',
        description: 'Premium printed keepsake book',
        price: '$95 (50 pages)',
        features: ['Professional design', 'Premium paper', 'Custom layout', 'Hardcover binding']
      },
      {
        name: 'Rush Delivery',
        description: 'Express editing and delivery',
        price: '+50% of package',
        features: ['24 to 48 hour delivery', 'Priority editing', 'Fast upload', 'Quick preview']
      }
    ],

    equipment: [
      'Professional mirrorless cameras',
      'Wide-angle to portrait lenses',
      '4K video cameras',
      'Gimbals and stabilizers',
      'Portable lighting',
      'Backup equipment'
    ],

    deliveryTimeline: {
      preview: '1-2 days (10-15 photos)',
      fullDelivery: '7-10 days',
      video: '10-14 days',
      photoBook: '21-30 days'
    }
  }
};

// Helper functions
export const getServiceBySlug = (slug) => {
  return servicesData[slug] || null;
};

export const getAllServices = () => {
  return Object.values(servicesData);
};

export const getServicesByCategory = (category) => {
  // Can be extended to filter services by category if needed
  return getAllServices();
};
