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
import "./door-models/model-listing.css";
import type { AppProps } from "next/app";
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
