import React from "react";

interface SectionProps {
  width?: "full" | "normal";
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  width = "normal",
  className,
  id,
}) => {
  return (
    <section
      id={id}
      style={{ maxWidth: 1200 }}
      className={`px-2 mx-auto  ${className}`}
    >
      {children}
    </section>
  );
};
