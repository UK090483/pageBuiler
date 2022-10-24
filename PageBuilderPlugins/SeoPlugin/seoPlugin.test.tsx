import { testQuery } from "../../PageBuilder/__test__/querytest";

import query from "./query";

const defaultSeo = {
  metaTitle: "title",
  metaDesc: "description",
  shareTitle: "title",
  shareDesc: "description",
};

const page = {
  _type: "page",
  seo: {
    metaTitle: "title",
    metaDesc: "description",
    shareTitle: "title",
    shareDesc: "description",
  },
};

describe("seo query", () => {
  it("should be valid", async () => {
    const res = await testQuery(`*[_type == 'page']{${query({})}}`, []);
    expect(res).toEqual([]);
  });

  it("should be ", async () => {
    const res = await testQuery(`*[_type == 'page'][]{${query({})}}`, [
      defaultSeo,
      page,
    ]);
    expect(res).toEqual([]);
  });

  // it("should ", () => {
  //   expect(testQuery(query({}), [defaultSeo])).resolves.toBe({});
  // });
});
