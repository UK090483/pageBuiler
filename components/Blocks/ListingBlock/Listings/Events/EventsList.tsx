import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import * as React from "react";
import Filter from "../Default/Filter";
import useFilter from "../useFilter";

import EventsListItem from "./EventsListItem";

interface IEventsListProps {
  items?: any[] | null;
  filterItems?: { label: string; value: string }[];
  accordion?: boolean;
  title?: string | null;
}

const EventsList: React.FunctionComponent<IEventsListProps> = (props) => {
  const { items, filterItems, accordion, title } = props;

  const { filter, setFilter, filteredItems } = useFilter({
    items,
    filterFn: (item, currentFilter) => item?.tags === currentFilter,
  });

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
      {filterItems && accordion && (
        <Section width="m">
          <Filter
            active={filter}
            onChange={handleFilterChange}
            items={filterItems}
          />
        </Section>
      )}
      <ul className="w-full">
        <div>
          {filteredItems?.map((i) => (
            <EventsListItem key={i._id} {...i} accordion={accordion} />
          ))}
        </div>
      </ul>
    </>
  );
};

export default EventsList;
