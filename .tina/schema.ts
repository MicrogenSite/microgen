import { defineSchema, defineConfig } from "tinacms";
import { featureBlockSchema } from "./feature";
import { photoCardsBlockSchema } from "./photo-cards";
import { textCardsBlockSchema } from "./text-cards";
import { bannerBlockSchema } from "./banner";
import { embedBlockSchema } from "./embed";
import { tailwindFeatureBlockSchema } from "./tailwind-feature";
import { fontOptions } from "./shared/font-options";

export default defineSchema({
  collections: [
    {
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
    },
    {
      label: "Pages",
      name: "pages",
      path: "content/pages",
      fields: [
        {
          type: "boolean",
          label: "Draft",
          description: "Draft posts are only visible on staging.",
          name: "draft",
        },
        {
          type: "object",
          list: true,
          name: "blocks",
          label: "Sections",
          templates: [
            featureBlockSchema,
            photoCardsBlockSchema,
            textCardsBlockSchema,
            bannerBlockSchema,
            embedBlockSchema,
            tailwindFeatureBlockSchema,
          ],
        },
        {
          type: "object",
          label: "Meta",
          name: "meta",
          description: "Page title, description, social sharing image",
          ui: {
            component: "group",
          },
          fields: [
            {
              type: "string",
              label: "Page Title",
              name: "pageTitle",
            },
            {
              type: "string",
              label: "Page Description",
              name: "pageDescription",
            },
            {
              type: "image",
              label: "Social Sharing Image",
              name: "siteImageSrc",
              ui: {
                clearable: true,
              }
            },
          ]
        },
      ],
    },
  ],
});

const branch = "main";
const apiURL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:4001/graphql"
    : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

export const tinaConfig = defineConfig({
  apiURL,
  mediaStore: async () => {
    const pack = await import("next-tinacms-cloudinary");
    return pack.TinaCloudCloudinaryMediaStore;
  },
  cmsCallback: (cms) => {
    /**
     * Enables experimental branch switcher
     */
    cms.flags.set("branch-switcher", true);

    /**
     * When `tina-admin` is enabled, this plugin configures contextual editing for collections
     */
    import("tinacms").then(({ RouteMappingPlugin }) => {
      const RouteMapping = new RouteMappingPlugin((collection, document) => {
        if (["pages"].includes(collection.name)) {
          if (document.sys.filename === "home") {
            return `/`;
          } if (document.sys.filename) {
            return `/${document.sys.filename}`;
          }
          return undefined;
        }
        return `/${collection.name}/${document.sys.filename}`;
      });
      cms.plugins.add(RouteMapping);
    });

    /**
     * Import custom Tina plugins (fields)
     */
    import("../plugins").then(({ itemListFieldPlugin }) => {
      cms.plugins.add(itemListFieldPlugin);
    });
    import("../plugins").then(({ emailFieldPlugin }) => {
      cms.plugins.add(emailFieldPlugin);
    });
    import("../plugins").then(({ typeControlFieldPlugin }) => {
      cms.plugins.add(typeControlFieldPlugin);
    });
    import("../plugins").then(({ typeSizeControlFieldPlugin }) => {
      cms.plugins.add(typeSizeControlFieldPlugin);
    });
    import("../plugins").then(({ fillControlFieldPlugin }) => {
      cms.plugins.add(fillControlFieldPlugin);
    });
    import("../plugins").then(({ alignmentControlFieldPlugin }) => {
      cms.plugins.add(alignmentControlFieldPlugin);
    });
    import("../plugins").then(({ imageControlFieldPlugin }) => {
      cms.plugins.add(imageControlFieldPlugin);
    });
    import("../plugins").then(({ paddingControlFieldPlugin }) => {
      cms.plugins.add(paddingControlFieldPlugin);
    });
    import("../plugins").then(({ borderControlFieldPlugin }) => {
      cms.plugins.add(borderControlFieldPlugin);
    });
    import("../plugins").then(({ selectFieldPlugin }) => {
      cms.plugins.add(selectFieldPlugin);
    });
    import("../plugins").then(({ featureContentFieldPlugin }) => {
      cms.plugins.add(featureContentFieldPlugin);
    });
    import("../plugins").then(({ featureImageFieldPlugin }) => {
      cms.plugins.add(featureImageFieldPlugin);
    });
    import("../plugins").then(({ ruledTitlePlugin }) => {
      cms.plugins.add(ruledTitlePlugin);
    });

    return cms;
  },
  formifyCallback: ({ formConfig, createForm, createGlobalForm }) => {
    if (formConfig.id === "getGlobalDocument") {
      return createGlobalForm(formConfig, { layout: 'fullscreen' });
    }

    return createForm(formConfig);
  },
});
