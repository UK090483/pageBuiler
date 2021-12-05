import { parse, evaluate } from "groq-js";

let dataset = [
  { _type: "user", name: "Michael" },
  { _type: "company", name: "Bluth Company" },
];

describe("App", () => {
  test("smoke", async () => {
    let input = '*[_type == "user"][0]{name}';
    let tree = parse(input);
    let value = await evaluate(tree, { dataset });
    let result = await value.get();
    expect(result).toStrictEqual({ name: "Michael" });
  });
});
