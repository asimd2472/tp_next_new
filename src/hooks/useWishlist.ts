import { useCallback, useSyncExternalStore } from "react";
import {
  addWishlistItem,
  getServerWishlistSnapshot,
  getWishlistSnapshot,
  removeWishlistItem,
  subscribeToWishlist,
  type WishlistItem,
} from "@/services/wishlist.service";

export default function useWishlist(userId: number | null) {
  const subscribe = useCallback(
    (listener: () => void) => subscribeToWishlist(userId, listener),
    [userId],
  );
  const getSnapshot = useCallback(
    () => getWishlistSnapshot(userId),
    [userId],
  );
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerWishlistSnapshot);

  return {
    ...snapshot,
    addItem: (item: WishlistItem) => addWishlistItem(userId, item),
    removeItem: (itemId: string) => removeWishlistItem(userId, itemId),
  };
}
