import buildQuery from "./buildQuery";
import { listingBuilderItem } from "./types";
import { testQuery } from "../../__test__/queryTest";

const itemA: listingBuilderItem = { name: "a", title: "A" };

const builderItems: listingBuilderItem[] = [];

describe("Build listing Query", () => {
  it("", async () => {
    const res = testQuery(buildQuery(builderItems), []);

    console.log(res);
  });
});
