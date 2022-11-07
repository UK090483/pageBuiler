import { config } from "@lib/SanityService/config";
import createClient, { SanityClient } from "@sanity/client";
import type { NextApiRequest, NextApiResponse } from "next";

import request from "request";

import { faker } from "@faker-js/faker";

faker.setLocale("de");

import { randPost, randSlug, randImg, randTextRange } from "@ngneat/falso";
import { DocumentDefinition } from "PageBuilder/types";

import { v4 as uuid } from "uuid";
const client = createClient({
  ...config,
  token: process.env.SANITY_CREATOR_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const arr = new Array(10).fill("whatever");

  const docs = arr.map(() => createDocument({ client, type: "post" }));

  const result = await Promise.all(docs);
  res.json({ result });
};

export default handler;

type createDocumentProps = {
  client: SanityClient;
  type: string;
  // item: DocumentDefinition;
};

async function createDocument({ client }: createDocumentProps) {
  const image = await createImage({ client });
  const mainImage = {
    _type: "defaultImage",
    alt: "ss",
    asset: {
      _ref: image?._id,
      _type: "reference",
    },
  };
  return client.create({
    _type: "post",
    _id: `__fakeItem__${uuid()}`,
    title: faker.random.words(3),
    title_en: "En" + faker.random.words(3),
    description: faker.lorem.words(10),
    description_en: faker.lorem.words(10) + "En",
    slug: { _type: "slug", current: faker.lorem.slug() },
    slug_en: { _type: "slug", current: faker.lorem.slug() + "en" },
    mainImage,
  });
}

type createImageProps = {
  client: SanityClient;
};
async function createImage({ client }: createImageProps) {
  const fetchResult = await fetch(faker.image.abstract(1234, 2345));
  const body = await fetchResult.body;
  if (body) {
    return await client.assets.upload("image", body, { label: "__fakeItem__" });
  }

  return null;
}
