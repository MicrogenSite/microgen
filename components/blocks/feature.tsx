import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";
import { hasWord, getWordWith } from "../../helpers/utilities";

// Content Wrap
const ContentWrapWidthClasses = (widthClass: string, isVertical: boolean, isContentToEdge: boolean) => {
  if (isVertical && isContentToEdge) {
    return `w-full`
  } else if (isVertical && !isContentToEdge) {
    return `w-full max-w-site-full`
  } else if (!isContentToEdge) {
    return `${widthClass} ${widthClass.replace("w-","max-w-site-")}`
  } else if (isContentToEdge) {
    return `${widthClass} ${widthClass.replace("w-","w-edge-")}`
  }
  return ''
}
const ContentWrapMarginClasses = (isVertical: boolean, isLeftImage: boolean) => {
  // let marginClasses = ""
  // if (isVertical) {
  //   marginClasses = `mx-auto`
  // } else if (!isContentToEdge) {
  //   marginClasses = isLeftImage ? `mr-auto` : `ml-auto`
  // }
  if (isVertical) {
    return `mx-auto`
  } else if (isLeftImage) {
    return `mr-auto`
  }
  return `ml-auto`
}
const contentWrapPaddingClasses = (padding: string, alignment: string) => {
  const flexDirection = getWordWith(alignment, "flex-")
  const opposingPadding = {
    'flex-col': 'pt-',
    'flex-col-reverse': 'pb-',
    'flex-row': 'pl-',
    'flex-row-reverse': 'pr-',
  }
  const paddingToRemove = getWordWith(padding, opposingPadding[flexDirection])

  const edgePadding = padding.replace(paddingToRemove, '')
  const gapValue = getWordWith(alignment, "gap-").replace('gap-', '')
  const gapPadding = `${opposingPadding[flexDirection]}${parseInt(gapValue)/2}` 
  return `${edgePadding} ${gapPadding}`
}
const contentWrapClasses = (style) => {
  const widthClass: string = getWordWith(style.featureContent, "w-")
  const isLeftImage: boolean = hasWord(style.alignment, "flex-row")
  const isVertical: boolean = hasWord(style.alignment, "flex-col flex-col-reverse")
  const isContentToEdge: boolean  = false
  const widthClasses = ContentWrapWidthClasses(widthClass, isVertical, isContentToEdge)
  const marginClasses = ContentWrapMarginClasses(isVertical, isLeftImage)
  const paddingClasses = contentWrapPaddingClasses(style.padding, style.alignment)
  return `${style.alignment} sm:w-full ${widthClasses} ${marginClasses} ${paddingClasses}`
}

// CONTENT
const contentWidth = (style) => {
  const widthClass: string = getWordWith(style.featureContent, "w-")
  const isVertical: boolean = hasWord(style.alignment, "flex-col flex-col-reverse")
  const widthClasses = isVertical ? `${widthClass} sm:w-full` : "w-full"

  return `${widthClasses}`
}
const contentMargin = (style) => {
  const alignmentClass: string = getWordWith(style.alignment, "-vertical")
  const marginToAlignment = {
    "items-start-vertical": "mr-auto",
    "items-center-vertical": "mx-auto",
    "items-end-vertical": "ml-auto",
  }
  
  return marginToAlignment[alignmentClass] || ""
}

// Image Wrap
const imageWrapWidthClasses = (contentWidthClass: string, isVertical: boolean, isImageToEdge: boolean) => {
  const inverseWidths = {
    "w-1/5": "w-4/5",
    "w-1/4": "w-3/4",
    "w-1/3": "w-2/3",
    "w-1/2": "w-1/2",
    "w-2/3": "w-1/3",
    "w-3/4": "w-1/4",
    "w-4/5": "w-1/5",
    "w-full": "w-0",
  }
  const widthClass = inverseWidths[contentWidthClass] || "";

  if (isVertical && isImageToEdge) {
    return `w-full`
  } else if (isVertical && !isImageToEdge) {
    return `w-full max-w-site-full`
  } else if (!isImageToEdge) {
    return `${widthClass} ${widthClass.replace("w-","max-w-site-")}`
  } else if (isImageToEdge) {
    return `${widthClass} ${widthClass.replace("w-","w-edge-")}`
  }
  return ''
}
const imageWrapMarginClasses = (isLeftImage: boolean, isVertical: boolean, isImageToEdge: boolean) => {
  if (isVertical) {
    return `mx-auto`
  } else if (!isImageToEdge) {
    return isLeftImage ? `ml-auto` : `mr-auto`
  }
  return ''
}
const imageWrapPaddingClasses = (padding: string, alignment: string) => {
  const flexDirection = getWordWith(alignment, "flex-")
  const opposingPadding = {
    'flex-col': 'pb-',
    'flex-col-reverse': 'pt-',
    'flex-row': 'pr-',
    'flex-row-reverse': 'pl-',
  }
  const paddingToRemove = getWordWith(padding, opposingPadding[flexDirection])
  const edgePadding = padding.replace(paddingToRemove, '')
  const gapValue = getWordWith(alignment, "gap-").replace('gap-', '')
  const gapPadding = `${opposingPadding[flexDirection]}${parseInt(gapValue)/2}` 
  return `${edgePadding} ${gapPadding}`
}
const imageWrapClasses = (style) => {
  const contentWidthClass: string = getWordWith(style.featureContent, "w-")
  const isVertical: boolean = hasWord(style.alignment, "flex-col flex-col-reverse")
  const isLeftImage:boolean = hasWord(style.alignment, "flex-row")
  const isImageToEdge: boolean = false
  // const imageToEdge: boolean = data.style?.featureImage?.split(" ").find(item => item === "to-edge")
  const widthClasses = imageWrapWidthClasses(contentWidthClass, isVertical, isImageToEdge)
  const marginClasses = imageWrapMarginClasses(isLeftImage, isVertical, isImageToEdge)
  const paddingClasses = imageWrapPaddingClasses(style.padding, style.alignment)

  return `relative h-full ${widthClasses} ${marginClasses} ${paddingClasses}`
}

// IMAGE
const imgClasses = (style) => {
  const margin: string = getWordWith(style.featureImage, "m")
  return `${margin}`;
};
const imgStyles = (style) => {
  const imageWidth = getWordWith(style.featureImage, "wpx-")?.replace("wpx-", "")
  const imageHeight = getWordWith(style.featureImage, "hpx-")?.replace("hpx-", "")
  return {
    width: imageWidth ? `${imageWidth}px` : 'auto',
    height: imageHeight ? `${imageHeight}px` : 'auto'
  }
}

export const Feature = ({ data, parentField = "" }) => {
  const style = data.style
  const minHeight = getWordWith(style.featureContent, "min-h-")
  const textAlign = getWordWith(style.featureContent, "text-")
  const gapClass = getWordWith(style.alignment, "gap-")
  const alignmentNoGapClasses = style.alignment.replace(gapClass, '')
  
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex ${alignmentNoGapClasses} ${minHeight}`}>
        <div className={`${imageWrapClasses(style)}`}>
          {data.image?.src && (
            <img
              className={`${imgClasses(style)}`}
              style={imgStyles(style)}
              alt={data.image?.alt}
              src={data.image?.src}
              data-tinafield={`${parentField}.image`}
            />
          )}
        </div>
        <div className={`${contentWrapClasses(style)}`}>
          <Content
            data = {data}
            styles = {style}
            alignment = {textAlign}            
            width = {contentWidth(style)}
            parentField = {parentField}
            className = {contentMargin(style)}
          />
        </div>
      </div>
    </Section>
  );
};
