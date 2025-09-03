import { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

const CartDrawer = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}: CartDrawerProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getItemPrice = (item: CartItem) => {
    return item.product.is_on_sale 
      ? item.product.price * (1 - item.product.discount_percent / 100)
      : item.product.price;
  };

  const subtotal = items.reduce((sum, item) => {
    return sum + (getItemPrice(item) * item.quantity);
  }, 0);

  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsLoading(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // Here you would integrate with your payment processor
    alert('Redirigiendo al checkout...');
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-96 p-0 flex flex-col">
        <SheetHeader className="p-6 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold text-gray-900">
              Carrito de compras
            </SheetTitle>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              {items.length} {items.length === 1 ? 'artículo' : 'artículos'}
            </Badge>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-gray-500 mb-6">
              Agrega algunos productos para comenzar
            </p>
            <Button onClick={onClose} className="bg-black text-white hover:bg-gray-800">
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="w-20 h-20 bg-white rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                        {item.product.title}
                      </h4>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                        <span>Color: {item.selectedColor}</span>
                        <span>Talla: {item.selectedSize}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-gray-300"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-gray-300"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold text-gray-900">
                            {formatPrice(getItemPrice(item) * item.quantity)}
                          </div>
                          {item.product.is_on_sale && (
                            <div className="text-xs text-gray-500 line-through">
                              {formatPrice(item.product.price * item.quantity)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-red-500 flex-shrink-0"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Cart Summary */}
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Envío</span>
                  <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
                  </span>
                </div>
                {subtotal < 999 && (
                  <div className="text-xs text-gray-500">
                    Agrega {formatPrice(999 - subtotal)} más para envío gratis
                  </div>
                )}
                <Separator />
                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => window.location.href = '/checkout'}
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base font-semibold"
                >
                  Proceder al pago
                </Button>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Continuar comprando
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      localStorage.removeItem('modaflow-cart');
                      window.location.reload();
                    }}
                    className="px-4 border-red-300 text-red-700 hover:bg-red-50"
                  >
                    Limpiar
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex justify-center items-center gap-4 text-xs text-gray-500 pt-2">
                <span className="flex items-center gap-1">
                  🔒 Compra segura
                </span>
                <span className="flex items-center gap-1">
                  🚚 Envío rápido
                </span>
                <span className="flex items-center gap-1">
                  🔄 Devoluciones fáciles
                </span>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;