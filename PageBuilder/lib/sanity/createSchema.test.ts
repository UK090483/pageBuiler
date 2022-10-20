import { testData } from "../../__test__/testData";
import createSchema from "./createSchema";

describe("createSchema", () => {
  it("should create Content Types", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      contentTypes: [testData.contentType.one, testData.contentType.two],
    });
    expect(schema[0]).toHaveProperty("type", "document");
    expect(schema[1]).toHaveProperty("type", "document");
    expect(schema[0]).toHaveProperty("name", testData.contentType.one.name);
    expect(schema[1]).toHaveProperty("name", testData.contentType.two.name);
    expect(schema[0]).toHaveProperty("title", testData.contentType.one.title);
    expect(schema[1]).toHaveProperty("title", testData.contentType.two.title);
  });

  it("should setup Content Types with 'hasPage' in Link ", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      contentTypes: [
        { ...testData.contentType.one, hasPage: true },
        testData.contentType.two,
      ],
    });
    const link = schema.find((i) => i.name === "link");

    //@ts-ignore
    expect(link.fields[0].to).toEqual([
      { type: testData.contentType.one.name },
    ]);
  });

  it("should create Component", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      components: [testData.object.one],
    });
    expect(schema[0]).toHaveProperty("type", "object");
    expect(schema[0]).toHaveProperty("name", testData.object.one.name);
    expect(schema[0]).toHaveProperty("title", testData.object.one.title);
  });

  it("should create Objects", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      components: [testData.object.one],
    });
    expect(schema[0]).toHaveProperty("type", "object");
    expect(schema[0]).toHaveProperty("name", testData.object.one.name);
    expect(schema[0]).toHaveProperty("title", testData.object.one.title);
  });

  it("should create Objects", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      objects: [testData.object.one],
    });

    expect(schema[0]).toHaveProperty("type", "object");
    expect(schema[0]).toHaveProperty("name", testData.object.one.name);
    expect(schema[0]).toHaveProperty("title", testData.object.one.title);
  });

  it("should create Plugs", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      plugs: [testData.object.one],
    });
    expect(schema[0]).toHaveProperty("type", "object");
    expect(schema[0]).toHaveProperty("name", testData.object.one.name);
    expect(schema[0]).toHaveProperty("title", testData.object.one.title);
  });

  it("should create SettingDocument", () => {
    const schema = createSchema({
      ...testData.finalConfig,
      settings: [
        { ...testData.contentType.one, fields: [testData.field.text] },
      ],
    });
    expect(schema[0]).toHaveProperty("type", "document");
    expect(schema[0]).toHaveProperty("name", testData.contentType.one.name);
    expect(schema[0]).toHaveProperty("title", testData.contentType.one.title);
  });
});
