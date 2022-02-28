import React from "react";
import NextHead from "next/head";

interface HeadProps {
  name?: string;
}

const Head: React.FunctionComponent<HeadProps> = ({ name }) => {
  return (
    <NextHead>
      <title>Perspektiv Regionen {name ? `/ ${name}` : ""}</title>
      <meta
        name="description"
        content="Generated width love by create next app"
      />
      <link rel="icon" href="/logo.png" />
      <link
        rel="preload"
        href="/fonts/PPRightGrotesk-CompactBlack.woff2"
        as="font"
        crossOrigin=""
      />
    </NextHead>
  );
};

export default Head;
