import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/Tata-Pravesh-Favicon.png" sizes="32x32" />
        <link rel="icon" href="/images/Tata-Pravesh-Favicon.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/images/Tata-Pravesh-Favicon.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
