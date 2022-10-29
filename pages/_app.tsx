import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType, NextPageContext } from "next";

import { PageBuilderContextProvider } from "PB/PageBuilderContext";
import { PageData } from "PageBuilder.config";
import Seo from "PageBuilderPlugins/SeoPlugin/frontend/Seo";

interface AppPropsWithStaticProps {
  pageProps: { data: PageData };
  Component: NextComponentType;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  //console.log(pageProps.data);

  return (
    <PageBuilderContextProvider data={pageProps.data}>
      <Seo />
      <Layout>
        <Component />
      </Layout>

      {/* <PreviewIndicator show={!!preview} />
        <Cookie /> */}
    </PageBuilderContextProvider>
  );
}

export default App;
