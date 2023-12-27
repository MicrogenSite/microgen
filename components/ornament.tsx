import { useEffect, useState } from 'react';
import { Tween, ScrollTrigger } from 'react-gsap';

const alignmentTransform = {
  "center": "-translate-x-1/2 -translate-y-1/2",
  "top": "-translate-x-1/2",
  "right-top": "",
  "right": "-translate-y-1/2",
  "right-bottom": "",
  "bottom": "-translate-x-1/2",
  "left-bottom": "",
  "left": "-translate-y-1/2",
  "left-top": ""
};

const anchorPositions = {
  "center": "top-1/2 left-1/2 bottom-auto right-auto",
  "top": "top-0 left-1/2 bottom-auto right-auto",
  "right-top": "top-0 right-0 bottom-auto left-auto",
  "right": "top-1/2 right-0 bottom-auto left-auto",
  "right-bottom": "bottom-0 right-0 top-auto left-auto",
  "bottom": "bottom-0 left-1/2 top-auto right-auto",
  "left-bottom": "left-0 bottom-0 top-auto right-auto",
  "left": "top-1/2 left-0 bottom-auto right-auto",
  "left-top": "top-0 left-0 bottom-auto right-auto",
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

const ornamentControlClasses = (ornamentControl) => {
  const classes = ornamentControl?.split(" ") || [];
  const desktop = classes.find((item) => item.includes("object-"))?.replace("object-", "") || "";
  const mobile = classes.find((item) => item.includes("sm:object-"))?.replace("sm:object-", "") || "";
  const desktopAlignment = anchorPositions[desktop]
  const mobileAlignment = anchorPositions[mobile]?.split(" ").map((item) => `sm:${item}`).join(" ") || "";

  return `${desktopAlignment} ${mobileAlignment}`
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
      className={`max-w-none transform ${alignmentTransform[ornamentControl.alignment]}`}
      src={props.src}
      style={{
        width: `${ornamentControl.width}`,
        height: `${ornamentControl.height}`,
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
      className={`max-w-none transform ${ornamentControlMobile.alignment !== "" ? alignmentTransform[ornamentControlMobile.alignment] : alignmentTransform[ornamentControl.alignment]}`}
      src={props.src}
      style={{
        width: `${ornamentControlMobile.width || ornamentControl.width}`,
        height: `${ornamentControlMobile.height || ornamentControl.height}`,
      }}
      width={ornamentControlMobile.width || ornamentControl.width}
      height={ornamentControlMobile.height || ornamentControl.height}
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
  }, [props.transform, props.scrollOffset, props.duration])
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
            <div className={`absolute sm:hidden ${ornamentControlClasses(props.ornamentControl)}`} style={wrapStyle}>
            {image}
          </div>
          </Tween>
        </ScrollTrigger>
        {!hasMobile && (
          <div className={`absolute hidden sm:block ${ornamentControlClasses(props.ornamentControl)}`} style={wrapStyle} >
            {image}
          </div>
        )}
        {hasMobile && (
          <div className={`absolute hidden sm:block ${ornamentControlClasses(props.ornamentControl)}`} style={wrapStyleMobile} >
            {imageMobile}
          </div>
        )}
      </>
    )
  } else {
    return (
      <>
        <div className={`sm:hidden absolute ${ornamentControlClasses(props.ornamentControl)}`} style={wrapStyle} >
          {image}
        </div>
        <div className={`hidden sm:block absolute ${ornamentControlClasses(props.ornamentControl)}`} style={wrapStyleMobile} >
          {imageMobile}
        </div>
      </>
    )
  }
};
