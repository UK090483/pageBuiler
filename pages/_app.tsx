import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";

import { PageBuilderContextProvider } from "PageBuilder/PageBuilderContext";
import { PageData } from "PageBuilder.config";
import Seo from "PageBuilderPlugins/SeoPlugin/frontend/Seo";

interface AppPropsWithStaticProps {
  pageProps: { data: PageData };
  Component: NextComponentType;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  return (
    <PageBuilderContextProvider data={pageProps.data}>
      <Seo />
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
