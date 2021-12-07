import { Link } from "@components/Link";
import React from "react";
import { LangSwitcherResult } from "./LangSwitcherQuery";

export interface LangSwitchProps {
  className?: string;
  slugs?: LangSwitcherResult["langSwitchData"];
}

const defaultItems = [
  { label: "DE", locale: "de" },
  { label: "EN", locale: "en" },
  { label: "DK", locale: "da" },
];
export const LangSwitch: React.FC<LangSwitchProps> = (props) => {
  const { className, slugs } = props;
  const items = defaultItems;

  return (
    <div className={`flex ${className}`}>
      {items.map((item) => {
        return (
          <Link
            scroll={false}
            key={item.locale}
            href={(slugs && slugs[`href_${item.locale}`]) || "/"}
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
