import { FetchStaticPropsResult } from "@services/SanityService/fetchStaticProps";
import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";
interface LayoutProps extends FetchStaticPropsResult {}

export const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  const extraNav = page?.siteSettings.extraNav.map((i) => ({
    href: i.link.internalLink || i.link.externalLink || "/",
    label: i.label || " ",
    external: !!i.link.externalLink,
  }));

  return (
    <>
      <Header>
        <Nav items={page?.siteSettings.mainNav || []} />
      </Header>
      <Head />
      <main className="min-h-screen pt-[170px]">{children}</main>
      <Footer navItems={extraNav || []} />
    </>
  );
};
