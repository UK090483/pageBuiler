import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { useRouter } from "next/router";
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

  const { locale } = useRouter();

  const sortedItems = React.useMemo(() => {
    const now = new Date().toISOString().slice(0, 10);
    return items
      ? items.sort((a) => {
          return a.date < now ? 1 : -1;
        })
      : [];
  }, [items]);

  const { filter, setFilter, filteredItems } = useFilter({
    items: sortedItems,
    filterFn: (item, currentFilter) => item?.tags === currentFilter,
  });

  const handleFilterChange = (i: { label: string; value: string }) => {
    setFilter(i.value);
  };

  return (
    <>
      {title && (
        <Section width="m">
          <Typo variant="h3" className=" uppercase pb-12  pt-6 md:pt-12 ">
            {title}
          </Typo>
        </Section>
      )}
      {filterItems && accordion && (
        <Section width="m" as="div">
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
            <EventsListItem
              locale={locale}
              key={i._id}
              {...i}
              accordion={accordion}
            />
          ))}
        </div>
      </ul>
    </>
  );
};

export default EventsList;
