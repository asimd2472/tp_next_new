import "@/styles/globals.css";
import "./fire-door/fire-door.css";
import "./product/product-details.css";
import "../components/ShopBySpace/shop-by-space.css";
import "../components/WhyChoose/why-choose.css";
import "../components/ExpertsSay/experts-say.css";
import "../components/Blogs/blogs.css";
import "../components/Faq/faq.css";
import "./french-door/french-door.css";
import "./store-locator/store-locator.css";
import "./aluminium-windows/aluminium-windows.css";
import "./doors-with-ventilators/doors-with-ventilators.css";
import "./why-tata-pravesh-doors-and-windows/why-tata-pravesh-doors-and-windows.css";
import "./select-best-door/select-best-door.css";
import "./doors-windows-for-villa/doors-windows-for-villa.css";
import "./blogs/blog-list.css";
import "./blogs/blog-details.css";
import "./doors-for-bedroom/doors-for-bedroom.css";
import "./fly-mesh-door/fly-mesh-door.css";
import "./double-door-designs/double-door-designs.css";
import "./main-door-designs/main-door-designs.css";
import "./referandearn/referandearn.css";
import "./track-your-order/track-your-order.css";
import "./checkout/checkout.css";
import "./select-best-windows/select-best-windows.css";
import "./book-a-demo/book-a-demo.css";
import "./blogs/blog-noise-insulation/blog-noise-insulation.css";
import "./blogs/strength-that-lasts/strength-that-lasts.css";
import "./blogs/ready-for-every-weather/ready-for-every-weather.css";
import "./blogs/better-for-today-better-for-tomorrow/better-for-today-better-for-tomorrow.css";
import "./door-models/model-listing.css";
import "./shaft-duct-access-door/shaft-duct-access-door.css";
import "./glazed-door/glazed-door.css";
import "./privacy-policy/privacy-policy.css";
import "./faqs/faqs.css";
import "./i-am-dealer/i-am-dealer.css";
import "./modern-doors-and-windows/modern-doors-and-windows.css";
import "../components/Login/login.css";
import "../components/Account/account.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from "react-toastify";

function RouteProgressBar() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "complete">("idle");

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    const handleStart = () => {
      clearTimeout(hideTimer);
      setStatus("loading");
    };
    const handleComplete = () => {
      setStatus("complete");
      hideTimer = setTimeout(() => setStatus("idle"), 180);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      clearTimeout(hideTimer);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  if (status === "idle") return null;

  return (
    <div
      className={`route-progress route-progress--${status}`}
      role="progressbar"
      aria-label="Loading page"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={status === "complete" ? 100 : undefined}
    >
      <span />
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <RouteProgressBar />
      <Component {...pageProps} />
      <ToastContainer position="top-right" />
    </CartProvider>
  );
}
