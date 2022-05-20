import type { TinaField } from "tinacms"

export const globalLogo: TinaField = {
  type: "object",
  label: "Logo",
  name: "logo",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Logo Type",
      name: "logoType",
      description: "Only visible if there is no image."
    },
    {
      type: "string",
      label: "Logo Type Style",
      name: "logoTypeStyle",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "image",
      label: "Logo Image",
      name: "image",
      ui: {
        clearable: true,
      }
    },
    {
      type: "string",
      label: "Logo Width",
      name: "imageWidth",
    },
    {
      type: "string",
      label: "Logo Height",
      name: "imageHeight",
    },
    {
      type: "string",
      label: "Logo Margin",
      description: "Space between logo and nav",
      name: "imageMargin",
    },
  ]
}
