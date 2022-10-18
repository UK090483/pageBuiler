import { Config } from "../PageBuilder/types";

type EventsPluginProps = {
  name: string;
  title: string;
};

function Conf(props?: EventsPluginProps): Config {
  const name = props?.name || "event";
  const title = props?.title || "Event";

  return {
    contentTypes: [
      {
        name,
        title,
        listing: "listing",
        hasPage: false,
        editor: "",
        fields: [
          {
            name: "date",
            title: "Datum",
            type: "date",
            group: "content",
          },
          {
            name: "endDate",
            title: "End Datum",
            type: "date",
            group: "content",
          },
        ],
      },
    ],
  };
}

export default Conf;
