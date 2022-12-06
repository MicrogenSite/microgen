import { defineStaticConfig, wrapFieldsWithMeta } from "tinacms";
import { featureBlockSchema } from "../components/blocks/feature";
import { cardsBlockSchema } from "../components/blocks/cards";
import { embedBlockSchema } from "../components/blocks/embed";
import { tailwindFeatureBlockSchema } from "../components/blocks/tailwind-feature"
import { tailwindCardsBlockSchema } from "../components/blocks/tailwind-cards"
import { colorOptions, roundedOptions } from "../schema/options";

const config = defineStaticConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH! || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF! || // Vercel branch env
    process.env.HEAD!, // Netlify branch env
  token: process.env.TINA_TOKEN!,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/post/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt",
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"],
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A",
            },
          },
          {
            type: "rich-text",
            label: "Body",
            name: "_body",
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"],
                  },
                ],
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text",
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
              {
                name: "NewsletterSignup",
                label: "Newsletter Sign Up",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text",
                  },
                  {
                    name: "placeholder",
                    label: "Placeholder",
                    type: "string",
                  },
                  {
                    name: "buttonText",
                    label: "Button Text",
                    type: "string",
                  },
                  {
                    name: "disclaimer",
                    label: "Disclaimer",
                    type: "rich-text",
                  },
                ],
                ui: {
                  defaultItem: {
                    placeholder: "Enter your email",
                    buttonText: "Notify Me",
                  },
                },
              },
            ],
            isBody: true,
          },
        ],
      },
      {
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
            type: "string",
            label: "Google Tag Manager ID",
            name: "gtmId",
          },
          {
            type: "image",
            label: "Favicon",
            name: "favicon",
            description: "Should be a 48x48px png",
          },
          {
            type: "string",
            label: "Desktop Width",
            name: "desktopWidth",
          },
          {
            type: "string",
            label: "Background Color",
            name: "backgroundColor",
            ui: {
              component: "colorControl",
            },
            options: colorOptions,
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
            label: "Typography",
            name: "typography",
            fields: [
              {
                type: "string",
                label: "XS Headline",
                name: "headlineXs",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "SM Headline",
                name: "headlineSm",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "MD Headline",
                name: "headlineMd",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "LG Headline",
                name: "headlineLg",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "XL Headline",
                name: "headlineXl",
                ui: {
                  component: "typographyControl",
                },
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
                type: "string",
                label: "XS Body",
                name: "bodyXs",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "SM Body",
                name: "bodySm",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "MD Body",
                name: "bodyMd",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "LG Body",
                name: "bodyLg",
                ui: {
                  component: "typographyControl",
                },
              },
              {
                type: "string",
                label: "XL Body",
                name: "bodyXl",
                ui: {
                  component: "typographyControl",
                },
              },
            ]
          },
          {
            type: "object",
            label: "Colors",
            name: "colors",
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
            label: "Buttons",
            name: "buttons",
            list: true,
            ui: {
              component: "itemListField"
            },
            fields: [
              {
                label: "Label",
                name: "label",
                type: "string",
              },
              {
                label: "Fill",
                name: "fill",
                type: "string",
                ui: {
                  component: "fillControl",
                },
              },
              {
                label: "Typography",
                name: "typography",
                type: "string",
                ui: {
                  component: "buttonTypographyControl",
                },
              },
              {
                label: "Padding",
                name: "padding",
                type: "string",
                ui: {
                  component: "paddingControl",
                }
              },
              {
                label: "Border",
                name: "primaryBorder",
                type: "string",
                ui: {
                  component: "borderControl",
                },
              },
              {
                label: "Rounded",
                name: "primaryRounded",
                type: "string",
                ui: {
                  component: "selectField",
                },
                options: roundedOptions,
              },
            ]
          },
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            label: "Footer",
            name: "footer",
            fields: [
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "object",
                label: "Social Links",
                name: "social",
                fields: [
                  {
                    type: "string",
                    label: "Facebook",
                    name: "facebook",
                  },
                  {
                    type: "string",
                    label: "Twitter",
                    name: "twitter",
                  },
                  {
                    type: "string",
                    label: "Instagram",
                    name: "instagram",
                  },
                  {
                    type: "string",
                    label: "Github",
                    name: "github",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar",
          },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            if (document._sys.filename === "about") {
              return `/about`;
            }
            return undefined;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              cardsBlockSchema,
              embedBlockSchema,
              featureBlockSchema,
              tailwindFeatureBlockSchema,
              tailwindCardsBlockSchema,
            ],
          },
        ],
      },
    ],
  },
  cmsCallback: (cms) => {
    import("../plugins").then(({ SectionListItemsPlugin }) => {
      cms.plugins.add(SectionListItemsPlugin);
    });
    import("../plugins").then(({ itemListFieldPlugin }) => {
      cms.plugins.add(itemListFieldPlugin);
    });
    import("../plugins").then(({ emailFieldPlugin }) => {
      cms.plugins.add(emailFieldPlugin);
    });
    import("../plugins").then(({ buttonTypographyControlFieldPlugin }) => {
      cms.plugins.add(buttonTypographyControlFieldPlugin);
    });
    import("../plugins").then(({ colorControlFieldPlugin }) => {
      cms.plugins.add(colorControlFieldPlugin);
    });
    import("../plugins").then(({ buttonControlFieldPlugin }) => {
      cms.plugins.add(buttonControlFieldPlugin);
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
    import("../plugins").then(({ typeControlFieldPlugin }) => {
      cms.plugins.add(typeControlFieldPlugin);
    });
    import("../plugins").then(({ typographyControlFieldPlugin }) => {
      cms.plugins.add(typographyControlFieldPlugin);
    });
    
    return cms
  }
});

export default config;
