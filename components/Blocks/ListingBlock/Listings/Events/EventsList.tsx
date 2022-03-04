import * as React from "react";
import Filter from "../Default/Filter";

import EventsListItem from "./EventsListItem";

interface IEventsListProps {
  items?: any[] | null;
  filterItems?: { label: string; value: string }[];
  accordion?: boolean;
}

const EventsList: React.FunctionComponent<IEventsListProps> = (props) => {
  const { items, filterItems, accordion } = props;

  const [filter, setFilter] = React.useState("all");

  const handleFilterChange = (i: { label: string; value: string }) => {
    setFilter(i.value);
  };

  return (
    <>
      {filterItems && (
        <Filter
          active={filter}
          onChange={handleFilterChange}
          items={filterItems}
        />
      )}
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
