import Section from "@components/Section/Section";
import React from "react";

interface GridProps {}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <Section
      asInner="ul"
      bg="grey"
      width="l"
      className="grid grid-cols-1 gap-8 py-32 md:grid-cols-2 lg:grid-cols-3 "
    >
      {children}
    </Section>
  );
};
