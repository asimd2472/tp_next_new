import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  slug: string;
};

const productSlug = "embossed-wood-finish-doors";

export default function ProductPage({ slug }: ProductPageProps) {
  if (slug !== productSlug) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Embossed Wood Finish Doors | Tata Pravesh</title>
        <meta
          name="description"
          content="Explore embossed wood finish doors from Tata Pravesh, combining the look of wood with the strength of steel."
        />
      </Head>
      <Header />
      <main className="product-page">
        
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { slug: productSlug } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
  const slug = params?.slug;

  if (slug !== productSlug) {
    return { notFound: true };
  }

  return { props: { slug } };
};
