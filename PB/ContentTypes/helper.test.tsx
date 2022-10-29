import { testProjection } from "../__test__/queryTest";
import { BaseContentTypeProjection } from "./helper";

describe("ContenType Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(BaseContentTypeProjection());
    expect(res.error).toBeFalsy();
  });
});
