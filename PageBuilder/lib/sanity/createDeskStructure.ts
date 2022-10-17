import { defaultEmptyArray } from "../../helper";
import { AiOutlineSetting } from "react-icons/ai";
import {
  SanityStructureBuilder,
  Config,
  contentType,
  SanityDocumentDefinition,
} from "../../types";

const createDeskStructure = (
  config: Config,
  SanityStructureBuilder: SanityStructureBuilder
) => {
  return [
    createSettingItems(
      defaultEmptyArray(config.settings),
      SanityStructureBuilder
    ),
    ...defaultEmptyArray(config.contentTypes).map((i) =>
      createStructureItem(i, SanityStructureBuilder)
    ),
  ];
};

const createStructureItem = (
  props: contentType,
  SanityStructureBuilder: SanityStructureBuilder
) => {
  const { title, name } = props;
  return SanityStructureBuilder.listItem()
    .title(title)
    .child(SanityStructureBuilder.documentTypeList(name));
};

const createSettingItems = (
  props: Omit<SanityDocumentDefinition, "type">[],
  SanityStructureBuilder: SanityStructureBuilder
) => {
  return SanityStructureBuilder.listItem()
    .title("Settings")
    .icon(AiOutlineSetting)
    .child(
      SanityStructureBuilder.list()
        .id("settings")
        .title("Settings")
        .items([
          SanityStructureBuilder.documentListItem()
            .schemaType("siteConfig")
            .title("Configuration")
            .id("siteConfig"),

          ...props.map((i) =>
            SanityStructureBuilder.documentListItem()
              .schemaType(i.name)
              .title(i.title)
              .id(i.name)
          ),
        ])
    );
};

export default createDeskStructure;
