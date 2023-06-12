import { backgroundSchema } from "../background"
import { buttonsSchema } from "../buttons";
import { contentSchema } from "../content"
import { navigationLabelSchema } from "../navigation-label";

const defaultCard = {
  headline: "Here's Another Card",
  subhead: "Card Subhead",
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

export const tailwindCardsBlockSchema: any = {
  name: "tailwindCards",
  label: "Tailwind Cards",
  ui: {
    defaultItem: {
      background: {
        style: "bg-cover",
        position: "bg-center",
      },
      label: "",
      headline: "This is the main headline",
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
      tailwind: {
        section: "",
        wrap: "",
        imageWrap: "",
        image: "",
        contentWrap: "",
        content: "",
        label: "",
        headline: "",
        subhead: "",
        text: "",
        buttons: "",
        button: ""
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Tailwind",
      name: "tailwind",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Section",
          name: "section",
          type: "string",
        },
        {
          label: "Wrap",
          name: "wrap",
          type: "string",
        },
        {
          label: "Image Wrap",
          name: "imageWrap",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "string",
        },
        {
          label: "Content Wrap",
          name: "contentWrap",
          type: "string",
        },
        {
          label: "Content",
          name: "content",
          type: "string",
        },
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
          label: "Text",
          name: "text",
          type: "string",
        },
        {
          label: "Buttons",
          name: "buttons",
          type: "string",
        },
        {
          label: "Button",
          name: "button",
          type: "string",
        },
        {
          label: "Cards",
          name: "rule",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Card Wrap",
          name: "cardWrap",
          type: "string",
        },
        {
          label: "Card",
          name: "card",
          type: "string",
        },
        {
          label: "Card Image Wrap",
          name: "cardImageWrap",
          type: "string",
        },
        {
          label: "Card Image",
          name: "cardImage",
          type: "string",
        },
        {
          label: "Card Content Wrap",
          name: "cardContentWrap",
          type: "string",
        },
        {
          label: "Card Content",
          name: "cardContent",
          type: "string",
        },
        {
          label: "Card Label",
          name: "cardLabel",
          type: "string",
        },
        {
          label: "Card Headline",
          name: "cardHeadline",
          type: "string",
        },
        {
          label: "Card Subhead",
          name: "cardSubhead",
          type: "string",
        },
        {
          label: "Card Text",
          name: "cardText",
          type: "string",
        },
        {
          label: "Card Buttons",
          name: "cardButtons",
          type: "string",
        },
        {
          label: "Card Button",
          name: "cardButton",
          type: "string",
        },
      ],
    },
    backgroundSchema,
    ...contentSchema,
    buttonsSchema,
    {
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
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
          label: "Headline",
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
      ]
    },
    navigationLabelSchema,
  ],
};
