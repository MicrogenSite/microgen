import type { TinaTemplate } from "@tinacms/cli";
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";
import { minHeightOptions } from "./shared/options"

export const embedBlockSchema: TinaTemplate = {
  name: "embed",
  label: "Embed",
  ui: {
    defaultItem: {
      style: {
        minHeight: "min-h-0",
        fullWidth: true,
        padding: "pt-20 pr-10 pb-20 pl-10",
      },
      markup: "",
    },
  },
  fields: [
    {
      type: "object",
      label: "Section Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
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
          label: "Full Width",
          name: "fullWidth",
          type: "boolean",
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
