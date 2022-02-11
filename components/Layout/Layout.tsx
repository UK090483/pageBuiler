import { FetchStaticPropsResult } from "@services/pageBuilderService/lib/fetchStaticProps";
import { PageResult } from "pages/[[...slug]]";
import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";
interface LayoutProps extends FetchStaticPropsResult<PageResult> {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, page, data } = props;
  return (
    <>
      <Header>
        <Nav items={data?.navigation || []} slugs={data?.langSwitchData} />
      </Header>
      <Head name={data?.title} />
      <main className="min-h-screen">{children}</main>
      <Footer navItems={page?.navigation || []} />
    </>
  );
};
