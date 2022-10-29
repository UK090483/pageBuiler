import { testProjection } from "../../../__test__/queryTest";
import { editorQuery } from "./editor.query";

describe("Editor", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(editorQuery());
    expect(res.error).toBeFalsy();
  });
});
