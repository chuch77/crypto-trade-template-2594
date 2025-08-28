import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { useLanguage } from '../context/LanguageContext';

interface HotelFiltersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (priceRange: string) => void;
  selectedRating: string;
  setSelectedRating: (rating: string) => void;
}

const HotelFiltersDialog: React.FC<HotelFiltersDialogProps> = ({
  open,
  onOpenChange,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedRating,
  setSelectedRating,
}) => {
  const { t } = useLanguage();

  const priceRanges = [
    { id: 'all', label: t('filterAll') },
    { id: 'budget', label: t('filterBudget') },
    { id: 'mid-range', label: t('filterMidRange') },
    { id: 'luxury', label: t('filterLuxury') },
  ];

  const ratings = [
    { id: 'all', label: t('filterAll') },
    { id: '4.0', label: '4.0+ ⭐' },
    { id: '4.5', label: '4.5+ ⭐' },
    { id: '4.8', label: '4.8+ ⭐' },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('filters')}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <Label className="text-base font-semibold">{t('filterByPrice')}</Label>
            <RadioGroup
              value={selectedPriceRange}
              onValueChange={setSelectedPriceRange}
              className="mt-2"
            >
              {priceRanges.map((range) => (
                <div key={range.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={range.id} id={`price-${range.id}`} />
                  <Label htmlFor={`price-${range.id}`}>{range.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <Label className="text-base font-semibold">{t('filterByRating')}</Label>
            <RadioGroup
              value={selectedRating}
              onValueChange={setSelectedRating}
              className="mt-2"
            >
              {ratings.map((rating) => (
                <div key={rating.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={rating.id} id={`rating-${rating.id}`} />
                  <Label htmlFor={`rating-${rating.id}`}>{rating.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={() => onOpenChange(false)}>
            {t('apply')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HotelFiltersDialog;