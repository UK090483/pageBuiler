import { RiFileListFill } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import { GrMultiple } from "react-icons/gr";

const navigationSettingsDocument = {
  icon: AiOutlineLink,
  name: "menuConfig",
  title: "Menu config",
  type: "document",
  fields: [
    {
      name: "mainNav",
      type: "array",
      title: "Main Navigation",
      of: [
        { type: "navigationItem" },
        { type: "navigationDropdown" },
        // { type: "navigationMegaMenu" },
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
};

const labelField = {
  name: "label",
  type: "string",
  title: "Label",
  localize: true,
  validation: (Rule: any) => Rule.required(),
};

const getItemFields = (
  items: ("navigationItem" | "navigationMegaMenuItem")[]
) => ({
  name: "items",
  type: "array",
  title: "Main Navigation",
  of: items.map((i) => ({ type: i })),
  validation: (Rule: any) => Rule.required(),
});
const megaMenuItem = {
  title: "List",
  name: "navigationMegaMenuItem",
  type: "object",
  fields: [labelField, getItemFields(["navigationItem"])],
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
};

const megaMenu = {
  title: "Mega Menu",
  name: "navigationMegaMenu",
  type: "object",
  fields: [
    labelField,
    getItemFields(["navigationMegaMenuItem", "navigationItem"]),
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
};

const navigationDropdown = {
  title: "Navigation Dropdown",
  name: "navigationDropdown",
  type: "object",
  fields: [labelField, getItemFields(["navigationItem"])],
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
};

const navigationLink = {
  title: "Link",
  name: "navigationItem",
  type: "object",
  fields: [
    labelField,
    {
      name: "link",
      title: "Link",
      type: "link",
      validation: (Rule: any) => Rule.required(),
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
};

export const navigationSchema = [
  //   navigationSettingsDocument,
  navigationLink,
  navigationDropdown,
  megaMenuItem,
  megaMenu,
];
