import MenuPlugin from "./MenuPlugin";
import { testProjection } from "../../PageBuilder/__test__/querytest";
import { testData } from "../../PageBuilder/__test__/testData";

describe("MenuPlugin", () => {
  it("should create Valid Query", async () => {
    const res = MenuPlugin();

    const query = await testProjection(
      //@ts-ignore
      res.hooks.onContentTypeQuery({
        config: testData.finalConfig,
        result: "_id,",
      })
    );
    expect(query).toBeTruthy();
  });
});
