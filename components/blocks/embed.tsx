import * as React from "react";
import { Section } from "../section";

import { minHeightOptions } from "../../schema/options"
import { backgroundSchema } from "../../schema/background"
import { navigationLabelSchema } from "../../schema/navigation-label";

export const Embed = ({ data, parentField = "" }) => {
  const padding = data.style?.padding
  const width = data.style?.fullWidth ? "" : "max-w-desktop-full mx-auto"

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`${width} ${padding} ${data.style?.minHeight}`}>
        <div dangerouslySetInnerHTML={{ __html: data.markup }}></div>
      </div>
    </Section>
  );
};

export const embedBlockSchema: any = {
  label: "Embed",
  name: "embed",
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