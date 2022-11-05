import { config } from "@lib/SanityService/config";
import createClient, { SanityClient } from "@sanity/client";
import type { NextApiRequest, NextApiResponse } from "next";

const client = createClient({
  ...config,
  token: process.env.SANITY_CREATOR_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await client.delete({
    query: '*[ _id match "__fakeItem__*" || label == "__fakeItem__"]',
  });

  res.json({ result });
};

export default handler;
