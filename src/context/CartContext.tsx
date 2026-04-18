import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  name: string;
  priceStr: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (name: string, priceStr: string) => void;
  removeFromCart: (name: string) => void;
  updateQuantity: (name: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^\d]/g, ''), 10) || 0;
  };

  const addToCart = (name: string, priceStr: string) => {
    setItems(prev => {
      const existing = prev.find(item => item.name === name);
      if (existing) {
        return prev.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { name, priceStr, price: parsePrice(priceStr), quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (name: string) => {
    setItems(prev => prev.filter(item => item.name !== name));
  };

  const updateQuantity = (name: string, delta: number) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.name === name) {
          const newQ = item.quantity + delta;
          return { ...item, quantity: newQ > 0 ? newQ : 0 };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
