import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@lib/Cookie/Cookie";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import {
  FetchStaticPropsResult,
  PageProps,
} from "@lib/SanityPageBuilder/types";

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  const { page } = pageProps;

  return (
    <>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      {/* {pageProps?.preview && <PreviewIndicator />} */}
      <Cookie />
      {/* {pageProps?page?.seo && <Seo pageUrl={"https://www.test.com"} {...page.seo} /> */}
    </>
  );
}

export default App;
