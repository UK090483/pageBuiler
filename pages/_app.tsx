import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";

import { PageBuilderContextProvider } from "PageBuilder/lib/PageBuilderContext";
import { PageResult } from "PageBuilder/ContentTypes/Page/page.types";
import Seo from "PageBuilder/Objects/Seo/frontend/Seo";
import PreviewIndicator from "PageBuilder/lib/Preview/PreviewIndicator";

interface AppPropsWithStaticProps {
  pageProps: { data: PageResult; query?: string };
  Component: NextComponentType;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  return (
    <PageBuilderContextProvider query={pageProps.query} data={pageProps.data}>
      <Seo />
      <Layout>
        <Component />
      </Layout>
      <PreviewIndicator />
      {/* <Cookie />  */}
    </PageBuilderContextProvider>
  );
}

export default App;
