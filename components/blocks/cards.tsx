import * as React from 'react';
import { hasWord, getWordWith } from '../../helpers/utilities';
import { Section } from '../section';
import { Content } from '../content';

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
    width: imageWidth ? `${imageWidth}px` : '100%',
    height: imageHeight ? `${imageHeight}px` : '100%'
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
        <>
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
        </>
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
          <div className={`grid ${data.cardStyle.grid}`}>
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
