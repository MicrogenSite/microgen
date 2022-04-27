import type { TinaField } from "tinacms"
import { featureBlockSchema } from "../feature";
import { photoCardsBlockSchema } from "../photo-cards";
import { textCardsBlockSchema } from "../text-cards";
import { bannerBlockSchema } from "../banner";
import { embedBlockSchema } from "../embed";
import { tailwindFeatureBlockSchema } from "../tailwind-feature";
import { tailwindCardsBlockSchema } from "../tailwind-cards";

export const globalFooter: TinaField = {
  type: "object",
  list: true,
  label: "Footer",
  name: "blocks",
  templates: [
    featureBlockSchema,
    photoCardsBlockSchema,
    textCardsBlockSchema,
    bannerBlockSchema,
    embedBlockSchema,
    tailwindFeatureBlockSchema,
    tailwindCardsBlockSchema,
  ],
}
