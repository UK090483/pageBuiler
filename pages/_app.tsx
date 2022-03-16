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

interface AppPropsWithStaticProps {
  pageProps: PageProps<PageResult>;
  Component: NextComponentType<NextPageContext, any, PageProps<PageResult>>;
}

function App({ Component, pageProps: _pageProps }: AppPropsWithStaticProps) {
  const { data: _data, query, preview } = _pageProps;

  const { data, error } = usePreviewSubscription<PageResult | null>(query, {
    initialData: _data,
    enabled: preview,
  });

  const aData = { ..._data, ...data };

  const pageProps = { ..._pageProps, data: aData } as PageProps<PageResult>;

  return (
    <AppContextProvider data={pageProps.data}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
      {preview && <PreviewIndicator />}
      <Cookie />
      {data?.seo && <Seo {...data.seo} />}
    </AppContextProvider>
  );
}

export default App;
