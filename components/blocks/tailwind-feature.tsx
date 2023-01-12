import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { linkTarget } from "../../helpers/utilities";
import { Section } from "../section";
import { buttonsSchema } from "../../schema/buttons"
import { backgroundSchema } from "../../schema/background"
import { contentSchema } from "../../schema/content"
import { imageSchema } from '../../schema/image';
import { navigationLabelSchema } from "../../schema/navigation-label";

export const TailwindFeature = ({ data, parentField = ""  }) => {
  const tw = data.tailwind || {};
  

  return (
    <Section className={tw.section} background={data.background} navigationLabel={data.navigationLabel}>
      <div className={tw.background}></div>
      <div className={tw.wrap}>
        <div className={tw.imageWrap}>
          {data.image?.src && (
            <img className={tw.image} alt={data.image?.alt} src={data.image?.src} data-tinafield={`${parentField}.image`} />
          )}
        </div>
        <div className={tw.contentWrap}>
          <div className={`markdown ${tw.content}`}>
            {data.label &&<h4 className={tw.label} data-tinafield={`${parentField}.label`}>{data.label}</h4>}
            {data.headline && <h2 className={tw.headline} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
            {data.subhead && <h3 className={tw.subhead} data-tinafield={`${parentField}.subhead`}>{data.subhead}</h3>}
            {data.body?.children && (
              <div className={tw.text} data-tinafield={`${parentField}.body`}>
                <TinaMarkdown content={data.body} />
              </div>
            )}
            {data.buttons && (
              <div className={tw.buttons}>
                {data.buttons &&
                  data.buttons.map(function (button, index) {
                    const element = (
                        <a
                          className={tw.button}
                          href={button.link}
                          target={linkTarget(button.link)}
                          key={index}
                          data-tinafield={`${parentField}.buttons.${index}`}
                        >
                          { button.label }
                        </a>
                      );
                    return element;
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export const tailwindFeatureBlockSchema: any = {
  label: "Tailwind Feature",
  name: "tailwindFeature",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is the main headline",
      subhead: "Here is a subhead",
      body: {
        children: [
         {
           type: "p",
           children: [
              {
                text: "This is a rich text component you can add hyperlinks, etc."
              }
            ]
          }
        ]
      },
      tailwind: {
        section: "",
        wrap: "",
        imageWrap: "",
        image: "",
        contentWrap: "",
        content: "",
        label: "",
        headline: "",
        subhead: "",
        text: "",
        buttons: ""
      }
    },
  },
  fields: [
    {
      type: "object",
      label: "Tailwind",
      name: "tailwind",
      ui: {
        component: "group",
      },
      fields: [
        {
          label: "Section",
          name: "section",
          type: "string",
        },
        {
          label: "Wrap",
          name: "wrap",
          type: "string",
        },
        {
          label: "Image Wrap",
          name: "imageWrap",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "string",
        },
        {
          label: "Content Wrap",
          name: "contentWrap",
          type: "string",
        },
        {
          label: "Content",
          name: "content",
          type: "string",
        },
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Headline",
          name: "headline",
          type: "string",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          label: "Text",
          name: "text",
          type: "string",
        },
        {
          label: "Buttons",
          name: "buttons",
          type: "string",
        },
        {
          label: "Button",
          name: "button",
          type: "string",
        },
      ],
    },
    backgroundSchema,
    imageSchema,
    ...contentSchema,
    buttonsSchema,
    navigationLabelSchema,
  ],
};
