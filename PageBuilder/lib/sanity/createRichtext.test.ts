import createRichtext from "./createRichtext";

import { RichText } from "../../types";
import createLinkObject from "./defaultObjects/createLinkObject";
import createConfig from "../createConfig";

const RT: RichText = {
  name: "testRT",
  plugs: [],
};

describe("createRichtext", () => {
  it("should return empty array if no items in Config", () => {
    expect(createRichtext({})).toStrictEqual([]);
  });

  it("should return RichText object", () => {
    expect(createRichtext({ richText: [RT] })[0]).toHaveProperty(
      "name",
      "testRT"
    );
    expect(createRichtext({ richText: [RT] })[0]).toHaveProperty(
      "type",
      "array"
    );
    expect(createRichtext({ richText: [RT] })[0].of[0]).toHaveProperty(
      "type",
      "block"
    );
  });
});
