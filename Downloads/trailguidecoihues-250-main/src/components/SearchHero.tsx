import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, X, Calendar, Users } from 'lucide-react';

const SearchHero = () => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            ¿Buscas una gran oferta de hotel?
          </h1>
          <p className="text-base sm:text-lg text-orange-600 font-medium">
            Ahorra hasta un 50% en tu próxima estancia de hotel
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Destination */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destino
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Tulum"
                  className="pl-10 pr-10 h-10 sm:h-12 border-gray-300 text-sm sm:text-base"
                />
                <X className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 cursor-pointer" />
              </div>
            </div>

            {/* Check-in/Check-out */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Llegada/salida
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Fechas"
                  className="pl-10 h-10 sm:h-12 border-gray-300 text-sm sm:text-base"
                  readOnly
                />
              </div>
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Huéspedes y habs.
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="2 huéspedes, 1 habitación"
                  className="pl-10 h-10 sm:h-12 border-gray-300 text-sm sm:text-base"
                  readOnly
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end sm:col-span-2 lg:col-span-1">
              <Button className="w-full h-10 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm sm:text-base">
                Buscar
              </Button>
            </div>
          </div>
        </div>

        {/* Partner logos */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-gray-500 text-sm sm:text-base">
          <span className="font-semibold">Booking.com</span>
          <span className="font-semibold">Expedia</span>
          <span className="font-semibold">Hotels.com</span>
          <span className="font-semibold">Vrbo</span>
          <span className="font-semibold">Agoda</span>
          <span className="font-semibold">Trip.com</span>
          <span className="text-xs sm:text-sm">Y cientos de otros socios</span>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;