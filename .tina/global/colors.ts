import type { TinaField } from "tinacms"

export const globalColors: TinaField = {
  type: "object",
  label: "Colors",
  name: "colors",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Primary",
      name: "primary",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Accent 1",
      name: "accent1",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Accent 2",
      name: "accent2",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Accent 3",
      name: "accent3",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Accent 4",
      name: "accent4",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "White",
      name: "white",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Gray Light",
      name: "grayLight",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Gray",
      name: "gray",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Gray Dark",
      name: "grayDark",
      ui: {
        component: "color",
      },
    },
    {
      type: "string",
      label: "Black",
      name: "black",
      ui: {
        component: "color",
      },
    },
  ]
}
