import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import StoreContextProvider from "@services/StoreService/StoreProvider";

import { NextComponentType, NextPageContext } from "next";
import Cookie from "@services/CookieService/Cookie";
//@ts-ignore
// import { PageTransition } from "next-page-transitions";
import { FetchStaticPropsResult } from "@services/pageBuilderService/lib/fetchStaticProps";
import PreviewIndicator from "@services/pageBuilderService/lib/PreviewIndicator";

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
      {pageProps.preview && <PreviewIndicator />}
      <Cookie />
    </StoreContextProvider>
  );
}

export default App;
