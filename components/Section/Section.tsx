import clsx from "clsx";
import React from "react";
import { SectionContextProvider } from "./SectionContext";

interface SectionProps {
  width?: "full" | "m" | "l" | "s" | "responsive";
  bg?: "white" | "grey" | "black" | "primary" | "secondary" | "dark-grey";
  className?: string;
  id?: string;
  noPadding?: boolean;
  as?: "section" | "div" | "ul";
  asInner?: "div" | "ul";
  style?: React.CSSProperties;
  topSpace?: "s" | "m" | "l" | "xl" | "xxl" | "none";
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl" | "none";
  "data-testid"?: string;
  noProse?: boolean;
}

const isDefault = (item: any) => {
  return item === undefined || item === null;
};

export const Section: React.FC<SectionProps> = (props) => {
  const {
    topSpace,
    bottomSpace,
    children,
    width = "responsive",
    className,
    id,
    bg,
    as: Component = "section",
    asInner: InnerComponent = "div",
    style,
    noProse,
  } = props;

  return (
    <SectionContextProvider bgColor={bg} width={width}>
      <Component
        data-testid={props["data-testid"] || "section"}
        id={id}
        className={clsx({
          "bg-white": bg === "white",
          "bg-primary": bg === "primary",
          "bg-secondary": bg === "secondary",
          "bg-grey-light": bg === "grey",
          "bg-grey-dark": bg === "dark-grey",
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
            {
              "container max-w-7xl": width === "l",
              container: width === "responsive",
              "prose prose-base md:prose-lg lg:prose-xl ": !noProse,
              " prose-invert  text-white": !noProse && bg === "dark-grey",
              "  text-white": !!noProse && bg === "dark-grey",
            },
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
