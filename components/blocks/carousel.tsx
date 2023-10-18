import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaIcon } from "../icons/fa-icon";
import { Card } from '../card';
import { Section } from "../section";

const slidesOffScreen = (slideWidth, totalSlides) => {
  const stringToCount = {
    "w-full": 1,
    "w-2/3": 1.5,
    "w-1/2": 2,
    "w-2/5": 2.5,
    "w-1/3": 3,
    "w-1/4": 4,
    "w-1/5": 5,
    "w-1/6": 6,
  }
  const slideCount = stringToCount[slideWidth] || 1
  return totalSlides > slideCount
}

export const Carousel = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  })
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const style = data.style || {}
  const paddingY = style.padding.split(' ').filter(word => word.includes('pt') || word.includes('pb')).join(' ');
  const paddingX = style.padding.split(' ').filter(word => word.includes('pl') || word.includes('pr')).join(' ');
  const width = style.fullWidth ? "" : "max-w-desktop-full mx-auto"
  const canScroll = slidesOffScreen(style.slides, data.items?.length)
  const gap = (canScroll) ? `space-x-${style.gap} px-${style.gap}` : `gap-${style.gap}`
  
  useEffect(() => {
    if (emblaApi) emblaApi.reInit({
      loop: style.loop,
      align: style.alignment,
      slidesToScroll: Number(style.slidesToScroll),
    })
  }, [emblaApi, style])

  useEffect(() => {
    if (emblaApi) {
      setIsPrevVisible(emblaApi.canScrollPrev());
      setIsNextVisible(emblaApi.canScrollNext());
      emblaApi.on('select', () => {
        setIsPrevVisible(emblaApi.canScrollPrev());
        setIsNextVisible(emblaApi.canScrollNext());
      });
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={paddingY}>
        <div className={`relative ${width} ${paddingX} ${style.minHeight}`}>
          <div className={`embla ${style.overflowHidden && "overflow-hidden"}`} ref={emblaRef}>
            <div className={`embla__container flex -ml-${style.gap}`}>
              {data.items &&
                data.items.map(function (block, index) {
                  return <div className={`embla__slide pl-${style.gap} ${style.slides} ${canScroll && "flex-grow-0 flex-shrink-0"}`} key={index}>
                    <Card data={block} cardstyle={{ ...data.cardStyle, equalHeights: style.equalHeights }} />
                  </div>;
                })
              }
            </div>
            {style.showArrows && canScroll && (
              <>
                {isPrevVisible && (
                  <a className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer left-${style.arrowInset || '0'} btn-${style.arrowButtonStyle || 'primary'}`} onClick={scrollPrev}>
                    <FaIcon icon="chevron-left-solid" />
                  </a>
                )}
                {isNextVisible && (
                  <a className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer right-${style.arrowInset || '0'} btn-${style.arrowButtonStyle || 'primary'}`} onClick={scrollNext}>
                    <FaIcon icon="chevron-right-solid" />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
