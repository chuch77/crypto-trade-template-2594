import { useState } from 'react';
import { MapPin, Search, Store, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PostalCodeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [postalCode, setPostalCode] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para buscar tiendas cercanas
    console.log(`Buscando tiendas cerca del código postal: ${postalCode}`);
  };

  return (
    <div className="relative">
      {/* Botón para abrir/cerrar el dropdown */}
      <button 
        onClick={toggleDropdown}
        className="flex flex-col items-center text-xs hover:text-primary"
      >
        <MapPin className="h-5 w-5 mb-1" />
        <span>Código postal</span>
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Buscar tiendas cercanas</h3>
            <button 
              onClick={toggleDropdown}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          {/* Buscador de código postal */}
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Ingresa tu código postal"
                  className="pl-10"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
              <Button type="submit" size="sm">
                <Search className="h-4 w-4 mr-1" />
                Buscar
              </Button>
            </div>
          </form>

          {/* Opciones adicionales */}
          <div className="space-y-3 border-t pt-3">
            <a href="#" className="flex items-center text-sm text-primary hover:underline">
              <Store className="h-4 w-4 mr-2" />
              Ver inventario en tiendas
            </a>
            <a href="#" className="flex items-center text-sm text-primary hover:underline">
              <LogIn className="h-4 w-4 mr-2" />
              Iniciar sesión para guardar ubicación
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostalCodeDropdown;