
import type { TinaField } from "@tinacms/cli";
import { colorOptions } from "./options"

export const buttonsSchema: TinaField = {
  type: "object",
  label: "Buttons",
  name: "buttons",
  list: true,
  ui: {
    component: 'itemListField',
    defaultItem: {
      label: "Button Label",
      link: "/",
      type: "solid",
      textColor: "black",
      backgroundColor: "primary",
    },
  },
  fields: [
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Link",
      name: "link",
      type: "string",
    },
    {
      label: "Type",
      name: "type",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Solid", value: "solid" },
        { label: "Outline", value: "outline" },
        { label: "Link", value: "link" },
      ],
    },
    {
      type: "string",
      label: "Background",
      name: "buttonFillStyles",
      ui: {
        component: "fillControl"
      }
    },
    {
      label: "Text Color",
      name: "textColor",
      type: "string",
      ui: {
        component: "select",
      },
      options: colorOptions,
    },
    {
      label: "Border Color",
      name: "backgroundColor",
      type: "string",
      ui: {
        component: "select",
      },
      options: colorOptions,
    },
  ],
};
