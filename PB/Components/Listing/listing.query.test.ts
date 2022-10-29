import { testProjection } from "../../__test__/queryTest";
import { listProjection } from "./listing.query";

describe("Component Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(listProjection());
    expect(res.error).toBeFalsy();
  });
});
