/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

import imageUrlBuilder from "@sanity/image-url";
import { config as sanityConfig } from "lib/SanityService/config";
const builder = imageUrlBuilder(sanityConfig);
export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const imageId = searchParams.get("imageId");
    const imageUrl = builder.image({ _ref: imageId }).width(1000).url();

    console.log({ imageId, imageUrl });

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "black",
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
            border: "red solid 2px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              border: "red solid 2px",
            }}
          >
            {imageUrl && (
              <img
                alt="Vercel"
                src={imageUrl}
                style={{
                  maxHeight: 300,

                  objectFit: "contain",
                }}
              />
            )}
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "white",
              marginTop: 30,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
