'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItemColor {
  id: string;
  name: string;
  hex: string;
}

export interface CartItemBase {
  id: string;
  name: string;
  extraPrice?: number;
}

export interface CartItemAddon {
  id: string;
  name: string;
  price: number;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  slug: string;
  image: string;
  unitPrice: number;
  quantity: number;
  color: CartItemColor;
  base: CartItemBase;
  embroideryText?: string;
  addons?: CartItemAddon[];
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  pixTotal: number;
  checkoutWhatsApp: () => void;
  checkoutDirectWhatsApp: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem('nude_rest_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading cart from storage', e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('nude_rest_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to storage', e);
    }
  }, [cart, isMounted]);

  const generateItemId = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    const addonsKey = (item.addons || []).map(a => a.id).sort().join('_');
    return `${item.productId}-${item.color.id}-${item.base.id}-${encodeURIComponent(item.embroideryText || '')}-${addonsKey}`;
  };

  const addToCart = (item: Omit<CartItem, 'id' | 'quantity'> & { quantity?: number }) => {
    const id = generateItemId(item);
    const qty = item.quantity || 1;

    setCart(prev => {
      const existing = prev.find(i => i.id === id);
      if (existing) {
        return prev.map(i => i.id === id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { ...item, id, quantity: qty }];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cart.reduce((sum, item) => {
    const itemUnitTotal = item.unitPrice + (item.base.extraPrice || 0) + (item.addons || []).reduce((aSum, a) => aSum + a.price, 0);
    return sum + (itemUnitTotal * item.quantity);
  }, 0);

  const pixTotal = subtotal * 0.95;

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `*NOVA ENCOMENDA PERSONALIZADA — ATELIER NUDE REST*%0A%0A`;
    message += `Olá! Gostaria de finalizar a minha encomenda de macas feitas por medida:%0A%0A`;

    cart.forEach((item, index) => {
      const itemUnitTotal = item.unitPrice + (item.base.extraPrice || 0) + (item.addons || []).reduce((aSum, a) => aSum + a.price, 0);
      const itemTotal = itemUnitTotal * item.quantity;

      message += `*Artigo ${index + 1}: ${item.name}* (Qtd: ${item.quantity})%0A`;
      message += `• Tonalidade do Revestimento: ${item.color.name}%0A`;
      message += `• Estrutura da Base / Pés: ${item.base.name}%0A`;
      if (item.embroideryText) {
        message += `• Gravação da Marca: "${item.embroideryText}"%0A`;
      }
      if (item.addons && item.addons.length > 0) {
        message += `• Opcionais: ${item.addons.map(a => a.name).join(', ')}%0A`;
      }
      message += `• Subtotal Artigo: ${itemTotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €%0A%0A`;
    });

    message += `──────────────────%0A`;
    message += `*VALOR TOTAL:* ${subtotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €%0A`;
    message += `*VALOR COM 5% NO PAGAMENTO IMEDIATO:* ${pixTotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} €%0A%0A`;
    message += `Poderiam confirmar o prazo de confeção artesanal e os dados para pagamento?`;

    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const checkoutDirectWhatsApp = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    const itemUnitTotal = item.unitPrice + (item.base.extraPrice || 0) + (item.addons || []).reduce((aSum, a) => aSum + a.price, 0);
    const pix = itemUnitTotal * 0.95;

    let message = `*ENCOMENDA DIRETA — ATELIER NUDE REST*%0A%0A`;
    message += `Olá! Gostaria de encomendar a *${item.name}*:%0A`;
    message += `• Tonalidade: ${item.color.name}%0A`;
    message += `• Base / Pés: ${item.base.name}%0A`;
    if (item.embroideryText) {
      message += `• Gravação da Marca: "${item.embroideryText}"%0A`;
    }
    if (item.addons && item.addons.length > 0) {
      message += `• Opcionais: ${item.addons.map(a => a.name).join(', ')}%0A`;
    }
    message += `%0A*Valor:* ${itemUnitTotal.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} € (ou ${pix.toLocaleString('pt-PT', { minimumFractionDigits: 2 })} € a pronto pagamento com 5% OFF)%0A%0A`;
    message += `Poderiam enviar-me os dados para pagamento e o prazo de entrega?`;

    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        pixTotal,
        checkoutWhatsApp,
        checkoutDirectWhatsApp
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
