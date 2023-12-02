// Blocks
import { featureBlockSchema } from "../blocks/feature";
import { cardsBlockSchema } from "../blocks/cards";
import { embedBlockSchema } from "../blocks/embed";
import { iconOptions } from "../options";
import { tailwindFeatureBlockSchema } from "../blocks/tailwind-feature"
import { tailwindCardsBlockSchema } from "../blocks/tailwind-cards"

export const globalCollectionSchema: any = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "string",
      label: "Site Url",
      name: "siteUrl",
      description: "Live url without www or https://",
    },
    {
      type: "image",
      label: "Favicon",
      name: "favicon",
      description: "Should be a 48x48px png",
    },
    {
      label: "Analytics",
      name: "analytics",
      description: "The type of analytics to use",
      type: "string",
      ui: {
        component: "select",
      },
      options: [
        { label: "None", value: "none" },
        { label: "Plausible", value: "plausible" },
        { label: "Fathom", value: "fathom" },
      ],
    },
    {
      label: "Fathom Site ID",
      name: "fathomSiteId",
      type: "string",
    },
    {
      label: 'Theme',
      name: 'theme',
      type: 'reference',
      collections: ['theme'],
    },
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },    
    {
      type: "object",
      label: "Logo",
      name: "logo",
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
    },          
    {
      type: "object",
      label: "Header",
      name: "nav",
      fields: [
        {
          label: "Header Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
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
          label: "Navigation Alignment",
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
          label: "Navigation Typography",
          name: "navTypeStyle",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "",
          name: "navigationTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Navigation Links",
          description: "Additional links in the header",
          name: "navItems",
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
            }, {
              label: "Link",
              name: "link",
              description: "Items with Sub Navigation will ignore this link",
              type: "string",
            }, {
              label: "Sub Navigation",
              description: "Links below the main nav item",
              name: "subNavItems",
              list: true,
              type: "object",
              ui: {
                component: "itemListField",
                defaultItem: {
                  label: "Sub Nav Item",
                  link: "/",
                },
              },
              fields: [
                {
                  label: "Label",
                  name: "label",
                  type: "string"
                }, {
                  label: "Link",
                  name: "link",
                  type: "string",
                }
              ]
            }
          ]
        },
        {
          label: "Navigation Buttons",
          name: "navButtons",
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
            }, {
              label: "Link",
              name: "link",
              type: "string",
            },
            {
              type: "string",
              label: "Icon",
              name: "icon",
              ui: {
                component: "select",
              },
              options: iconOptions,
            },
            {
              type: "string",
              label: "Button Style",
              name: "style",
              ui: {
                component: "buttonControl",
              },
            },
          ]
        },
      ]
    },
    {
      type: "string",
      label: "Footer Nav",
      description: "Mirror the navigation in the footer",
      name: "footerNav",
      ui: {
        component: "select",
      },
      options: [
        { label: "True", value: "true" },
        { label: "False", value: "false" },
      ],
    },
    {
      type: "object",
      list: true,
      label: "Footer",
      name: "blocks",
      templates: [
        cardsBlockSchema,
        embedBlockSchema,
        featureBlockSchema,
        tailwindFeatureBlockSchema,
        tailwindCardsBlockSchema,
      ],
    }
    ,
  ],
}