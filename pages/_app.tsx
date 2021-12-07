import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import StoreContextProvider from "@services/StoreService/StoreProvider";

import { NextComponentType, NextPageContext } from "next";
import Cookie from "@services/CookieService/Cookie";
//@ts-ignore
// import { PageTransition } from "next-page-transitions";
import { FetchStaticPropsResult } from "@services/pageBuilderService/lib/fetchStaticProps";
import PreviewIndicator from "@services/pageBuilderService/lib/PreviewIndicator";
import Seo from "@services/SeoService/Seo";
import { PageResult } from "./[[...slug]]";

interface AppPropsWithStaticProps {
  pageProps: FetchStaticPropsResult<PageResult>;
  Component: NextComponentType<NextPageContext, any, FetchStaticPropsResult>;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  const { page } = pageProps;

  return (
    <StoreContextProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      {pageProps.preview && <PreviewIndicator />}
      <Cookie />
      {page?.seo && (
        <Seo
          pageUrl={"https://www.test.com"}
          canonical={page?.canonical}
          {...page.seo}
        />
      )}
    </StoreContextProvider>
  );
}

export default App;
