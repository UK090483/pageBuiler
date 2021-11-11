import React from "react";
import clsx from "clsx";

import {
  imageMeta,
  ImageMetaResult,
} from "@services/pageBuilderService/queries/snippets";

import { Section as SectionType } from "../../../types";

import { richTextQuery } from "../RichText";
import ContentParser from "../ContentParser";
import { Section } from "@components/Section";

export const sectionBlockQuery = `
_type == "section" => {
  title,
  bgColor,
  type,
  topSpace,
  bottomSpace,
  ${richTextQuery},
  bgImage{${imageMeta}}
}
`;

export interface SectionResult
  extends Omit<SectionType, "bgImage" | "content"> {
  content: null | any;
  bgImage: ImageMetaResult;
  _key: string;
}

interface SectionBlockProps extends SectionResult {}

const SectionBlock: React.FC<SectionBlockProps> = (props) => {
  const { content, bottomSpace, topSpace, title } = props;

  return (
    <Section
      {...(title && { id: title })}
      className={clsx({
        "pt-5 md:pt-10": topSpace === "s",
        "pt-9 md:pt-20": topSpace === "m",
        "pt-12 md:pt-32": topSpace === "l",
        "pt-16 md:pt-44": topSpace === "xl",
        "pt-24 md:pt-60": topSpace === "xxl",
        "pb-5 md:pb-10": bottomSpace === "s",
        "pb-9 md:pb-20": bottomSpace === "m",
        "pb-16 md:pb-32": bottomSpace === "l",
        "pb-12 md:pb-44": bottomSpace === "xl",
        "pb-24 md:pb-60": bottomSpace === "xxl",
        "pb-0.5": !bottomSpace,
      })}
    >
      {content && <ContentParser content={content} />}
    </Section>
  );
};

export default SectionBlock;
