import type { TinaField } from "tinacms"
import { roundedOptions } from "../shared/options"

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
      label: "Border",
      name: "primaryBorder",
      ui: {
        component: "borderControl",
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
      label: "Padding",
      name: "primaryPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "primaryRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
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
      label: "Border",
      name: "secondaryBorder",
      ui: {
        component: "borderControl",
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
      label: "Padding",
      name: "secondaryPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "secondaryRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
    {
      label: "Minor Button",
      name: "minorRule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Fill",
      name: "minorFill",
      ui: {
        component: "fillControl",
      },
    },
    {
      type: "string",
      label: "Border",
      name: "minorBorder",
      ui: {
        component: "borderControl",
      },
    },
    {
      type: "string",
      label: "Typography",
      name: "minorTypography",
      ui: {
        component: "typeControl",
      },
    },
    {
      type: "string",
      label: "Padding",
      name: "minorPadding",
      ui: {
        component: "paddingControl",
      },
    },
    {
      type: "string",
      label: "Rounded",
      name: "minorRounded",
      ui: {
        component: "selectField",
      },
      options: roundedOptions,
    },
  ]
}
