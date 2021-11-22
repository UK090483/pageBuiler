import { Container } from "@components/Container";
import { Section } from "@components/Section";
import React from "react";
import { Card } from "./Card";

interface Props {}

export const Carousel = (props: Props) => {
  return (
    <Section className="w-full bg-gray-300">
      <Container className="flex justify-between px-8 py-64 ">
        <Card />
        <Card />
        <Card />
      </Container>
    </Section>
  );
};
