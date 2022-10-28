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
  body: "p",
  "body-l": "p",
};

interface TypographyProps {
  variant?: keyof typeof variantsMapping;
  as?: ElementKeys;
  className?: string;
  spacer?: boolean;

  space?: boolean;
}

const Typo: React.FC<TypographyProps> = ({
  variant = "body",
  children,
  className = "",
  as,
  spacer = false,
}) => {
  const Component: ElementKeys = as ? as : variantsMapping[variant] || "p";

  if (spacer) {
    return <hr className="h-14 border-0" />;
  }

  return (
    <Component {...(className ? { className } : {})}>{children}</Component>
  );
};

export default Typo;
