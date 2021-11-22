import { Container } from "@components/Container";
import { Image } from "@components/Image";
import { Section } from "@components/Section";
import Typo from "@components/Typography/Typography";
import React from "react";

interface QuoteProps {}

const Quote: React.FC<QuoteProps> = ({ children }) => {
  return (
    <Section width="full" className=" bg-yellow">
      <Container className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="p-16">
          <Typo bold={false} variant="h4" className="pt-6 ">
            Das sagen ehemalige Teilnehmer*innen
          </Typo>
          <Typo
            bold={false}
            hand
            variant="h2"
            className="pt-6 text-white pr-52"
          >
            Ich bin super glücklich mich für diesen Anbieter entschieden zu
            haben
          </Typo>
          <Typo bold={false} space={false} variant="h4" className="pt-6 ">
            Katharina A.
          </Typo>
          <Typo bold={false} className="pt-6 ">
            Selbstständige Lerntherapeutin
          </Typo>
        </div>

        <div className="relative ">
          <Image src="id/1062/1200/1200" />
        </div>
      </Container>
    </Section>
  );
};

export default Quote;
