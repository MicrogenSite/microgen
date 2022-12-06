import * as React from 'react';
import { Section } from '../section';
import { Content } from '../content';
import { backgroundSchema } from "../../schema/background"
import { navigationLabelSchema } from "../../schema/navigation-label";

const Card = ({ data, index, cardstyle, parentField = "" }) => {
  const wrapClasses = data.link && data.buttonLabel ? 'pb-20' : '';

  return (
    <div className={`flex flex-col relative sm:mb-6 ${cardstyle?.borderStyles}`} data-tinafield={`${parentField}.${index}`}>
      <div>
        {data.image && (
          <img
            alt={data.image.alt || data.headline}
            src={data.image.src}
            className={`w-full ${cardstyle?.imageStyles}`}
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
      </div>
      <div
        className={` ${wrapClasses} relative flex-1 text-left border-box ${cardstyle?.padding}`}
      >
        <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
        {data.label && (
          <p className={cardstyle?.labelStyles} data-tinafield={`${parentField}.${index}.label`}>{data.label}</p>
        )}
        {data.headline && (
          <h3 className={cardstyle?.headlineStyles} data-tinafield={`${parentField}.${index}.headline`}>{data.headline}</h3>
        )}
        {data.subhead && (
          <h4 className={cardstyle?.subheadStyles} data-tinafield={`${parentField}.${index}.subhead`}>{data.subhead}</h4>
        )}
        {/* {data.text && (
          <div className={`markdown ${cardstyle?.textStyles}`} data-tinafield={`${parentField}.${index}.text`}>
            <TinaMarkdown content={data.text} />
          </div>
        )}
        {data.link && data.buttonLabel && (
          <Buttons buttons={[{
            link: data.link,
            label: data.buttonLabel,
            type: cardstyle?.buttonType
          }]} className="absolute bottom-4"  data-tinafield={`${parentField}.${index}.link`} />
        )} */}

      </div>
      {data.link && !data.buttonLabel && (
        <a href={data.link} className="absolute inset-0 z-20" data-tinafield={`${parentField}.${index}.link.0`} />
      )}
    </div>
  );
};

export const Cards = ({ data, parentField = "" }) => {
  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-6",
  }

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`max-w-desktop-full mx-auto ${data.style?.padding} ${data.style?.textAlignment} ${data.style?.minHeight}`}>
        <Content
          data={data}
          styles={data.style}
          alignment={data.style?.alignment}
          width={data.style?.contentWidth}
          parentField={parentField}
        />
        <div className={`grid sm:block gap-10 ${gridCols[data.style?.columns]}`}>
          {data.items &&
            data.items.map(function (block, index) {
              return <Card key={index} index={index} data={block} cardstyle={data.cardStyle} parentField={`${parentField}.items`} />;
            })}
        </div>
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

export const cardsBlockSchema: any = {
  name: "cards",
  label: "Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "This is a headline",
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
      style: {
        textAlignment: "text-left",
        minHeight: "min-h-0",
        padding: "pt-20 pr-20 pb-20 pl-20",
        contentWidth: "w-full",
        columns: "3",
        labelStyles: "text-black font-1 text-sm mb-0",
        headlineStyles: "text-black font-1 text-5xl mb-0",
        subheadStyles: "text-black font-1 text-3xl mb-0",
        textStyles: "text-black font-1 text-md mb-0",
        contentOrder: "labelHeadingsContent",
      },
      cardStyle: {
        type: "solid",
        fillStyles: "bg-gray",
        padding: "pt-4 pr-4 pb-4 pl-4",
        labelStyles: "text-black text-sm mb-0",
        headlineStyles: "text-black text-2xl mb-0",
        subheadStyles: "text-black text-lg mb-0",
        textStyles: "text-black text-sm mb-0",
        buttonType: "solid",
      },
      items: [defaultCard, defaultCard, defaultCard],
    },
  },
  fields: [



    {
      type: "object",
      label: "Section Styles",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        // {
        //   label: "Text Alignment",
        //   name: "textAlignment",
        //   type: "string",
        //   ui: {
        //     component: "selectField",
        //   },
        //   options: hAlignOptions,
        // },
        // {
        //   label: "Minimum Height",
        //   name: "minHeight",
        //   type: "string",
        //   ui: {
        //     component: "selectField",
        //     mobileMode: true,
        //   },
        //   options: minHeightOptions,
        // },
        {
          label: "Content Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content Width",
          name: "contentWidth",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "100%", value: "w-full" },
            { label: "75%", value: "w-9/12" },
            { label: "66%", value: "w-8/12" },
            { label: "50%", value: "w-6/12" },
            { label: "33%", value: "w-4/12" },
            { label: "25%", value: "w-3/12" },
          ],
        },
        {
          label: "Columns",
          name: "columns",
          ui: {
            component: "selectField",
          },
          type: "string",
          options: [
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
          ],
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label Style",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline Style",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead Style",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text Style",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
      ],
    },
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Border",
          name: "borderStyles",
          ui: {
            component: "borderControl"
          }
        },
        {
          type: "string",
          label: "Image",
          name: "imageStyles",
          ui: {
            component: "imageControl"
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Type",
          name: "buttonType",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Minor", value: "minor" },
          ],
        },
      ],
    },
    backgroundSchema,
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
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    // buttonsSchema,
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
          label: "Title",
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
      ],
    },
    navigationLabelSchema,
  ],
};