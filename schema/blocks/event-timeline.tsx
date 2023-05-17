import { minHeightOptions } from "../options"
import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";
import { typographySchema } from "../typography"

export const eventTimelineBlockSchema: any = {
  label: "Event Timeline",
  name: "eventTimeline",
  ui: {
    defaultItem: {
      style: {
        fullWidth: false,
        minHeight: "min-h-0",
        padding: "pt-20 pb-20 pr-10 pl-10",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black mb-4",
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
          label: "Full Width",
          name: "fullWidth",
          type: "boolean",
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
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        ...typographySchema,
      ],
    },
    backgroundSchema,
    {
      label: "Fathom Tracking ID",
      name: "fathomId",
      description: "If fathom is installed you can add an id and track event clicks",
      type: "string",
    },
    navigationLabelSchema,
  ],
};