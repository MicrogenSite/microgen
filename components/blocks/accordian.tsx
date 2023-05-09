import * as React from "react"
import { hasWord, getWordWith } from '../../helpers/utilities';
import { Section } from "../section"
import { Content } from "../content"
import { TinaMarkdown } from "tinacms/dist/rich-text"

import { buttonsSchema } from "../../schema/buttons"
import { backgroundSchema } from "../../schema/background"
import { contentSchema } from "../../schema/content"
import { navigationLabelSchema } from "../../schema/navigation-label";
import { typographySchema } from "../../schema/typography"

const wrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
}
const wrapClasses = (style) => {
  const isVertical:boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isVerticalMobile:boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
  const widthClasses = wrapWidthClasses(isVertical, false)
  const mobileWidthClasses = wrapWidthClasses(isVerticalMobile, true)
  return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
}
const borderColor = (borderClasses) => {
  return borderClasses?.split(' ')[0] || ""
}
const borderWidth = (borderClasses) => {
  const borderWidthString: string = borderClasses?.split(' ')[1] || ''
  const lastDashIndex: number = borderWidthString.lastIndexOf('-')
  return borderWidthString.slice(lastDashIndex + 1) || ""
}

const AccordianItem = ({ data, index, cardstyle, isLast, parentField = "" }) => {
  const [active, setActive] = React.useState(false);
  const borderWidthClass = isLast ? '' : `border-b-${borderWidth(cardstyle?.borderStyles)}`

  return (
    <div className={`${borderWidthClass} first:border-t-0 last:border-b-0 ${borderColor(cardstyle?.borderStyles)} ${cardstyle?.fillStyles}`}>
      <div className={`relative cursor-pointer text-primary ${cardstyle?.padding} ${cardstyle?.headlineStyles} ${active && cardstyle?.fillStylesActive }`} onClick={() => setActive(!active)}>
        {data.headline && (
          <h3 className={cardstyle?.headlineStyles} data-tinafield={`${parentField}.${index}.headline`}>{data.headline}</h3>
        )}
        <div className={`absolute z-20 right-5 top-3.5 sm:top-4 ${active ? 'transform rotate-180' : ''}`}>
          <svg width="16" height="19" viewBox="0 0 16 19" className="fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.92265 0.551269L7.5125 0.551269C7.04245 0.551269 6.78934 0.804374 6.78934 1.27442L6.78934 13.3873L2.48657 9.66303C2.16115 9.37377 1.76341 9.37377 1.47415 9.73535L0.64252 10.7839C0.353258 11.1455 0.389415 11.4709 0.750993 11.7963L7.5125 17.7624C7.7656 17.9793 7.91023 18.0878 8.1995 18.0878C8.56107 18.0878 8.63339 17.9793 8.8865 17.7624L15.6842 11.7963C16.0457 11.4709 16.0819 11.1455 15.7926 10.7839L14.961 9.73535C14.6717 9.33761 14.274 9.33761 13.9124 9.62687L9.64581 13.3511L9.64581 1.27442C9.64581 0.804374 9.3927 0.551269 8.92265 0.551269Z" />
          </svg>
        </div>
      </div>
      <div className={`text-body1 lg:text-body-lg  ${borderColor(cardstyle?.borderStyles)} ${active ? '' : 'hidden'}`}>
        <div
          className={`relative flex-1 border-box ${cardstyle?.padding}`}
        >
          <div className={`absolute inset-0 -z-1`} />
          {data.subhead && (
            <h4 className={cardstyle?.subheadStyles} data-tinafield={`${parentField}.${index}.subhead`}>{data.subhead}</h4>
          )}
          {data.text && (
            <div className={`markdown ${cardstyle?.textStyles}`} data-tinafield={`${parentField}.${index}.text`}>
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const Accordian = ({ data, parentField = "" }) => {
  const style = data.style || {}
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div className={`${wrapClasses(style)}`}>
          <div className={`rounded-xl border-${borderWidth(data.cardStyle?.borderStyles)} ${borderColor(data?.cardStyle?.borderStyles)} overflow-hidden`}>
              {data.items.map((item, index) => {
                const isLast = data.items?.length === index + 1
                return (
                  <AccordianItem key={index} index={index} data={item} cardstyle={data.cardStyle} isLast={isLast} parentField={`${parentField}.items`} />
                )
              })}
            </div>
        </div>
        <div className={`flex-none justify-center ${style.featureContent}`}>
          <Content
            data = {data}
            styles = {style}
            alignment = {`${textAlign} ${textAlignMobile}`}
            width = "w-full"
            parentField = {parentField}
            className = ""
          />
        </div>
      </div>
    </Section>
  )
}

const defaultCard = {
  headline: "Headline",
  subhead: "",
};

export const accordianBlockSchema: any = {
  name: "accordian",
  label: "Accordian",
  ui: {
    defaultItem: {
      label: "",
      headline: "Headline",
      subhead: "Subhead",
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
        alignment: "flex-col-reverse items-center gap-6",
        padding: "pt-20 pb-20 pr-10 pl-10",
        featureContent: "w-full min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      cardStyle: {
        fillStyles: "bg-white opacity-100",
        fillStylesActive: "bg-gray-light opacity-100",
        padding: "pt-4 pr-4 pb-4 pl-4",
        borderStyles: "border-gray border-1",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
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
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "alignmentControl",
          },
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
          label: "Content",
          name: "featureContent",
          type: "string",
          ui: {
            component: "featureContentControl",
          }
        },
        ...typographySchema
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
          type: "string",
          label: "Background Open",
          name: "fillStylesActive",
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
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
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
      ui: {
        component: 'itemListField',
      },
      fields: [
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
      ],
    },
    navigationLabelSchema,
  ],
};
