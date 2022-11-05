import listingSchema from "./listing.schema";
import { items } from "./listing.items";

describe("listing Schema", () => {
  test.each(items)("should  add $name Reference List ", ({ name, items }) => {
    const foundReferentList = listingSchema.fields.find(
      (i) => i.name === `${name}Items`
    );
    if (!items) {
      expect(foundReferentList).toBeUndefined();
    }
    if (items) {
      //@ts-ignore
      expect(foundReferentList.of).toEqual(items);
    }
  });

  test.each(items)("should  add $name Variants ", ({ name, variants }) => {
    const foundVariants = listingSchema.fields.find(
      (i) => i.name === `${name}Variants`
    );
    if (!variants) {
      expect(foundVariants).toBeUndefined();
    }
    if (variants) {
      //@ts-ignore
      expect(foundVariants?.options?.list).toEqual(variants);
    }
  });
});
