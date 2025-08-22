import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, getCartCount, getCartTotal } = useCart();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Botón para abrir/cerrar el dropdown */}
      <button 
        onClick={toggleDropdown}
        className="flex flex-col items-center text-xs hover:text-primary relative"
      >
        <ShoppingCart className="h-5 w-5 mb-1" />
        <span>Carrito</span>
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {getCartCount()}
          </span>
        )}
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-gray-900">Mi carrito ({getCartCount()})</h3>
            <button 
              onClick={toggleDropdown}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {items.length > 0 ? (
            <>
              <div className="max-h-60 overflow-y-auto space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                    <div className="h-16 w-16 bg-gray-100 rounded flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150';
                        }}
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-sm text-primary font-bold">{item.price}</p>
                      <div className="flex items-center mt-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-primary"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-primary"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-primary">{getCartTotal()}</span>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Proceder al pago
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Tu carrito está vacío</p>
              <Button 
                className="mt-3 bg-primary hover:bg-primary/90"
                onClick={toggleDropdown}
              >
                Seguir comprando
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;