import { componentStyleProjection } from "./componentHelper";
import { testProjection } from "../__test__/queryTest";

describe("Component Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(componentStyleProjection);
    expect(res.error).toBeFalsy();
  });
});
