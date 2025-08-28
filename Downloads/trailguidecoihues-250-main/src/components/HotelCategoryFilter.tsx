import React from 'react';
import { Button } from './ui/button';
import { Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

interface HotelCategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  setFiltersOpen: (open: boolean) => void;
}

const HotelCategoryFilter: React.FC<HotelCategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  setFiltersOpen,
}) => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const categories = [
    { id: 'all', label: t('filterAll') },
    { id: 'beachfront', label: t('categoryBeachfront') },
    { id: 'resorts', label: t('categoryResorts') },
    { id: 'boutique', label: t('categoryBoutique') },
    { id: 'budget', label: t('categoryBudget') },
  ];

  return (
    <div className={`flex flex-col ${isMobile ? 'gap-2' : 'gap-4'} animate-fadeIn`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-black">{t('category')}</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2"
        >
          <Filter className="w-4 h-4" />
          {t('filters')}
        </Button>
      </div>
      
      <div className={`flex ${isMobile ? 'flex-col gap-2' : 'flex-wrap gap-2'}`}>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            size={isMobile ? 'default' : 'sm'}
            onClick={() => setSelectedCategory(category.id)}
            className={`${isMobile ? 'w-full justify-start' : ''} transition-all duration-200`}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HotelCategoryFilter;