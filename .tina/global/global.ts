import type { TinaCollection } from "tinacms"

import { colorOptions } from "../shared/options";

import { globalButtons } from "./buttons";
import { globalColors } from "./colors";
import { globalHeader } from "./header";
import { globalFonts } from "./fonts";
import { globalFooter } from "./footer";
import { globalLogo } from "./logo";
import { globalTypeSize } from "./type-size";

export const globalSchema: TinaCollection = {
  label: "Global",
  name: "global",
  path: "content/global",
  fields: [
    {
      type: "string",
      label: "Site Url",
      name: "siteUrl",
    },
    {
      type: "string",
      label: "Google Tag Manager ID",
      name: "gtmId",
    },
    {
      type: "image",
      label: "Favicon",
      name: "favicon",
      description: "Should be a 48x48px png",
      ui: {
        clearable: true,
      }
    },
    {
      type: "string",
      label: "Desktop Width",
      name: "desktopWidth",
    },
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    globalColors,
    globalFonts,
    globalTypeSize,
    globalButtons,
    {
      type: "object",
      label: "Links",
      name: "links",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Link Color",
          name: "color",
          ui: {
            component: "colorControl",
          },
          options: colorOptions,
        },
      ]
    },
    globalLogo,
    globalHeader,
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    globalFooter,
    {
      type: "object",
      label: "Redirects",
      name: "redirects",
      list: true,
      fields: [
        {
          type: "string",
          label: "From",
          name: "from",
        },
        {
          type: "string",
          label: "To",
          name: "to",
        },
      ]
    },
  ],
}