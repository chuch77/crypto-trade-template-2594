import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-sky-50 border-t border-gray-200 text-gray-800 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">TrailGuide</h3>
            <p className="text-gray-600 text-sm">
              Tu guía confiable para encontrar los mejores hoteles y destinos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Hoteles</a></li>
              <li><a href="#" className="hover:text-blue-600">Apartamentos</a></li>
              <li><a href="#" className="hover:text-blue-600">Vuelos</a></li>
              <li><a href="#" className="hover:text-blue-600">Coches de alquiler</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Soporte</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Centro de ayuda</a></li>
              <li><a href="#" className="hover:text-blue-600">Contacto</a></li>
              <li><a href="#" className="hover:text-blue-600">Términos de uso</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacidad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Síguenos</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 TrailGuide. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;