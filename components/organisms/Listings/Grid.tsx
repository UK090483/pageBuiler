import { Container } from "@components/Container";
import { Section } from "@components/Section";
import React from "react";

interface GridProps {}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <Section>
      <Container
        size="small"
        className="grid grid-cols-1 gap-8 py-32 border md:grid-cols-2 "
      >
        {children}
      </Container>
    </Section>
  );
};
