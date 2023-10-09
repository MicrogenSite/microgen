import { iconOptions } from "./options"
import { typographySchema } from "./typography"

export const cardSchema = {
  type: "object",
  label: "Card Style",
  name: "cardStyle",
  ui: {
    component: "group",
  },
  fields: [
    {
      type: "string",
      label: "Background",
      name: "fillStyles",
      ui: {
        component: "fillControl"
      }
    },
    {
      label: "Grid",
      name: "grid",
      type: "string",
      ui: {
        component: "gridControl",
      },
    },
    {
      label: "Alignment",
      name: "alignment",
      type: "string",
      ui: {
        component: "cardAlignmentControl",
      },
    },
    {
      label: "Image",
      name: "image",
      type: "string",
      ui: {
        component: "imageControl",
      }
    },
    {
      label: "Image Padding",
      name: "imagePadding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
    {
      label: "Content Padding",
      name: "contentPadding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
    {
      type: "string",
      label: "Border",
      name: "borderStyles",
      ui: {
        component: "borderControl"
      }
    },
    ...typographySchema,
    {
      label: "Button",
      name: "buttonTitle",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      type: "string",
      label: "Button Style",
      name: "buttonType",
      ui: {
        component: "buttonControl",
      },
    },
    {
      type: "string",
      label: "Button Icon",
      name: "buttonIcon",
      ui: {
        component: "select",
      },
      options: iconOptions,
    },
    {
      label: "Layout",
      name: "buttonLayout",
      type: "string",
      ui: {
        component: "selectField",
      },
      options: [
        { label: "Under Content", value: "justify-start" },
        { label: "Bottom", value: "justify-between" },
      ],
    },
    {
      label: "Width",
      name: "buttonWidth",
      type: "string",
      ui: {
        component: "selectField",
      },
      options: [
        { label: "Auto", value: "w-auto" },
        { label: "Full", value: "w-full" },
      ],
    },
  ],
}