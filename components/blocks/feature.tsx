import * as React from 'react';
import { Section } from '../section';
import { Content } from '../content';
import { hasWord, getWordWith } from '../../helpers/utilities';
import { buttonsSchema } from "../../schema/buttons"
import { backgroundSchema } from "../../schema/background"
import { contentSchema } from "../../schema/content"
import { imageSchema } from '../../schema/image';
import { navigationLabelSchema } from "../../schema/navigation-label";
import { typographySchema } from "../../schema/typography"

const imageWrapWidthClasses = (isVertical: boolean, isMobile: boolean) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return isVertical ? `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full` : ''
}
const imageWrapClasses = (style) => {
  const isVertical:boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isVerticalMobile:boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')
  const widthClasses = imageWrapWidthClasses(isVertical, false)
  const mobileWidthClasses = imageWrapWidthClasses(isVerticalMobile, true)
  return `relative h-full flex-1 ${widthClasses} ${mobileWidthClasses}`
}
const imgClasses = (style, isMobile:boolean) => {
  const marginClasses = style.featureImage.split(' ').filter(item => !item.includes('px'))
  const mobileMarginClass = marginClasses.filter(item => item.includes('sm')).join(' ')
  const desktopmarginClass = marginClasses.filter(item => !item.includes('sm')).join(' ')
  return isMobile ? mobileMarginClass : desktopmarginClass
};
const imgStyles = (style, isMobile:boolean) => {
  const classes: [string] = style.featureImage.split(' ')
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


export const Feature = ({ data, parentField = '' }) => {
  const style = data.style
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto ${style?.padding} ${style?.alignment}`}>
        <div className={`${imageWrapClasses(style)}`}>
          {data.image?.src && (
            <>
              <img
                className={`sm:hidden ${imgClasses(style, false)}`}
                style={imgStyles(style, false)}
                alt={data.image?.alt}
                src={data.image?.src}
                data-tinafield={`${parentField}.image`}
              />
              <img
                className={`hidden sm:block ${imgClasses(style, true)}`}
                style={imgStyles(style, true)}
                alt={data.image?.alt}
                src={data.image?.src}
                data-tinafield={`${parentField}.image`}
              />
            </>
          )}
        </div>
        <div className={`flex-none ${style.featureContent}`}>
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

export const featureBlockSchema: any = {
  label: "Feature",
  name: "feature",
  ui: {
    defaultItem: {
      headline: "Headline",
      subhead: "Subhead",
      style: {
        alignment: "flex-row items-center gap-0",
        padding: "pt-20 pb-20 pr-10 pl-10",
        featureImage: "mx-auto",
        featureContent: "w-1/2 min-h-0 text-left",
        labelStyles: "text-black",
        headlineStyles: "text-black",
        subheadStyles: "text-black",
        textStyles: "text-black",
      },
    },
  },
  fields: [
    {
      label: "Section Style",
      name: "style",
      type: "object",
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
          label: "Image",
          name: "featureImage",
          type: "string",
          ui: {
            component: "featureImageControl",
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
        ...typographySchema,
      ],
    },
    backgroundSchema,
    imageSchema,
    ...contentSchema,
    buttonsSchema,
    navigationLabelSchema,
  ],
};