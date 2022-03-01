import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import StoreContextProvider from "@services/StoreService/StoreProvider";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@services/CookieService/Cookie";
import { FetchStaticPropsResult } from "@services/pageBuilderService/lib/fetchStaticProps";
import PreviewIndicator from "lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@services/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { SessionProvider } from "next-auth/react";

interface AppPropsWithStaticProps {
  pageProps: FetchStaticPropsResult<PageResult>;
  Component: NextComponentType<NextPageContext, any, FetchStaticPropsResult>;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  const { page, session } = pageProps;
  return (
    <SessionProvider session={session}>
      <StoreContextProvider>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
        {pageProps.preview && <PreviewIndicator />}
        <Cookie />
        {page?.seo && <Seo pageUrl={"https://www.test.com"} {...page.seo} />}
      </StoreContextProvider>
    </SessionProvider>
  );
}

export default App;
