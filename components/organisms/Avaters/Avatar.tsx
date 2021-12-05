import { Image } from "@components/Image";
import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import React from "react";

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 ">
      <div className="relative w-48 h-48 overflow-hidden rounded-full">
        <Image alt="bla" />
      </div>

      <Typo className="pt-8 text-lg "> {name}</Typo>
      <Typo className="">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </Typo>
    </div>
  );
};

type AvatarListProps = {
  items?: AvatarProps[];
};

const testItems = [
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
  { name: "asdf asdf" },
];

export const AvatarList: React.FC<AvatarListProps> = ({
  items = testItems,
}) => {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ">
        {items &&
          items.map((avatar, index) => <Avatar key={index} {...avatar} />)}
      </div>
    </Section>
  );
};
