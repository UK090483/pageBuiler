import Document, { Head, Html, Main, NextScript } from "next/document";

const isDevelopment = process.env.NODE_ENV === "development";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="preload"
            href="/fonts/PPRightGrotesk-CompactBlack.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        </Head>

        <body
          className={`text-black break-words  ${
            isDevelopment ? "debug-screens" : ""
          } `}
        >
          <Main />
          <div id="app-portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
