import { testQuery } from "PageBuilder/__test__/querytest";

import query from "./query";

describe("query should be valid", () => {
  expect(testQuery(query({}), [])).toBe("");
});
