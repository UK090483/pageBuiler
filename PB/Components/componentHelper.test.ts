import { componentStyleProjection } from "./componentHelper";
import { testProjection } from "../../PageBuilder/__test__/querytest";

describe("Component Helper", () => {
  it("projection should be Valid", async () => {
    const res = await testProjection(componentStyleProjection);
    console.log(res);

    expect(res).toBeTruthy();
  });
});
