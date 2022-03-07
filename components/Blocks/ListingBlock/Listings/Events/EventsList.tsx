import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import * as React from "react";
import Filter from "../Default/Filter";

import EventsListItem from "./EventsListItem";

interface IEventsListProps {
  items?: any[] | null;
  filterItems?: { label: string; value: string }[];
  accordion?: boolean;
  title?: string | null;
}

const EventsList: React.FunctionComponent<IEventsListProps> = (props) => {
  const { items, filterItems, accordion, title } = props;

  const [filter, setFilter] = React.useState("all");

  const handleFilterChange = (i: { label: string; value: string }) => {
    setFilter(i.value);
  };

  return (
    <>
      {title && (
        <Section width="l">
          <Typo variant="h3" className=" uppercase pb-12  pt-6 md:pt-12 ">
            {title}
          </Typo>
        </Section>
      )}
      {/* {filterItems && (
        <Filter
          active={filter}
          onChange={handleFilterChange}
          items={filterItems}
        />
      )} */}
      <ul className="w-full">
        <div>
          {items?.map((i) => (
            <EventsListItem key={i._id} {...i} accordion={accordion} />
          ))}
        </div>
      </ul>
    </>
  );
};

export default EventsList;
