import { testProjection } from "../../__test__/queryTest";
import { heroQueryProjection } from "./hero.query";

describe("Hero Query", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(heroQueryProjection());
    expect(res.error).toBeFalsy();
  });
});
