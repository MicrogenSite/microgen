import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { linkTarget } from "../../helpers/utilities";
import { Section } from "../section";
import { backgroundSchema } from "../../schema/background"
import { buttonsSchema } from "../../schema/buttons";
import { contentSchema } from "../../schema/content"
import { navigationLabelSchema } from "../../schema/navigation-label";

const Card = ({ data, index, tw, parentField = ""  }) => {
  return (
    <div className={tw.card} data-tinafield={`${parentField}.${index}`}>
      <div className={tw.cardImageWrap}>
        {data.image && (
          <img
            alt={data.image.alt || data.headline}
            src={data.image.src}
            className={tw.cardImage}
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>
      <div className={tw.cardContentWrap}>
        <div className={`markdown ${tw.content}`}>
          {data.label &&<h4 className={tw.cardLabel} data-tinafield={`${parentField}.${index}.label`}>{data.label}</h4>}
          {data.headline && <h2 className={tw.cardHeadline} data-tinafield={`${parentField}.${index}.headline`}>{data.headline}</h2>}
          {data.subhead && <h3 className={tw.cardSubhead} data-tinafield={`${parentField}.${index}.subhead`}>{data.subhead}</h3>}
          {data.text?.children && (
            <div className={tw.cardText} data-tinafield={`${parentField}.${index}.text`}>
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
        {data.link && data.buttonLabel && (
          <div className={tw.cardButtons}>
            <a
              className={tw.cardButton}
              href={data.link}
              target={linkTarget(data.link)}
              key={index}
              data-tinafield={`${parentField}.${index}.buttonLabel`}
            >
              { data.buttonLabel }
            </a>
          </div>
        )}
      </div>
    </div>
  )
}


export const TailwindCards = ({ data, parentField = "" }) => {
  const tw = data.tailwind || {};
  return (
    <Section className={tw.section} background={data.background} navigationLabel={data.navigationLabel}>
      <div className={tw.background}></div>
      <div className={tw.contentWrap}>
        <div className={tw.content}>
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
      <div className={tw.cardWrap}>
        {data.items && (
          data.items.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              tw={data.tailwind || {}}
              parentField={`${parentField}.items`}
            />
          })
        )}
      </div>
    </Section>
  );
};

const defaultCard = {
  headline: "Here's Another Card",
  subhead: "Card Subhead",
  text: {
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
};

export const tailwindCardsBlockSchema: any = {
  name: "tailwindCards",
  label: "Tailwind Cards",
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
        buttons: "",
        button: ""
      },
      items: [defaultCard, defaultCard, defaultCard],
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
        {
          label: "Cards",
          name: "rule",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Card Wrap",
          name: "cardWrap",
          type: "string",
        },
        {
          label: "Card",
          name: "card",
          type: "string",
        },
        {
          label: "Card Image Wrap",
          name: "cardImageWrap",
          type: "string",
        },
        {
          label: "Card Image",
          name: "cardImage",
          type: "string",
        },
        {
          label: "Card Content Wrap",
          name: "cardContentWrap",
          type: "string",
        },
        {
          label: "Card Content",
          name: "cardContent",
          type: "string",
        },
        {
          label: "Card Label",
          name: "cardLabel",
          type: "string",
        },
        {
          label: "Card Headline",
          name: "cardHeadline",
          type: "string",
        },
        {
          label: "Card Subhead",
          name: "cardSubhead",
          type: "string",
        },
        {
          label: "Card Text",
          name: "cardText",
          type: "string",
        },
        {
          label: "Card Buttons",
          name: "cardButtons",
          type: "string",
        },
        {
          label: "Card Button",
          name: "cardButton",
          type: "string",
        },
      ],
    },
    backgroundSchema,
    ...contentSchema,
    buttonsSchema,
    {
      type: "object",
      label: "Cards",
      name: "items",
      list: true,
      fields: [
        {
          label: "Image",
          name: "image",
          type: "object",
          fields: [
            {
              label: "Image Source",
              name: "src",
              type: "image",
              ui: {
                clearable: true,
              }
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          type: "string",
          label: "Label",
          name: "label",
        },
        {
          type: "string",
          label: "Headline",
          name: "headline",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          label: "Text",
          name: "text",
          type: "rich-text",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
          type: "string",
          label: "Button Label",
          name: "buttonLabel",
          description: "A button will be included if you have a link and button label, with only a link the entire card is linked"
        },
      ]
    },
    navigationLabelSchema,
  ],
};
