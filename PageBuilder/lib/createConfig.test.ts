import { testData } from "../__test__/testData";
import createConfig from "./createConfig";

describe.only("createConfig", () => {
  test.each([
    { items: "components" },
    { items: "editor" },
    { items: "settings" },
    { items: "contentTypes" },
    { items: "objects" },
    { items: "plugs" },
    { items: "richText" },
  ])("should merge $items ", ({ items }) => {
    const res = createConfig([
      { [items]: [testData.object.one] },
      { [items]: [testData.object.two] },
    ]);
    //@ts-ignore
    expect(res[items]).toHaveLength(2);
  });
});
