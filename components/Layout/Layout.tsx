import { FetchStaticPropsResult } from "@services/SanityService/fetchStaticProps";
import React from "react";
import Footer from "./Footer";
import Head from "./Head";
import { Header } from "./Header";

interface LayoutProps extends FetchStaticPropsResult {}

export const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  const mainNav = page?.siteSettings.mainNav.map((i) => ({
    href: i.link.internalLink || i.link.externalLink || "/",
    label: i.label || " ",
    external: !!i.link.externalLink,
  }));

  const extraNav = page?.siteSettings.extraNav.map((i) => ({
    href: i.link.internalLink || i.link.externalLink || "/",
    label: i.label || " ",
    external: !!i.link.externalLink,
  }));

  const footerNav = extraNav && mainNav && [...mainNav, ...extraNav];

  return (
    <>
      <Header navItems={mainNav || []} />
      <Head />
      <main className="min-h-screen pt-60">{children}</main>
      <Footer navItems={footerNav || []} />
    </>
  );
};
