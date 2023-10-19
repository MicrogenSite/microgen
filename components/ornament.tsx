import { Tween, ScrollTrigger } from 'react-gsap';

const anchorPosition = {
  "center": "top-1/2 left-1/2",
  "top": "top-0 left-1/2",
  "top-right": "top-0 right-0",
  "right": "top-1/2 right-0",
  "bottom-right": "bottom-0 right-0",
  "bottom": "bottom-0 left-1/2",
  "bottom-left": "left-0 bottom-0",
  "left": "top-1/2 left-0",
  "top-left": "top-0 left-0",
};

const alignmentTransform = {
  "center": "-50%,-50%",
  "top": "-50%,0",
  "top-right": "-100%,0",
  "right": "-100%,-50%",
  "bottom-right": "-100%,-100%",
  "bottom": "-50%,-100%",
  "bottom-left": "0,-100%",
  "left": "0,-50%",
  "top-left": "0,0"
};

export const Ornament = ({
  props
}) => {
  const wrapStyle = {
    transform: `translate(${props.xOffset || 0}px,${props.yOffset || 0}px)`,
  };

  const imgStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    transform: `translate(${alignmentTransform[props.alignment]})`,
    maxWidth: "none"
  };

  const image = (
    <img
      className='absolute'
      src={props.src}
      style={imgStyle}
      width={props.width}
      height={props.height}
    />
  )

  if (props.animationType === "scroll") {
    return (
      <div className={`absolute ${anchorPosition[props.alignment]}`} style={wrapStyle} >
        <ScrollTrigger
          start={`${Number(props.scrollOffset) || 0}px bottom`}
          end={`${Number(props.scrollOffset) + Number(props.duration) || 0}px bottom`}
          scrub={0.5}
        >
          <Tween
            from={{
              x: props.startOffsetX || 0,
              y: props.startOffsetY || 0,
              opacity: props.startOpacity || 1,
              scale: props.startScale || 1,
              rotation: props.startRotation || 0,
            }}
            to={{
              x: props.endOffsetX || 0,
              y: props.endOffsetY || 0,
              opacity: props.endOpacity || 1,
              scale: props.endScale || 1,
              rotation: props.endRotation || 0,
            }}
          >
            {image}
          </Tween>
        </ScrollTrigger>
      </div>
    )
  } else {
    return (
      <div className={`absolute ${anchorPosition[props.alignment]}`} style={wrapStyle} >
        {image}
      </div>
    )
  }
};
