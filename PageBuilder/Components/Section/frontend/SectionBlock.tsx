import RichText from "../../../RichText/frontend/RichText";
import Section from "@components/Section/Section";
import SanityImage from "@components/SanityImage";
import clsx from "clsx";
import React from "react";
import type { SectionResult } from "../section.query";
import { ImageResult } from "PageBuilder/constants";

const SectionBlock: React.FC<SectionResult> = (props) => {
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
  const autoType = hasImage ? "m" : "s";

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
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8": hasImage,
          "text-center": textDirection === "center",
          "text-right": textDirection === "right",
        })}
      >
        {hasImage ? (
          <WithImage place={imagePosition || "l"} image={image}>
            {content && <RichText content={content} />}
          </WithImage>
        ) : (
          <>{content && <RichText content={content} />} </>
        )}
      </Section>

      <div className="clear-both"></div>
    </>
  );
};

const WithImage: React.FC<{
  place: "l" | "r";
  image: ImageResult;
}> = ({ children, place = "l", image }) => {
  return (
    <>
      <div
        className={clsx(
          "relative overflow-hidden aspect-w-1 aspect-h-1 border-2",
          {
            " md:order-2 ": place === "r",
          }
        )}
      >
        <SanityImage
          style={{ margin: 0 }}
          src={image}
          className={"object-cover"}
        />
      </div>
      <div className={"lg:col-span-2 "}>{children}</div>
    </>
  );
};

export default SectionBlock;
