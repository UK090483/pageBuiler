import { Config } from "../../PageBuilder/types";
import { RiFileListFill } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import { GrMultiple } from "react-icons/gr";

type MenuPluginProps = {
  dropdown?: boolean;
  megaMenu?: boolean;
};

function condArrayItem(condition: boolean, item: any) {
  return condition ? [item] : [];
}

function Conf(props?: MenuPluginProps): Config {
  const dropdown = props?.dropdown === false ? false : true;
  const megaMenu = props?.megaMenu === false ? false : true;

  return {
    hooks: {
      onContentTypeQuery: ({ config, result, locale }) => {
        const link = `
        href,
        ...(internal->{ 'internal':${config.options?.slug.query({
          locale,
        })} })`;

        const langSwitcher = config.options?.locale
          ? `
        
        'langSwitcher' : {
          ${Object.entries(config.options?.locale)
            .map(([key, lang]) => {
              return `'${key}': { 'title':'${
                lang.title
              }', 'link':${config.options?.slug.query({
                locale: key,
              })} }`;
            })
            .join(",")}
        },
        `
          : ``;

        const label = locale
          ? `'label':coalesce(label_${locale},label)`
          : "label";

        return (
          result +
          `'menu':{
            ...(*[ _type == 'menuConfig'][0]{
                 'mainNav':mainNav[]{
                     ${label},
                    'link':link{${link}},
                    'items':items[]{
                      ${label},
                      'link':link{${link}},
                    }
                  
                 },
            }),

           ${langSwitcher}
        },`
        );
      },
    },
    settings: [
      {
        icon: AiOutlineLink,
        name: "menuConfig",
        title: "Menu config",
        fields: [
          {
            name: "mainNav",
            type: "array",
            title: "Main Navigation",
            of: [
              { type: "navigationItem" },
              ...condArrayItem(dropdown, { type: "navigationDropdown" }),
              ...condArrayItem(megaMenu, { type: "navigationMegaMenu" }),
            ],
            // validation: (Rule) => Rule.required(),
          },
        ],
        preview: {
          prepare(selection: any) {
            return {
              title: "Menu Setting",
            };
          },
        },
      },
    ],
    objects: [
      {
        title: "List",
        name: "navigationMegaMenuItem",
        fields: [
          {
            name: "label",
            type: "string",
            title: "Label",
            localize: true,
            validation: (Rule) => Rule.required(),
          },
          {
            name: "items",
            type: "array",
            title: "Main Navigation",
            of: [{ type: "navigationItem" }],
            validation: (Rule) => Rule.required(),
          },
        ],
        preview: {
          select: {
            label: "label",
          },
          prepare(selection: any) {
            const { label } = selection;
            return {
              title: label,
              subtitle: "List",
              media: RiFileListFill,
            };
          },
        },
      },
      {
        title: "Mega Menu",
        name: "navigationMegaMenu",
        fields: [
          {
            name: "label",
            type: "string",
            title: "Label",
            localize: true,
            validation: (Rule) => Rule.required(),
          },
          {
            name: "items",
            type: "array",
            title: "Main Navigation",
            of: [
              { type: "navigationMegaMenuItem" },
              { type: "navigationItem" },
            ],
            validation: (Rule) => Rule.required(),
          },
        ],
        preview: {
          select: {
            label: "label",
            items: "items",
          },
          prepare(selection: any) {
            const { label, items } = selection;
            const hasLists = //@ts-ignore
              items && items.find((i) => i._type === "navigationMegaMenuItem");
            const itemLabels =
              items &&
              //@ts-ignore
              items.reduce((acc, i) => {
                return `${acc} / ${i.label}`;
              }, "" as string);
            return {
              title: label,
              subtitle: itemLabels,
              media: hasLists ? GrMultiple : RiFileListFill,
            };
          },
        },
      },
      {
        title: "Navigation Dropdown",
        name: "navigationDropdown",
        fields: [
          {
            name: "label",
            type: "string",
            title: "Label",
            validation: (Rule) => Rule.required(),
            localize: true,
          },

          {
            name: "items",
            type: "array",
            title: "Main Navigation",
            of: [{ type: "navigationItem" }],
            validation: (Rule) => Rule.required(),
          },
        ],
        preview: {
          select: {
            label: "label",
          },
          prepare(selection: any) {
            const { label } = selection;
            return {
              title: label,
              subtitle: "Link",
              media: RiFileListFill,
            };
          },
        },
      },
      {
        title: "Link",
        name: "navigationItem",

        fields: [
          {
            name: "label",
            type: "string",
            title: "Label",
            validation: (Rule) => Rule.required(),
            localize: true,
          },
          {
            name: "link",
            title: "Link",
            type: "link",
            validation: (Rule) => Rule.required(),
          },
        ],

        preview: {
          select: {
            label: "label",
          },
          prepare(selection: any) {
            const { label } = selection;

            return {
              title: label,
              subtitle: "Link",
              media: AiOutlineLink,
            };
          },
        },
      },
    ],
  };
}
export default Conf;
