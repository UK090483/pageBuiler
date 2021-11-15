import { getSanityClient } from "@services/SanityService/sanity.server";

import ContentParser, {
  body,
} from "@services/pageBuilderService/ContentParser";

import type { NextPage } from "next";

const Home: NextPage = (props) => {
  // @ts-ignore
  const content = props?.page?.content;

  return <>{content && <ContentParser content={content} />}</>;
};

export default Home;

export async function getStaticProps() {
  const page = await getSanityClient().fetch(
    `*[_type == 'page' && slug.current == 'test' ][0]{...,${body}}`
  );

  return {
    props: {
      page: page,
    },

    revalidate: 10, // In seconds
  };
}
