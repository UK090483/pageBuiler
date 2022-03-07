import React from "react";

type UseFilterProps = {
  initialValue?: string;
  items?: null | any[];
  filterFn?: (item: any, filter: string) => boolean;
};
const useFilter = (props: UseFilterProps) => {
  const { items, initialValue = "all" } = props;
  const [filter, setFilter] = React.useState(initialValue);

  const filteredItems =
    items && filter !== initialValue
      ? items.filter((i) => i.tags === filter)
      : items || [];

  return { filter, setFilter, filteredItems };
};

export default useFilter;
