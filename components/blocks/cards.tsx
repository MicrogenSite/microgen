import * as React from 'react';
import { hasWord, getWordWith } from '../../helpers/utilities';
import { Section } from '../section';
import { Content } from '../content';

import { buttonsSchema } from "../../schema/buttons"
import { backgroundSchema } from "../../schema/background"
import { contentSchema } from "../../schema/content"
import { navigationLabelSchema } from "../../schema/navigation-label";
import { typographySchema } from "../../schema/typography"
import { imageSchema } from '../../schema/image';

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

const cardImgStyles = (cardStyle, isMobile:boolean) => {
  const classes: [string] = cardStyle?.image?.split(' ') || []
  let imageWidth
  let imageHeight
  if (isMobile) {
    imageWidth = classes.find(item => item.substring(0,7) === 'sm:wpx-')?.replace(`sm:wpx-`, '')
    imageHeight = classes.find(item => item.substring(0,7) === 'sm:hpx-')?.replace(`sm:wpx-`, '')
  } else {
    imageWidth = classes.find(item => item.substring(0,4) === 'wpx-')?.replace(`wpx-`, '')
    imageHeight = classes.find(item => item.substring(0,4) === 'hpx-')?.replace(`hpx-`, '')
  }
  return {
    width: imageWidth ? `${imageWidth}px` : 'auto',
    height: imageHeight ? `${imageHeight}px` : 'auto'
  }
}

const cardImgClasses = (cardStyle, isMobile:boolean) => {
  const classes: [string] = cardStyle?.image?.split(' ') || []
  if (isMobile) {
    return classes.filter(item => item.includes('sm:object-')).join(' ')
  } else {
    return classes.filter(item => item.includes('object-')).join(' ')
  }
}

const Card = ({ data, index, cardstyle, parentField = "" }) => {
  return (    
    <div className={`relative w-full flex ${cardstyle?.alignment} ${cardstyle?.borderStyles}`} data-tinafield={`${parentField}.${index}`}>
      <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
      {data.link && !data.buttonLabel && (
        <a className={`absolute inset-0 -z-20`} href={data.link} />
      )}
      {data.image?.src && (
        <div className='flex-none'>
          <div className={`${cardstyle?.imagePadding} sm:hidden`} style={cardImgStyles(cardstyle, false)}>
            <img
              className={`sm:hidden ${cardImgClasses(cardstyle, false)}`}
              style={cardImgStyles(cardstyle, false)}
              alt={data.image.alt || data.headline}
              src={data.image.src}
              data-tinafield={`${parentField}.image`}
            />
          </div>
          <div className={`${cardstyle?.imagePadding} hidden sm:block`} style={cardImgStyles(cardstyle, true)}>
            <img
              className={`hidden sm:block  ${cardImgClasses(cardstyle, true)}`}
              style={cardImgStyles(cardstyle, true)}
              alt={data.image.alt || data.headline}
              src={data.image.src}
              data-tinafield={`${parentField}.image`}
            />
          </div>
        </div>
      )}
      <div className={`flex-1 h-full flex flex-col ${cardstyle.buttonLayout} ${cardstyle?.contentPadding}`} >
        <Content
          data = {data}
          styles = {cardstyle}
          alignment = {``}
          width = "w-full"
          parentField = {parentField}
          className = ""
        />
        <div>
          {data.link && data.buttonLabel && (
            <a href={data.link} className={`btn-${cardstyle?.buttonType} ${cardstyle?.buttonWidth}`} data-tinafield={`${parentField}.${index}.link.0`}>
              {data.buttonLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Cards = ({ data, parentField = "" }) => {
  const style = data.style || {}
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div className={`${wrapClasses(style)}`}>
          <div className={`grid sm:block ${data.cardStyle.grid}`}>
            {data.items &&
              data.items.map(function (block, index) {
                return <Card key={index} index={index} data={block} cardstyle={data.cardStyle} parentField={`${parentField}.items`} />;
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
  );
};

const defaultCard = {
  headline: "Headline",
  subhead: "Subhead",
};

export const cardsBlockSchema: any = {
  name: "cards",
  label: "Cards",
  ui: {
    defaultItem: {
      label: "",
      headline: "Headline",
      subhead: "Subhead",
      style: {
        alignment: "flex-col-reverse items-start gap-6",
        padding: "pt-20 pb-20 pr-20 pl-20",
        featureContent: "w-1/2 min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
      cardStyle: {
        fillStyles: "bg-gray",
        grid: "grid-cols-3 items-start gap-6",
        imagePadding: "pt-0 pr-0 pb-0 pl-0",
        contentPadding: "pt-2 pr-2 pb-2 pl-2",
        labelStyles: "text-black",
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
          label: "Grid",
          name: "grid",
          type: "string",
          ui: {
            component: "gridControl",
          },
        },
        {
          label: "Alignment",
          name: "alignment",
          type: "string",
          ui: {
            component: "cardAlignmentControl",
          },
        },
        {
          label: "Image",
          name: "image",
          type: "string",
          ui: {
            component: "imageControl",
          }
        },
        {
          label: "Image Padding",
          name: "imagePadding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          label: "Content Padding",
          name: "contentPadding",
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
        ...typographySchema,
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Button Type",
          name: "buttonType",
          ui: {
            component: "buttonControl",
          },
        },
        {
          label: "Layout",
          name: "buttonLayout",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Under Content", value: "justify-start" },
            { label: "Bottom", value: "justify-between" },
          ],
        },
        {
          label: "Width",
          name: "buttonWidth",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Auto", value: "w-auto" },
            { label: "Full", value: "w-full" },
          ],
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
        imageSchema,
        ...contentSchema,
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