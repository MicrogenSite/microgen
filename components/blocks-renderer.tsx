import React from "react";
import { Feature } from "./blocks/feature";
import { Cards } from "./blocks/cards";
import { Accordion } from "./blocks/accordion";
import { Embed } from "./blocks/embed";
import { TailwindFeature } from "./blocks/tailwind-feature";
import { TailwindCards } from "./blocks/tailwind-cards";
import { EventSchedule } from "./blocks/event-schedule";
import { EventTimeline } from "./blocks/event-timeline";
import { tinaField } from "tinacms/dist/react";

export const Blocks = (props: any) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksFeature":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Feature data={block} />
                  </div>
                );
              case "PageBlocksCards":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Cards data={block} />
                  </div>
                );
              case "PageBlocksAccordion":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Accordion data={block} />
                  </div>
                );
              case "PageBlocksEmbed":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Embed data={block} />
                  </div>
                );
              case "PageBlocksTailwindFeature":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <TailwindFeature data={block} />
                  </div>
                );
              case "PageBlocksTailwindCards":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <TailwindCards data={block} />
                  </div>
                );
              case "PageBlocksEventSchedule":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <EventSchedule data={block} events={props.events as any} />
                  </div>
                );
              case "PageBlocksEventTimeline":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <EventTimeline data={block} events={props.events} />
                  </div>
                );
              default:
                return null;
              /* Footer Blocks */
              case "GlobalBlocksFeature":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Feature data={block} />
                  </div>
                );
              case "GlobalBlocksCards":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Cards data={block} />
                  </div>
                );
              case "GlobalBlocksEmbed":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <Embed data={block} />
                  </div>
                );
              case "GlobalBlocksTailwindFeature":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <TailwindFeature data={block} />
                  </div>
                );
              case "GlobalBlocksTailwindCards":
                return (
                  <div
                    data-tina-field={tinaField(block)}
                    key={i + block.__typename}
                  >
                    <TailwindCards data={block} />
                  </div>
                );
            }
          })
        : null}
    </>
  );
};
