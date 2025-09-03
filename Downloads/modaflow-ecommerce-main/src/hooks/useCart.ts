import { useState, useEffect } from 'react';
import { CartItem } from '@/components/CartDrawer';
import { Product } from '@/data/products';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('modaflow-cart');
    if (saved) {
      const items = JSON.parse(saved);
      setCartItems(items);
      setCartCount(items.reduce((sum: number, item: CartItem) => sum + item.quantity, 0));
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('modaflow-cart', JSON.stringify(cartItems));
    setCartCount(cartItems.reduce((sum, item) => sum + item.quantity, 0));
  }, [cartItems]);

  const addToCart = (
    product: Product, 
    selectedColor: string, 
    selectedSize: string, 
    quantity: number = 1
  ) => {
    const itemId = `${product.id}-${selectedColor}-${selectedSize}`;
    
    const newItem: CartItem = {
      id: itemId,
      product,
      quantity,
      selectedColor,
      selectedSize
    };

    setCartItems(currentItems => {
      const existingIndex = currentItems.findIndex(item => item.id === itemId);
      
      let updatedItems;
      if (existingIndex >= 0) {
        updatedItems = [...currentItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + quantity
        };
      } else {
        updatedItems = [...currentItems, newItem];
      }
      
      // Update count immediately
      const newCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(newCount);
      
      return updatedItems;
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems(prev => {
      const updated = prev.map(item =>
        item.id === itemId
          ? { ...item, quantity }
          : item
      );
      const newCount = updated.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(newCount);
      return updated;
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prev => {
      const updated = prev.filter(item => item.id !== itemId);
      const newCount = updated.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(newCount);
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product.is_on_sale 
        ? item.product.price * (1 - item.product.discount_percent / 100)
        : item.product.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    cartCount
  };
};