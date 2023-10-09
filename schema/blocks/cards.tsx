import { backgroundSchema } from "../background"
import { buttonsSchema } from "../buttons"
import { cardSchema } from "../card"
import { contentSchema } from "../content"
import { iconOptions } from "../options"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

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
        buttonsLayout: "flex-row gap-4",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      cardStyle: {
        grid: "grid-cols-3 justify-start gap-6",
        fillStyles: "bg-gray",
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
        {
          label: "Buttons",
          name: "buttonsLayout",
          type: "string",
          ui: {
            component: "buttonsLayoutControl",
          },
        },
        ...typographySchema
      ],
    },
    cardSchema,
    backgroundSchema,
    ...contentSchema,
    buttonsSchema,
    {
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
      itemProps: (item) => ({
        label: item.headline,
      }),
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
