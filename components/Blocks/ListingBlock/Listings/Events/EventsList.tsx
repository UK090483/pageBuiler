import { Section } from "@components/Section/Section";
import * as React from "react";
import Filter from "../Filter";
import EventsListItem from "./EventsListItem";

interface IEventsListProps {
  items?: any[] | null;
  filterItems?: { label: string; value: string }[];
}

const EventsList: React.FunctionComponent<IEventsListProps> = (props) => {
  const { items, filterItems } = props;

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
            <EventsListItem key={i._id} {...i} />
          ))}
        </div>
      </ul>
    </>
  );
};

export default EventsList;
