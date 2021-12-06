import fs from "fs/promises";
import path from "path";
import type { SanityClient } from "@sanity/client/sanityClient";
import { sanityClient } from "./sanity.server";
import { parse, evaluate } from "groq-js";

const filename = "cash.json";
const filepath = path.resolve("public", filename);

type SanityData = [{ [k: string]: any }];

const cash = {
  get: async () => {
    try {
      const raw = await fs.readFile(filepath);
      //@ts-ignore
      return JSON.parse(raw);
    } catch (error) {
      return null;
    }
  },
  set: async (data: any) => {
    return await fs.writeFile(filepath, JSON.stringify(data));
  },
};

const evaluateQuery = async (dataset: any, query: string) => {
  let tree = parse(query);
  let value = await evaluate(tree, { dataset });
  return await value.get();
};

export const sanityClientCashed = {
  fetch: async (query: string) => {
    let data = await cash.get();
    if (!data) {
      const res = await sanityClient.fetch("*[]");
      await cash.set(res);
    }
    return evaluateQuery(data, query);
  },
} as SanityClient;
