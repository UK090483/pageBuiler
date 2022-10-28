import { testProjection } from "../../__test__/queryTest";
import { sectionQuery } from "./section.query";

describe("Component Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(sectionQuery());
    expect(res.error).toBeFalsy();
  });
});
