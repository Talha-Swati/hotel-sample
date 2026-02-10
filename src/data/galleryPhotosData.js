import newYearVideo from '../assets/videos/New Year Celebration video.mp4';
import tinyEscape3 from '../assets/tiny escape 3.jpg';

export const galleryPhotos = [
  {
    id: 1,
    title: 'Cedar Ridge Deck View',
    location: 'Texas Hill Country',
    category: 'exteriors',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Warm light and ridge views at golden hour',
    tags: ['deck', 'sunset', 'hill country']
  },
  {
    id: 2,
    title: 'Modern Tiny Home Interior',
    location: 'Dripping Springs, TX',
    category: 'interiors',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Minimalist interiors with soft, natural light',
    tags: ['interior', 'cozy', 'design']
  },
  {
    id: 3,
    title: 'Stargazing Deck',
    location: 'Wimberley, TX',
    category: 'night',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Clear night skies and quiet surroundings',
    tags: ['stars', 'night', 'deck']
  },
  {
    id: 4,
    title: 'Creekside Morning',
    location: 'Wimberley, TX',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1500534314209-a26db0f5aa84?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Soft morning light by the water',
    tags: ['creek', 'morning', 'nature']
  },
  {
    id: 5,
    title: 'Coffee Bar Setup',
    location: 'Texas Hill Country',
    category: 'interiors',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Start the day with a warm pour-over',
    tags: ['coffee', 'kitchen', 'details']
  },
  {
    id: 6,
    title: 'Outdoor Firepit',
    location: 'Marble Falls, TX',
    category: 'amenities',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Gather around the fire as the sun sets',
    tags: ['firepit', 'outdoor', 'evening']
  },
  {
    id: 7,
    title: 'Open Sky Views',
    location: 'Texas Hill Country',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Wide open skies and quiet trails',
    tags: ['sky', 'trails', 'quiet']
  },
  {
    id: 8,
    title: 'Minimal Bedroom Details',
    location: 'Dripping Springs, TX',
    category: 'interiors',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200&q=80',
    photographer: 'Tiny Escape',
    description: 'Soft textures and restful sleep',
    tags: ['bedroom', 'linens', 'calm']
  },
  {
    id: 9,
    title: 'New Year Celebration',
    location: 'Texas Hill Country',
    category: 'night',
    mediaType: 'video',
    image: tinyEscape3,
    video: newYearVideo,
    poster: tinyEscape3,
    photographer: 'Tiny Escape',
    description: 'A celebration highlight under the Hill Country sky',
    tags: ['new year', 'celebration', 'fireworks']
  }
];

export const categories = [
  { id: 'all', name: 'All Photos', icon: '' },
  { id: 'exteriors', name: 'Exteriors', icon: '' },
  { id: 'interiors', name: 'Interiors', icon: '' },
  { id: 'nature', name: 'Nature', icon: '' },
  { id: 'amenities', name: 'Amenities', icon: '' },
  { id: 'night', name: 'Night Sky', icon: '' }
];
