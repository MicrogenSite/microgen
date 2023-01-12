// Blocks
import { featureBlockSchema } from "../../components/blocks/feature";
import { cardsBlockSchema } from "../../components/blocks/cards";
import { embedBlockSchema } from "../../components/blocks/embed";
import { tailwindFeatureBlockSchema } from "../../components/blocks/tailwind-feature"
import { tailwindCardsBlockSchema } from "../../components/blocks/tailwind-cards"

import { colorOptions } from "../options";

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
    },
    {
      type: "image",
      label: "Favicon",
      name: "favicon",
      description: "Should be a 48x48px png",
    },
    {
      type: "string",
      label: "Google Tag Manager ID",
      name: "gtmId",
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
          label: "Navigation",
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