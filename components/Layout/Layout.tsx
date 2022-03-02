import { PageProps } from "lib/SanityPageBuilder/types";
import SkipToContent from "lib/SkipToContent/SkipComponent";
import { PageResult } from "pages/[[...slug]]";
import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";
interface LayoutProps extends PageProps<PageResult> {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, page, data } = props;
  return (
    <>
      <SkipToContent containerId="main-content" />
      <Header>
        <Nav items={data?.navigation || []} slugs={data?.langSwitchData} />
      </Header>
      <Head name={data?.title} />
      <main id="main-content" className="min-h-screen mt-[57px] select-none">
        {children}
      </main>
      <Footer navItems={page?.navigation || []} />
    </>
  );
};
