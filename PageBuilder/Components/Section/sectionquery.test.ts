import { testProjection } from "../../__test__/queryTest";
import { sectionBlockQuery } from "./section.query";

describe("Component Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(sectionBlockQuery());
    expect(res.error).toBeFalsy();
  });
});
