import React from "react";
import NextHead from "next/head";

interface HeadProps {}

const Head: React.FunctionComponent<HeadProps> = (props) => {
  return (
    <NextHead>
      <title>H&M</title>
      <meta
        name="description"
        content="Generated width love by create next app"
      />
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="preload"
        href="/fonts/HMSans-Regular.woff"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/HMSans-SemiBold.woff"
        as="font"
        crossOrigin=""
      />
    </NextHead>
  );
};

export default Head;
