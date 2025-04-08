import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../types/Product";
import { useToast } from "../utils/useToast.tsx";

interface CartContextType {
  cart: { product: Product; count: number }[];
  addToCart: (product: Product) => void;
  getCartCount: () => number;
  removeItem: (product: Product) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<{ product: Product; count: number }[]>([]);
  const { showToast } = useToast();

  const addToCart = (product: Product) => {
    console.log("add to cart clicked:", cart);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        showToast(`✅ Item: ${product.name} quantity increased.`);
        return prevCart.map((item) => (item.product.id === product.id ? { ...item, count: item.count + 1 } : item));
      }

      showToast(`✔️ Item: ${product.name} added to cart.`);
      return [...prevCart, { product, count: 1 }];
    });
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.count, 0);
  };

  const removeItem = (product: Product) => {
    setCart(cart.filter((item) => item.product.id !== product.id));
    showToast(`🗑️ Item: ${product.name} removed from cart.`);
    console.log(product.name, "removed");
    console.log("new cart: ", cart);
  };

  return <CartContext.Provider value={{ cart, addToCart, getCartCount, removeItem }}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
