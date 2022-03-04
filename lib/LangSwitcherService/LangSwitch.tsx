import { useHomeRoute } from "@components/Layout/LayoutContext";
import { Link } from "@components/Link";
import { useRouter } from "next/router";
import React from "react";
import { LangSwitcherResult } from "./LangSwitcherQuery";

export interface LangSwitchProps {
  className?: string;
  slugs?: LangSwitcherResult["langSwitchData"];
}

const defaultItems = [
  { label: "DE", locale: "de" },
  // { label: "EN", locale: "en" },
  { label: "DK", locale: "da" },
];
export const LangSwitch: React.FC<LangSwitchProps> = (props) => {
  const { className, slugs } = props;
  const items = defaultItems;
  const { locale } = useRouter();

  return (
    <div className={`flex ${className} pr-2`}>
      {items.map((item) => {
        return (
          <Link
            scroll={false}
            key={item.locale}
            href={
              (slugs && (slugs[`href_${item.locale}`] || slugs[`href`])) || "/"
            }
            locale={item.locale}
            className={`px-1 w-9 h-9 flex items-center justify-center rounded-full font-bold  border-black  leading-none hover:underline ${
              item.locale === locale ? "border-2" : ""
            } `}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};
