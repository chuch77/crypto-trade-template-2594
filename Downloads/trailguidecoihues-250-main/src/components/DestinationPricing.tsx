import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const DestinationPricing = () => {
  const [selectedDestination, setSelectedDestination] = useState('Acapulco de Juárez');

  const destinations = [
    'Acapulco de Juárez',
    'Mazatlán',
    'Puerto Vallarta',
    'Cancún',
    'Ciudad de México',
    'Huatulco',
    'Nuevo Vallarta'
  ];

  const monthlyPrices = [
    { month: 'julio', price: '$780 - $3,935', bgColor: 'bg-gray-100' },
    { month: 'agosto', price: '$770 - $3,830', bgColor: 'bg-emerald-100' },
    { month: 'septiembre', price: '$790 - $3,825', bgColor: 'bg-gray-100' },
    { month: 'octubre', price: '$900 - $4,210', bgColor: 'bg-gray-100' },
    { month: 'noviembre', price: '$1,025 - $5,000', bgColor: 'bg-gray-100' },
    { month: 'diciembre', price: '$1,045 - $5,910', bgColor: 'bg-gray-100' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Descubre el mejor momento para reservar tu próxima estancia</h2>
      {/* Destination tabs */}
      <div className="flex items-center mb-4 sm:mb-6 overflow-x-auto">
        <div className="flex space-x-3 sm:space-x-6 min-w-max">
          {destinations.map((destination) => (
            <button
              key={destination}
              onClick={() => setSelectedDestination(destination)}
              className={`pb-2 px-1 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                selectedDestination === destination
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-600 border-transparent hover:text-blue-600'
              }`}
            >
              {destination}
            </button>
          ))}
        </div>
        <ChevronRight className="ml-4 h-5 w-5 text-gray-400 flex-shrink-0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Beach image */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/lovable-uploads/18170e0a-a211-46c5-97e6-3a78c27402e0.png"
            alt="Beach sunset with palm trees"
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
          />
        </div>

        {/* Monthly pricing */}
        <div className="space-y-2 sm:space-y-3 order-1 lg:order-2">
          {monthlyPrices.map((item) => (
            <div
              key={item.month}
              className={`flex justify-between items-center p-2 sm:p-3 rounded-lg ${item.bgColor} hover:shadow-sm transition-shadow cursor-pointer`}
            >
              <span className="text-sm sm:text-base text-gray-800 font-medium capitalize">
                {item.month}
              </span>
              <div className="flex items-center">
                <span className="text-sm sm:text-base text-gray-800 font-semibold mr-2">
                  {item.price}
                </span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        Los precios se basan en el precio promedio por noche de los hoteles de 3 estrellas.
      </p>
    </div>
  );
};

export default DestinationPricing;