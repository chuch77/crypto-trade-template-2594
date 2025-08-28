import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const PopularSearches = () => {
  const [activeTab, setActiveTab] = useState('Ciudades');

  const destinations = [
    {
      name: 'Acapulco de Juárez',
      hotels: 618,
      price: '$2,340',
      image: '/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png'
    },
    {
      name: 'Mazatlán',
      hotels: 584,
      price: '$1,917',
      image: '/lovable-uploads/2669c291-db3b-4115-a8d9-0003a827de60.png'
    },
    {
      name: 'Puerto Vallarta',
      hotels: 1245,
      price: '$3,745',
      image: '/lovable-uploads/3b45435b-d0d0-4fb7-ac3b-73c18e21fd50.png'
    },
    {
      name: 'Cancún',
      hotels: 1748,
      price: '$3,309',
      image: '/lovable-uploads/5e6c44cc-a8c6-4013-8464-49f82efa40fc.png'
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Búsquedas populares</h2>
      
      {/* Tabs */}
      <div className="flex mb-4 sm:mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('Ciudades')}
          className={`pb-3 px-1 mr-4 sm:mr-8 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'Ciudades'
              ? 'text-gray-900 border-gray-900'
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
        >
          Ciudades
        </button>
        <button
          onClick={() => setActiveTab('Destinos')}
          className={`pb-3 px-1 text-xs sm:text-sm font-medium border-b-2 transition-colors ${
            activeTab === 'Destinos'
              ? 'text-gray-900 border-gray-900'
              : 'text-gray-500 border-transparent hover:text-gray-700'
          }`}
        >
          Destinos
        </button>
      </div>

      {/* Destination cards */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="relative h-32 sm:h-40 lg:h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  {destination.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  {destination.hotels.toLocaleString()} hoteles
                </p>
                <p className="text-sm sm:text-lg font-semibold text-gray-900">
                  {destination.price} <span className="text-xs sm:text-sm font-normal text-gray-600">prom.</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:shadow-lg transition-shadow">
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PopularSearches;