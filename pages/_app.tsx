import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import StoreContextProvider from "@services/StoreService/StoreProvider";
import { FetchStaticPropsResult } from "@services/SanityService/fetchStaticProps";
import { NextComponentType, NextPageContext } from "next";

interface AppPropsWithStaticProps {
  pageProps: FetchStaticPropsResult;
  Component: NextComponentType<NextPageContext, any, FetchStaticPropsResult>;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  return (
    <StoreContextProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </StoreContextProvider>
  );
}

export default App;
