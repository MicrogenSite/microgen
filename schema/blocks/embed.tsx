
import { minHeightOptions } from "../options"
import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";

export const embedBlockSchema: any = {
  label: "Embed",
  name: "embed",
  ui: {
    defaultItem: {
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
      ],
    },
    backgroundSchema,
    {
      label: "Html",
      name: "markup",
      description: "Any valid html, you can also use tailwind.",
      type: "string",
      ui: {
        component: "textarea"
      }
    },
    navigationLabelSchema,
  ],
};