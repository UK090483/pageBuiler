import { SitemapStream } from "sitemap";
const { Readable } = require( 'stream' )
type Page = {
  slug: string;
  [k: string]: string | null | undefined;
};
type Lang = { hreflang: string; value: string };

type buildSitemapProps = {
  pages: Page[];
  hostname: string;
  lang?: [{ hreflang: string; value: string }];
};
type BuildSitemap = (props: buildSitemapProps) => string;
const buildSitemap: BuildSitemap = (props) => {
  const { pages, hostname, lang } = props;
  // return `<?xml version="1.0" encoding="UTF-8"?>
  //   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //     ${pages
  //       .map((page) => {
  //         return getPage(pageUrl, page, lang);
  //       })
  //       .join("")}
  //   </urlset>
  // `;

  const stream = new SitemapStream({ hostname });

  pages.forEach((page) => {
    stream.write({ url: page.slug });
  });

  stream.
  return "";
};

// const getLangTag = (page: Page, lang: Lang) => {
//   const url = page[`slug_${lang.value}`];
//   if (!url) return "";
//   return `<xhtml:link
//     rel="alternate"
//     hreflang="${lang.hreflang}"
//     href="${lang.value}/${url}"/> `;
// };

// const getLangTags = (page: Page, lang?: Lang[]) => {
//   return lang ? lang.map((l) => getLangTag(page, l)) : "";
// };

// const getPage = (pageUrl: string, page: Page, lang?: Lang[]) => {
//   return lang
//     ? `
//     <url>
//       <loc>${pageUrl + "/" + page.slug}</loc>
//       ${getLangTags(page, lang)}
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>1.0</priority>
//     </url>
//   `
//     : `
//     <url>
//       <loc>${pageUrl + "/" + page.slug}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>1.0</priority>
//     </url>
//   `;
// };

export default buildSitemap;
