import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card } from '../card';
import { Section } from "../section";

export const Carousel = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: true,
  })
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

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`${width} ${padding} ${style.minHeight}`}>
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
        </div>
      </div>
    </Section>
  );
};
