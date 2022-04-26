import type { TinaCollection } from "tinacms"
import { featureBlockSchema } from "./feature";
import { photoCardsBlockSchema } from "./photo-cards";
import { textCardsBlockSchema } from "./text-cards";
import { bannerBlockSchema } from "./banner";
import { embedBlockSchema } from "./embed";
import { tailwindFeatureBlockSchema } from "./tailwind-feature";
import { tailwindCardsBlockSchema } from "./tailwind-cards";
import { colorOptions } from "./shared/options";
import { fontOptions } from "./shared/font-options";

export const globalSchema: TinaCollection = {
  label: "Global",
  name: "global",
  path: "content/global",
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
      ui: {
        clearable: true,
      }
    },
    {
      type: "string",
      label: "Google Tag Manager ID",
      name: "gtmId",
    },
    {
      type: "object",
      label: "Colors",
      name: "colors",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Primary",
          name: "primary",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 1",
          name: "accent1",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 2",
          name: "accent2",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 3",
          name: "accent3",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Accent 4",
          name: "accent4",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "White",
          name: "white",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Gray Light",
          name: "grayLight",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Gray",
          name: "gray",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Gray Dark",
          name: "grayDark",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          label: "Black",
          name: "black",
          ui: {
            component: "color",
          },
        },
      ]
    },
    {
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
    },
    {
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
    },
    {
      type: "object",
      label: "Links",
      name: "links",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Link Color",
          name: "color",
          ui: {
            component: "colorControl",
          },
          options: colorOptions,
        },
      ]
    },
    {
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
    },
    {
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
    },
    {
      type: "object",
      list: true,
      label: "Footer",
      name: "blocks",
      templates: [
        featureBlockSchema,
        photoCardsBlockSchema,
        textCardsBlockSchema,
        bannerBlockSchema,
        embedBlockSchema,
        tailwindFeatureBlockSchema,
        tailwindCardsBlockSchema,
      ],
    },
    {
      type: "object",
      label: "Redirects",
      name: "redirects",
      list: true,
      fields: [
        {
          type: "string",
          label: "From",
          name: "from",
        },
        {
          type: "string",
          label: "To",
          name: "to",
        },
      ]
    },
  ],
}