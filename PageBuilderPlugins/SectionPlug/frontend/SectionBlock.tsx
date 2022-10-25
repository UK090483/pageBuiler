import RichText from "../../RichText/frontend/RichText";
import Section from "@components/Section/Section";
import SanityImage from "@lib/SanityImage";
import type { ImageMetaResult } from "@lib/SanityImage/query";
import clsx from "clsx";
import React from "react";
import type { SectionResult } from "./SectionBlockQuery";

interface SectionBlockProps extends SectionResult {}

const isDefault = (item: any) => {
  return item === undefined || item === null;
};

const SectionBlock: React.FC<SectionBlockProps> = (props) => {
  const {
    content,
    bottomSpace,
    topSpace,
    title,
    image,
    type,
    imagePosition = "l",
    backgroundColor,
    textDirection,
  } = props;

  const hasImage = image && image.url;
  const autoType = hasImage ? "l" : "s";

  return (
    <>
      <Section
        topSpace={topSpace}
        bottomSpace={bottomSpace}
        bg={backgroundColor}
        data-testid="sectionBlock"
        width={type || autoType}
        {...(title && { id: title })}
        className={clsx({
          "grid  grid-cols-1  lg:grid-cols-3 ": hasImage,
          "text-center": textDirection === "center",
          " text-right ": textDirection === "right",
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

      <div className="clear-both "></div>
    </>
  );
};

const WithImage: React.FC<{
  place: "l" | "r";
  image: ImageMetaResult;
}> = ({ children, place = "l", image }) => {
  const content = (
    <div
      className={clsx({
        "pr-0 lg:pr-12 col-span-2": place === "r",
        "pl-0 lg:pl-12 col-span-2": place === "l",
      })}
    >
      {children}
    </div>
  );
  return (
    <>
      {place === "r" && content}
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
        <SanityImage image={image} objectFit="contain" />
      </div>
      {place === "l" && content}
    </>
  );
};

export default SectionBlock;
