// pages/_app.tsx
import "../app/globals.css"; // Adjust the path to your global styles if necessary
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
