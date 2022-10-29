import Link from "@components/Link";
import { useRouter } from "next/router";
import React from "react";

import { LangSwitcherResult } from "../navigation.types";

export interface LangSwitchProps {
  className?: string;

  LangSwitcherResult?: LangSwitcherResult;
  onClick?: () => void;
}

export const LangSwitch: React.FC<LangSwitchProps> = (props) => {
  const { className, LangSwitcherResult, onClick = () => {} } = props;

  const { locale } = useRouter();

  if (!LangSwitcherResult) return null;

  const items = Object.entries(LangSwitcherResult).map(([key, item]) => ({
    ...item,
    key,
  }));

  return (
    <div className={`flex ${className} pr-2`}>
      {items.map((item) => {
        return (
          <Link
            aria-label={item.title}
            onClick={onClick}
            scroll={false}
            key={item.key}
            href={item.link || "/"}
            locale={item.key}
            className={`px-1 w-9 h-9 flex items-center justify-center rounded-full font-bold  border-black  leading-none hover:underline ${
              item.key === locale ? "border-2" : ""
            } `}
          >
            {item.key}
          </Link>
        );
      })}
    </div>
  );
};
