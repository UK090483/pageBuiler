import React from "react";
import clsx from "clsx";

type ElementKeys = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
>;

type mappingObject = { [Key: string]: ElementKeys };

const variantsMapping: mappingObject = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

interface TypographyProps {
  variant?: keyof typeof variantsMapping;
  as?: ElementKeys;
  className?: string;
  spacer?: boolean;
  hand?: boolean;
  bold?: boolean;
  space?: boolean;
}

const boldMap = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Typo: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  className = "",
  as,
  spacer = false,
  hand = false,
  bold,
  space,
}) => {
  const Component: ElementKeys = as ? as : variantsMapping[variant];
  const isBold =
    bold !== undefined ? bold : boldMap.includes(variant as string);

  if (spacer) {
    return <div className=" h-14" />;
  }

  return (
    <Component
      style={{
        paddingBottom: space === undefined ? "1em" : space ? "1em" : "0",
      }}
      className={
        clsx({
          "font-hand": hand,
          "text-sm": variant === "body2",
          "text-base ": variant === "body1",
          "text-lg": variant === "h6",
          "text-xl": variant === "h5",
          "text-2xl": variant === "h4",
          "text-3xl": variant === "h3",
          "text-4xl": variant === "h2",
          "text-5xl": variant === "h1",
          "font-bold": isBold,
        }) + ` ${className}`
      }
    >
      {children}
    </Component>
  );
};

export default Typo;
