import { testQuery } from "../../PageBuilder/__test__/querytest";

import query from "./query";

const defaultSeo = {
  _type: "seoConfig",
  seo: {
    metaTitle: "DefaultTitle",
    metaDesc: "DefaultDescription",
    shareTitle: "DefaultTitle",
    shareDesc: "DefaultDescription",
  },
};

const cases = [
  {
    name: "Meta Title",
    accessor: "metaTitle",
    defaultResult: "DefaultTitle",
    derivedValue: { title: "title" },
    deriverResult: "title",
    seoSetValue: { seo: { metaTitle: "metaTitle" } },
    seoSetResult: "metaTitle",
  },
  {
    name: "Share Title",
    accessor: "shareTitle",
    defaultResult: "DefaultTitle",
    derivedValue: { title: "title" },
    deriverResult: "title",
    seoSetValue: { seo: { shareTitle: "shareTitle" } },
    seoSetResult: "shareTitle",
  },
  {
    name: "Meta Description",
    accessor: "metaDesc",
    defaultResult: "DefaultDescription",
    derivedValue: { description: "description" },
    deriverResult: "description",
    seoSetValue: { seo: { metaDesc: "metaDesc" } },
    seoSetResult: "metaDesc",
  },
  {
    name: "Share Description",
    accessor: "shareDesc",
    defaultResult: "DefaultDescription",
    derivedValue: { description: "description" },
    deriverResult: "description",
    seoSetValue: { seo: { shareDesc: "shareDesc" } },
    seoSetResult: "shareDesc",
  },
];

describe("seo query", () => {
  it.each(cases)(
    "should return default $name ",
    async ({ defaultResult, accessor }) => {
      const res = await testQuery(`*[_type == 'page'][]{${query({})}}`, [
        defaultSeo,
        { _type: "page" },
      ]);
      expect(res[0].seo[accessor]).toBe(defaultResult);
    }
  );

  it.each(cases)(
    "should return derived $name ",
    async ({ derivedValue, deriverResult, accessor }) => {
      const res = await testQuery(`*[_type == 'page'][]{${query({})}}`, [
        defaultSeo,
        { _type: "page", ...derivedValue },
      ]);
      expect(res[0].seo[accessor]).toBe(deriverResult);
    }
  );

  it.each(cases)(
    "should return seo Custom $name ",
    async ({ seoSetValue, seoSetResult, accessor }) => {
      const res = await testQuery(`*[_type == 'page'][]{${query({})}}`, [
        defaultSeo,
        { _type: "page", ...seoSetValue },
      ]);
      expect(res[0].seo[accessor]).toBe(seoSetResult);
    }
  );
});
