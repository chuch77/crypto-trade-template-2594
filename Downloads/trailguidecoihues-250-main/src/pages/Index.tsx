
import React from 'react';
import { hotels } from '../data/hotels';
import { beachDestinations } from '../data/beachDestinations';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import HotelFiltersDialog from '../components/HotelFiltersDialog';
import HotelCategoryFilter from '../components/HotelCategoryFilter';
import HotelsSection from '../components/HotelsSection';
import BeachDestinationsSection from '../components/BeachDestinationsSection';
import { useHotelFilters } from '../hooks/useHotelFilters';
import DestinationPricing from '../components/DestinationPricing';
import PopularSearches from '../components/PopularSearches';
import { Helmet } from 'react-helmet';
import { Separator } from '../components/ui/separator';
import { useIsMobile } from '../hooks/use-mobile';
import Footer from '../components/Footer';
import TrivagoNavbar from '../components/TrivagoNavbar';
import SearchHero from '../components/SearchHero';

const Index = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const {
    filters,
    filteredHotels,
    filteredBeaches,
  } = useHotelFilters(hotels, beachDestinations);

  const shouldShowHotels = filters.selectedCategory === 'all' || 
    ['beachfront', 'resorts', 'boutique', 'budget'].includes(filters.selectedCategory);
  
  // Get category-specific hotels
  const categoryHotels = filters.selectedCategory === 'all' ? filteredHotels : 
    filteredHotels.filter(hotel => {
      switch (filters.selectedCategory) {
        case 'beachfront':
          return hotel.beachDistance <= 100;
        case 'resorts':
          return hotel.amenities.some(amenity => 
            amenity.toLowerCase().includes('todo incluido') || 
            amenity.toLowerCase().includes('all inclusive')
          );
        case 'boutique':
          return hotel.priceRange === 'luxury' || hotel.priceRange === 'mid-range';
        case 'budget':
          return hotel.priceRange === 'budget';
        default:
          return true;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky to-white">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" />
      </Helmet>
      <TrivagoNavbar />
      <SearchHero />
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-8">
        <header className={`text-center ${isMobile ? 'mb-4 pt-6' : 'mb-10 pt-12 sm:pt-0'} animate-fadeIn`}>
          <div className={`flex justify-center ${isMobile ? 'mb-3 mt-5' : 'mb-6'}`}>
            <div className="text-blue-600 font-bold text-4xl md:text-5xl">
              TrailGuide
            </div>
          </div>
          <h1 className={`text-4xl font-bold text-black ${isMobile ? 'mb-1' : 'mb-2'}`}>
            {t('title')}
          </h1>
          <p className={`text-xl text-stone ${isMobile ? 'mb-2' : 'mb-4'}`}>
            {t('tagline')}
          </p>
        </header>

        <Separator className={`${isMobile ? 'my-2' : 'my-4'} bg-[#B8BCC2] h-[1px] w-full shadow-sm`} />

        <HotelCategoryFilter 
          selectedCategory={filters.selectedCategory}
          setSelectedCategory={filters.setSelectedCategory}
          setFiltersOpen={filters.setFiltersOpen}
        />

        <Separator className={`${isMobile ? 'my-2' : 'my-4'} bg-[#B8BCC2] h-[1px] w-full shadow-sm`} />

        <HotelFiltersDialog 
          open={filters.filtersOpen}
          onOpenChange={filters.setFiltersOpen}
          selectedPriceRange={filters.selectedPriceRange}
          setSelectedPriceRange={filters.setSelectedPriceRange}
          selectedRating={filters.selectedRating}
          setSelectedRating={filters.setSelectedRating}
        />

        <HotelsSection 
          hotels={categoryHotels}
          showSection={shouldShowHotels}
          sectionTitle={filters.selectedCategory !== 'all' ? 
            (() => {
              switch (filters.selectedCategory) {
                case 'beachfront': return t('categoryBeachfront');
                case 'resorts': return t('categoryResorts');
                case 'boutique': return t('categoryBoutique');
                case 'budget': return t('categoryBudget');
                default: return t('hotels');
              }
            })() : 
            t('hotels')
          }
        />

        <DestinationPricing />
        
        <PopularSearches />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
