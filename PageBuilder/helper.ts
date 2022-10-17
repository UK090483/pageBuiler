export const reduceValues = (items: any[], key: string, value: string) => {
  return items.reduce((acc, item) => {
    if (item[value] && item[key]) {
      return { ...acc, [item[key]]: item[value] };
    }
    return acc;
  }, {} as { [k: string]: string });
};

/**
 * Returns empty array if input is undefined.
 * @param inputArray - The first input number
 * @returns x or []
 *
 * @beta
 */

export function defaultEmptyArray<T extends any>(inputArray: T[] | undefined) {
  return inputArray ? inputArray : [];
}
