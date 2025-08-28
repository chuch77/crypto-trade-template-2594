import React, { useState } from 'react';
import { Hotel } from '../types/hotel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { MapPin, Star, ExternalLink, Wifi, Car, Utensils, Waves } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const getPriceRangeColor = (priceRange: string) => {
    switch (priceRange) {
      case 'budget':
        return 'bg-green-100 text-green-800';
      case 'mid-range':
        return 'bg-yellow-100 text-yellow-800';
      case 'luxury':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriceRangeText = (priceRange: string) => {
    switch (priceRange) {
      case 'budget':
        return t('filterBudget');
      case 'mid-range':
        return t('filterMidRange');
      case 'luxury':
        return t('filterLuxury');
      default:
        return priceRange;
    }
  };

  const getAmenityIcon = (amenity: string) => {
    const lowerAmenity = amenity.toLowerCase();
    if (lowerAmenity.includes('wifi')) return <Wifi className="w-4 h-4" />;
    if (lowerAmenity.includes('restaurante') || lowerAmenity.includes('restaurant')) return <Utensils className="w-4 h-4" />;
    if (lowerAmenity.includes('piscina') || lowerAmenity.includes('pool')) return <Waves className="w-4 h-4" />;
    if (lowerAmenity.includes('parking') || lowerAmenity.includes('estacionamiento')) return <Car className="w-4 h-4" />;
    return null;
  };

  const getDefaultImage = () => {
    return "/placeholder.svg";
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-fadeIn">
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img
          src={hotel.imageUrl || getDefaultImage()}
          alt={hotel.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getDefaultImage();
          }}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className={getPriceRangeColor(hotel.priceRange)}>
            {getPriceRangeText(hotel.priceRange)}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{hotel.rating}</span>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{hotel.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4 flex-shrink-0" /> {hotel.location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <span className="flex items-center gap-1">
              <Waves className="w-4 h-4" />
              {hotel.beachDistance}m {t('toBeach')}
            </span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-3">{hotel.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">{t('amenities')}</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className="flex items-center gap-1 text-xs bg-gray-100 rounded-full px-2 py-1">
                {getAmenityIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
            {hotel.amenities.length > 4 && (
              <span className="text-xs text-gray-500">+{hotel.amenities.length - 4} más</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">{t('highlights')}</h4>
          <div className="flex flex-wrap gap-1">
            {hotel.highlights.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <Button
            variant="default"
            className="flex-1 flex items-center gap-2 uppercase"
            onClick={() => {
              if (hotel.contactInfo.website) {
                window.open(hotel.contactInfo.website, '_blank', 'noopener,noreferrer');
              } else if (hotel.contactInfo.phone) {
                window.open(`tel:${hotel.contactInfo.phone}`, '_self');
              }
            }}
          >
            {t('bookNow')}
            <ExternalLink size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;