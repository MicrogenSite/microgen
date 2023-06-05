import { buttonsSchema } from "../buttons"
import { backgroundSchema } from "../background"
import { contentSchema } from "../content"
import { imageSchema } from '../image';
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

export const featureBlockSchema: any = {
  label: "Feature",
  name: "feature",
  ui: {
    defaultItem: {
      headline: "Headline",
      subhead: "Subhead",
      style: {
        alignment: "flex-row items-center gap-0",
        padding: "pt-20 pb-20 pr-10 pl-10",
        featureImage: "mx-auto",
        featureContent: "w-1/2 min-h-0 text-left",
        buttonsLayoutControl: "flex-row gap-4",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      background: {
        style: "bg-cover",
        position: "bg-center",
      },
    },
  },
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
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
          label: "Image",
          name: "featureImage",
          type: "string",
          ui: {
            component: "featureImageControl",
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
        ...typographySchema,
      ],
    },
    backgroundSchema,
    imageSchema,
    ...contentSchema,
    buttonsSchema,
    navigationLabelSchema,
  ],
};