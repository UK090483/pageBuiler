import { NextSeo } from "next-seo";
import { SeoType } from "./SeoQuery";
import React from "react";
import { useRouter } from "next/router";

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
  const canUrl = `${pageUrl}/${canonical}`;

  const { pathname } = useRouter();

  const is404 = pathname === "/404";

  const title = is404 ? titlePrefix + "404" : titlePrefix + metaTitle;

  return (
    <NextSeo
      nofollow={true}
      noindex={true}
      title={title}
      description={metaDesc}
      canonical={canUrl}
      twitter={{
        cardType: "summary",
      }}
      openGraph={{
        url: canUrl,
        title: title,
        description: shareDesc,

        type: "page",
        images: [
          {
            url: shareGraphic + metaImageParams || "",
            width: 800,
            height: 600,
          },
        ],
        site_name: "Perspektiv Region",
      }}
    />
  );
};
export default Seo;
