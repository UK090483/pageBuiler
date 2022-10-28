import { testProjection } from "../../../__test__/queryTest";
import { imagePlugProjection } from "./ImagePlug.query";

describe("Component Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(imagePlugProjection);
    expect(res.error).toBeFalsy();
  });
});
