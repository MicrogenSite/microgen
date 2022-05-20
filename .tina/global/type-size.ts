import type { TinaField } from "tinacms"
import { fontOptions } from "../shared/font-options"

export const globalTypeSize: TinaField = {
  type: "object",
  label: "Type Size",
  name: "sizeLeading",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Xs (Size / Leading)",
      name: "textXs",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "Sm (Size / Leading)",
      name: "textSm",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "Md (Size / Leading)",
      name: "textMd",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "Lg (Size / Leading)",
      name: "textLg",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "Xl (Size / Leading)",
      name: "textXl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "2xl (Size / Leading)",
      name: "text2xl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "3xl (Size / Leading)",
      name: "text3xl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "4xl (Size / Leading)",
      name: "text4xl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "5xl (Size / Leading)",
      name: "text5xl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "6xl (Size / Leading)",
      name: "text6xl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "7xl (Size / Leading)",
      name: "text7xl",
      ui: {
        component: "typeSizeControl",
      },
    },
    {
      type: "string",
      label: "8xl (Size / Leading)",
      name: "text8xl",
      ui: {
        component: "typeSizeControl",
      },
    },
  ]
}
