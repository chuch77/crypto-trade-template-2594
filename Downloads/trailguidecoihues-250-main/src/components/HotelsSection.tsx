import React from 'react';
import { Hotel } from '../types/hotel';
import { useLanguage } from '../context/LanguageContext';
import HotelCard from './HotelCard';
import { useIsMobile } from '../hooks/use-mobile';

interface HotelsSectionProps {
  hotels: Hotel[];
  showSection: boolean;
  sectionTitle?: string;
}

const HotelsSection: React.FC<HotelsSectionProps> = ({ 
  hotels, 
  showSection, 
  sectionTitle 
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  if (!showSection || hotels.length === 0) return null;

  return (
    <section className={`${isMobile ? 'mb-6' : 'mb-12'} animate-fadeIn`}>
      <h2 className={`text-2xl font-bold text-black ${isMobile ? 'mb-3' : 'mb-6'} text-center`}>
        {sectionTitle || t('hotels')}
      </h2>
      
      {hotels.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">{t('noHotelsFound')}</p>
        </div>
      ) : (
        <div className={`grid gap-6 ${
          isMobile 
            ? 'grid-cols-1' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HotelsSection;