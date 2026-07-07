"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  category: Product["category"];
  quantity: number;
}

interface CartState {
  isOpen: boolean;
  items: CartItem[];
}

interface CartContextValue {
  state: CartState;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  itemCount: number;
  subtotal: number;
}

const STORAGE_KEY = "checkmate-cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Cart state lives here and is read by every consumer via `useCart()`.
  // Start empty so the server and client render the same markup, then
  // hydrate any persisted items from localStorage after mount.
  const [state, setState] = useState<CartState>({ isOpen: false, items: [] });

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const items = JSON.parse(stored) as CartItem[];
        // Load persisted items only after mount so the server-rendered
        // (empty) markup and the first client render match — reading
        // localStorage during initial state would cause a hydration mismatch.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState((prev) => ({ ...prev, items }));
      }
    } catch {
      // Ignore malformed or unavailable storage — start with an empty cart.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Persistence is best-effort; ignore storage failures.
    }
  }, [state.items]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setState((prev) => {
      const existing = prev.items.find((item) => item.id === product.id);
      const items = existing
        ? prev.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [
            ...prev.items,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              category: product.category,
              quantity,
            },
          ];
      // Adding an item opens the cart so the shopper sees it land.
      return { isOpen: true, items };
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      items:
        quantity <= 0
          ? prev.items.filter((item) => item.id !== id)
          : prev.items.map((item) =>
              item.id === id ? { ...item, quantity } : item,
            ),
    }));
  }, []);

  const openCart = useCallback(
    () => setState((prev) => ({ ...prev, isOpen: true })),
    [],
  );
  const closeCart = useCallback(
    () => setState((prev) => ({ ...prev, isOpen: false })),
    [],
  );

  const itemCount = useMemo(
    () => state.items.reduce((total, item) => total + item.quantity, 0),
    [state.items],
  );
  const subtotal = useMemo(
    () =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    [state.items],
  );

  const value = useMemo(
    () => ({
      state,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
      itemCount,
      subtotal,
    }),
    [
      state,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
      itemCount,
      subtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
