import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { usePageBuilderContext } from "../../../lib/PageBuilderContext";

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";
const titlePrefix = "Pagetitle | ";

const hostName = "http://localhost:3000/";
const ogImageEndpoint = "api/og";

type SeoProps = {
  hostName?: string;
};

const Seo: React.FC<SeoProps> = (props) => {
  const { pathname } = useRouter();

  const { data } = usePageBuilderContext();

  const seo = data?.seo;

  if (!seo) return null;
  const { metaTitle, metaDesc, shareDesc, shareGraphic } = seo;

  return null;

  const canUrl = `nooooo`;
  const is404 = pathname === "/404";
  const title = is404 ? titlePrefix + "404" : titlePrefix + metaTitle;

  return (
    <NextSeo
      nofollow={true}
      noindex={true}
      title={title}
      description={metaDesc || ""}
      canonical={canUrl}
      twitter={{
        cardType: "summary",
      }}
      openGraph={{
        url: canUrl,
        title: title,
        description: shareDesc || "",
        type: "page",
        images: [
          {
            url:
              hostName +
              ogImageEndpoint +
              `?imageId=${shareGraphic?.asset._ref}`,
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
