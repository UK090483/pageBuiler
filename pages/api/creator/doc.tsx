import { config } from "@lib/SanityService/config";
import createClient, { SanityClient } from "@sanity/client";
import type { NextApiRequest, NextApiResponse } from "next";

import request from "request";

import { randPost, randSlug, randImg } from "@ngneat/falso";
import { DocumentDefinition } from "PageBuilder/types";

import { v4 as uuid } from "uuid";
const client = createClient({
  ...config,
  token: process.env.SANITY_CREATOR_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const arr = new Array(30).fill("whatever");

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
    title: randPost().title,
    title_en: randPost().title,
    slug: { _type: "slug", current: randSlug() },
    slug_en: { _type: "slug", current: randSlug() },
    mainImage,
  });
}

type createImageProps = {
  client: SanityClient;
};
async function createImage({ client }: createImageProps) {
  const fetchResult = await fetch(randImg({ width: 1000, height: 1000 }));
  const body = await fetchResult.body;
  if (body) {
    return await client.assets.upload("image", body, { label: "__fakeItem__" });
  }

  return null;
}
