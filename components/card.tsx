import { FaIcon } from './icons/fa-icon';
import { Content } from './content';

const cardImgStyles = (cardStyle, isMobile:boolean) => {
  const classes: [string] = cardStyle?.image?.split(' ') || []
  let imageWidth
  let imageHeight
  if (isMobile) {
    imageWidth = classes.find(item => item.includes('sm:w-'))?.replace(`sm:w-`, '')
    imageHeight = classes.find(item => item.includes('sm:h-'))?.replace(`sm:w-`, '')
  } else {
    imageWidth = classes.find(item => item.includes('w-'))?.replace(`w-`, '')
    imageHeight = classes.find(item => item.includes('h-'))?.replace(`h-`, '')
  }

  const styles = {}
  if (imageWidth) {
    styles['width'] = `${imageWidth}`
  }
  if (imageHeight) {
    styles['height'] = `${imageHeight}`
  }
  return styles
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
    <div className={`relative w-full flex ${cardstyle?.alignment} ${cardstyle?.equalHeights === true && "min-h-full"} ${cardstyle?.borderStyles}`}>
      <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
      {data.link && !data.buttonLabel && (
        <a className={`absolute inset-0 -z-20`} href={data.link} />
      )}
      {data.image?.src && (
        <>
          <div style={cardImgStyles(cardstyle, false)} className={`max-w-full max-h-full`}>
            <div className={`${cardstyle?.imagePadding} w-full h-full sm:hidden`}>
              <img
                className={`sm:hidden w-full h-full ${cardImgClasses(cardstyle, false)}`}
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
      <div className={`flex-1 flex flex-col overflow-x-hidden w-full ${cardstyle.buttonLayout} ${cardstyle?.contentPadding}`} >
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
