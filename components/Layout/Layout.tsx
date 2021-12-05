import { FetchStaticPropsResult } from "@services/pageBuilderService/lib/fetchStaticProps";
import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";
interface LayoutProps extends FetchStaticPropsResult {}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, page } = props;

  return (
    <>
      <Header>
        <Nav items={page?.siteSettings?.mainNav || []} slugs={page || {}} />
      </Header>
      <Head name={page?.title} />
      <main className="min-h-screen">{children}</main>
      <Footer navItems={page?.siteSettings?.mainNav || []} />
    </>
  );
};
