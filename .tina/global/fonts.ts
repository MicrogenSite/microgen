import type { TinaField } from "tinacms"
import { fontOptions } from "../shared/font-options"

export const globalFonts: TinaField = {
  type: "object",
  label: "Fonts",
  name: "fonts",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Font 1",
      name: "font1",
      type: "string",
      ui: {
        component: "select",
      },
      options: fontOptions,
    },
    {
      label: "Font 2",
      name: "font2",
      type: "string",
      ui: {
        component: "select",
      },
      options: fontOptions,
    },
    {
      label: "Font 3",
      name: "font3",
      type: "string",
      ui: {
        component: "select",
      },
      options: fontOptions,
    },
    {
      label: "Font 4",
      name: "font4",
      type: "string",
      ui: {
        component: "select",
      },
      options: fontOptions,
    },
  ]
}
