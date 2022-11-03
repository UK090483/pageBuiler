import SanityImage, { ISanityImageProps } from "@components/SanityImage";
import clsx from "clsx";
import * as React from "react";

interface ICardImageProps extends ISanityImageProps {
  variant?: "aspect" | "round" | "intrinsic";
}

const CardImage: React.FunctionComponent<ICardImageProps> = (props) => {
  const { variant = "aspect", ...rest } = props;

  if (!props.src) return null;

  return (
    <div className="w-full">
      <div
        className={clsx("shadow-xl overflow-hidden   relative", {
          "w-full aspect-w-3 aspect-h-2 rounded-lg": variant === "aspect",
          "w-60 h-60 mx-auto rounded-full ": variant === "round",
          "w-full": variant === "intrinsic",
        })}
      >
        <SanityImage
          {...rest}
          fill={variant !== "intrinsic"}
          className=" object-cover "
          sizes="600px"
        />
      </div>
    </div>
  );
};

export default CardImage;
