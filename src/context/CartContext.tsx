import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";

export type CartItem = {
  id: string;
  productSlug: string;
  productName: string;
  modelName: string;
  designName: string;
  shadeName: string;
  sizeLabel: string;
  image: string;
  unitPrice: number | null;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  isLoaded: boolean;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
};

const STORAGE_KEY = "tata_pravesh_cart";
const CartContext = createContext<CartContextValue | null>(null);
type CartSnapshot = { items: CartItem[]; isLoaded: boolean };
let snapshot: CartSnapshot = { items: [], isLoaded: false };
const serverSnapshot: CartSnapshot = { items: [], isLoaded: false };
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const getSnapshot = () => snapshot;
const getServerSnapshot = () => serverSnapshot;
const notify = () => listeners.forEach((listener) => listener());

function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;

  return typeof item.id === "string"
    && typeof item.productSlug === "string"
    && typeof item.productName === "string"
    && typeof item.modelName === "string"
    && typeof item.designName === "string"
    && typeof item.shadeName === "string"
    && typeof item.sizeLabel === "string"
    && typeof item.image === "string"
    && (typeof item.unitPrice === "number" && Number.isFinite(item.unitPrice) || item.unitPrice === null)
    && typeof item.quantity === "number"
    && Number.isInteger(item.quantity)
    && item.quantity >= 1
    && item.quantity <= 99;
}

function loadCartItems() {
  try {
    const storedCart = window.localStorage.getItem(STORAGE_KEY);
    if (!storedCart) return [];
    const parsedCart: unknown = JSON.parse(storedCart);
    if (!Array.isArray(parsedCart) || !parsedCart.every(isCartItem)) {
      throw new Error("Stored cart has an invalid format.");
    }
    return parsedCart;
  } catch (error) {
    console.error("Unable to load the saved cart.", error);
    return [];
  }
}

function initializeCart() {
  if (snapshot.isLoaded) return;
  snapshot = { items: loadCartItems(), isLoaded: true };
  notify();
}

function persistCart(items: CartItem[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Unable to save the cart.", error);
  }
}

function updateCart(updater: (items: CartItem[]) => CartItem[]) {
  if (!snapshot.isLoaded) initializeCart();
  const items = updater(snapshot.items);
  snapshot = { items, isLoaded: true };
  persistCart(items);
  notify();
}

function addItem(item: CartItem) {
  updateCart((items) => {
    const existingItem = items.find((existing) => existing.id === item.id);
    if (existingItem) {
      return items.map((existing) => existing.id === item.id
        ? { ...existing, quantity: Math.min(99, existing.quantity + item.quantity) }
        : existing);
    }
    return [...items, { ...item, quantity: Math.min(99, item.quantity) }];
  });
}

function updateQuantity(id: string, quantity: number) {
  const safeQuantity = Math.min(99, Math.max(1, Math.floor(quantity)));
  updateCart((items) => items.map((item) => item.id === id
    ? { ...item, quantity: safeQuantity }
    : item));
}

function removeItem(id: string) {
  updateCart((items) => items.filter((item) => item.id !== id));
}

function syncCart(event: StorageEvent) {
  if (event.key === null) {
    snapshot = { items: [], isLoaded: true };
    notify();
    return;
  }
  if (event.key !== STORAGE_KEY) return;
  if (event.newValue === null) {
    snapshot = { items: [], isLoaded: true };
    notify();
    return;
  }

  try {
    const parsedCart: unknown = JSON.parse(event.newValue);
    if (!Array.isArray(parsedCart) || !parsedCart.every(isCartItem)) {
      throw new Error("Stored cart has an invalid format.");
    }
    snapshot = { items: parsedCart, isLoaded: true };
    notify();
  } catch (error) {
    console.error("Unable to sync the saved cart.", error);
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const currentSnapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    initializeCart();
    window.addEventListener("storage", syncCart);
    return () => window.removeEventListener("storage", syncCart);
  }, []);

  const value = useMemo(() => ({
    items: currentSnapshot.items,
    itemCount: currentSnapshot.items.reduce((total, item) => total + item.quantity, 0),
    isLoaded: currentSnapshot.isLoaded,
    addItem,
    updateQuantity,
    removeItem,
  }), [currentSnapshot]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart must be used inside CartProvider.");
  return cart;
}
