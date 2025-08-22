import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir la interfaz para un producto en el carrito
export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

// Definir la interfaz para el contexto del carrito
interface CartContextType {
  items: CartItem[];
  addToCart: (product: any, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartCount: () => number;
  getCartTotal: () => string;
}

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del contexto
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Agregar un producto al carrito
  const addToCart = (product: any, quantity = 1) => {
    setItems(prevItems => {
      // Verificar si el producto ya está en el carrito
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        // Actualizar la cantidad si ya existe
        return prevItems.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Agregar nuevo producto al carrito
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity
        }];
      }
    });
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Actualizar la cantidad de un producto
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Vaciar el carrito
  const clearCart = () => {
    setItems([]);
  };

  // Obtener el número total de productos en el carrito
  const getCartCount = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener el precio total del carrito
  const getCartTotal = () => {
    const total = items.reduce((sum, item) => {
      // Convertir el precio de string a número
      const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return sum + (price * item.quantity);
    }, 0);
    
    return `$${total.toFixed(2)}`;
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartCount,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};