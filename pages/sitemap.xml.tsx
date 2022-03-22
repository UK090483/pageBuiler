import { getSanityClient } from "@lib/SanityService/sanity.server";
import { GetServerSideProps } from "next";

const Sitemap = () => {};
let pages: { slug: string | null }[] | undefined;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let lastMod: string | null = null;

  if (!pages) {
    lastMod = new Date().toISOString();

    pages = await getSanityClient().fetch<{ slug: string | null }[]>(
      `*[_type == 'page'][]{ 'slug':slug.current }`
    );
  } else {
    console.log("from cache");
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(({ slug }) => {
          return `
            <url>
              <loc>${slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
