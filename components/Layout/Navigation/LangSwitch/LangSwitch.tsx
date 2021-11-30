import { Link } from "@components/Link";
import { useRouter } from "next/router";
import React from "react";

interface LangSwitchProps {
  items?: { label: string; locale: string }[];
  className?: string;
}

const defaultItems = [
  { label: "DE", locale: "de" },
  { label: "EN", locale: "en" },
  { label: "DK", locale: "dk" },
];
export const LangSwitch: React.FC<LangSwitchProps> = ({
  className,
  items = defaultItems,
}) => {
  const { asPath } = useRouter();
  return (
    <div className={`flex ${className}`}>
      {items.map((item) => {
        return (
          <Link
            key={item.locale}
            href={asPath}
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
