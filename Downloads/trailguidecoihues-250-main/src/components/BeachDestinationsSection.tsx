import React from 'react';
import { BeachDestination } from '../types/hotel';
import { useLanguage } from '../context/LanguageContext';
import BeachDestinationCard from './BeachDestinationCard';
import { useIsMobile } from '../hooks/use-mobile';

interface BeachDestinationsSectionProps {
  beaches: BeachDestination[];
  showSection: boolean;
}

const BeachDestinationsSection: React.FC<BeachDestinationsSectionProps> = ({ 
  beaches, 
  showSection 
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  if (!showSection || beaches.length === 0) return null;

  return (
    <section className={`${isMobile ? 'mb-6' : 'mb-12'} animate-fadeIn`}>
      <h2 className={`text-2xl font-bold text-black ${isMobile ? 'mb-3' : 'mb-6'} text-center`}>
        {t('beaches')}
      </h2>
      
      <div className={`grid gap-6 ${
        isMobile 
          ? 'grid-cols-1' 
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {beaches.map((beach) => (
          <BeachDestinationCard key={beach.id} beach={beach} />
        ))}
      </div>
    </section>
  );
};

export default BeachDestinationsSection;