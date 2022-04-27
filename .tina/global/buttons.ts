import type { TinaField } from "tinacms"

// - text control
// - border
// - fill
// - padding
// - rounded

export const globalButtons: TinaField = {
  type: "object",
  label: "Buttons & Links",
  name: "buttons",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Primary Button",
      name: "primaryRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "primaryFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "primaryTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "primaryBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "primaryPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      label: "Secondary Button",
      name: "secondaryRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "secondaryFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "secondaryTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "secondaryBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "secondaryPadding",
      ui: {
        component: "paddingControl",
      },
    },
  ]
}
