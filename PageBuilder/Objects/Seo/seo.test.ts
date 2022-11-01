import { testProjection } from "../../__test__/queryTest";
import { seoQuery } from "./Seo.query";

describe("Hero Query", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(seoQuery());
    expect(res.error).toBeFalsy();
  });
});
