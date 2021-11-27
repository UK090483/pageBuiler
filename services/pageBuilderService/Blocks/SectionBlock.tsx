import React from "react";
import clsx from "clsx";

import {
  imageMeta,
  ImageMetaResult,
} from "@services/pageBuilderService/queries/snippets";

import { Section as SectionType } from "types";

import RichText, { richTextQuery } from "../RichText/RichText";

import { Section } from "@components/Section";
import { Container } from "@components/Container";
import { Image } from "@components/Image";

export const sectionBlockQuery = `
_type == "section" => {
  _key,
  _type,
  title,
  bgColor,
  type,
  topSpace,
  bottomSpace,
  ${richTextQuery},
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
  const { content, bottomSpace, topSpace, title, image, bgColor, type } = props;
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
          "grid  grid-cols-1  lg:grid-cols-2 ": hasImage,
        })}
      >
        {hasImage ? (
          <WithImage place="right" image={image}>
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
  place: "left" | "right";
  image: ImageMetaResult | null;
}> = ({ children, place = "left" }) => {
  const content = (
    <div
      className={clsx({
        "pr-0  lg:pr-12": place === "right",
        "pl-0  lg:pl-12": place === "left",
      })}
    >
      {children}{" "}
    </div>
  );
  return (
    <>
      {place === "right" && content}
      <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-2xl">
        <Image />
      </div>
      {place === "left" && content}
    </>
  );
};

export default SectionBlock;

type TransitionProps = {
  color?: "black" | "white" | "primary" | "secondary" | "grey";
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
