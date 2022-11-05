import { listingBuilderItem } from "./types";

const getVariant = (items: listingBuilderItem[]) =>
  items
    .filter((i) => !!i.variants)
    .reduce(
      (acc, item) =>
        acc + `contentType == "${item.name}" => ${item.name}Variant,`,
      "select("
    ) + "),";

const getFilterQuery = (item: listingBuilderItem) => {
  if (!item.filter) return "";
  return item.filter.reduce((acc, filter) => {
    return (
      acc +
      `contentType == "${item.name}" && ${item.name}Filter == "${
        filter.value
      }"  => *[_type == "${item.name}" && ${filter.queryFilter.filter}]${
        filter.queryFilter.order ? `| order(${filter.queryFilter.order})` : ""
      },`
    );
  }, "");
};

const getReferenceQuery = (item: listingBuilderItem) => {
  return `contentType == "${item.name}" => [...${item.name}Items[]->],`;
};

const getItemQuery = (items: listingBuilderItem[]) => {
  return (
    items.reduce(
      (acc, item) => acc + getFilterQuery(item) + getReferenceQuery(item),
      "select("
    ) + ")"
  );
};

function buildQuery(
  items: listingBuilderItem[],
  baseProjection: string
): string {
  const res = `
   contentType,
  'items': ${getItemQuery(items)}[]{${baseProjection}},
  'variant': ${getVariant(items)}
  `;
  return res;
}

export default buildQuery;
