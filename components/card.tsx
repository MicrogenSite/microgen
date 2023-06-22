import { FaIcon } from './icons/fa-icon';
import { Content } from './content';

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

export const Card = ({ data, cardstyle }) => {
  return (    
    <div className={`relative w-full flex ${cardstyle?.alignment} ${cardstyle?.borderStyles}`}>
      <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
      {data.link && !data.buttonLabel && (
        <a className={`absolute inset-0 -z-20`} href={data.link} />
      )}
      {data.image?.src && (
        <>
          <div className={`${cardstyle?.imagePadding} sm:hidden`}>
            <div style={cardImgStyles(cardstyle, false)}>
              <img
                className={`sm:hidden ${cardImgClasses(cardstyle, false)}`}
                style={cardImgStyles(cardstyle, false)}
                alt={data.image.alt || data.headline}
                src={data.image.src}
              />
            </div>
          </div>
          <div className={`${cardstyle?.imagePadding} hidden sm:block`}>
            <div style={cardImgStyles(cardstyle, true)}>
              <img
                className={`hidden sm:block  ${cardImgClasses(cardstyle, true)}`}
                style={cardImgStyles(cardstyle, true)}
                alt={data.image.alt || data.headline}
                src={data.image.src}
              />
            </div>
          </div>
        </>
      )}
      <div className={`flex-1 h-full flex flex-col ${cardstyle.buttonLayout} ${cardstyle?.contentPadding}`} >
        <Content
          data = {data}
          styles = {cardstyle}
          alignment = {``}
          buttonsLayout = ""
          width = "w-full"
          parentField = ""
          className = ""
        />
        <div>
          {data.link && data.buttonLabel && (
            <a href={data.link} className={`btn-${cardstyle?.buttonType} ${cardstyle?.buttonWidth}`}>
              <div className="flex items-center gap-2">
                <span>{ data.buttonLabel }</span>
                { cardstyle?.buttonIcon && (
                  <FaIcon icon={cardstyle.buttonIcon} />
                )}
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
