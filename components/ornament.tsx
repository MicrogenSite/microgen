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

const transformToObject = (transform = "", mobile = false) => {
  const prefix = mobile ? "sm:" : ""
  const x = getValue(transform, `${prefix}translate-x-`)
  const y = getValue(transform, `${prefix}translate-y-`)
  const opacity = getValue(transform, `${prefix}opacity-`)
  const scale = getValue(transform, `${prefix}scale-`)
  const rotate = getValue(transform, `${prefix}rotation-`)
  return {
    x: x || 0,
    y: y || 0,
    opacity: opacity ? Number(opacity)/100 : 1,
    scale: scale ? Number(scale)/100 : 1,
    rotate: rotate,
  }
}

const ornamentControlToObject = (ornamentControl = "", mobile = false) => {
  const prefix = mobile ? "sm:" : ""
  const width = getValue(ornamentControl, `${prefix}w-`)
  const height = getValue(ornamentControl, `${prefix}h-`)
  const alignment = getValue(ornamentControl, `${prefix}object-`)
  return {
    width: width || "",
    height: height || "",
    alignment: alignment || "",
  }

}

export const Ornament = ({
  props
}) => {
  const [refeshing, setRefreshing] = useState(false);
  const hasMobile = props.transform?.includes("sm:") || props.ornamentControl?.includes("sm:");

  // Desktop
  const ornamentControl = ornamentControlToObject(props.ornamentControl || "");
  const transform = transformToObject(props.transform || "");
  const transformOut = transformToObject(props.endTransform || "");
  const image = (
    <img
      className='absolute'
      src={props.src}
      style={{
        width: `${ornamentControl.width}`,
        height: `${ornamentControl.height}`,
        transform: `translate(${alignmentTransform[ornamentControl.alignment]})`,
        maxWidth: "none"
      }}
      width={ornamentControl.width}
      height={ornamentControl.height}
    />
  )
  const wrapStyle = {
    transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale}) rotate(${transform.rotate || 0}deg)`,
    opacity: `${transform.opacity}`,
  };

  // Mobile
  const ornamentControlMobile = ornamentControlToObject(props.ornamentControl || "", true);
  const transformMobile = transformToObject(props.transform || "", true);
  const imageMobile = (
    <img
      className='absolute'
      src={props.src}
      style={{
        width: `${ornamentControlMobile.width}`,
        height: `${ornamentControlMobile.height}`,
        transform: `translate(${alignmentTransform[ornamentControlMobile.alignment]})`,
        maxWidth: "none"
      }}
      width={ornamentControlMobile.width}
      height={ornamentControlMobile.height}
    />
  )
  const wrapStyleMobile = {
    transform: `translate(${transformMobile.x}px, ${transformMobile.y}px) scale(${transformMobile.scale}) rotate(${transformMobile.rotate || 0}deg)`,
    opacity: `${transformMobile.opacity}`,
  };

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
      <>
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
          <div className={`absolute sm:hidden ${anchorPosition[ornamentControl.alignment]}`} style={wrapStyle}>
            {image}
          </div>
          </Tween>
        </ScrollTrigger>
        {!hasMobile && (
          <div className={`absolute hidden sm:block ${anchorPosition[ornamentControl.alignment]}`} style={wrapStyle} >
            {image}
          </div>
        )}
        {hasMobile && (
          <div className={`absolute hidden sm:block ${anchorPosition[ornamentControlMobile.alignment]}`} style={wrapStyleMobile} >
            {imageMobile}
          </div>
        )}
      </>
    )
  } else {
    return (
      <>
        <div className={`absolute ${hasMobile ? `sm:hidden` : ''} ${anchorPosition[ornamentControl.alignment]}`} style={wrapStyle} >
          {image}
        </div>
        {hasMobile && (    
          <div className={`absolute hidden sm:block ${anchorPosition[ornamentControlMobile.alignment]}`} style={wrapStyleMobile} >
            {imageMobile}
          </div>
        )}
      </>
    )
  }
};
