import clsx from "clsx";
import * as React from "react";

interface IListWrapProps {
  columns?: number;
  columnsMobile?: number;
  variant?: "grid";
  children: React.ReactNode;
}

interface IListWrapAutoProps<T extends unknown = {}> {
  columns?: number;
  columnsMobile?: number;
  variant?: "grid";
  items: T[];
  key: keyof T;
  children: (props: T) => React.ReactNode;
}

function ListWrap<T>(props: IListWrapAutoProps<T>) {
  const { children, columns = 3, columnsMobile = 1, items, key } = props;

  return (
    <ul
      className={clsx("grid   grid-flow-row gap-8 ", {
        "grid-cols-1": columnsMobile === 1,
        "grid-cols-2": columnsMobile === 2,
        "grid-cols-3": columnsMobile === 3,
        "grid-cols-4": columnsMobile === 4,
        "md:grid-cols-1": columns === 1,
        "md:grid-cols-2": columns === 2,
        "md:grid-cols-3": columns === 3,
        "md:grid-cols-4": columns === 4,
        "md:grid-cols-5": columns === 5,
        "md:grid-cols-6": columns === 6,
        "md:grid-cols-7": columns === 7,
        "md:grid-cols-8": columns === 8,
      })}
    >
      {items &&
        items.map((i) => (
          <li key={i[key] as string | number}>{children(i)}</li>
        ))}
    </ul>
  );
}

interface IListItemProps {}

const ListItem: React.FC<IListItemProps> = (props) => {
  const { children } = props;
  return <li>{children}</li>;
};

const List = { wrap: ListWrap };
export default List;
