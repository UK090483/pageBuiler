import { Link } from "@components/Link";
import { NextRouter, useRouter } from "next/router";
import React from "react";

interface LangSwitchProps {
  className?: string;
  slugs: { [k: string]: any };
}

const defaultItems = [
  { label: "DE", locale: "de" },
  { label: "EN", locale: "en" },
  { label: "DK", locale: "da" },
];
export const LangSwitch: React.FC<LangSwitchProps> = (props) => {
  const { className, slugs } = props;
  const items = defaultItems;

  const router = useRouter();

  return (
    <div className={`flex ${className}`}>
      {items.map((item) => {
        return (
          <Link
            scroll={false}
            key={item.locale}
            href={getHref(router, slugs, item.locale)}
            locale={item.locale}
            className="px-1 leading-none hover:underline"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

const getHref = (
  router: NextRouter,
  slugs: { [k: string]: any },
  requestLocale: string
): string => {
  const { asPath, defaultLocale, locale } = router;
  let slug = null;

  if (asPath === "/") return "/";

  if (defaultLocale === requestLocale) {
    slug = slugs[`slug`];
  } else {
    slug = slugs[`slug_${requestLocale}`];
  }

  if (slug && slug.current && typeof slug.current === "string")
    return slug.current;

  return "/";
};
