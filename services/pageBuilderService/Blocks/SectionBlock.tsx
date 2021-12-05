import React from "react";
import clsx from "clsx";

import {
  imageMeta,
  ImageMetaResult,
} from "@services/pageBuilderService/queries/snippets";

import { AppColor, Section as SectionType } from "types";

import RichText, { richTextProjection } from "../RichText/RichText";

import { Section } from "@components/Section/Section";

import { Image } from "@components/Image";

export const sectionBlockQuery = (locale: string) => `
_type == "section" => {
  _key,
  _type,
  title,
  bgColor,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':coalesce(
      content_${locale}[]{${richTextProjection(locale)}},
      content[]{${richTextProjection(locale)}}
      ),
  bgImage{${imageMeta}},
  image{${imageMeta}}
}
`;

export interface SectionResult
  extends Omit<SectionType, "bgImage" | "content" | "image"> {
  content: null | any;
  bgImage: ImageMetaResult;
  image: ImageMetaResult;
  _key: string;
}

interface SectionBlockProps extends SectionResult {}

const SectionBlock: React.FC<SectionBlockProps> = (props) => {
  const {
    content,
    bottomSpace,
    topSpace,
    title,
    image,
    bgColor,
    type,
    imagePosition = "l",
  } = props;
  const hasImage = image && image.asset;
  const autoType = hasImage ? "l" : "s";

  return (
    <>
      {bgColor === "primary" && <Transition pos="top" />}
      <Section
        bg={bgColor}
        width={type || autoType}
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
          "grid  grid-cols-1  lg:grid-cols-3 ": hasImage,
        })}
      >
        {hasImage ? (
          <WithImage place={imagePosition} image={image}>
            {content && <RichText content={content} />}
          </WithImage>
        ) : (
          <>{content && <RichText content={content} />} </>
        )}
      </Section>

      {bgColor === "primary" && <Transition pos="bottom" />}
    </>
  );
};

const WithImage: React.FC<{
  place: "l" | "r";
  image: ImageMetaResult | null;
}> = ({ children, place = "l" }) => {
  const content = (
    <div
      className={clsx({
        "pr-0  lg:pr-12 col-span-2": place === "r",
        "pl-0  lg:pl-12 col-span-2": place === "l",
      })}
    >
      {children}{" "}
    </div>
  );
  return (
    <>
      {place === "r" && content}
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1 ">
        <Image objectFit="contain" alt="bla" />
      </div>
      {place === "l" && content}
    </>
  );
};

export default SectionBlock;

type TransitionProps = {
  color?: AppColor;
  pos: "top" | "bottom";
};

const topD = "M1000 100H-2.14577e-05V1.66893e-06L1000 100Z";
const bottomD = "M0 0H1000V100L0 0Z";

const Transition: React.FC<TransitionProps> = ({ color = "primary", pos }) => {
  return (
    <div className="relative">
      <div
        className={clsx("absolute w-full", {
          "transform -translate-y-12": pos === "top",
        })}
      >
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className={clsx(" fill-current h-12  w-full", {
            "text-white": color === "white",
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
            "text-gray-300": color === "grey",
          })}
        >
          <path d={pos === "top" ? topD : bottomD} />
        </svg>
      </div>
    </div>
  );
};
