import clsx from "clsx";
import React from "react";
import { SectionContextProvider } from "./SectionContext";

interface SectionProps {
  width?: "full" | "m" | "l" | "s" | "responsive";
  bg?: "white" | "grey" | "black" | "primary" | "secondary";
  className?: string;
  id?: string;
  noPadding?: boolean;
  as?: "section" | "div" | "ul";
  asInner?: "div" | "ul";
  style?: React.CSSProperties;
  topSpace?: "s" | "m" | "l" | "xl" | "xxl" | "none";
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl" | "none";
  "data-testid"?: string;
}

const isDefault = (item: any) => {
  return item === undefined || item === null;
};

export const Section: React.FC<SectionProps> = (props) => {
  const {
    topSpace,
    bottomSpace,
    children,
    width = "m",
    className,
    id,
    bg = "white",
    as: Component = "section",
    asInner: InnerComponent = "div",
    style,
  } = props;

  return (
    <SectionContextProvider bgColor={bg} width={width}>
      <Component
        data-testid={props["data-testid"] || "section"}
        id={id}
        className={clsx(`w-full `, {
          "bg-white": bg === "white",
          "bg-primary": bg === "primary",
          "bg-secondary": bg === "secondary",
          "bg-gray-300": bg === "grey",
          "pt-5 md:pt-10": topSpace === "s" || isDefault(topSpace),
          "pt-9 md:pt-20": topSpace === "m",
          "pt-12 md:pt-32": topSpace === "l",
          "pt-16 md:pt-44": topSpace === "xl",
          "pt-24 md:pt-60": topSpace === "xxl",
          "pb-5 md:pb-10": bottomSpace === "s" || isDefault(bottomSpace),
          "pb-9 md:pb-20": bottomSpace === "m",
          "pb-16 md:pb-32": bottomSpace === "l",
          "pb-12 md:pb-44": bottomSpace === "xl",
          "pb-24 md:pb-60": bottomSpace === "xxl",
        })}
      >
        <InnerComponent
          style={style}
          className={clsx(
            "mx-auto px-sides",
            "prose prose-base md:prose-lg lg:prose-xl   ",
            className
          )}
        >
          {children}
        </InnerComponent>
      </Component>
    </SectionContextProvider>
  );
};

export default Section;
