import React, { useState } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, User, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate, Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import SignupModal from './SignupModal';
import UserMenu from './UserMenu';

const TrivagoNavbar = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(language === 'es' ? 'Español' : 'English');
  const [selectedCurrency, setSelectedCurrency] = useState('MXN - Peso mexicano');
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleApply = () => {
    const newLang = selectedLanguage === 'Español' ? 'es' : 'en';
    navigate(`/${newLang}`);
    setIsLanguageModalOpen(false);
  };

  const handleUserClick = () => {
    if (isLoggedIn) {
      setIsUserMenuOpen(!isUserMenuOpen);
    } else {
      setIsSignupModalOpen(true);
    }
  };

  const handleSignupSuccess = () => {
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg width="120" height="32" viewBox="0 0 120 32" className="text-blue-600">
                <text x="0" y="24" className="fill-current font-bold text-2xl">TrailGuide</text>
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/hotels" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Hoteles
              </Link>
              <Link to="/apartments" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Apartamentos
              </Link>
              <Link to="/flights" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Vuelos
              </Link>
              <Link to="/car-rental" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Coches de alquiler
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600" onClick={() => setIsLanguageModalOpen(true)}>
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>
            <div className="relative">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600" onClick={handleUserClick}>
                {isLoggedIn ? (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    J
                  </div>
                ) : (
                  <>
                    <User className="h-4 w-4 mr-2" />
                    Iniciar sesión
                  </>
                )}
              </Button>
              <UserMenu 
                isOpen={isUserMenuOpen} 
                onClose={() => setIsUserMenuOpen(false)}
                onLogout={handleLogout}
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link to="/hotels" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
            Hoteles
          </Link>
          <Link to="/apartments" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
            Apartamentos
          </Link>
          <Link to="/flights" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
            Vuelos
          </Link>
          <Link to="/car-rental" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
            Coches de alquiler
          </Link>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-3">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600 mr-3" onClick={() => setIsLanguageModalOpen(true)}>
                <Globe className="h-4 w-4 mr-2" />
                {language.toUpperCase()}
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600" onClick={handleUserClick}>
                {isLoggedIn ? (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    J
                  </div>
                ) : (
                  <>
                    <User className="h-4 w-4 mr-2" />
                    Iniciar sesión
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Language and Currency Modal */}
      <Dialog open={isLanguageModalOpen} onOpenChange={setIsLanguageModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">Selecciona el idioma y la moneda</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Idioma
              </label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Español">Español</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Moneda
              </label>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MXN - Peso mexicano">MXN - Peso mexicano</SelectItem>
                  <SelectItem value="USD - Dólar estadounidense">USD - Dólar estadounidense</SelectItem>
                  <SelectItem value="EUR - Euro">EUR - Euro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={handleApply} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Aplicar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <SignupModal 
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onSignupSuccess={handleSignupSuccess}
      />
    </nav>
  );
};

export default TrivagoNavbar;