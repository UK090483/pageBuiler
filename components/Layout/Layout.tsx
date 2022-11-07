import React from "react";
import SkipToContent from "@lib/SkipToContent/SkipComponent";
import { Header } from "./Header";
import Nav from "./Navigation/Nav/Nav";
import Footer from "./Footer/Footer";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <SkipToContent containerId="main-content" />
      <Header>
        <Nav />
      </Header>
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};
