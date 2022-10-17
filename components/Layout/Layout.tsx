import React from "react";
import SkipToContent from "@lib/SkipToContent/SkipComponent";

export const Layout: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <SkipToContent containerId="main-content" />
      {/* <Header>
        <Nav />
      </Header> */}
      <main id="main-content" className="min-h-screen mt-[57px] select-none">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
};
