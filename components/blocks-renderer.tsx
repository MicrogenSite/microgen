import React from "react";
import { Feature } from "./blocks/feature";
import { Cards } from "./blocks/cards";
import { Accordian } from "./blocks/accordian";
import { Embed } from "./blocks/embed";
import { TailwindFeature } from "./blocks/tailwind-feature";
import { TailwindCards } from "./blocks/tailwind-cards";
import { EventTimeline } from "./blocks/event-timeline";

export const Blocks = (props: any) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksCards":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksAccordian":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Accordian data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksEmbed":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTailwindFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTailwindCards":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <TailwindCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksEventTimeline":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <EventTimeline data={block} events={props.events} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
              

              /* Footer Blocks */
              case "GlobalBlocksFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "GlobalBlocksCards":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <Cards data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                case "GlobalBlocksEmbed":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <Embed data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                case "GlobalBlocksTailwindFeature":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <TailwindFeature data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                case "GlobalBlocksTailwindCards":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <TailwindCards data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
            }
          })
        : null}
    </>
  );
};
