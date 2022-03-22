import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useAppContext } from "@components/AppContext";

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";
const titlePrefix = "PERSPEKTIV REGION | ";

type SeoProps = {
  hostName?: string;
};

const Seo: React.FC<SeoProps> = (props) => {
  const { pathname } = useRouter();
  const { data, hostName } = useAppContext();
  const seo = data?.seo;
  if (!seo) return null;
  const {
    metaTitle,
    metaDesc,
    shareTitle,
    shareDesc,
    canonical,
    shareGraphic,
    pageUrl = hostName,
  } = seo;

  const canUrl = `${pageUrl}/${canonical}`;
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
            width: 1200,
            height: 630,
          },
        ],
        site_name: "Perspektiv Region",
      }}
    />
  );
};
export default Seo;
