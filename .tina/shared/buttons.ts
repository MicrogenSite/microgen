
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
      type: "primary",
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
        { label: "Primary", value: "primary" },
        { label: "Secondary", value: "secondary" },
        { label: "Minor", value: "minor" },
      ],
    },
  ],
};
