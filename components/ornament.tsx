import { useEffect, useState } from 'react';
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

const getValue = (string, searchString) => {
  if (!string) return ""
  const array = string.split(" ");
  const foundItem = array.find((item) => item.includes(searchString));
  return foundItem ? foundItem.replace(searchString, "") : "";
};

const transformToObject = (transform = "") => {  
  const x = getValue(transform, "translate-x-")
  const y = getValue(transform, "translate-y-")
  const opacity = getValue(transform, "opacity-")
  const scale = getValue(transform, "scale-")
  const rotate = getValue(transform, "rotation-")
  return {
    x: x || 0,
    y: y || 0,
    opacity: opacity ? Number(opacity)/100 : 1,
    scale: scale ? Number(scale)/100 : 1,
    rotate: rotate,
  }
}

export const Ornament = ({
  props
}) => {
  const [refeshing, setRefreshing] = useState(false);
  const transform = transformToObject(props.transform || "");
  const transformOut = transformToObject(props.endTransform || "");
  const width = getValue(props.ornamentControl, "w-");
  const height = getValue(props.ornamentControl, "h-");
  const alignment = getValue(props.ornamentControl, "object-");
  const wrapStyle = {
    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale}) rotate(${transform.rotate || 0}deg)`,
    opacity: `${transform.opacity}`,
  };
  const imgStyle = {
    width: `${width}`,
    height: `${height}`,
    transform: `translate(${alignmentTransform[alignment]})`,
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

  /*
    This refresh functionality is a hack to get the ornament to
    animate correctly after updating settings.
  */
  useEffect(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 10)
  }, [props.transform])
  if (refeshing) return null

  if (props.animationType === "scroll") {
    return (    
      <ScrollTrigger
        start={`${Number(props.scrollOffset) || 0}px top`}
        end={`${Number(props.scrollOffset) + Number(props.duration) || 0}px top`}
        scrub={0.5}
      >
        <Tween
          from={{
            x: transform.x,
            y: transform.y,
            opacity: transform.opacity,
            scale: transform.scale,
            rotation: transform.rotate,
          }}
          to={{
            x: transformOut.x,
            y: transformOut.y,
            opacity: transformOut.opacity,
            scale: transformOut.scale,
            rotation: transformOut.rotate,
          }}
        >
        <div className={`absolute ${anchorPosition[alignment]}`} style={wrapStyle}>
          {image}
        </div>
        </Tween>
      </ScrollTrigger>
    )
  } else {
    return (
      <div className={`absolute ${anchorPosition[alignment]}`} style={wrapStyle} >
        {image}
      </div>
    )
  }
};
