import React from 'react';
import { BeachDestination } from '../types/hotel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { MapPin, Waves, Sun, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from './ui/badge';

interface BeachDestinationCardProps {
  beach: BeachDestination;
}

const BeachDestinationCard: React.FC<BeachDestinationCardProps> = ({ beach }) => {
  const { t } = useLanguage();

  const getBeachTypeIcon = (type: string) => {
    switch (type) {
      case 'sandy':
        return <Sun className="w-4 h-4" />;
      case 'rocky':
        return <Camera className="w-4 h-4" />;
      case 'pebble':
        return <Waves className="w-4 h-4" />;
      default:
        return <Waves className="w-4 h-4" />;
    }
  };

  const getBeachTypeText = (type: string) => {
    switch (type) {
      case 'sandy':
        return 'Arena';
      case 'rocky':
        return 'Rocosa';
      case 'pebble':
        return 'Guijarros';
      default:
        return type;
    }
  };

  const getDefaultImage = () => {
    return "/placeholder.svg";
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 animate-fadeIn">
      <div className="relative overflow-hidden rounded-t-lg h-48">
        <img
          src={beach.imageUrl || getDefaultImage()}
          alt={beach.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getDefaultImage();
          }}
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
            {getBeachTypeIcon(beach.beachType)}
            {getBeachTypeText(beach.beachType)}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-semibold">{beach.name}</CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <MapPin className="w-4 h-4 flex-shrink-0" /> {beach.location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-gray-700 mb-4 line-clamp-3">{beach.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">{t('beachActivities')}</h4>
          <div className="flex flex-wrap gap-2">
            {beach.activities.slice(0, 4).map((activity, index) => (
              <div key={index} className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1">
                {activity}
              </div>
            ))}
            {beach.activities.length > 4 && (
              <span className="text-xs text-gray-500">+{beach.activities.length - 4} más</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">{t('facilities')}</h4>
          <div className="flex flex-wrap gap-2">
            {beach.facilities.slice(0, 3).map((facility, index) => (
              <div key={index} className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1">
                {facility}
              </div>
            ))}
            {beach.facilities.length > 3 && (
              <span className="text-xs text-gray-500">+{beach.facilities.length - 3} más</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">{t('highlights')}</h4>
          <div className="flex flex-wrap gap-1">
            {beach.highlights.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-2">{t('accessInfo')}</h4>
          <p className="text-sm text-gray-600">{beach.accessInfo}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BeachDestinationCard;