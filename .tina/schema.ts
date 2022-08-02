import { defineSchema, defineConfig } from "tinacms";
import { globalSchema } from "./global/global";
import { featureBlockSchema } from "./feature";
import { photoCardsBlockSchema } from "./photo-cards";
import { textCardsBlockSchema } from "./text-cards";
import { bannerBlockSchema } from "./banner";
import { embedBlockSchema } from "./embed";
import { tailwindFeatureBlockSchema } from "./tailwind-feature";
import { tailwindCardsBlockSchema } from "./tailwind-cards";

export default defineSchema({
  collections: [
    globalSchema,
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
            tailwindCardsBlockSchema,
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
              description: "1200x630 jpeg, varies across platforms and may end up slightly cropped.",
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
    import("../plugins").then(({ colorControlFieldPlugin }) => {
      cms.plugins.add(colorControlFieldPlugin);
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
    import("../plugins").then(({ featureContentControlPlugin }) => {
      cms.plugins.add(featureContentControlPlugin);
    });
    import("../plugins").then(({ featureImageControlPlugin }) => {
      cms.plugins.add(featureImageControlPlugin);
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
