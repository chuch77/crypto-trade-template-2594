import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, User, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "@/contexts/CartContext"
import { useState } from "react"

const Header = () => {
  const { items, getTotalItems, getTotalPrice, updateQuantity } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header className="fixed top-0 w-full z-50 bg-gym-dark/95 backdrop-blur-md border-b border-gym-primary/20">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-gym-dark font-bold text-lg">G</span>
          </div>
          <span className="text-gym-text-light font-bold text-xl">GymSupps</span>
        </div>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <Link to="/" className="text-gym-text-muted hover:text-gym-primary transition-colors px-3 py-2">
                Inicio
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gym-text-muted hover:text-gym-primary transition-colors bg-transparent">
                Productos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-gym-dark-card border-gym-primary/20 p-6 min-w-[700px]">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h3 className="text-gym-text-light font-semibold mb-4">Categorías</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to="/productos" className="block px-3 py-2 text-gym-text-light hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors font-semibold">
                        Todos los Productos
                      </Link>
                      <Link to="/productos" className="block px-3 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors">
                        Packs Completos
                      </Link>
                      <Link to="/productos" className="block px-3 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors">
                        Proteínas Whey
                      </Link>
                      <Link to="/productos" className="block px-3 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors">
                        Pre-Entreno
                      </Link>
                      <Link to="/productos" className="block px-3 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors">
                        BCAA
                      </Link>
                      <Link to="/productos" className="block px-3 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors">
                        Creatina
                      </Link>
                    </div>
                  </div>
                  
                  <div className="w-64">
                    <h3 className="text-gym-text-light font-semibold mb-4">Destacados</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <Link to="/productos" className="group">
                        <img src="/src/assets/protein-hero.jpg" alt="Proteína Whey" className="w-full h-16 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform" />
                        <p className="text-xs text-gym-text-muted group-hover:text-gym-primary">Proteína Whey</p>
                      </Link>
                      <Link to="/productos" className="group">
                        <img src="/src/assets/bcaa-product.jpg" alt="BCAA" className="w-full h-16 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform" />
                        <p className="text-xs text-gym-text-muted group-hover:text-gym-primary">BCAA Advanced</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/beneficios" className="text-gym-text-muted hover:text-gym-primary transition-colors px-3 py-2">
                Beneficios
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacto" className="text-gym-text-muted hover:text-gym-primary transition-colors px-3 py-2">
                Contacto
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden text-gym-text-muted hover:text-gym-primary">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gym-dark border-gym-primary/20 w-80">
            <SheetHeader>
              <SheetTitle className="text-gym-text-light flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-gym-dark font-bold text-lg">G</span>
                </div>
                <span>GymSupps</span>
              </SheetTitle>
              <SheetDescription className="text-gym-text-muted">
                Tu tienda de suplementos premium
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-8 space-y-4">
              <Link 
                to="/" 
                className="block px-4 py-3 text-gym-text-light hover:text-gym-primary hover:bg-gym-primary/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              
              <div className="space-y-2">
                <div className="px-4 py-2 text-gym-text-light font-semibold">Productos</div>
                <div className="pl-4 space-y-1">
                  <Link 
                    to="/productos" 
                    className="block px-4 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Todos los Productos
                  </Link>
                  <Link 
                    to="/productos" 
                    className="block px-4 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Proteínas
                  </Link>
                  <Link 
                    to="/productos" 
                    className="block px-4 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pre-Entreno
                  </Link>
                  <Link 
                    to="/productos" 
                    className="block px-4 py-2 text-gym-text-muted hover:text-gym-primary hover:bg-gym-primary/10 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    BCAA
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/beneficios" 
                className="block px-4 py-3 text-gym-text-light hover:text-gym-primary hover:bg-gym-primary/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              
              <Link 
                to="/contacto" 
                className="block px-4 py-3 text-gym-text-light hover:text-gym-primary hover:bg-gym-primary/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gym-text-muted hover:text-gym-primary">
                <User className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gym-dark-card border-gym-primary/20 text-gym-text-light max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-6">
                  Crear Cuenta
                </DialogTitle>
                <DialogDescription className="text-center text-gym-text-muted mb-4">
                  Crea tu cuenta para acceder a ofertas exclusivas
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gym-text-light mb-2">
                    Nombre Completo
                  </label>
                  <Input 
                    className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gym-text-light mb-2">
                    Email
                  </label>
                  <Input 
                    type="email"
                    className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gym-text-light mb-2">
                    Contraseña
                  </label>
                  <Input 
                    type="password"
                    className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                    placeholder="Mínimo 8 caracteres"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gym-text-light mb-2">
                    Confirmar Contraseña
                  </label>
                  <Input 
                    type="password"
                    className="bg-gym-dark border-gym-primary/30 text-gym-text-light focus:border-gym-primary"
                    placeholder="Repite tu contraseña"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold py-3 mt-6"
                >
                  Crear Cuenta
                </Button>
                <p className="text-center text-sm text-gym-text-muted mt-4">
                  ¿Ya tienes cuenta?{" "}
                  <button type="button" className="text-gym-primary hover:underline">
                    Inicia Sesión
                  </button>
                </p>
              </form>
            </DialogContent>
          </Dialog>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gym-text-muted hover:text-gym-primary relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gym-primary text-gym-dark text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gym-dark-card border-gym-primary/20 text-gym-text-light max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-6">
                  Carrito de Compras
                </DialogTitle>
                <DialogDescription className="text-center text-gym-text-muted mb-4">
                  Revisa y modifica tus productos seleccionados
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 text-gym-text-muted mx-auto mb-4" />
                    <p className="text-gym-text-muted">Tu carrito está vacío</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-gym-dark rounded-lg">
                          <div className="flex items-center space-x-3">
                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-gym-text-muted">${item.price}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 bg-gym-primary/20 text-gym-primary rounded text-sm hover:bg-gym-primary/30"
                            >
                              -
                            </button>
                            <span className="text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 bg-gym-primary/20 text-gym-primary rounded text-sm hover:bg-gym-primary/30"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gym-primary/20 pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-xl font-bold text-gym-primary">${getTotalPrice().toFixed(2)}</span>
                      </div>
                      
                      <Link to="/checkout">
                        <Button className="w-full bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold py-3">
                          Proceder al Pago
                        </Button>
                      </Link>
                      
                      <Button variant="outline" className="w-full mt-2 border-gym-primary/30 text-gym-text-muted hover:text-gym-primary">
                        Seguir Comprando
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </DialogContent>
          </Dialog>
          
          <Button className="hidden sm:flex bg-gradient-primary hover:bg-gym-primary-dark text-gym-dark font-semibold">
            Comprar Ahora
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header