import type { TinaTemplate } from "@tinacms/cli";
import { backgroundSchema } from "./shared/background";
import { buttonsSchema } from "./shared/buttons";
import { cardsSchema } from "./shared/cards";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions } from "./shared/options"

const defaultCard = {
  headline: "Here's Another Card",
  subhead: "",
  text: {
    children: [
     {
       type: "p",
       children: [
          {
            text: "This is a rich text component you can add hyperlinks, etc."
          }
        ]
      }
    ]
  },
};

export const photoCardsBlockSchema: TinaTemplate = {
  name: "photoCards",
  label: "Photo Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
      subhead: "Here is a subhead",
      body: {
        children: [
         {
           type: "p",
           children: [
              {
                text: "This is a rich text component you can add hyperlinks, etc."
              }
            ]
          }
        ]
      },
      style: {
        textAlignment: "text-left",
        minHeight: "min-h-0",
        padding: "pt-20 pr-20 pb-20 pl-20",
        contentWidth: "w-full",
        columns: "3",
        labelStyles: "text-black font-1 text-sm mb-0",
        headlineStyles: "text-black font-1 text-5xl mb-0",
        subheadStyles: "text-black font-1 text-3xl mb-0",
        textStyles: "text-black font-1 text-md mb-0",
        contentOrder: "labelHeadingsContent",
      },
      cardStyle: {
        type: "solid",
        fillStyles: "bg-gray",
        padding: "pt-4 pr-4 pb-4 pl-4",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-2xl mb-0",
        subheadStyles: "text-black text-lg mb-0",
        textStyles: "text-black text-sm mb-0",
        buttonType: "solid",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    cardsSchema,
    {
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
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Solid Background", value: "solid" },
            { label: "Semi Transparent", value: "transparent" },
            { label: "Horizontal Fade", value: "fadeH" },
          ],
        },
        {
          type: "string",
          label: "Image",
          name: "imageStyles",
          ui: {
            component: "imageControl"
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Type",
          name: "buttonType",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Minor", value: "minor" },
          ],
        },
      ],
    },
    backgroundSchema,
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    buttonsSchema,
    {
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Image",
          name: "image",
          type: "object",
          fields: [
            {
              label: "Image Source",
              name: "src",
              type: "image",
              ui: {
                clearable: true,
              }
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          type: "string",
          label: "Label",
          name: "label",
        },
        {
          type: "string",
          label: "Title",
          name: "headline",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          label: "Text",
          name: "text",
          type: "rich-text",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "string",
          label: "Button Label",
          name: "buttonLabel",
          description: "A button will be included if you have a link and button label, with only a link the entire card is linked"
        },
      ],
    },
    navigationLabelSchema,
  ],
};
