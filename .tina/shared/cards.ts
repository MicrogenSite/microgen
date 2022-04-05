
import type { TinaField } from "@tinacms/cli";
import { contentOrderOptions, hAlignOptions, minHeightOptions } from "./options"

export const cardsSchema: TinaField = {
  type: "object",
  label: "Section Styles",
  name: "style",
  ui: {
    component: "group",
  },
  fields: [
    {
      label: "Text Alignment",
      name: "textAlignment",
      type: "string",
      ui: {
        component: "selectField",
      },
      options: hAlignOptions,
    },
    {
      label: "Minimum Height",
      name: "minHeight",
      type: "string",
      ui: {
        component: "selectField",
        mobileMode: true,
      },
      options: minHeightOptions,
    },
    {
      label: "Content Padding",
      name: "padding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
    {
      label: "Content Width",
      name: "contentWidth",
      type: "string",
      ui: {
        component: "selectField",
      },
      options: [
        { label: "100%", value: "w-full" },
        { label: "75%", value: "w-9/12" },
        { label: "66%", value: "w-8/12" },
        { label: "50%", value: "w-6/12" },
        { label: "33%", value: "w-4/12" },
        { label: "25%", value: "w-3/12" },
      ],
    },
    {
      label: "Columns",
      name: "columns",
      ui: {
        component: "selectField",
      },
      type: "string",
      options: [
        { label: "1", value: "1" },
        { label: "2", value: "2" },
        { label: "3", value: "3" },
        { label: "4", value: "4" },
      ],
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
      label: "Label Style",
      name: "labelStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "string",
      label: "Headline Style",
      name: "headlineStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "string",
      label: "Subhead Style",
      name: "subheadStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      type: "string",
      label: "Text Style",
      name: "textStyles",
      ui: {
        component: "typeControl"
      }
    },
    {
      label: "Content Order",
      name: "contentOrder",
      type: "string",
      ui: {
        component: "selectField",
      },
      options: contentOrderOptions,
    },
  ],
};