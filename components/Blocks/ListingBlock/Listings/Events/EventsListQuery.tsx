import { richTextQueryShort } from "@components/RichText/richtTextQuery";

export const EventsListQuery = (locale?: string) => `

`;

type EventsListItemQueryFunction = (locale?: string) => string;

export const EventsListItemQuery: EventsListItemQueryFunction = (locale) => {
  return `
_id,
'Text':coalesce(content_${locale}[]{${richTextQueryShort(
    locale
  )}},content[]{${richTextQueryShort(locale)}}),
'name':coalesce(name_${locale},name),
'description':coalesce(description_${locale},name),
link,
date,
endDate,
`;
};

export type EventsListItemResult = {
  Text?: string | null;
  name?: string | null;
  description?: string | null;
  link?: string;
  date?: string;
  endDate?: string;
  _id: string;
};
