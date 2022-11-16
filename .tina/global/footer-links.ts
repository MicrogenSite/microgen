import type { TinaField } from "tinacms"

export const globalFooterLinks: TinaField = {
  type: "object",
  label: "Footer Links",
  name: "footerNav",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Footer Navigation",
      description: "Links in footer",
      name: "footerNavItems",
      list: true,
      type: "object",
      ui: {
        component: "itemListField",
        defaultItem: {
          label: "Nav Item",
          link: "/",
        },
      },
      fields: [
        {
        label: "Label",
        name: "label",
        type: "string"
        }, 
        {
          label: "Link",
          name: "link",
          type: "string",
        }
      ]
    },
  ]
}
