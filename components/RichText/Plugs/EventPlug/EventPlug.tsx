import { PlugProps } from "lib/SanityPageBuilder/lib/RichText";
import React from "react";
import EventItem, { IEventItem } from "./EventItem";

interface IEventPlugProps {
  items?: IEventItem[];
}

const EventPlug: React.FC<PlugProps<IEventPlugProps>> = (props) => {
  const { items } = props.node;
  return (
    <div>
      {items && items.map((i, index) => <EventItem key={index} {...i} />)}
    </div>
  );
};

export default EventPlug;
