import { useState, useMemo } from 'react';
import { Hotel, BeachDestination } from '../types/hotel';

export const useHotelFilters = (hotels: Hotel[], beaches: BeachDestination[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [selectedRating, setSelectedRating] = useState<string>('all');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredHotels = useMemo(() => {
    return hotels.filter(hotel => {
      // Category filter
      if (selectedCategory !== 'all') {
        switch (selectedCategory) {
          case 'beachfront':
            if (hotel.beachDistance > 100) return false;
            break;
          case 'resorts':
            if (!hotel.amenities.some(amenity => 
              amenity.toLowerCase().includes('todo incluido') || 
              amenity.toLowerCase().includes('all inclusive')
            )) return false;
            break;
          case 'boutique':
            if (hotel.priceRange !== 'luxury' && hotel.priceRange !== 'mid-range') return false;
            break;
          case 'budget':
            if (hotel.priceRange !== 'budget') return false;
            break;
        }
      }

      // Price range filter
      if (selectedPriceRange !== 'all' && hotel.priceRange !== selectedPriceRange) {
        return false;
      }

      // Rating filter
      if (selectedRating !== 'all') {
        const minRating = parseFloat(selectedRating);
        if (hotel.rating < minRating) return false;
      }

      return true;
    });
  }, [hotels, selectedCategory, selectedPriceRange, selectedRating]);

  const filteredBeaches = useMemo(() => {
    return beaches; // For now, return all beaches
  }, [beaches]);

  return {
    filters: {
      selectedCategory,
      setSelectedCategory,
      selectedPriceRange,
      setSelectedPriceRange,
      selectedRating,
      setSelectedRating,
      filtersOpen,
      setFiltersOpen,
    },
    filteredHotels,
    filteredBeaches,
  };
};