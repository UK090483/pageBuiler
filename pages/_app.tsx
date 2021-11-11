import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { Layout } from "@components/Layout/Layout";
import StoreContextProvider from "@services/StoreService/StoreProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreContextProvider>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </StoreContextProvider>
  );
}

export default MyApp;
