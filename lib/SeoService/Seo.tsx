import { NextSeo } from "next-seo";
import { SeoType } from "./SeoQuery";
import React from "react";

interface SeoProps extends SeoType {
  pageUrl?: string;
}

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";

const titlePrefix = "PERSPEKTIV REGION | ";

const Seo: React.FC<SeoProps> = (props) => {
  const {
    metaTitle,
    metaDesc,
    shareTitle,
    shareDesc,
    canonical,
    shareGraphic,
    pageUrl = typeof window !== "undefined"
      ? window.location.origin
      : "https://www.example.ie/",
  } = props;
  const canUrl = `${pageUrl}${canonical}`;

  return (
    <NextSeo
      nofollow={true}
      noindex={true}
      title={titlePrefix + metaTitle}
      description={metaDesc}
      canonical={canUrl}
      twitter={{
        cardType: "summary",
      }}
      openGraph={{
        url: canUrl,
        title: titlePrefix + metaTitle,
        description: shareDesc,

        type: "page",
        images: [
          {
            url: shareGraphic + metaImageParams || "",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
        ],
        site_name: "SiteName",
      }}
    />
  );
};
export default Seo;
