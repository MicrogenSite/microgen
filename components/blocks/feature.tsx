import * as React from 'react';
import { Section } from '../section';
import { Content } from '../content';
import { hasWord, getWordWith } from '../../helpers/utilities';

// Content
const ContentWrapWidthClasses = (widthClass: string, isVertical: boolean, isContentToEdge: boolean) => {
  if (isVertical && isContentToEdge) {
    return `w-full`
  } else if (isVertical && !isContentToEdge) {
    return `w-full max-w-site-full`
  } else if (!isContentToEdge) {
    return `${widthClass} ${widthClass.replace('w-','max-w-site-')}`
  } else if (isContentToEdge) {
    return `${widthClass} ${widthClass.replace('w-','w-edge-')}`
  }
  return ''
}
const ContentWrapMarginClasses = (isVertical: boolean, isLeftImage: boolean) => {
  if (isVertical) {
    return `mx-auto`
  } else if (isLeftImage) {
    return `mr-auto`
  }
  return `ml-auto`
}
const contentWrapPaddingClasses = (padding: string, alignment: string, isMobile: boolean = false) => {
  const mobilePrefix:string = isMobile ? 'sm:' : ''
  const desktopPadding:string = padding.split(' ').filter(item => !item.includes('sm:')).join(' ')
  const mobilePadding:string = padding.split(' ').filter(item => item.includes('sm:')).join(' ')
  const filteredPadding = isMobile ? mobilePadding : desktopPadding
  const flexDirection = getWordWith(alignment, `${mobilePrefix}flex-`)
  const opposingPadding = {
    'flex-col': `pt-`,
    'flex-col-reverse': `pb-`,
    'flex-row': `pl-`,
    'flex-row-reverse': `pr-`,
    'sm:flex-col': `sm:pt-`,
    'sm:flex-col-reverse': `sm:pb-`,
    'sm:flex-row': `sm:pl-`,
    'sm:flex-row-reverse': `sm:pr-`,
  }
  const paddingToRemove = getWordWith(filteredPadding, opposingPadding[flexDirection])
  const edgePadding = filteredPadding.replace(paddingToRemove, '')
  const gapValue = getWordWith(alignment, `${mobilePrefix}gap-`).replace(`${mobilePrefix}gap-`, '') || '0'
  const gapPadding = `${opposingPadding[flexDirection]}${parseInt(gapValue)/2}` 
  return `${edgePadding} ${mobilePrefix}gap-- ${gapPadding}`
}
const contentWrapClasses = (style) => {
  const widthClass: string = getWordWith(style.featureContent, 'w-')
  const isLeftImage: boolean = hasWord(style.alignment, 'flex-row')
  const isVertical: boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isContentToEdge: boolean  = false
  const marginClasses = ContentWrapMarginClasses(isVertical, isLeftImage)
  const desktopWidthClasses = ContentWrapWidthClasses(widthClass, isVertical, isContentToEdge)
  const mobileWidthClasses = ContentWrapWidthClasses(widthClass, isVertical, isContentToEdge)
  const desktopPaddingClasses = contentWrapPaddingClasses(style.padding, style.alignment, false)
  const mobilePaddingClasses = contentWrapPaddingClasses(style.padding, style.alignment, true)
  return `${style.alignment} sm:w-full ${desktopWidthClasses} ${marginClasses} ${desktopPaddingClasses} ${mobileWidthClasses} ${mobilePaddingClasses}`
}
const contentWidth = (style) => {
  const widthClass: string = getWordWith(style.featureContent, 'w-')
  const isVertical: boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const widthClasses = isVertical ? `${widthClass} sm:w-full` : 'w-full'
  return `${widthClasses}`
}
const contentMargin = (style) => {
  const alignmentClass: string = getWordWith(style.alignment, '-vertical')
  const marginToAlignment = {
    'items-start-vertical': 'mr-auto',
    'items-center-vertical': 'mx-auto',
    'items-end-vertical': 'ml-auto',
  }
  return marginToAlignment[alignmentClass] || ''
}

// Image
const imageWrapWidthClasses = (contentWidthClass: string, isVertical: boolean, isImageToEdge: boolean, isMobile: boolean) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  const inverseWidths = {
    'w-1/5': 'w-4/5',
    'w-1/4': 'w-3/4',
    'w-1/3': 'w-2/3',
    'w-1/2': 'w-1/2',
    'w-2/3': 'w-1/3',
    'w-3/4': 'w-1/4',
    'w-4/5': 'w-1/5',
    'w-full': 'w-0',
  }
  const widthClass = inverseWidths[isMobile ? contentWidthClass.replace('sm:', '') : contentWidthClass] || ''

  if (isVertical && isImageToEdge) {
    return `${mobilePrefix}w-full`
  } else if (isVertical && !isImageToEdge) {
    return `${mobilePrefix}w-full ${mobilePrefix}max-w-site-full`
  } else if (!isImageToEdge) {
    return `${mobilePrefix}${widthClass} ${mobilePrefix}${widthClass.replace('w-','max-w-site-')}`
  } else if (isImageToEdge) {
    return `${mobilePrefix}${widthClass} ${mobilePrefix}${widthClass.replace('w-','w-edge-')}`
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
const imageWrapPaddingClasses = (padding: string, alignment: string, isMobile:boolean = false) => {
  const mobilePrefix:string = isMobile ? 'sm:' : ''
  const desktopPadding:string = padding.split(' ').filter(item => !item.includes('sm:')).join(' ')
  const mobilePadding:string = padding.split(' ').filter(item => item.includes('sm:')).join(' ')
  const filteredPadding = isMobile ? mobilePadding : desktopPadding
  const flexDirection = getWordWith(alignment, `${mobilePrefix}flex-`)
  const opposingPadding = {
    'flex-col': `pb-`,
    'flex-col-reverse': `pt-`,
    'flex-row': `pr-`,
    'flex-row-reverse': `pl-`,
    'sm:flex-col': `sm:pb-`,
    'sm:flex-col-reverse': `sm:pt-`,
    'sm:flex-row': `sm:pr-`,
    'sm:flex-row-reverse': `sm:pl-`,
  }
  const paddingToRemove = getWordWith(filteredPadding, opposingPadding[flexDirection])
  const edgePadding = filteredPadding.replace(paddingToRemove, '')
  const gapValue = getWordWith(alignment, `${mobilePrefix}gap-`).replace(`${mobilePrefix}gap-`, '') || '0'
  const gapPadding = `${opposingPadding[flexDirection]}${parseInt(gapValue)/2}` 
  return `${edgePadding} ${gapPadding}`
}
const imageWrapClasses = (style) => {
  const contentWidthClass:string = getWordWith(style.featureContent, 'w-')
  const mobileContentWidthClass:string = getWordWith(style.featureContent, 'sm:w-')
  
  const isVertical:boolean = hasWord(style.alignment, 'flex-col flex-col-reverse')
  const isVerticalMobile:boolean = hasWord(style.alignment, 'sm:flex-col sm:flex-col-reverse')

  const isLeftImage:boolean = hasWord(style.alignment, 'flex-row')
  const isImageToEdge: boolean = false
  const isImageToEdgeMobile: boolean = false

  const widthClasses = imageWrapWidthClasses(contentWidthClass, isVertical, isImageToEdge, false)
  const mobileWidthClasses = imageWrapWidthClasses(mobileContentWidthClass, isVerticalMobile, isImageToEdgeMobile, true)

  const marginClasses = imageWrapMarginClasses(isLeftImage, isVertical, isImageToEdge)
  const desktopPaddingClasses = imageWrapPaddingClasses(style.padding, style.alignment, false)
  const mobilePaddingClasses = imageWrapPaddingClasses(style.padding, style.alignment, true)
  return `relative h-full ${widthClasses} ${marginClasses} ${desktopPaddingClasses} ${mobileWidthClasses} ${mobilePaddingClasses}`
}
const imgClasses = (style, isMobile:boolean) => {
  const classes = style.featureImage.split(' ').filter(item => !item.includes('px'))
  const mobile = classes.filter(item => item.includes('sm')).join(' ')
  const desktop = classes.filter(item => !item.includes('sm')).join(' ')
  return isMobile ? mobile : desktop
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
  const minHeight = getWordWith(style.featureContent, 'min-h-')
  const textAlign = getWordWith(style.featureContent, 'text-')
  const gapClass = getWordWith(style.alignment, 'gap-') || ''
  const mobileGapClass = getWordWith(style.alignment, 'sm:gap-') || ''
  const alignmentNoGapClasses = style.alignment.replace(gapClass, '').replace(mobileGapClass, '')
  console.log(alignmentNoGapClasses)

  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
        <div className={`relative flex ${alignmentNoGapClasses} ${minHeight}`}>
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
