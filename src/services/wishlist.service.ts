export interface WishlistItem {
  id: string;
  productSlug: string;
  productName: string;
  modelName: string;
  designName: string;
  shadeName: string;
  image: string;
  unitPrice: number | null;
}

export interface WishlistSnapshot {
  items: WishlistItem[];
  isLoaded: boolean;
}

const STORAGE_PREFIX = "tata_pravesh_wishlist_";
type WishlistScope = number | null;
const serverWishlistSnapshot: WishlistSnapshot = { items: [], isLoaded: false };
const MAX_WISHLIST_ITEMS = 100;
const snapshots = new Map<WishlistScope, WishlistSnapshot>();
const listeners = new Map<WishlistScope, Set<() => void>>();
let storageListenerRegistered = false;

function isWishlistItem(value: unknown): value is WishlistItem {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;

  return typeof item.id === "string"
    && item.id.length > 0
    && item.id.length <= 240
    && typeof item.productSlug === "string"
    && item.productSlug.length > 0
    && item.productSlug.length <= 180
    && typeof item.productName === "string"
    && item.productName.length <= 160
    && typeof item.modelName === "string"
    && item.modelName.length <= 160
    && typeof item.designName === "string"
    && item.designName.length <= 160
    && typeof item.shadeName === "string"
    && item.shadeName.length <= 160
    && isSafeImageSource(item.image)
    && (item.unitPrice === null || typeof item.unitPrice === "number" && Number.isFinite(item.unitPrice) && item.unitPrice >= 0);
}

function isSafeImageSource(value: unknown): value is string {
  if (typeof value !== "string") return false;
  if (value.startsWith("/") && !value.startsWith("//")) return true;

  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

function storageKey(userId: WishlistScope) {
  return `${STORAGE_PREFIX}${userId ?? "guest"}`;
}

function readItems(userId: WishlistScope): WishlistItem[] {
  try {
    const storedItems = window.localStorage.getItem(storageKey(userId));
    if (!storedItems) return [];

    const parsedItems: unknown = JSON.parse(storedItems);
    if (Array.isArray(parsedItems)) {
      const validItems = parsedItems.filter(isWishlistItem).slice(0, MAX_WISHLIST_ITEMS);
      if (validItems.length !== parsedItems.length) {
        console.error(`Some saved wishlist items for ${userId === null ? "guest" : `account ${userId}`} have an invalid format.`);
      }
      return validItems;
    }

    console.error(`The saved wishlist for ${userId === null ? "guest" : `account ${userId}`} has an invalid format.`);
    return [];
  } catch (error) {
    console.error(`Unable to read the saved wishlist for ${userId === null ? "guest" : `account ${userId}`}.`, error);
    return [];
  }
}

function getListeners(userId: WishlistScope) {
  let userListeners = listeners.get(userId);
  if (!userListeners) {
    userListeners = new Set();
    listeners.set(userId, userListeners);
  }
  return userListeners;
}

function notify(userId: WishlistScope) {
  listeners.get(userId)?.forEach((listener) => listener());
}

function syncWishlist(event: StorageEvent) {
  if (event.key === null) {
    for (const userId of snapshots.keys()) {
      snapshots.set(userId, { items: readItems(userId), isLoaded: true });
      notify(userId);
    }
    return;
  }

  if (!event.key.startsWith(STORAGE_PREFIX)) return;
  const storedScope = event.key.slice(STORAGE_PREFIX.length);
  const userId = storedScope === "guest" ? null : Number(storedScope);
  if ((userId !== null && (!Number.isSafeInteger(userId) || userId <= 0)) || !snapshots.has(userId)) return;

  snapshots.set(userId, { items: readItems(userId), isLoaded: true });
  notify(userId);
}

function registerStorageListener() {
  if (storageListenerRegistered || typeof window === "undefined") return;
  window.addEventListener("storage", syncWishlist);
  storageListenerRegistered = true;
}

export function getWishlistSnapshot(userId: WishlistScope): WishlistSnapshot {
  if ((userId !== null && (!Number.isSafeInteger(userId) || userId <= 0)) || typeof window === "undefined") {
    return serverWishlistSnapshot;
  }

  let snapshot = snapshots.get(userId);
  if (!snapshot) {
    snapshot = { items: readItems(userId), isLoaded: true };
    snapshots.set(userId, snapshot);
  }
  return snapshot;
}

export function getServerWishlistSnapshot() {
  return serverWishlistSnapshot;
}

export function subscribeToWishlist(userId: WishlistScope, listener: () => void) {
  if (userId !== null && (!Number.isSafeInteger(userId) || userId <= 0)) return () => undefined;
  registerStorageListener();
  const userListeners = getListeners(userId);
  userListeners.add(listener);
  return () => {
    userListeners.delete(listener);
    if (userListeners.size === 0) listeners.delete(userId);
  };
}

function writeItems(userId: WishlistScope, items: WishlistItem[]) {
  window.localStorage.setItem(storageKey(userId), JSON.stringify(items));
  snapshots.set(userId, { items, isLoaded: true });
  notify(userId);
}

export function addWishlistItem(userId: WishlistScope, item: WishlistItem) {
  if ((userId !== null && (!Number.isSafeInteger(userId) || userId <= 0)) || !isWishlistItem(item)) {
    throw new Error("The wishlist item is invalid.");
  }

  const currentItems = getWishlistSnapshot(userId).items;
  if (currentItems.some((savedItem) => savedItem.id === item.id)) return false;
  if (currentItems.length >= MAX_WISHLIST_ITEMS) {
    throw new Error("Your wishlist has reached its item limit.");
  }
  writeItems(userId, [...currentItems, item]);
  return true;
}

export function removeWishlistItem(userId: WishlistScope, itemId: string) {
  if (userId !== null && (!Number.isSafeInteger(userId) || userId <= 0)) {
    throw new Error("The wishlist account is invalid.");
  }

  const currentItems = getWishlistSnapshot(userId).items;
  if (!currentItems.some((item) => item.id === itemId)) return false;
  writeItems(userId, currentItems.filter((item) => item.id !== itemId));
  return true;
}
