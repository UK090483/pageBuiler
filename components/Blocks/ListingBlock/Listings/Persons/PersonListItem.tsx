import Typo from "@components/Typography/Typography";
import SanityImage from "lib/SanityImage";
import { ImageMetaResult } from "lib/SanityImage/query";
import ReactTooltip from "react-tooltip";

import * as React from "react";

interface IPersonListItemProps {
  name?: null | string;
  position?: null | string;
  description?: null | string;
  avatar?: null | ImageMetaResult;
  _id: string;
}

const PersonListItem: React.FunctionComponent<IPersonListItemProps> = (
  props
) => {
  const { name, description, position, avatar, _id } = props;

  return (
    <li className="flex flex-col items-center justify-center min-w-[200px] w-1/3 py-8 ">
      <div className="tooltip hidden" />
      <div className="relative w-32 h-32  overflow-hidden rounded-full">
        <SanityImage image={avatar} objectFit="cover" />
      </div>

      <Typo bold variant="body-l" className=" uppercase mt-10 text-center">
        {name}
      </Typo>
      <Typo className="whitespace-pre-line text-center w-60">{position}</Typo>
      <button className=" underline  " data-tip data-for={_id}>
        mehr Erfahren
      </button>
      <ReactTooltip
        id={_id}
        place="bottom"
        effect="float"
        multiline={true}
        className="tooltip"
      >
        {description}
      </ReactTooltip>
    </li>
  );
};

export default PersonListItem;
