import { sanityClient } from "@lib/SanityService/sanity.server";
export const revalidate = 1;
async function getData() {
  sanityClient.config;

  const res = await sanityClient.fetch<{
    mainNav: { _key: string; label: string }[];
  }>(`
    {
        ...(*[ _type == 'menuConfig'][0]{...})
    }`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res;
}

export default async function AppTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();

  console.log(data);

  return (
    <section>
      {data.mainNav.map((i) => {
        return <div key={i._key}>{i.label}</div>;
      })}

      <div>Layout</div>

      {children}
    </section>
  );
}
