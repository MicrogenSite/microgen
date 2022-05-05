import type { TinaField } from "tinacms"

export const globalHeader: TinaField = {
  type: "object",
  label: "Header",
  name: "nav",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Navigation",
      description: "Additional links in the header",
      name: "navItems",
      list: true,
      type: "object",
      fields: [{
        label: "Label",
        name: "label",
        type: "string"
      }, {
        label: "Link",
        name: "link",
        type: "string",
      }]
    },
    {
      label: "Alignment",
      name: "navAlignment",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "Left", value: "text-left" },
        { label: "Center", value: "text-center" },
        { label: "Right", value: "text-right" },
      ],
    },
    {
      type: "string",
      label: "Navigation Style",
      name: "navTypeStyle",
      ui: {
        component: "typeControl"
      }
    },
    {
      label: "Mobile Background Color",
      name: "navBackgroundColor",
      type: "string",
      ui: {
        component: "fillControl"
      }
    },
    {
      label: "Header Padding",
      name: "padding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
  ]
}
