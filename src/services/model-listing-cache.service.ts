import api from "@/config/api.config";

type ModelListingKind = "door" | "window";

type CacheEntry<T> = {
  expiresAt: number;
  value: T;
};

const CACHE_DURATION = 2 * 60 * 1000;
const cache = new Map<string, CacheEntry<unknown>>();
const pendingRequests = new Map<string, Promise<unknown>>();

function getListingKey(kind: ModelListingKind, slug: string) {
  return `${kind}:${slug}`;
}

export function getModelListing<T>(kind: ModelListingKind, slug: string): Promise<T> {
  const key = getListingKey(kind, slug);
  const cached = cache.get(key);
  if (cached && cached.expiresAt > Date.now()) {
    return Promise.resolve(cached.value as T);
  }
  if (cached) cache.delete(key);

  const pendingRequest = pendingRequests.get(key);
  if (pendingRequest) return pendingRequest as Promise<T>;

  const endpoint = kind === "door" ? `products/${slug}/models` : `windows/${slug}/models`;
  const request = api.get<T>(endpoint)
    .then(({ data }) => {
      cache.set(key, { value: data, expiresAt: Date.now() + CACHE_DURATION });
      return data;
    })
    .finally(() => {
      pendingRequests.delete(key);
    });

  pendingRequests.set(key, request);
  return request;
}

export function prefetchModelListing(kind: ModelListingKind, slug: string) {
  return getModelListing(kind, slug);
}

export function clearModelListingCache(kind: ModelListingKind, slug: string) {
  const key = getListingKey(kind, slug);
  cache.delete(key);
  pendingRequests.delete(key);
}
