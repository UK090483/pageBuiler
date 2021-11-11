import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Page Type")
        .schemaType("pageType")
        .child(
          S.documentTypeList("pageType")
            .title("Pages")
            .filter('_type == "pageType" && name != "Base" ')
        ),
      S.listItem().title("Check").child(
        S.documentList()

          .title("Pages")
          .filter("_type == 'page' || _type == 'pageType' ")
      ),

      S.listItem()
        .title("Pages")
        .child(
          S.documentTypeList("pageType")
            .title("Pages")
            .child((pageTypeId, d) => {
              const isBase =
                "41ef510f-7d35-46aa-8fdf-dead6f61d842" === pageTypeId;
              console.log(pageTypeId);
              console.log(d);
              return S.documentList()
                .title("Page")
                .filter(
                  isBase
                    ? '_type == "page" && ($pageTypeId == pageType._ref || !defined(pageType))'
                    : '_type == "page" && $pageTypeId == pageType._ref'
                )
                .params({ pageTypeId });
            })
        ),
    ]);
