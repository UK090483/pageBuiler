import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import React from "react";

interface ListProps {
  title?: string;
}

const List: React.FC<ListProps> = ({ children, title }) => {
  return (
    <>
      <Section width="l">
        <Typo variant="h2" space={false} className="py-16 ">
          {title}
        </Typo>
        <ul className="grid grid-cols-1 gap-32 pb-32">{children}</ul>
      </Section>
    </>
  );
};

export default List;
