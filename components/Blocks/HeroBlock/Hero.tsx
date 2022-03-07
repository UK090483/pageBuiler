/* eslint-disable @next/next/no-img-element */

import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import { Textfit } from "react-textfit";

import React from "react";
import useSanityImage from "@lib/SanityImage/useSanityImage";
import { HeroBlogResult } from "./HeroBlockQuery";
import Image from "next/image";
import { useRouter } from "next/router";

interface HeroProps extends HeroBlogResult {}

const maxFontsize = 380;

const fontSizes: { [key: string]: number } = {
  _: 600,
  sm: 1000,
  md: 1200,
  lg: 1500,
  xl: 1880,
  "2xl": 2036,
};

//@ts-ignore
const InlineImage = (props) => {
  //@ts-ignore
  const { src } = useSanityImage(props.mark);
  return (
    <span style={{ height: "0.705em" }} className="relative inline-block ">
      {src && (
        <img
          style={{ height: "0.705em" }}
          height="0.8em"
          src={src + "&w=150"}
          alt=""
        />
      )}
    </span>
  );
};
//@ts-ignore
const BlockRenderer = (props) => {
  return React.createElement("h1", { className: "" }, props.children);
};

const serializer: Serializers = {
  types: { block: BlockRenderer },
  marks: {
    image: InlineImage,
    brake: ({ children }) => {
      return <>&shy;{children}</>;
    },
    unbreakable: ({ children }) => {
      return <span className="whitespace-nowrap">{children}</span>;
    },
  },
  //@ts-ignore
  // container: ({ children }) => {
  //   return <h1>{children}</h1>;
  // },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text } = props;
  const [ready, setReady] = React.useState(false);

  const { asPath } = useRouter();

  const withLogo = ["/"].includes(asPath);

  return (
    <div className="flex flex-col lg:flex-row ">
      {text && (
        <Textfit
          max={200}
          className={`w-full  h-hero-mobile  sm:h-hero   px-5 container mx-auto font-header  flex items-center leading-[1.2em] transition-opacity duration-1000 overflow-hidden  ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          mode="multi"
          onReady={() => {
            !ready && setReady(true);
          }}
        >
          <BlockContent
            renderContainerOnSingleChild={true}
            blocks={text}
            serializers={serializer}
          />
        </Textfit>
      )}
      {withLogo && (
        <div className="relative  w-full lg:w-fit   flex items-center flex-col justify-center  mr-12 p-5 ">
          <div className=" text-sm pb-4 max-w-xs ">
            Dieses Projekt wird gefördert durch Interreg Deutschland- Danmark
            mit Mitteln des Europäischen Fonds für regionale Entwicklung.
            Erfahren Sie mehr über Interreg Deutschland- Danmark unter
            www.interreg5a.eu
          </div>
          <Image
            src={`/images/logo_interreg_logo.png`}
            alt="me"
            width={500}
            height={86}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;

// type parseBlocksProps = ({ props?: { node?: { mark?: any } } } | string)[];

// const parseBlocks = (children: parseBlocksProps) => {
//   const res = [];
//   let span = new Span();
//   for (const item of children) {
//     span.add(item);
//   }
//   span.finish();
//   console.log(span);

//   return span.items;
// };

// type blockItem = any;

// class Span {
//   active: boolean;
//   items: blockItem[];
//   span: any[];
//   constructor() {
//     this.active = false;
//     this.items = [];
//     this.span = [];
//   }
//   add = (item: blockItem) => {
//     if (this.active) {
//       return this.pushOrEnd(item);
//     }
//     this.pushOrStart(item);
//   };

//   pushOrStart = (item: blockItem) => {
//     if (this.isStartString(item)) {
//       this.active = true;
//       this.span.push(item);
//       return;
//     }
//     this.items.push(item);
//   };

//   pushOrEnd = (item: blockItem) => {
//     if (this.isImage(item)) {
//       return this.span.push(item);
//     }
//     if (this.isEndString(item)) {
//       return this.endSpan(item);
//     }
//     this.span.push(item);
//   };

//   endSpan = (item: blockItem) => {
//     this.active = false;
//     this.items.push(this.getSpan());
//   };

//   finish = () => {
//     if (this.active) {
//       this.getSpan();
//     }
//   };

//   isString = (item: blockItem) => typeof item === "string";
//   isEndString = (item: blockItem) =>
//     typeof item === "string" && item.includes(" ");
//   isStartString = (item: blockItem) =>
//     typeof item === "string" && !item.endsWith(" ");
//   isImage = (item: blockItem) => {
//     return (
//       typeof item !== "string" && item.props?.node?.mark?._type === "image"
//     );
//   };
//   reset = () => {
//     this.active = false;
//     this.items = [];
//   };
//   getSpan = () => {
//     return React.createElement(
//       "span",
//       { "data-m": "bla", className: " border-2 " },
//       this.span
//     );
//   };
// }
