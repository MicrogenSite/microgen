import * as React from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { Section } from "../section";

export const Carousel = ({ data }) => {
  const [emblaRef] = useEmblaCarousel()
  const padding = data.style?.padding
  const width = data.style?.fullWidth ? "" : "max-w-desktop-full mx-auto"

  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`${width} ${padding} ${data.style?.minHeight}`}>
        <div className="embla overflow-hidden text-white" ref={emblaRef}>
          <div className="embla__container flex">
            <div className="embla__slide flex-none w-full min-w-0 border border-white">Slide 1</div>
            <div className="embla__slide flex-none w-full min-w-0 border border-white">Slide 2</div>
            <div className="embla__slide flex-none w-full min-w-0 border border-white">Slide 3</div>
          </div>
        </div>
      </div>
    </Section>
  );
};
