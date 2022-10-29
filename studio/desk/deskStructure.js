import S from "@sanity/desk-tool/structure-builder";

import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../parts/resolveProductionUrl";
import createDeskStructure from "../../PageBuilder/lib/sanity/createDeskStructure";
import config from "../../PageBuilder.config";

import { AiOutlineSetting } from "react-icons/ai";

export const getDefaultDocumentNode = (doc) => {
  if (doc.schemaType !== "page") return S.document().views([S.view.form()]);
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
        defaultSize: `mobile`,
      })
      .title("Preview"),
  ]);
};

// export default () =>
//   S.list()
//     .title("Base")
//     .items([...createDeskStructure(config, S)]);

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .icon(AiOutlineSetting)
        .child(
          S.list()
            .id("settings")
            .title("Settings")
            .items([
              S.documentListItem()
                .schemaType("siteConfig")
                .title("Configuration")
                .id("siteConfig"),
              S.documentListItem()
                .schemaType("seoConfig")
                .title("Seo")
                .id("seoConfig"),
              S.documentListItem()
                .schemaType("menuConfig")
                .title("Navigation")
                .id("menuConfig"),
            ])
        ),

      S.listItem().title("Page").child(S.documentTypeList("page")),
      S.listItem().title("Post").child(S.documentTypeList("post")),
    ]);
