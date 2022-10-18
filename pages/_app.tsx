import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";
import Cookie from "@lib/Cookie/Cookie";
import PreviewIndicator from "@lib/SanityPageBuilder/lib/preview/PreviewIndicator";
import Seo from "@lib/SeoService/Seo";
import { PageResult } from "./[[...slug]]";
import { PageProps } from "@lib/SanityPageBuilder/types";
import usePreviewSubscription from "@lib/SanityPageBuilder/lib/preview/previewSubscription";
import { AppContextProvider } from "@components/AppContext";

import AppConfig from "app.config.json";
import { PageBuilderContextProvider } from "PageBuilder/PageBuilderContext";
import { PageBuilderContentTypeResult } from "PageBuilder/types";
import { PageData } from "PageBuilder.config";

interface AppPropsWithStaticProps {
  pageProps: { data: PageData };
  Component: NextComponentType;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  return (
    <PageBuilderContextProvider data={pageProps.data}>
      <Layout>
        <Component />
      </Layout>

      {/* <PreviewIndicator show={!!preview} />
        <Cookie />
        <Seo />  */}
    </PageBuilderContextProvider>
  );
}

export default App;
