import { backgroundSchema } from "../background"
import { buttonsSchema } from "../buttons"
import { cardSchema } from "../card"
import { contentSchema } from "../content"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
// import { typographySchema } from "../typography"

const defaultCard = {
  headline: "Headline",
  subhead: "Subhead",
};

export const carouselBlockSchema: any = {
  label: "Carousel",
  name: "carousel",
  ui: {
    defaultItem: {
      label: "",
      headline: "Headline",
      subhead: "Subhead",
      style: {
        fullWidth: false,
        loop: true,
        gap: "pl-4",
        slides: "w-1/3",
        slidesToScroll: "1",
        alignment: "center",
        padding: "pt-0 pr-0 pb-0 pl-0",
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
      label: "Section Style",
      name: "style",
      type: "object",
      fields: [
        {
          label: "Gap",
          name: "gap",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: [
            { label: "0", value: "pl-0" },
            { label: "1", value: "pl-px" },
            { label: "2", value: "pl-0.5" },
            { label: "4", value: "pl-1" },
            { label: "6", value: "pl-1.5" },
            { label: "8", value: "pl-2" },
            { label: "10", value: "pl-2.5" },
            { label: "12", value: "pl-3" },
            { label: "16", value: "pl-4" },
            { label: "20", value: "pl-5" },
            { label: "24", value: "pl-6" },
            { label: "28", value: "pl-7" },
            { label: "32", value: "pl-8" },
            { label: "36", value: "pl-9" },
            { label: "40", value: "pl-10" },
          ],
        },
        {
          label: "Slides",
          name: "slides",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: [
            { label: "1", value: "w-full" },
            { label: "1.5", value: "w-2/3" },
            { label: "2", value: "w-1/2" },
            { label: "2.5", value: "w-2/5" },
            { label: "3", value: "w-1/3" },
            { label: "4", value: "w-1/4" },
            { label: "5", value: "w-1/5" },
            { label: "6", value: "w-1/6" },
          ],
        },
        {
          label: "Slides To Scroll",
          name: "slidesToScroll",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "selectField",
            mobileMode: true,
          },
          options: [
            { label: "center", value: "center" },
            { label: "left", value: "start" },
            { label: "right", value: "min-h-120" },
          ],
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
          label: "Full Width",
          name: "fullWidth",
          type: "boolean",
        },
        {
          label: "Equal Height Cards",
          name: "equalHeights",
          type: "boolean",
        },
        {
          label: "Overflow Hidden",
          name: "overflowHidden",
          type: "boolean",
        },
        {
          label: "Loop",
          name: "loop",
          type: "boolean",
        },
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