import { backgroundSchema } from "../background"
import { navigationLabelSchema } from "../navigation-label";

export const videoBlockSchema: any = {
  label: "Video",
  name: "video",
  fields: [
    backgroundSchema,
    {
      label: "Padding",
      name: "padding",
      type: "string",
      ui: {
        component: "paddingControl",
      }
    },
    {
      label: "Video",
      description: "Name of the video in the upload folder.",
      name: "src",
      type: "string",
    },
    {
      label: "Video Width",
      name: "videoWidth",
      type: "string",
    },
    {
      label: "Video Height",
      name: "videoHeight",
      type: "string",
    },
    navigationLabelSchema,
  ],
};
