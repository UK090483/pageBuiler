import { SanityBlock } from "@lib/SanityPageBuilder/lib/RichText";
interface GetTestBlockProps extends Partial<SanityBlock> {}
import { v4 as uuid } from "uuid";

export const span = (text: string = "testText") => {
  return {
    _key: uuid(),
    _type: "span",
    marks: [],
    text: text,
  };
};
export const getTestBlock = (props: GetTestBlockProps = {}) => {
  return {
    _key: uuid(),
    _type: "block",
    children: [span()],
    style: "normal",
    markDefs: [],
    ...props,
  } as SanityBlock;
};

export const textBlock = (text: string, style: string) => {
  //@ts-ignore
  return getTestBlock({ style, children: [span(text)] });
};
