/* eslint-disable @next/next/no-img-element */

import { Section } from "@components/Section/Section";
import useBreakpoints from "@hooks/useBreakingPoints";
import { HeroBlockProps } from "@components/Blocks/HeroBlock/HeroBlock";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";

import React from "react";
import useSanityImage from "lib/SanityImage/useSanityImage";

interface HeroProps extends HeroBlockProps {}

const maxFontsize = 180;

const fontSizes: { [key: string]: number } = {
  _: 500,
  sm: 600,
  md: 700,
  lg: 900,
  xl: 1180,
  "2xl": 1536,
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
          alt="image"
        />
      )}
    </span>
  );
};

const serializer: Serializers = {
  marks: {
    image: InlineImage,
    brake: ({ children }) => {
      return <>&shy;{children}</>;
    },
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text, title } = props;
  const [b, size] = useBreakpoints();
  const [rendered, setRendered] = React.useState(true);

  //@ts-ignore
  const letterCount = getLongestWord(text);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  let fontSize = fontSizes[b] * (1.1 / letterCount);

  fontSize = Math.min(fontSize, maxFontsize);

  return (
    <>
      <Section
        style={{ hyphens: "manual" }}
        width="responsive"
        className="antialiased w-full h-screen min-h-[600px] flex flex-col justify-center animate-fadeIn  pt-28  overflow-hidden font-bold font-header"
      >
        <div
          className="font-bold whitespace-pre-wrap  break-words"
          style={{ fontSize, lineHeight: "1.1em", marginLeft: "-0.05em" }}
        >
          {text && <BlockContent blocks={text} serializers={serializer} />}
        </div>
      </Section>
    </>
  );
};

export default Hero;

type getLongestWordProps = { children: { text: string }[] }[];

const getLongestWord = (text: getLongestWordProps) => {
  let res = 0;
  text.forEach((t) => {
    t.children.forEach((c) => {
      c.text.split(" ").forEach((st) => {
        if (st.length > res) {
          res = st.length;
        }
      });
    });
  });
  return res;
};

const te = [
  {
    _key: "59a2af4023fd",
    _type: "block",
    children: [
      {
        _key: "70b8f0f3acaf",
        _type: "span",
        marks: [],
        text: "ENTDECKE ",
      },
      {
        _key: "2b48c08ef25b",
        _type: "span",
        marks: ["993cfce67c1b"],
        text: "Bls",
      },
      {
        _key: "d5dfb5365f90",
        _type: "span",
        marks: [],
        text: "\n",
      },
      {
        _key: "1b83b914bb67",
        _type: "span",
        marks: ["524be8af6cf9"],
        text: "Blu",
      },
      {
        _key: "e5795305309c",
        _type: "span",
        marks: [],
        text: " NEUE PERSPEKTIVEN.",
      },
    ],
    markDefs: [
      {
        _key: "993cfce67c1b",
        _type: "image",
        alt: null,
        aspectRatio: 1.0097087378640777,
        asset: {
          _ref: "image-683a610e47de15d2326f3bb63e187e6c049162b5-208x206-png",
          _type: "reference",
        },
        crop: null,
        height: 206,
        hotspot: null,
        id: "683a610e47de15d2326f3bb63e187e6c049162b5",
        lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD90lEQVQ4jY2UbUhbdxTGE+MbohHfKIpv3XxhwY8qwooodB/mC0PQL3WdikM2mf0ysV1dGmROcAS0iFtGmXMfzLZ2Ax3GDYaFbnZjsdGoKzat2JWaqUkWo/HmJr33nmecEMMcuvXC4b7//s//nPMcFRHdJ6JHfr9/0+FwPLZarX/8enfhyS937jx99GB9KyAITgB/AtgBsEtELiJyE9FfROQloj0AB0TE7xdUAPZEURRsNpv42cSEaDQaxcGBAfHDa/rgFzduBFfs9qDH4w4JwmFIluUQAI5nRBQNAAoRHQC4x0DR5/MpFosFg4OD6OnpwRsXL+Kd7rcxoNfj809NmPv2FhYXfsLu9jZCoRAURQEhehBR+E4AsMxA4fDwULZarWQymairq4saGhqos7OTrvS+Sx+910ef6K+QeWyErAs/09bWFnncbtrd3qaD/X1SFCVMIyKBiJZVfKEoiuLz+TA/P09tbW0oLS3FK+fPo/dSDz641I2BN9swcvUybv/wPR46HFi8u4DZm19h2fobAoFAFAjAzsBDAHIwGMTs7CxVV1cjNTUV9fX1uHq5Dy11r6Kq7CVcaHoN39z8Giv2ZdyanMCo4X38+N0MWOU/FK4w0M9Aj8cDo9FIubm5yMjIACvt7u7Giy+cRaxGg7OFhWhvb8c1vR5vdbSh6/UL+Pj6ddxbXCSv1wtZllnhqipSHXlzc5MLQlqtFllZWairq8PL584hKSkJKpUKcXFxSE9PR05ODrLPnEFBXh4qKyt5YfrSbMbOzk6AiNaiwLW1NbS2tlJiYmIYkp+fj7S0NKjV6jDwpIiJiUFKSgo1NTVx/gOSJIWB+0QkLy0tobm5mRISEsIfx8bGngg74RmVlJRgfHw84Pf7f2egjxWur6+DWyU5OflURafAidNgMBgCbrf7vipiHYmLMjY2Rjqd7j+3eUJQdnY29Hq96HK5HkSBkiRhdXWVent7UVxcjPj4+OdWmJeXh6GhIdHr9T5URQwucS+JokicS7YgV5AL9DzAgoICDA8Pi3t7extsPZ4aEvuRTclKNzY2OCfglU8pxLEtFxYWcg8HfT7fJiv08JaPgKyUB8Dc3BxqamrC1f4fKLFVTSZTUBCEJ6zQc7RlBkbA4EY3GAxUVFQEjUZD/ONJoVarqaqqCtPT0yFJkp4ykIdlVGFEJNjbNpsN/f39VFFRgczMzHBONRrNMbVarZY6Ojpgt9t5NjoZ6OKB+W+FESg5HA5MTU1RX18ftbS0UG1tLZWXlytlZWWKTqdTGhsbZbPZrHi9XhGAk3N4DBg5H0HDjwRBCM9Bm80mWywWaXJy8tno6GhoZGQkODMzE3A6nQGegET0+G+A4wZyqFzKhgAAAABJRU5ErkJggg==",
        type: "image/png",
        url: "https://cdn.sanity.io/images/d85o021b/production/683a610e47de15d2326f3bb63e187e6c049162b5-208x206.png",
        width: 208,
      },
      {
        _key: "524be8af6cf9",
        _type: "image",
        alt: null,
        aspectRatio: 1.3948717948717948,
        asset: {
          _ref: "image-e3a9d31d41a54c56879ed76b1fbc80a17fa53e38-272x195-png",
          _type: "reference",
        },
        crop: null,
        height: 195,
        hotspot: null,
        id: "e3a9d31d41a54c56879ed76b1fbc80a17fa53e38",
        lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgUlEQVQ4jZWT3UvTYRTHf/P1UmJG4kVkuw7zrl2aIeIfMEnsQiIhnIGDwKvuDEayMZ2kyNIuHL6AtRwIbjAassJwOhfbwCycWeYLjm2IbnOfeJ45UTGrA4fnOQ+cD+d7znmUbDaLMHHm7rlYvh2/Hx0dkU6n2d3dxe/34/F4CIVCbG1tsbKywvLyMpubm2QyGZTTsHxyzjMk4jE21r6wEf3K+noUl8tFX18fJpOJoaEhxsbG5GmxWJiamiIajaKchiWTCb5Hv7Gxvsavnz8I+b143w7if+8gGPBjs9kwGo1YrVa6urqkDwwMnEBnZmZyQGGpVJrw5wDvxm24nZN4PW7evDYzaXnCJ5edSCjIq+Fhenp66O/vp7OzE4PBwOjoKA6HQ76Nj4+jCHk7OzvMz89jtZgwPH5A97OnvDA+R//wPo90dbw0d/Pxg4/p6Wl6e3sxm81StqhqcHCQkZER7Ha7ZCixWIzJiQlaWlqouV2Npuo6NdW30GrvcLPqBlfVV7hXd1cmRCIRFhYW8Pl8BAIBlpaWcLvdsrfBYJB4PI6yurqKXq9HrVajKCpUKhWFhYWUlJRQUFAgY61WK2Xt7+/LaR8cHJBKpTg8PCSZTJJIJORdtE9ZXFxEp9NRWlqKoihnXMAqKq7R0dFBOBw+Xqs/W1YAvV4vjY2NFBcXn0DEKWKNRkNbW5uUJKo4v2IXuTI7O0ttbe0JKO+VlZVykqLRQpYYXh54mSkiobm5mbKyMtm7oqIiysvLaWpqkj9C9OvsT7ocqmxvb8sJtra2Ul9fT0NDA+3t7TidTvb29s7I+acKhRTxR8XY5+bmpIv1ECtwEeyvwPNTOp3wP5Xlgb8BAPB9oI3tm4gAAAAASUVORK5CYII=",
        type: "image/png",
        url: "https://cdn.sanity.io/images/d85o021b/production/e3a9d31d41a54c56879ed76b1fbc80a17fa53e38-272x195.png",
        width: 272,
      },
    ],
    style: "normal",
  },
];
