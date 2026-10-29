import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCart } from "@/context/CartContext";
import api from "@/config/api.config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, type ChangeEvent, type TouchEvent, type WheelEvent } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBox,
  FaCheck,
  FaChevronDown,
  FaChevronRight,
  FaCircleInfo,
  FaClipboardList,
  FaClock,
  FaHeadphones,
  FaHeart,
  FaLink,
  FaMinus,
  FaPlay,
  FaPlus,
  FaRulerCombined,
  FaShareNodes,
  FaStar,
  FaStarHalfStroke,
  FaTruck,
  FaWrench,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

type ProductShade = {
  id: number;
  name: string;
  color: string | null;
  swatch_url: string | null;
  primary_image_url: string | null;
  gallery: Array<{ id: number; url: string | null; image_url?: string | null }>;
  sizes: Array<{ id: number; width_mm: number; height_mm: number; label: string }>;
};

type ProductDesign = {
  id: number;
  name: string;
  code: string | null;
  thumbnail_url: string | null;
  primary_image_url?: string | null;
  gallery?: Array<{ id: number; url: string | null; image_url?: string | null }>;
  sizes?: Array<{ id: number; width_mm: number; height_mm: number; label: string }>;
  shades: ProductShade[];
};

type ProductDetailsApiResponse = {
  success: boolean;
  type: "door" | "window";
  product: {
    id: number;
    name: string;
    category: string | null;
    slug: string;
    short_description: string | null;
    description: string | null;
    main_image_url: string | null;
    faqs?: Array<{ question: string; answer: string }> | null;
    specifications?: Array<{ question: string; answer: string }> | null;
    rating?: number | null;
    review?: string | number | null;
  };
  model: {
    id: number;
    name: string;
    slug: string;
    short_description: string | null;
    description: string | null;
    starting_price: number | null;
    is_premium: boolean;
    is_active: boolean;
    main_image_url: string | null;
  };
  designs: ProductDesign[];
  shades?: ProductShade[];
  defaults: {
    design_id: number | null;
    shade_id: number | null;
    size_id: number | null;
  };
};

const STORAGE_KEY = "tata_pravesh_selected_model_id";
const FALLBACK_IMAGE = "/images/default/model.png";

const parseModelId = (value: string | null | undefined) => {
  if (!value?.trim()) return null;

  const parsedValue = Number(value);
  return Number.isSafeInteger(parsedValue) && parsedValue > 0 ? parsedValue : null;
};

const getStoredModelId = () => {
  if (typeof window === "undefined") return null;

  const storedValue = window.localStorage.getItem(STORAGE_KEY);
  return parseModelId(storedValue);
};

const formatPrice = (value: number | null | undefined) => {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "₹ 0";
  }

  return `₹ ${Number(value).toLocaleString("en-IN")}`;
};

const getImageSource = (...values: Array<string | null | undefined>) => {
  return values.find((value) => Boolean(value)) || FALLBACK_IMAGE;
};
const isVideoSource = (source: string) => /\.(mp4|webm|ogg|mov|m4v)(?:$|[?#])/i.test(source);

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="pdp-stars" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => {
        const starRating = rating - index;
        if (starRating >= 1) return <FaStar key={index} aria-hidden="true" />;
        if (starRating >= 0.5) return <FaStarHalfStroke key={index} aria-hidden="true" />;
        return <FaStar key={index} aria-hidden="true" style={{ color: "#d5d9e0" }} />;
      })}
    </span>
  );
}

function ProductShareMenu({ productName, mobile = false }: { productName: string; mobile?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");
  const shareRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !shareRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const getShareUrl = () => window.location.href;

  const copyProductLink = async () => {
    const shareUrl = getShareUrl();
    const copyWithSelection = () => {
      const input = document.createElement("textarea");
      input.value = shareUrl;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      try {
        input.select();
        return document.execCommand("copy");
      } catch {
        return false;
      } finally {
        input.remove();
      }
    };
    let didCopy = false;
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        didCopy = true;
      } catch {
        didCopy = copyWithSelection();
      }
    } else {
      didCopy = copyWithSelection();
    }
    setCopied(didCopy);
    setCopyFeedback(didCopy ? "Product link copied to clipboard." : "Could not copy the link. Please copy the page URL manually.");
    if (didCopy) window.setTimeout(() => {
      setCopied(false);
      setCopyFeedback("");
    }, 1800);
  };

  const openShareLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const shareWithInstagram = async () => {
    const shareUrl = getShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({ title: productName, text: productName, url: shareUrl });
        setIsOpen(false);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setCopied(false);
      }
    }

    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    await copyProductLink();
  };

  return (
    <div
      ref={shareRef}
      className={`pdp-share${mobile ? " pdp-share--mobile" : ""}`}
      onMouseEnter={() => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setIsOpen(true);
      }}
      onMouseLeave={() => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        className={mobile ? "pdp-mobile-action" : "pdp-action"}
        type="button"
        aria-label={`Share ${productName}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <FaShareNodes />
        {!mobile && "Share"}
      </button>
      <div className={`pdp-share-menu${isOpen ? " is-open" : ""}`} role="menu" aria-hidden={!isOpen}>
        <button className="pdp-share-option" type="button" role="menuitem" tabIndex={isOpen ? 0 : -1} onClick={() => {
          const shareUrl = getShareUrl();
          openShareLink(`https://wa.me/?text=${encodeURIComponent(`${productName} - ${shareUrl}`)}`);
        }}>
          <FaWhatsapp className="pdp-share-icon pdp-share-icon--whatsapp" /> WhatsApp
        </button>
        <button className="pdp-share-option" type="button" role="menuitem" tabIndex={isOpen ? 0 : -1} onClick={shareWithInstagram}>
          <FaInstagram className="pdp-share-icon pdp-share-icon--instagram" /> Instagram
        </button>
        <button className="pdp-share-option" type="button" role="menuitem" tabIndex={isOpen ? 0 : -1} onClick={() => {
          openShareLink(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`);
        }}>
          <FaFacebookF className="pdp-share-icon pdp-share-icon--facebook" /> Facebook
        </button>
        <button className="pdp-share-option" type="button" role="menuitem" tabIndex={isOpen ? 0 : -1} onClick={() => {
          openShareLink(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(productName)}`);
        }}>
          <FaXTwitter className="pdp-share-icon pdp-share-icon--x" /> X
        </button>
        <button className="pdp-share-option" type="button" role="menuitem" tabIndex={isOpen ? 0 : -1} onClick={copyProductLink}>
          {copied
            ? <FaCheck className="pdp-share-icon pdp-share-icon--copied" />
            : <FaLink className="pdp-share-icon pdp-share-icon--link" />}
          {copied ? "Copied!" : copyFeedback ? "Copy failed" : "Copy Link"}
        </button>
      </div>
      <span className="pdp-share-status" aria-live="polite">
        {copyFeedback}
      </span>
    </div>
  );
}

const DELIVERY: ["truck" | "wrench" | "clock" | "headset", string, string][] = [
  ["truck", "Pan India Delivery", "We deliver across India through trusted network."],
  ["wrench", "Expert Installation", "Our trained professionals ensure a seamless installation."],
  ["clock", "On-time Service", "Committed to your needs, and hassle-free experience."],
  ["headset", "Post-Installation Support", "Dedicated support for any assistance you need."],
];
const INCLUDED = [
  "Tall Frame Door (suitable design, shade & size)",
  "Door Frame",
  "Premium Hardware & Accessories",
  "Professional Installation",
  "Warranty Support",
];
/* ---------- Page ---------- */
export default function ProductDetailsPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [productData, setProductData] = useState<ProductDetailsApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(0);
  const [design, setDesign] = useState(0);
  const [shade, setShade] = useState(0);
  const [w, setW] = useState(900);
  const [h, setH] = useState(2100);
  const [open, setOpen] = useState<number | null>(null);
  const [cartFeedback, setCartFeedback] = useState("");
  const [shadesOpen, setShadesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const designListRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const suppressGalleryClick = useRef(false);
  const closeGalleryRef = useRef<HTMLButtonElement>(null);
  const closeShadesRef = useRef<HTMLButtonElement>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);
  const modalOpen = shadesOpen || galleryOpen;

  const designOptions = productData?.designs ?? [];
  const isWindow = productData?.type === "window";
  const activeDesign = designOptions[design] ?? designOptions[0];
  const shadeOptions = isWindow ? productData?.shades ?? [] : activeDesign?.shades ?? [];
  const activeShade = shadeOptions[shade] ?? shadeOptions[0];
  const designSizeOptions = activeDesign?.sizes ?? [];
  const sizeOptions = activeShade?.sizes.length ? activeShade.sizes : designSizeOptions;
  const shadeGalleryImages = activeShade?.gallery
    ?.map((item) => item.url || item.image_url)
    .filter((source): source is string => Boolean(source)) ?? [];
  const designGalleryImages = activeDesign?.gallery
    ?.map((item) => item.url || item.image_url)
    .filter((source): source is string => Boolean(source)) ?? [];
  const galleryImages = shadeGalleryImages.length ? shadeGalleryImages : designGalleryImages;
  const widthOptions = Array.from(new Set(sizeOptions.map((item) => item.width_mm)));
  const heightOptions = Array.from(new Set(sizeOptions.map((item) => item.height_mm)));
  const product = productData?.product ?? null;
  const model = productData?.model ?? null;
  const specifications = product?.specifications ?? [];
  const faqs = product?.faqs ?? [];
  const rating = typeof product?.rating === "number" && Number.isFinite(product.rating)
    ? Math.min(5, Math.max(0, product.rating))
    : null;
  const reviewCount = product?.review === null || product?.review === undefined || String(product.review).trim() === ""
    ? null
    : String(product.review);
  const productName = model?.name || product?.name || "Product";
  const productShortDescription = model?.short_description || product?.short_description || "Modern design. Timeless appeal.";
  const productDescription = model?.description || product?.description || "Crafted for strength, security and long-lasting performance.";

  const queryModelId = typeof router.query.modelId === "string" ? parseModelId(router.query.modelId) : null;
  const resolvedModelId = router.isReady ? (queryModelId ?? getStoredModelId()) : null;
  const productSlug = typeof router.query.slug === "string" ? router.query.slug : null;

  useEffect(() => {
    if (!router.isReady) return;

    if (!productSlug) return;

    if (typeof window !== "undefined" && resolvedModelId !== null) {
      window.localStorage.setItem(STORAGE_KEY, String(resolvedModelId));
    }

    const fetchProductDetails = async () => {
      setLoading(true);

      try {
        const response = await api.get<ProductDetailsApiResponse>("product-details", {
          params: {
            product_slug: productSlug,
            ...(resolvedModelId !== null ? { model_id: resolvedModelId } : {}),
          },
        });
        setProductData(response.data);

        const responseDesigns = response.data.designs ?? [];
        const nextDesignId = response.data.defaults?.design_id ?? responseDesigns[0]?.id ?? null;
        const nextDesignIndex = nextDesignId === null ? 0 : responseDesigns.findIndex((item) => item.id === nextDesignId);
        setDesign(nextDesignIndex >= 0 ? nextDesignIndex : 0);

        const selectedDesign = responseDesigns[nextDesignIndex >= 0 ? nextDesignIndex : 0] ?? responseDesigns[0];
        const responseShades = response.data.type === "window" ? response.data.shades ?? [] : selectedDesign?.shades ?? [];
        const nextShadeId = response.data.defaults?.shade_id ?? responseShades[0]?.id ?? null;
        const nextShadeIndex = nextShadeId === null ? 0 : responseShades.findIndex((item) => item.id === nextShadeId);
        setShade(nextShadeIndex >= 0 ? nextShadeIndex : 0);

        const selectedShade = responseShades[nextShadeIndex >= 0 ? nextShadeIndex : 0] ?? responseShades[0];
        const selectedDesignSizes = selectedShade?.sizes.length
          ? selectedShade.sizes
          : selectedDesign?.sizes ?? [];
        const defaultSize = response.data.defaults?.size_id
          ? selectedDesignSizes.find((item) => item.id === response.data.defaults.size_id) ?? selectedDesignSizes[0]
          : selectedDesignSizes[0];

        if (defaultSize) {
          setW(defaultSize.width_mm);
          setH(defaultSize.height_mm);
        }
      } catch {
        setProductData(null);
      } finally {
        setLoading(false);
      }
    };

    void fetchProductDetails();
  }, [router.isReady, productSlug, resolvedModelId]);

  const selectDesign = (index: number) => {
    setDesign(index);
    setShade(0);
    const nextDesign = designOptions[index];
    const nextShade = nextDesign?.shades[0];
    const nextSize = nextShade?.sizes[0] ?? nextDesign?.sizes?.[0];
    if (nextSize) {
      setW(nextSize.width_mm);
      setH(nextSize.height_mm);
    }
    setImg(0);
  };

  const moveDesign = (direction: -1 | 1) => {
    if (!designOptions.length) return;
    selectDesign((design + direction + designOptions.length) % designOptions.length);
  };

  const selectShade = (index: number) => {
    setShade(index);
    const nextSize = shadeOptions[index]?.sizes[0];
    if (nextSize) {
      setW(nextSize.width_mm);
      setH(nextSize.height_mm);
    }
    setImg(0);
  };

  const addProductToCart = () => {
    if (!product || !model) return;

    const selectedSize = sizeOptions.find((item) => item.width_mm === w && item.height_mm === h);
    addItem({
      id: `${product.slug}-${model.id}-${activeDesign?.id ?? "design"}-${activeShade?.id ?? "shade"}-${selectedSize?.id ?? `${w}x${h}`}`,
      productSlug: product.slug,
      productName: product.name,
      modelName: model.name,
      designName: activeDesign?.name || "Standard design",
      shadeName: activeShade?.name || "No shade",
      sizeLabel: selectedSize?.label || `${w} × ${h} mm`,
      image: getImageSource(activeShade?.primary_image_url, activeDesign?.primary_image_url, galleryImages[0], product.main_image_url, activeDesign?.thumbnail_url, FALLBACK_IMAGE),
      unitPrice: model.starting_price && model.starting_price > 0 ? model.starting_price : null,
      quantity: 1,
    });
    setCartFeedback(`${model.name} added to cart.`);
    window.setTimeout(() => setCartFeedback(""), 2500);
  };

  const GALLERY = galleryImages.length
    ? galleryImages
    : [getImageSource(activeShade?.primary_image_url, activeDesign?.primary_image_url, productData?.product.main_image_url, activeDesign?.thumbnail_url, FALLBACK_IMAGE)];
  const safeImg = GALLERY.length ? img % GALLERY.length : 0;

  useEffect(() => {
    designListRef.current?.children.item(design)?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }, [design]);

  useEffect(() => {
    if (!modalOpen) {
      modalTriggerRef.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    (galleryOpen ? closeGalleryRef : closeShadesRef).current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const dialog = document.querySelector<HTMLElement>('[role="dialog"][aria-modal="true"]');
        const focusable = dialog?.querySelectorAll<HTMLElement>('button:not(:disabled), [href], select, [tabindex]:not([tabindex="-1"])');
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      } else if (event.key === "Escape") {
        setGalleryOpen(false);
        setShadesOpen(false);
      } else if (galleryOpen && event.key === "ArrowLeft") {
        setImg((current) => (current - 1 + GALLERY.length) % GALLERY.length);
        setZoom(1);
      } else if (galleryOpen && event.key === "ArrowRight") {
        setImg((current) => (current + 1) % GALLERY.length);
        setZoom(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [GALLERY.length, galleryOpen, modalOpen]);

  const openGallery = () => {
    const activeElement = document.activeElement;
    modalTriggerRef.current = activeElement instanceof HTMLElement ? activeElement : null;
    setZoom(1);
    setGalleryOpen(true);
  };

  const openShades = () => {
    const activeElement = document.activeElement;
    modalTriggerRef.current = activeElement instanceof HTMLElement ? activeElement : null;
    setShadesOpen(true);
  };

  const handleGalleryWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setZoom((current) => Math.min(3, Math.max(1, current + (event.deltaY < 0 ? 0.2 : -0.2))));
  };

  const handleGalleryTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleGalleryTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;

    const swipeDistance = event.changedTouches[0].clientX - startX;
    if (Math.abs(swipeDistance) < 40) return;

    if (event.currentTarget.classList.contains("pdp-main")) {
      suppressGalleryClick.current = true;
      window.setTimeout(() => {
        suppressGalleryClick.current = false;
      }, 700);
    }
    setImg((current) => (current + (swipeDistance < 0 ? 1 : -1) + GALLERY.length) % GALLERY.length);
    setZoom(1);
  };

  if (!router.isReady || (loading && Boolean(productSlug))) {
    return (
      <>
        <Header />
        <main className="pdp pdp--loading" aria-busy="true" aria-label="Loading product details">
          <div className="pdp-wrap pdp-skeleton">
            <div className="pdp-skeleton__breadcrumbs" aria-hidden="true">
              <span className="pdp-skeleton__shape pdp-skeleton__crumb" />
              <span className="pdp-skeleton__shape pdp-skeleton__crumb" />
              <span className="pdp-skeleton__shape pdp-skeleton__crumb pdp-skeleton__crumb--long" />
            </div>

            <section className="pdp-skeleton__top" aria-hidden="true">
              <div className="pdp-skeleton__gallery">
                <div className="pdp-skeleton__thumbs">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <span key={index} className="pdp-skeleton__shape pdp-skeleton__thumb" />
                  ))}
                </div>
                <div className="pdp-skeleton__shape pdp-skeleton__main-image" />
              </div>

              <div className="pdp-skeleton__info">
                <span className="pdp-skeleton__shape pdp-skeleton__badge" />
                <span className="pdp-skeleton__shape pdp-skeleton__title" />
                <span className="pdp-skeleton__shape pdp-skeleton__line" />
                <span className="pdp-skeleton__shape pdp-skeleton__line pdp-skeleton__line--short" />

                <div className="pdp-skeleton__price">
                  <span className="pdp-skeleton__shape pdp-skeleton__price-value" />
                  <span className="pdp-skeleton__shape pdp-skeleton__price-note" />
                </div>

                <div className="pdp-skeleton__actions">
                  <span className="pdp-skeleton__shape pdp-skeleton__action" />
                  <span className="pdp-skeleton__shape pdp-skeleton__action" />
                </div>

                <div className="pdp-skeleton__selector">
                  <span className="pdp-skeleton__shape pdp-skeleton__section-title" />
                  <div className="pdp-skeleton__options">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span key={index} className="pdp-skeleton__shape pdp-skeleton__option" />
                    ))}
                  </div>
                </div>

                <div className="pdp-skeleton__selector">
                  <span className="pdp-skeleton__shape pdp-skeleton__section-title" />
                  <div className="pdp-skeleton__options">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <span key={index} className="pdp-skeleton__shape pdp-skeleton__swatch" />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (router.isReady && !productSlug) {
    return (
      <>
        <Header />
        <main className="pdp">
          <div className="pdp-wrap" style={{ padding: "80px 20px", textAlign: "center" }}>
            <h1>Product not found</h1>
            <p>The selected model details are unavailable.</p>
            <Link href="/" style={{ color: "#2d68c4", fontWeight: 700 }}>
              Go back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (!productData || !product || !model) {
    return (
      <>
        <Header />
        <main className="pdp">
          <div className="pdp-wrap" style={{ padding: "80px 20px", textAlign: "center" }}>
            <h1>Product not found</h1>
            <p>The selected model details are unavailable.</p>
            <Link href="/" style={{ color: "#2d68c4", fontWeight: 700 }}>
              Go back home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${productName} | Tata Pravesh`}</title>
        <meta name="description" content={productDescription || `${productName} premium engineered door from Tata Pravesh.`} />
      </Head>

      <Header />
      <main className="pdp">
        <div className="pdp-wrap">
        <nav className="pdp-crumbs" aria-label="Breadcrumb">
          {[
            "Home",
            product?.category || "Products",
            model?.name || productName,
          ].map((c, i, a) => (
            <span key={`${c}-${i}`} style={{ display: "contents" }}>
              <a href="#">{c}</a>
              {i < a.length - 1 && <FaChevronRight />}
            </span>
          ))}
        </nav>

        <section className="pdp-top">
          <div className="pdp-gallery">
            <div className="pdp-thumbs">
              {GALLERY.map((src, i) => (
                <button key={`${src}-${i}`} className={`pdp-thumb ${safeImg === i ? "is-active" : ""}`} onMouseEnter={() => setImg(i)} onFocus={() => setImg(i)} onClick={() => setImg(i)} aria-label={`View image ${i + 1}`} aria-pressed={safeImg === i}>
                  <Image src={src} alt="" fill sizes="70px" />
                  {isVideoSource(src) && (
                    <span className="play">
                      <span><FaPlay /></span>
                    </span>
                  )}
                </button>
              ))}
            </div>
            <button className="pdp-main" type="button" onClick={(event) => {
              if (suppressGalleryClick.current) {
                suppressGalleryClick.current = false;
                event.preventDefault();
                return;
              }
              openGallery();
            }} onTouchStart={handleGalleryTouchStart} onTouchEnd={handleGalleryTouchEnd} aria-label="Open product image gallery">
              <Image src={GALLERY[safeImg] || FALLBACK_IMAGE} alt={`${productName} ${isWindow ? "window" : "door"}`} fill sizes="(max-width: 1023px) 100vw, 60vw" priority />
              <span className="pdp-main-hint"><FaPlus /> View gallery</span>
            </button>
            <div className="pdp-mobile-gallery-controls">
              <div className="pdp-mobile-gallery-dots" aria-label={`Image ${safeImg + 1} of ${GALLERY.length}`}>
                {GALLERY.map((src, i) => (
                  <button key={`${src}-${i}`} type="button" className={safeImg === i ? "is-active" : ""} onClick={() => setImg(i)} aria-label={`View image ${i + 1}`} aria-pressed={safeImg === i} />
                ))}
              </div>
              <div className="pdp-mobile-actions">
                <button className="pdp-mobile-action" type="button" aria-label={`Save ${productName}`}><FaHeart /></button>
                <ProductShareMenu productName={productName} mobile />
              </div>
            </div>
          </div>

          <div className="pdp-info">
            <div className="pdp-info-head">
              <span className="pdp-badge">{model.is_premium ? "Premium" : "Popular"}</span>
              <div className="pdp-actions">
                <button className="pdp-action"><FaHeart /> Save</button>
                <ProductShareMenu productName={productName} />
              </div>
            </div>

            <div className="pdp-mobile-brand-row">
              <div className="pdp-mobile-brand">
                <b>Tata Pravesh</b>
                <Link href="/">Visit the store</Link>
              </div>
              {rating !== null && (
                <div className="pdp-mobile-rating">
                  <b>{rating}</b>
                  <RatingStars rating={rating} />
                  {reviewCount && <span>({reviewCount})</span>}
                </div>
              )}
            </div>

            <h1 className="pdp-title">{productName}</h1>
            <p className="pdp-sub">{productShortDescription}</p>
            <p className="pdp-desc">{productDescription}</p>
            {rating !== null && (
              <div className="pdp-rating">
                <RatingStars rating={rating} />
                <b>{rating}</b>
                {reviewCount && <span>({reviewCount}+ reviews)</span>}
              </div>
            )}

            <div className="pdp-price-row">
              <div>
                <div className="pdp-price-label">Starting Price*</div>
                <div className="pdp-price">{model?.starting_price===0 ? `XX,XXX` : formatPrice(model?.starting_price)}</div>
              </div>
              <div className="pdp-price-note">As per your location, we require please book a demo for the exact pricing.</div>
            </div>

            <div className="pdp-cta">
              <Link className="pdp-btn pdp-btn--solid" href="/book-a-demo">Book a Demo <FaArrowRight /></Link>
              <button className="pdp-btn pdp-btn--ghost" type="button" onClick={addProductToCart}>Add to cart</button>
            </div>
            <p className="pdp-cart-feedback" aria-live="polite">{cartFeedback}</p>

            {!isWindow && (
              <div className="pdp-block pdp-design-block">
                <div className="pdp-step"><div className="pdp-step-title"><span className="pdp-step-num">1</span>Select Design</div></div>
                <div className="pdp-designs">
                  {designOptions.length >= 4 && (
                    <button className="pdp-arrow" type="button" onClick={() => moveDesign(-1)} aria-label="Previous design"><FaArrowLeft /></button>
                  )}
                  <div ref={designListRef} className="pdp-design-list">
                    {designOptions.map((d, i) => (
                      <button key={d.id} type="button" className={`pdp-design ${design === i ? "is-active" : ""}`} onClick={() => selectDesign(i)} aria-pressed={design === i}>
                        <span className="box"><Image src={getImageSource(d.thumbnail_url, product.main_image_url, FALLBACK_IMAGE)} alt="" fill sizes="80px" /></span>
                        {d.name}
                      </button>
                    ))}
                  </div>
                  {designOptions.length >= 4 && (
                    <button className="pdp-arrow" type="button" onClick={() => moveDesign(1)} aria-label="Next design"><FaArrowRight /></button>
                  )}
                </div>
              </div>
            )}

            {shadeOptions.length > 0 && (
              <div className="pdp-block pdp-shade-block">
                <div className="pdp-step">
                  <div className="pdp-step-title"><span className="pdp-step-num">{isWindow ? "1" : "2"}</span>Select Shade</div>
                  <button className="pdp-link" type="button" onClick={openShades}>View all Shades <FaArrowRight /></button>
                </div>
                <div className="pdp-shades">
                  {shadeOptions.map((s, i) => (
                    <button key={s.id} type="button" className={`pdp-shade ${shade === i ? "is-active" : ""}`} onClick={() => selectShade(i)} aria-pressed={shade === i}>
                      <i style={{ background: s.color || `url(${s.swatch_url || ""})`, backgroundSize: "cover" }} />
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="pdp-size-block">
              <div className="pdp-step">
                <div className="pdp-step-title"><span className="pdp-step-num">{!isWindow && shadeOptions.length > 0 ? "3" : "2"}</span>Select Size</div>
                <button className="pdp-link" type="button"><FaRulerCombined /> Size Guide</button>
              </div>
              <div className="pdp-size-grid">
                <div className="pdp-field">
                  <label htmlFor="w">Width (mm)</label>
                  <div className="pdp-select">
                    <select id="w" value={w} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      const nextWidth = Number(e.target.value);
                      const nextSize = sizeOptions.find((item) => item.width_mm === nextWidth && item.height_mm === h)
                        ?? sizeOptions.find((item) => item.width_mm === nextWidth);
                      if (nextSize) {
                        setW(nextSize.width_mm);
                        setH(nextSize.height_mm);
                      }
                    }}>
                      {widthOptions.map((width) => (
                        <option key={width} value={width}>{width}</option>
                      ))}
                    </select>
                    <FaChevronDown />
                  </div>
                </div>
                <div className="pdp-field">
                  <label htmlFor="h">Height (mm)</label>
                  <div className="pdp-select">
                    <select id="h" value={h} onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      const nextHeight = Number(e.target.value);
                      const nextSize = sizeOptions.find((item) => item.width_mm === w && item.height_mm === nextHeight)
                        ?? sizeOptions.find((item) => item.height_mm === nextHeight);
                      if (nextSize) {
                        setW(nextSize.width_mm);
                        setH(nextSize.height_mm);
                      }
                    }}>
                      {heightOptions.map((height) => (
                        <option key={height} value={height}>{height}</option>
                      ))}
                    </select>
                    <FaChevronDown />
                  </div>
                </div>
              </div>
              <div className="pdp-infobox"><FaCircleInfo /> Custom sizes are also available. Contact our team for assistance.</div>
            </div>
          </div>
        </section>
      </div>

      <section className="pdp-banner">
        <Image src="/images/product-uses-background.jpg" alt="" fill sizes="100vw" />
        <div className="pdp-banner-copy">
          <h2>Designs That<br />Define Homes</h2>
          <p>A perfect blend of aesthetics, strength and modern living.</p>
        </div>
      </section>

      <div className="pdp-wrap">
        <section className="pdp-details">
          {specifications.length > 0 && (
          <div className="pdp-col">
            <h3><FaClipboardList /> Product Specifications</h3>
            <table className="pdp-spec"><tbody>
              {specifications.map(({ question, answer }, index) => (
                <tr key={`${question}-${index}`}><td>{question}</td><td>{answer}</td></tr>
              ))}
            </tbody></table>
          </div>
          )}
          <div className="pdp-col">
            <h3><FaTruck /> Delivery &amp; Installation</h3>
            <ul className="pdp-deliv">
              {DELIVERY.map(([ic, t, d]) => (
                <li key={t}>{ic === "truck" ? <FaTruck /> : ic === "wrench" ? <FaWrench /> : ic === "clock" ? <FaClock /> : <FaHeadphones />}<div><b>{t}</b><span>{d}</span></div></li>
              ))}
            </ul>
          </div>
          <div className="pdp-col">
            <h3><FaBox /> What’s Included</h3>
            <ul className="pdp-incl">
              {INCLUDED.map((t) => (
                <li key={t}><span className="tick"><FaCheck /></span>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {faqs.length > 0 && (
        <section className="pdp-faq">
          <div className="pdp-faq-in">
            <h2>Frequently<br />Asked Questions</h2>
            <div className="pdp-faq-list">
              {faqs.map(({ question, answer }, i) => (
                <div key={`${question}-${i}`}>
                  <button className="pdp-q" type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    {question} <FaPlus />
                  </button>
                  {open === i && <p className="pdp-a">{answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      </main>

      {shadesOpen && (
        <div className="pdp-modal-backdrop" onClick={() => setShadesOpen(false)}>
          <section className="pdp-modal pdp-shades-modal" role="dialog" aria-modal="true" aria-labelledby="pdp-shades-title" onClick={(event) => event.stopPropagation()}>
            <div className="pdp-modal-header">
              <div>
                <span className="pdp-modal-eyebrow">Personalise your {isWindow ? "window" : "door"}</span>
                <h2 id="pdp-shades-title">Explore all shades</h2>
              </div>
              <button ref={closeShadesRef} className="pdp-modal-close" type="button" onClick={() => setShadesOpen(false)} aria-label="Close shades">
                <FaXmark />
              </button>
            </div>
            <p className="pdp-modal-description">Choose a finish that feels right for your space.</p>
            <div className="pdp-shades-modal-grid">
              {shadeOptions.map((s, i) => (
                <button key={s.id} type="button" className={`pdp-shade-option ${shade === i ? "is-active" : ""}`} onClick={() => { selectShade(i); setShadesOpen(false); }} aria-pressed={shade === i}>
                  <i style={{ background: s.color || `url(${s.swatch_url || ""})`, backgroundSize: "cover" }} />
                  <span>{s.name}</span>
                  {shade === i && <FaCheck aria-hidden="true" />}
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {galleryOpen && (
        <div className="pdp-modal-backdrop pdp-gallery-backdrop" onClick={() => setGalleryOpen(false)}>
          <section className="pdp-gallery-modal" role="dialog" aria-modal="true" aria-labelledby="pdp-gallery-title" onClick={(event) => event.stopPropagation()}>
            <div className="pdp-gallery-modal-header">
              <h2 id="pdp-gallery-title">{productName} product gallery</h2>
              <div className="pdp-gallery-tools">
                <button type="button" onClick={() => setZoom((current) => Math.max(1, current - 0.25))} disabled={zoom <= 1} aria-label="Zoom out"><FaMinus /></button>
                <span>{Math.round(zoom * 100)}%</span>
                <button type="button" onClick={() => setZoom((current) => Math.min(3, current + 0.25))} disabled={zoom >= 3} aria-label="Zoom in"><FaPlus /></button>
                <button ref={closeGalleryRef} className="pdp-gallery-close" type="button" onClick={() => setGalleryOpen(false)} aria-label="Close gallery"><FaXmark /></button>
              </div>
            </div>
            <div className="pdp-gallery-viewer" onTouchStart={handleGalleryTouchStart} onTouchEnd={handleGalleryTouchEnd}>
              <button className="pdp-gallery-nav" type="button" onClick={() => { setImg((current) => (current - 1 + GALLERY.length) % GALLERY.length); setZoom(1); }} aria-label="Previous image"><FaArrowLeft /></button>
              <div className="pdp-gallery-zoom-area" onWheel={handleGalleryWheel}>
                <Image src={GALLERY[safeImg] || FALLBACK_IMAGE} alt={`${productName} product image ${safeImg + 1}`} fill sizes="(max-width: 700px) 70vw, 900px" style={{ transform: `scale(${zoom})` }} />
              </div>
              <button className="pdp-gallery-nav" type="button" onClick={() => { setImg((current) => (current + 1) % GALLERY.length); setZoom(1); }} aria-label="Next image"><FaArrowRight /></button>
            </div>
            <div className="pdp-gallery-modal-thumbs" aria-label="Choose a gallery image">
              {GALLERY.map((src, i) => (
                <button key={`${src}-${i}`} type="button" className={`pdp-gallery-modal-thumb ${safeImg === i ? "is-active" : ""}`} onClick={() => { setImg(i); setZoom(1); }} aria-label={`View image ${i + 1}`} aria-pressed={safeImg === i}>
                  <Image src={src} alt="" fill sizes="62px" />
                </button>
              ))}
            </div>
            <p className="pdp-gallery-help">Scroll to zoom · Use the controls to explore each image</p>
          </section>
        </div>
      )}

      <Footer />
    </>
  );
}
