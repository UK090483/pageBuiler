import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import * as React from "react";

import PersonListItem from "./PersonListItem";

interface IPersonListProps {
  items?: any[] | null;
  title?: string | null;
}

const PersonList: React.FunctionComponent<IPersonListProps> = (props) => {
  const { items, title } = props;
  const [isMounted, setIsMounted] = React.useState(false); // Need this for the react-tooltip

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  //16return null;
  return (
    <Section width="l" className=" py-24 overflow-hidden ">
      {title && (
        <Typo variant="h4" className="text-center uppercase ">
          {title}
        </Typo>
      )}
      <ul className="w-full flex flex-wrap items-center justify-center">
        {isMounted &&
          items?.map((i, index) => <PersonListItem key={index} {...i} />)}
      </ul>
    </Section>
  );
};

export default PersonList;
