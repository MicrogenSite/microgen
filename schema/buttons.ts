import { iconOptions } from "./options"

export const buttonsSchema = {
  label: "Buttons",
  name: "buttons",
  type: "object",
  list: true,
  ui: {
    component: 'itemListField',
    defaultItem: {
      label: "New Button",
      link: "/",
      buttonStyle: "primary",
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
      type: "string",
      label: "Button Icon",
      name: "icon",
      ui: {
        component: "select",
      },
      options: iconOptions,
    },
    {
      type: "string",
      label: "Button Style",
      name: "buttonStyle",
      ui: {
        component: "buttonControl",
      },
    },
    {
      label: "Fathom Tracking ID",
      name: "fathomId",
      type: "string",
    },
  ],
}
