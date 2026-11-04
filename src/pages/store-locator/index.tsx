import Footer from "@/components/Footer";
import Header from "@/components/Header";
import api from "@/config/api.config";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaGem,
  FaHouse,
  FaLocationDot,
  FaMagnifyingGlass,
  FaPhone,
  FaShieldHalved,
  FaScrewdriverWrench,
  FaUser,
} from "react-icons/fa6";

type Store = {
  id: string;
  name: string;
  state: string;
  district: string;
  address: string;
  contact: string;
  phone: string;
  email: string;
  type: string;
};

type DealerPage = {
  stores: Store[];
  hasMore: boolean;
};

type StoreLocatorProps = DealerPage & {
  initialError: boolean;
};

const PAGE_SIZE = 50;

function getRecordValue(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" || typeof value === "number") {
      const text = String(value).trim();
      if (text) return text;
    }
  }
  return "";
}

function mapDealer(value: unknown, index: number): Store | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const record = value as Record<string, unknown>;
  const name = getRecordValue(record, ["name", "dealer_name", "business_name", "store_name"]);
  if (!name) return null;

  return {
    id: getRecordValue(record, ["id", "dealer_id"]) ||
      `${name}-${getRecordValue(record, ["phone", "mobile", "mobile_no", "mobile_number", "phone_number"])}-${index}`,
    name,
    state: getRecordValue(record, ["state", "state_name"]),
    district: getRecordValue(record, ["district", "city", "city_name", "district_name"]),
    address: getRecordValue(record, ["address", "full_address", "dealer_address"]),
    contact: getRecordValue(record, ["contact_person", "contact_person_name", "contact_name"]),
    phone: getRecordValue(record, ["phone", "mobile", "mobile_no", "mobile_number", "phone_number", "contact_number"]),
    email: getRecordValue(record, ["email", "email_id"]),
    type: getRecordValue(record, ["type", "dealer_type", "category"]) || "Authorized Dealer",
  };
}

function parseDealerPage(response: unknown, page: number): DealerPage {
  if (!response || typeof response !== "object") {
    throw new Error("The dealer API returned an invalid response.");
  }

  const body = response as Record<string, unknown>;
  if (body.success === false) {
    throw new Error("The dealer API could not return store data.");
  }

  let records: unknown[] | null = Array.isArray(body.data) ? body.data : null;
  let pagination: Record<string, unknown> = {};

  if (!records && body.data && typeof body.data === "object" && !Array.isArray(body.data)) {
    const pageData = body.data as Record<string, unknown>;
    if (Array.isArray(pageData.data)) records = pageData.data;
    pagination = pageData;
  }
  if (!records && Array.isArray(body.dealers)) records = body.dealers;
  if (!records) {
    throw new Error("The dealer API response did not contain a dealer list.");
  }
  if (Object.keys(pagination).length === 0 && body.pagination && typeof body.pagination === "object") {
    pagination = body.pagination as Record<string, unknown>;
  }

  const stores = records
    .map((record, index) => mapDealer(record, (page - 1) * PAGE_SIZE + index))
    .filter((store): store is Store => store !== null);
  const lastPage = Number(pagination.last_page ?? body.last_page);
  const nextPageUrl = pagination.next_page_url ?? body.next_page_url;
  const hasMore = Number.isFinite(lastPage) && lastPage > 0
    ? page < lastPage
    : Boolean(nextPageUrl) || records.length === PAGE_SIZE;

  return { stores, hasMore };
}

async function fetchDealerPage(page: number, search = ""): Promise<DealerPage> {
  const response = await api.get("dealers", {
    params: { page, per_page: PAGE_SIZE, ...(search ? { search } : {}) },
  });
  return parseDealerPage(response.data, page);
}

export const getStaticProps: GetStaticProps<StoreLocatorProps> = async () => {
  try {
    return {
      props: {
        ...(await fetchDealerPage(1)),
        initialError: false,
      },
    };
  } catch (error) {
    console.error("Unable to load dealers for the store locator.", error);
    return {
      props: {
        stores: [],
        hasMore: false,
        initialError: true,
      },
    };
  }
};

function StoreCard({ store }: { store: Store }) {
  return (
    <article className="store-locator__card">
      <div className="store-locator__showcase">
        <div className="store-locator__store-image">
          <Image
            src="/images/store/store1.jpg"
            alt="Tata Pravesh doors and windows"
            fill
            sizes="(max-width: 680px) 100vw, (max-width: 1100px) 42vw, 280px"
          />
        </div>
        <div className="store-locator__brand-panel">
          <strong>Premium Doors &amp; Windows for a better tomorrow</strong>
          <div className="store-locator__benefits" aria-label="Tata Pravesh benefits">
            <span><FaShieldHalved aria-hidden="true" />Trusted<br />Quality</span>
            <span><FaGem aria-hidden="true" />Premium<br />Designs</span>
            <span><FaScrewdriverWrench aria-hidden="true" />Professional<br />Installation</span>
          </div>
        </div>
      </div>

      <div className="store-locator__details">
        <div className="store-locator__card-heading">
          <h2>{store.name}</h2>
          <p>{store.type}</p>
        </div>
        <div className="store-locator__location-row">
          <FaLocationDot aria-hidden="true" />
          <span><small>State</small>{store.state || "—"}</span>
          <span><small>District</small>{store.district || "—"}</span>
        </div>
        {store.address && (
          <div className="store-locator__detail-row">
            <span className="store-locator__detail-icon"><FaHouse aria-hidden="true" /></span>
            <span><small>Address</small>{store.address}</span>
          </div>
        )}
        {store.contact && (
          <div className="store-locator__detail-row">
            <span className="store-locator__detail-icon"><FaUser aria-hidden="true" /></span>
            <span><small>Contact Person</small>{store.contact}</span>
          </div>
        )}
        {store.phone && (
          <a className="store-locator__detail-row" href={`tel:${store.phone.replace(/[^\d+]/g, "")}`}>
            <span className="store-locator__detail-icon"><FaPhone aria-hidden="true" /></span>
            <span><small>Mobile No</small>{store.phone}</span>
          </a>
        )}
        {store.email && (
          <a className="store-locator__detail-row" href={`mailto:${store.email}`}>
            <span className="store-locator__detail-icon"><FaEnvelope aria-hidden="true" /></span>
            <span><small>Email Id</small>{store.email}</span>
          </a>
        )}
      </div>
    </article>
  );
}

function StoreSkeleton() {
  return (
    <article className="store-locator__card store-locator__skeleton-card" aria-hidden="true">
      <div className="store-locator__skeleton-image" />
      <div className="store-locator__skeleton-details">
        <span className="store-locator__skeleton-line store-locator__skeleton-line--title" />
        <span className="store-locator__skeleton-line" />
        <span className="store-locator__skeleton-line store-locator__skeleton-line--wide" />
        <span className="store-locator__skeleton-line store-locator__skeleton-line--wide" />
        <span className="store-locator__skeleton-line" />
      </div>
    </article>
  );
}

export default function StoreLocatorPage({
  stores: initialStores,
  hasMore: initialHasMore,
  initialError,
}: StoreLocatorProps) {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [stores, setStores] = useState(initialStores);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [nextPage, setNextPage] = useState(2);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [errorMessage, setErrorMessage] = useState(initialError ? "We couldn’t load stores. Please try again." : "");
  const requestId = useRef(0);
  const loadingMore = useRef(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const searchStores = async (search: string) => {
    const activeRequest = ++requestId.current;
    setSubmittedQuery(search);
    loadingMore.current = false;
    setStores([]);
    setHasMore(false);
    setNextPage(2);
    setIsSearching(true);
    setIsLoadingMore(false);
    setErrorMessage("");

    try {
      const result = await fetchDealerPage(1, search);
      if (requestId.current !== activeRequest) return;
      setStores(result.stores);
      setHasMore(result.hasMore);
    } catch (error) {
      if (requestId.current !== activeRequest) return;
      console.error("Unable to search dealers.", error);
      setErrorMessage("We couldn’t load stores. Please try again.");
    } finally {
      if (requestId.current === activeRequest) setIsSearching(false);
    }
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void searchStores(query.trim());
  };

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingMore.current || isSearching || isLoadingMore) return;

    const activeRequest = requestId.current;
    loadingMore.current = true;
    setIsLoadingMore(true);
    setErrorMessage("");
    try {
      const result = await fetchDealerPage(nextPage, submittedQuery);
      if (requestId.current !== activeRequest) return;
      setStores((current) => [...current, ...result.stores]);
      setHasMore(result.hasMore);
      setNextPage((current) => current + 1);
    } catch (error) {
      if (requestId.current !== activeRequest) return;
      console.error("Unable to load more dealers.", error);
      setErrorMessage("We couldn’t load more stores. Please try again.");
    } finally {
      loadingMore.current = false;
      if (requestId.current === activeRequest) setIsLoadingMore(false);
    }
  }, [hasMore, isLoadingMore, isSearching, nextPage, submittedQuery]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore || isSearching || isLoadingMore) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) void loadMore();
      },
      { rootMargin: "300px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, isSearching, loadMore]);

  const resetSearch = () => {
    setQuery("");
    setSubmittedQuery("");
    setStores(initialStores);
    setHasMore(initialHasMore);
    setNextPage(2);
    setErrorMessage(initialError ? "We couldn’t load stores. Please try again." : "");
    setIsSearching(false);
    setIsLoadingMore(false);
    requestId.current += 1;
    loadingMore.current = false;
  };

  const isLoading = isSearching || isLoadingMore;

  return (
    <>
      <Head>
        <title>Find Tata Pravesh Dealers &amp; Experience Centres | Store Locator</title>
        <meta
          name="description"
          content="Find authorized Tata Pravesh dealers and experience centres near you. Search by city, area, or pincode to explore premium doors and windows."
        />
        <meta property="og:title" content="Find Tata Pravesh Dealers & Experience Centres" />
        <meta
          property="og:description"
          content="Search for authorized Tata Pravesh dealers and experience centres by city, area, or pincode."
        />
      </Head>
      <Header />
      <main className="store-locator">
        <section className="store-locator__hero" aria-labelledby="store-locator-title">
          <div className="store-locator__container store-locator__hero-inner">
            <p>Find a store</p>
            <h1 id="store-locator-title">Our Stores</h1>
            <span>Visit an authorized dealer to explore Tata Pravesh doors and windows in person.</span>
          </div>
        </section>

        <div className="store-locator__main">
          <div className="store-locator__container">
            <form className="store-locator__search" onSubmit={handleSearch}>
              <label className="store-locator__search-location">
                <FaLocationDot aria-hidden="true" />
                <span className="store-locator__input-wrap">
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Enter city, area or pincode"
                    aria-label="Search city, area or pincode"
                  />
                  <FaMagnifyingGlass aria-hidden="true" />
                </span>
              </label>
              <button className="store-locator__search-button" type="submit" disabled={isSearching}>
                <FaMagnifyingGlass aria-hidden="true" />Search Stores
              </button>
            </form>

            {errorMessage && (
              <div className="store-locator__error" role="alert">
                <p>{errorMessage}</p>
                <button type="button" onClick={() => void searchStores(query.trim())}>
                  Try again
                </button>
              </div>
            )}

            {stores.length > 0 && (
              <div className="store-locator__results" aria-live="polite" aria-busy={isLoading}>
                {stores.map((store) => <StoreCard key={store.id} store={store} />)}
              </div>
            )}

            {isLoading && (
              <div className="store-locator__results" aria-label="Loading stores" aria-busy="true">
                {Array.from({ length: 4 }, (_, index) => <StoreSkeleton key={index} />)}
              </div>
            )}

            {!isLoading && !errorMessage && stores.length === 0 && (
              <div className="store-locator__empty" role="status">
                <FaLocationDot aria-hidden="true" />
                <h2>No stores found</h2>
                <p>Try another city, area, or pincode, or show all stores.</p>
                <button type="button" onClick={resetSearch}>Show all stores</button>
              </div>
            )}

            {hasMore && (
              <div className="store-locator__load-more">
                <div ref={sentinelRef} className="store-locator__scroll-sentinel" aria-hidden="true" />
                <button type="button" onClick={() => void loadMore()} disabled={isLoading}>
                  {isLoadingMore ? "Loading stores…" : "Load more stores"}
                </button>
              </div>
            )}

            <section className="store-locator__contact" aria-label="Help finding a store">
              <span className="store-locator__contact-icon"><FaLocationDot aria-hidden="true" /></span>
              <div>
                <h2>Can’t find a store near you?</h2>
                <p>Get in touch with our team and we will help you find the nearest dealer.</p>
              </div>
              <a href="mailto:enquiry@tatapravesh.com?subject=Help%20finding%20a%20Tata%20Pravesh%20store">
                <FaEnvelope aria-hidden="true" />Contact Us
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
