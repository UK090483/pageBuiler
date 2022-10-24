import S from "@sanity/desk-tool/structure-builder";

import Iframe from "sanity-plugin-iframe-pane";
import resolveProductionUrl from "../parts/resolveProductionUrl";
import createDeskStructure from "../../PageBuilder/lib/sanity/createDeskStructure";
import config from "../../PageBuilder.config";

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

export default () =>
  S.list()
    .title("Base")
    .items([...createDeskStructure(config, S)]);
