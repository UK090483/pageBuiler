import { testProjection } from "../../__test__/queryTest";
import { pageQuery } from "./page.query";

describe("Page Query", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(pageQuery("en"));
    expect(res.error).toBeFalsy();
  });
});
