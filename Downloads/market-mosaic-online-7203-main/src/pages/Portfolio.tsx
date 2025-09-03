
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Trash2, Plus, Minus } from 'lucide-react';

const Cart = () => {
  // Mock cart data
  const cartItems = [
    { id: 1, name: 'Basic White T-Shirt', brand: 'Nike', price: 29.99, quantity: 2, size: 'M', image: '/placeholder.svg' },
    { id: 2, name: 'Slim Fit Jeans', brand: 'Levi\'s', price: 89.99, quantity: 1, size: '32', image: '/placeholder.svg' },
    { id: 3, name: 'Sports Sneakers', brand: 'Adidas', price: 129.99, quantity: 1, size: '42', image: '/placeholder.svg' },
    { id: 4, name: 'Denim Jacket', brand: 'Zara', price: 59.99, quantity: 1, size: 'L', image: '/placeholder.svg' },
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  const updateQuantity = (id: number, change: number) => {
    // Function to update quantity (would be implemented with state management)
    console.log(`Update item ${id} quantity by ${change}`);
  };
  
  const removeItem = (id: number) => {
    // Function to remove item (would be implemented with state management)
    console.log(`Remove item ${id}`);
  };
  
  return (
    <PageLayout title="My Cart">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="bg-card rounded-lg p-3 sm:p-6 shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Items in your Cart ({cartItems.length})</h2>
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 border rounded-lg">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-gray-500">IMG</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm sm:text-base truncate">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.brand}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Size: {item.size}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <span className="w-6 sm:w-8 text-center text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium text-sm sm:text-base">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">${item.price.toFixed(2)} each</p>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 order-1 lg:order-2">
          <div className="bg-card rounded-lg p-3 sm:p-6 shadow lg:sticky lg:top-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Order Summary</h2>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between text-sm sm:text-base">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-base sm:text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            {shipping > 0 && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-blue-50 rounded-lg">
                <p className="text-xs sm:text-sm text-blue-700">
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </p>
              </div>
            )}
            
            <button className="w-full mt-4 sm:mt-6 bg-primary text-primary-foreground py-2 sm:py-3 rounded-md hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base">
              Proceed to Checkout
            </button>
            
            <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>✓</span>
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>✓</span>
                <span>Free returns within 30 days</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <span>✓</span>
                <span>Secure payment guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cart;
