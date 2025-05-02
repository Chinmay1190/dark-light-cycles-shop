
import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "@/types/product";
import { useToast } from "@/hooks/use-toast";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      
      if (itemExists) {
        toast({
          title: "Item quantity updated",
          description: `${product.name} quantity increased to ${itemExists.quantity + quantity}`,
        });
        
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast({
          title: "Item added to cart",
          description: `${product.name} has been added to your cart`,
        });
        
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    const product = cart.find((item) => item.id === productId);
    
    if (product) {
      toast({
        title: "Item removed",
        description: `${product.name} has been removed from your cart`,
      });
    }
    
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart",
    });
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
