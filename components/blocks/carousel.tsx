import { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaIcon } from "../icons/fa-icon";
import { Card } from '../card';
import { Section } from "../section";

export const Carousel = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  })
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);
  const style = data.style || {}
  const padding = style.padding
  const width = style.fullWidth ? "" : "max-w-desktop-full mx-auto"
  
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
      <div className={`relative ${width} ${padding} ${style.minHeight}`}>
        <div className={`embla ${style.overflowHidden && "overflow-hidden"}`} ref={emblaRef}>
          <div className="embla__container flex">
            {data.items &&
              data.items.map(function (block, index) {
                return <div className={`embla__slide min-w-0 flex-grow-0 flex-shrink-0 ${style.slides} ${(index !=0 || style.loop) && style.gap}`} key={index}>
                  <Card data={block} cardstyle={{ ...data.cardStyle, equalHeights: style.equalHeights }} />
                </div>;
              })
            }
          </div>
          {style.showArrows && (
            <>
              {isPrevVisible && (
                <a className={`absolute top-1/2 transform -translate-y-1/2 left-${style.arrowInset || '0'} btn-${style.arrowButtonStyle || 'primary'}`} onClick={scrollPrev}>
                  <FaIcon icon="chevron-left-solid" />
                </a>
              )}
              {isNextVisible && (
                <a className={`absolute top-1/2 transform -translate-y-1/2 right-${style.arrowInset || '0'} btn-${style.arrowButtonStyle || 'primary'}`} onClick={scrollNext}>
                  <FaIcon icon="chevron-right-solid" />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </Section>
  );
};
