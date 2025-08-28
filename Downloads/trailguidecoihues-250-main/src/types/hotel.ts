export interface Hotel {
  id: string;
  name: string;
  location: string;
  priceRange: 'budget' | 'mid-range' | 'luxury';
  rating: number;
  amenities: string[];
  beachDistance: number; // in meters
  imageUrl?: string;
  description: string;
  highlights: string[];
  checkInTime: string;
  checkOutTime: string;
  contactInfo: {
    phone?: string;
    email?: string;
    website?: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface BeachDestination {
  id: string;
  name: string;
  location: string;
  beachType: 'sandy' | 'rocky' | 'pebble';
  activities: string[];
  facilities: string[];
  imageUrl?: string;
  description: string;
  highlights: string[];
  accessInfo: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}