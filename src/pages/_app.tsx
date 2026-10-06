import "@/styles/globals.css";
import "./fire-door/fire-door.css";
import "./product/product-details.css";
import "../components/ShopBySpace/shop-by-space.css";
import "../components/WhyChoose/why-choose.css";
import "../components/ExpertsSay/experts-say.css";
import "../components/Blogs/blogs.css";
import "../components/Faq/faq.css";
import "./french-door/french-door.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
