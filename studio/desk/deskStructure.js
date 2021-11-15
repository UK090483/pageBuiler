import S from "@sanity/desk-tool/structure-builder";
import client from "part:@sanity/base/client";
import { CgWebsite } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.list()
            .id("settings")
            .title("Settings")
            .items([
              // S.listItem()
              //   .id("ss")
              //   .title("Navigation")
              //   .child(S.documentTypeList("navigation").title("Navigation")),

              S.documentListItem()
                .schemaType("siteConfig")
                .title("Configuration")
                .id("siteConfig"),
            ])
        ),

      // .child(
      //   S.documentTypeList("seoSettings")
      //     .title("Settings")
      //     .filter('_type == "seoSettings"')
      // ),
      // S.listItem().title("Check").child(
      //   S.documentList()

      //     .title("Pages")
      //     .filter("_type == 'page' || _type == 'pageType' ")
      // ),

      S.listItem()
        .title("Pages")
        .icon(CgWebsite)
        .child(
          S.documentTypeList("pageType")
            .filter(
              `_type ==  "pageType" || (_type == "page" && !defined(pageType)) `
            )
            .title("Pages")
            .child(async (pageTypeId, d) => {
              const isPage = await client.fetch(
                `*[_type == "page" && _id  == '${pageTypeId}'][0]`
              );

              if (isPage) {
                return S.document().id(pageTypeId);
              }

              return S.documentList()
                .title("SubPages")
                .filter('_type == "page" && $pageTypeId == pageType._ref')
                .params({ pageTypeId });
            })
        ),
    ]);
