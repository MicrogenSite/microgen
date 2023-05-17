import { buttonsSchema } from "../buttons"
import { backgroundSchema } from "../background"
import { contentSchema } from "../content"
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"
import { imageSchema } from '../image';

const defaultCard = {
  headline: "Headline",
  subhead: "Subhead",
};

export const cardsBlockSchema: any = {
  name: "cards",
  label: "Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "Headline",
      subhead: "Subhead",
      style: {
        alignment: "flex-col-reverse items-start gap-6",
        padding: "pt-20 pb-20 pr-20 pl-20",
        featureContent: "w-1/2 min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      cardStyle: {
        fillStyles: "bg-gray",
        grid: "grid-cols-3 justify-start gap-6",
        alignment: "flex-row items-start  text-left",
        image: "object-center object-fill",
        imagePadding: "pt-0 pr-0 pb-0 pl-0",
        contentPadding: "pt-2 pr-2 pb-2 pl-2",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      background: {
        style: "bg-cover",
        position: "bg-center",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Styles",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
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
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        ...typographySchema
      ],
    },
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
          label: "Grid",
          name: "grid",
          type: "string",
          ui: {
            component: "gridControl",
          },
        },
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "cardAlignmentControl",
          },
        },
        {
          label: "Image",
          name: "image",
          type: "string",
          ui: {
            component: "imageControl",
          }
        },
        {
          label: "Image Padding",
          name: "imagePadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content Padding",
          name: "contentPadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Border",
          name: "borderStyles",
          ui: {
            component: "borderControl"
          }
        },
        ...typographySchema,
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Button Type",
          name: "buttonType",
          ui: {
            component: "buttonControl",
          },
        },
        {
          label: "Layout",
          name: "buttonLayout",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Under Content", value: "justify-start" },
            { label: "Bottom", value: "justify-between" },
          ],
        },
        {
          label: "Width",
          name: "buttonWidth",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Auto", value: "w-auto" },
            { label: "Full", value: "w-full" },
          ],
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
        imageSchema,
        ...contentSchema,
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