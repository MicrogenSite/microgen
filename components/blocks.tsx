import React from "react";
import type { Pages, Global } from "../.tina/__generated__/types";
import { Cards } from "./blocks/cards";
import { Feature } from "./blocks/feature";
import { Banner } from "./blocks/banner";
import { Embed } from "./blocks/embed";
import { TailwindFeature } from "./blocks/tailwind-feature";
import { TailwindCards } from "./blocks/tailwind-cards";

export const Blocks = (props: Pages | Global) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {

              /* Page Blocks */
              case "PagesBlocksFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksBanner":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Banner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksPhotoCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTextCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksEmbed":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
             
              /* Footer Blocks */
              case "GlobalBlocksFeature":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <Feature data={block} parentField={`footer.${i}`} />
                  </div>
                );
              case "GlobalBlocksBanner":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <Banner data={block} parentField={`footer.${i}`} />
                  </div>
                );
              case "GlobalBlocksPhotoCards":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`footer.${i}`} />
                  </div>
                );
              case "GlobalBlocksTextCards":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`footer.${i}`} />
                  </div>
                );
              case "GlobalBlocksEmbed":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <Embed data={block} parentField={`footer.${i}`} />
                  </div>
                );
              case "GlobalBlocksTailwindFeature":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <TailwindFeature data={block} parentField={`footer.${i}`} />
                  </div>
                );
              case "GlobalBlocksTailwindCards":
                return (
                  <div data-tinafield={`footer.${i}`} key={i + block.__typename}>
                    <TailwindCards data={block} parentField={`footer.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
