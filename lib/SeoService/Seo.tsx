import { NextSeo } from "next-seo";
import { SeoType } from "./SeoQuerys";
import React from "react";

interface SeoProps extends SeoType {
  pageUrl?: string;
}

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";

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
      title={metaTitle}
      description={metaDesc}
      canonical={canUrl}
      openGraph={{
        url: canUrl,
        title: shareTitle,
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
