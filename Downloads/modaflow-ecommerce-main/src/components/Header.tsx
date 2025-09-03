import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/contexts/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showHombreMenu, setShowHombreMenu] = useState(false);
  const [showMujerMenu, setShowMujerMenu] = useState(false);
  const [hombreTimeout, setHombreTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mujerTimeout, setMujerTimeout] = useState<NodeJS.Timeout | null>(null);

  
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, logout } = useAuth();
  
  // Force re-render when cart changes
  useEffect(() => {
    // Trigger re-render when cart changes
  }, [cartItems]);

  const navigation = [
    { name: 'Novedades', href: '/novedades' },
  ];

  const hombreCategories = [
    { name: 'Camisas', href: '/productos?category=hombre&type=camisas' },
    { name: 'Playeras', href: '/productos?category=hombre&type=playeras' },
    { name: 'Jeans', href: '/productos?category=hombre&type=jeans' },
    { name: 'Pantalones', href: '/productos?category=hombre&type=pantalones' },
    { name: 'Sudaderas', href: '/productos?category=hombre&type=sudaderas' },
    { name: 'Chaquetas', href: '/productos?category=hombre&type=chaquetas' },
    { name: 'Zapatos', href: '/productos?category=hombre&type=zapatos' },
    { name: 'Relojes', href: '/productos?category=relojes' },
  ];

  const mujerCategories = [
    { name: 'Vestidos', href: '/productos?category=mujer&type=vestidos' },
    { name: 'Blusas', href: '/productos?category=mujer&type=blusas' },
    { name: 'Faldas', href: '/productos?category=mujer&type=faldas' },
    { name: 'Jeans', href: '/productos?category=mujer&type=jeans' },
    { name: 'Chaquetas', href: '/productos?category=mujer&type=chaquetas' },
    { name: 'Zapatos', href: '/productos?category=mujer&type=zapatos' },
    { name: 'Bolsas', href: '/productos?category=mujer&type=bolsas' },
    { name: 'Accesorios', href: '/productos?category=mujer&type=accesorios' },
  ];



  const suggestions = [
    'vestido', 'jeans', 'playera', 'sudadera', 'camisa', 'falda', 'shorts', 'cardigan',
    'negro', 'blanco', 'azul', 'rojo', 'rosa', 'gris'
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = suggestions.filter(s => 
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSuggestions(filtered.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigate(`/productos?search=${encodeURIComponent(query.trim())}`);
      setShowSuggestions(false);
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          {/* Main header */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-[hsl(var(--brand))] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors">
                ModaFlow
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {/* Hombre with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (hombreTimeout) clearTimeout(hombreTimeout);
                  setShowHombreMenu(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setShowHombreMenu(false), 300);
                  setHombreTimeout(timeout);
                }}
              >
                <Link
                  to="/hombre"
                  className={`font-medium transition-colors hover:text-[hsl(var(--brand))] relative flex items-center gap-1 ${
                    isActive('/hombre') ? 'text-[hsl(var(--brand))]' : 'text-gray-700'
                  }`}
                >
                  Hombre
                  <ChevronDown className="h-4 w-4" />
                  {isActive('/hombre') && (
                    <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[hsl(var(--brand))]"></span>
                  )}
                </Link>
                
                <AnimatePresence>
                  {showHombreMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    >
                      <div className="py-2">
                        {hombreCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[hsl(var(--brand))] transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mujer with dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => {
                  if (mujerTimeout) clearTimeout(mujerTimeout);
                  setShowMujerMenu(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setShowMujerMenu(false), 300);
                  setMujerTimeout(timeout);
                }}
              >
                <Link
                  to="/mujer"
                  className={`font-medium transition-colors hover:text-[hsl(var(--brand))] relative flex items-center gap-1 ${
                    isActive('/mujer') ? 'text-[hsl(var(--brand))]' : 'text-gray-700'
                  }`}
                >
                  Mujer
                  <ChevronDown className="h-4 w-4" />
                  {isActive('/mujer') && (
                    <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[hsl(var(--brand))]"></span>
                  )}
                </Link>
                
                <AnimatePresence>
                  {showMujerMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                    >
                      <div className="py-2">
                        {mujerCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[hsl(var(--brand))] transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>


              
              {/* Other navigation items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-[hsl(var(--brand))] relative ${
                    isActive(item.href) ? 'text-[hsl(var(--brand))]' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-[hsl(var(--brand))]"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center space-x-4">
              {/* Search - Desktop */}
              <div className="hidden lg:flex relative">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Input
                    type="search"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 border-gray-200 focus:border-black focus:ring-black"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </form>
                
                {/* Search Suggestions */}
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 text-sm"
                          onClick={() => handleSearch(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-gray-100"
                  asChild
                >
                  <Link to="/favoritos">
                    <Heart className="h-5 w-5 text-gray-700" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>
                </Button>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative hover:bg-gray-100"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="h-5 w-5 text-gray-700" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[hsl(var(--brand))] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>

                {user ? (
                  <div className="relative group">
                    <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                      <User className="h-5 w-5 text-gray-700" />
                    </Button>
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="py-2">
                        <div className="px-4 py-2 text-sm text-gray-900 border-b">
                          {user.name}
                        </div>
                        <Link
                          to="/my-orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Mis pedidos
                        </Link>
                        {user.email === 'admin@modaflow.com' && (
                          <Link
                            to="/admin"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            Administración
                          </Link>
                        )}
                        <button
                          onClick={logout}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          Cerrar sesión
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100" asChild>
                    <Link to="/login">
                      <User className="h-5 w-5 text-gray-700" />
                    </Link>
                  </Button>
                )}

                {/* Mobile menu button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 border-gray-200 focus:border-black focus:ring-black"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {/* Hombre section */}
                  <div>
                    <Link
                      to="/hombre"
                      className={`font-medium transition-colors hover:text-[hsl(var(--brand))] ${
                        isActive('/hombre') ? 'text-[hsl(var(--brand))]' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hombre
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {hombreCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block text-sm text-gray-700 hover:text-[hsl(var(--brand))] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mujer section */}
                  <div>
                    <Link
                      to="/mujer"
                      className={`font-medium transition-colors hover:text-[hsl(var(--brand))] ${
                        isActive('/mujer') ? 'text-[hsl(var(--brand))]' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mujer
                    </Link>
                    <div className="ml-4 mt-2 space-y-2">
                      {mujerCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block text-sm text-gray-700 hover:text-[hsl(var(--brand))] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>


                  
                  {/* Other navigation items */}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`font-medium transition-colors hover:text-[hsl(var(--brand))] ${
                        isActive(item.href) ? 'text-[hsl(var(--brand))]' : 'text-gray-700'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/favoritos"
                    className="font-medium text-gray-700 hover:text-[hsl(var(--brand))] transition-colors flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="h-4 w-4" />
                    Favoritos {wishlistCount > 0 && `(${wishlistCount})`}
                  </Link>
                </nav>
              </div>
            </div>
          )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </>
  );
};

export default Header;