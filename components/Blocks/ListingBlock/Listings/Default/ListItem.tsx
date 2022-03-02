import React from "react";

import Typo from "@components/Typography";
import { Image } from "@components/Image";
import { Link } from "@components/Link";
import { ListItemResult } from "@components/Blocks/ListingBlock/ListingsBlock";

import SanityImage from "@lib/SanityImage";
import Button from "@components/Button/Button";

interface ListItemProps extends ListItemResult {
  className?: string;
  position?: "left" | "right";
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    slug,
    title,
    description,

    className,
    position = "left",
    featuredImage,
    subTitle,
  } = props;

  return (
    <li className="list-none ">
      <Link
        className={`flex flex-wrap md:flex-nowrap bg-white mx-auto w-full  ${className}`}
        href={`/${slug}` || "/"}
      >
        {featuredImage && (
          <div
            className={`relative w-full  h-80   ${
              position === "left" ? "" : "md:order-2"
            }`}
          >
            <SanityImage image={featuredImage} objectFit="contain" />
          </div>
        )}
        <div className={`px-3 w-full`}>
          <Typo bold className="pb-2 leading-none " variant="body">
            {subTitle ? subTitle.toUpperCase() : slug?.toUpperCase()}
          </Typo>
          <Typo
            as={"h2"}
            space={false}
            className="pb-3 leading-none"
            variant="h2"
          >
            {title}
          </Typo>
          <Typo className="w-full overflow-hidden whitespace-pre-line ">
            {description}
          </Typo>
          <Button tabIndex={-1}>Mehr erfahren</Button>
        </div>
      </Link>
    </li>
  );
};

// export const ListItem: React.FC<ListItemProps> = (props) => {
//   const {
//     slug,
//     title,
//     description,

//     className,
//     position = "left",
//     featuredImage,
//   } = props;

//   return (
//     <li className="list-none ">
//       <Link
//         className={` grid grid-cols-3 bg-white mx-auto w-full  ${className}`}
//         href={`/${slug}` || "/"}
//       >
//         {featuredImage && position === "left" && (
//           <div className="relative w-full aspect-w-16 aspect-h-10 ">
//             <SanityImage image={featuredImage} objectFit="contain" />
//             {/* <Image image={featuredImage} alt="bla" /> */}
//           </div>
//         )}
//         <div className={`px-3 ${featuredImage ? "col-span-2" : "col-span-3"}`}>
//           {/* <Typo space={false} className="pb-2 leading-none " variant="body">
//             {date}
//           </Typo> */}
//           <Typo
//             as={"h2"}
//             space={false}
//             className="pb-3 leading-none"
//             variant="h2"
//           >
//             {title}
//           </Typo>
//           <Typo className="w-full overflow-hidden whitespace-pre-line ">
//             {description}
//           </Typo>
//         </div>
//         {featuredImage && position === "right" && (
//           <div className="relative w-full aspect-w-16 aspect-h-10 ">
//             <SanityImage image={featuredImage} objectFit="contain" />
//           </div>
//         )}
//       </Link>
//     </li>
//   );
// };
