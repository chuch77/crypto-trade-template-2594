import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import MegaMenu from "./MegaMenu";
import PostalCodeDropdown from "./PostalCodeDropdown";
import OrdersDropdown from "./OrdersDropdown";
import LoginDropdown from "./LoginDropdown";
import FavoritesDropdown from "./FavoritesDropdown";
import CartDropdown from "./CartDropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      {/* Main Header */}
      <MegaMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Hamburger Menu */}
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-primary">ElectroZone</h1>
            <Button 
              variant="ghost" 
              size="icon" 
              className="flex md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6 text-primary" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6 text-primary" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 lg:mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar productos..." 
                className="pl-10 pr-20 border-primary focus:ring-primary"
              />
              <Button className="absolute right-0 top-0 h-full rounded-l-none bg-primary hover:bg-primary/90 px-3">
                <span className="hidden lg:inline">Buscar</span>
                <Search className="h-4 w-4 lg:hidden" />
              </Button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <LoginDropdown />
              <FavoritesDropdown />
              <OrdersDropdown />
              <PostalCodeDropdown />
            </div>
            
            <CartDropdown />

            <Button variant="outline" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;