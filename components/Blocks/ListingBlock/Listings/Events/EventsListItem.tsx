import Button from "@components/Button/Button";
import RichText from "@components/RichText/RichText";
import Svg from "@components/Svg";
import Typo from "@components/Typography/Typography";
import useEventDate from "@hooks/useEventDate";

import * as React from "react";
import { registerNow } from "translations";

import { EventsListItemResult } from "./EventsListQuery";

interface IEventsListItemProps extends EventsListItemResult {
  accordion?: boolean;
  locale?: string;
}

const EventsListItem: React.FunctionComponent<IEventsListItemProps> = (
  props
) => {
  const {
    name,
    description,
    content,
    accordion = true,
    link,
    date,
    endDate: _endDate,
    locale,
  } = props;

  const [open, setOpen] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const hasContent = !!(content && content.length > 0);

  const { startDate, endDate, isOver } = useEventDate({
    start: date,
    end: _endDate,
  });

  React.useEffect(() => {
    if (!accordion) return;
    if (open && ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      return setHeight(height);
    }
    return setHeight(0);
  }, [open, accordion]);

  return (
    <li
      className={` border-black border-t-2 ${hasContent ? "mb-20" : "mb-10"} ${
        isOver ? "opacity-60" : ""
      }`}
    >
      <div className="container  lg:max-w-screen-lg mx-auto px-5 my-12">
        <Typo variant="body-l" bold={false} space={false}>
          {startDate && startDate} {endDate && " - " + endDate}
          {isOver && " (Done)"}
        </Typo>
        <Typo variant="h3">{name}</Typo>
        <Typo>{description}</Typo>
        <div
          style={{
            maxHeight: accordion ? height : undefined,
            transition: "max-height 1s",
          }}
          className=" overflow-hidden"
        >
          <div ref={ref}>
            <RichText content={content} />
          </div>
        </div>

        <div className=" w-full flex justify-between items-center">
          {link && (
            <Button href={link} external={true}>
              {registerNow[locale || "de"]}
            </Button>
          )}
          {accordion && hasContent && (
            <button onClick={() => setOpen((i) => !i)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`inline-block  stroke-current fill-current  border-2 rounded-full w-9 h-9 md:w-11 md:h-11 p-1.5 border-black ${
                  open ? "rotate-90 " : "-rotate-90"
                }`}
              >
                <path fill="none" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default EventsListItem;
