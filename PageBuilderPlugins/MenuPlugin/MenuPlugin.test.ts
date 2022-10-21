import MenuPlugin from "./MenuPlugin";

describe("MenuPlugin", () => {
  it("should create Valid Query", () => {
    const res = MenuPlugin();
    //@ts-ignore
    console.log(res.hooks.onContentTypeQuery({ config: {}, result: "_id," }));
  });
});
