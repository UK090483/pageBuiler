import { PageProps } from "@lib/SanityPageBuilder/types";
import SkipToContent from "@lib/SkipToContent/SkipComponent";
import { useRouter } from "next/router";
import { PageResult } from "pages/[[...slug]]";
import React from "react";
import Footer from "./Footer";
import { Header } from "./Header";
import { LayoutContextProvider } from "./LayoutContext";
import Nav from "./Navigation/Nav/Nav";
interface LayoutProps extends PageProps<PageResult> {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, data } = props;

  return (
    <>
      <style global jsx>
        {`
          @font-face {
            font-family: "grotesk";
            src: url("/fonts/PPRightGrotesk-CompactBlack.woff2") format("woff2"),
              url("/fonts/PPRightGrotesk-CompactBlack.woff") format("woff");
            font-style: normal;
            font-weight: 800;
            font-display: swap;
          }
        `}
      </style>
      <LayoutContextProvider homeRoute={data?.homeRoute}>
        <SkipToContent containerId="main-content" />
        <Header>
          <Nav items={data?.navigation || []} slugs={data?.langSwitchData} />
        </Header>

        <main id="main-content" className="min-h-screen mt-[57px] select-none">
          {children}
        </main>
        {data && <Footer {...data} />}
      </LayoutContextProvider>
    </>
  );
};
