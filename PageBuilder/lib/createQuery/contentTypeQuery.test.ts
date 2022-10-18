import { testData } from "../../__test__/testData";
import { getContentTypeQuery } from "./contentTypeQuery";

describe("getContentTypeQuery", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should warn if contentType not found", () => {
    console.warn = jest.fn();
    const q = getContentTypeQuery(
      { contentTypes: [testData.contentType.one] },
      "bla"
    );
    expect(console.warn).toBeCalledTimes(1);
  });

  it("should create initial Query", () => {
    const q = getContentTypeQuery(
      { contentTypes: [testData.contentType.one] },
      testData.contentType.one.name
    );
    expect(q).toMatchSnapshot();
  });

  it("should create initial Query with locale", () => {
    const q = getContentTypeQuery(
      { contentTypes: [testData.contentType.one] },
      testData.contentType.one.name,
      "en"
    );
    expect(q).toMatchSnapshot();
  });

  it("should add components to query", () => {
    const q = getContentTypeQuery(
      {
        contentTypes: [testData.contentType.one],
        components: [testData.object.one],
      },
      testData.contentType.one.name,
      "en"
    );
    expect(q).toMatchSnapshot();
  });

  it("should handle on create Query", () => {
    const q = getContentTypeQuery(
      {
        contentTypes: [testData.contentType.one],
        hooks: {
          onContentTypeQuery: ({ result }) => {
            return `${result} test,`;
          },
        },
      },
      testData.contentType.one.name,
      "en"
    );
    expect(q).toMatchSnapshot();
  });
});
