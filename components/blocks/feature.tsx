import * as React from 'react';
import { Section } from '../section';
import { Content } from '../content';
import { hasWord, getWordWith } from '../../helpers/utilities';

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
  let imageBorder
  if (isMobile) {
    imageWidth = classes.find(item => item.substring(0,7) === 'sm:wpx-')?.replace(`sm:wpx-`, '')
    imageHeight = classes.find(item => item.substring(0,7) === 'sm:hpx-')?.replace(`sm:hpx-`, '')
    imageBorder = classes.find(item => item.substring(0,11) === 'sm:rounded-')?.replace(`sm:rounded-`, '')
  } else {
    imageWidth = classes.find(item => item.substring(0,4) === 'wpx-')?.replace(`wpx-`, '')
    imageHeight = classes.find(item => item.substring(0,4) === 'hpx-')?.replace(`hpx-`, '')
    imageBorder = classes.find(item => item.substring(0,8) === 'rounded-')?.replace(`rounded-`, '')
  }
  return {
    width: imageWidth ? `${imageWidth}px` : 'auto',
    height: imageHeight ? `${imageHeight}px` : 'auto',
    border: imageBorder ? `${imageBorder}` : 'auto',
  }
}


export const Feature = ({ data, parentField = '' }) => {
  const style = data.style
  const textAlignMobile = getWordWith(style.featureContent, 'sm:text-')
  const textAlign = getWordWith(style.featureContent, 'text-')
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`relative flex w-full max-w-site-full mx-auto rounded-none ${style?.padding} ${style?.border} ${style?.alignment}`}>
        <div className={`${imageWrapClasses(style)}`}>
          {data.image?.src && !data.image?.src.includes(".mp4") && (
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
          {data.image?.src && data.image?.src.includes(".mp4") && (
            <div className={`${imgClasses(style, false)}`}>
              <video autoPlay loop muted playsInline className="object-cover w-full h-full">
                <source src={data.image.src} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
        <div className={`flex-none ${style.featureContent}`}>
          <Content
            data = {data}
            styles = {style}
            alignment = {`${textAlign} ${textAlignMobile}`}
            buttonsLayout = {style.buttonsLayout}
            width = "w-full"
            parentField = {parentField}
            className = ""
          />
        </div>
      </div>
    </Section>
  );
};
