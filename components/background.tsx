import React from "react";

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

export const Background = ({
  background = {
    style: "",
    fillStyles: "",
    wrapFillStyles: "",
    src: "",
    position: "",
    ornaments: []
  },
}) => {
  return (
    <>
      <div className={`background absolute inset-0 -z-2 ${background?.fillStyles}`}></div>
      {background?.wrapFillStyles !== "" && (
        <div className={`background absolute left-1/2 transform -translate-x-1/2 max-w-desktop-full w-full h-full -z-2 ${background?.wrapFillStyles}`}></div>
      )}
      {background?.src && !background.src.includes(".mp4") && (
        <div className={`absolute inset-0 -z-2 w-full h-full ${background.style} ${background.position}`} style={{ backgroundImage: `url(${background.src.replace(' ', '%20')})` }}></div>
      )}
      {background?.src && background.src.includes(".mp4") && (
        <div className="absolute inset-0 -z-2">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={background.src} type="video/mp4" />
          </video>
        </div>
      )}
      {background?.ornaments?.length > 0 &&
        <div className="ornaments absolute inset-0 -z-1">
          {background.ornaments.map(function (ornament, index) {
            const wrapStyle = {
              transform: `translate(${ornament.xOffset || 0}px,${ornament.yOffset || 0}px)`,
            };
            const imgStyle = {
              width: `${ornament.width}px`,
              height: `${ornament.height}px`,
              transform: `translate(${alignmentTransform[ornament.alignment]})`,
              maxWidth: "none"
            };
            const element = (
              <div className={`absolute ${anchorPosition[ornament.alignment]}`} style={wrapStyle} key={index} >
                <img
                  className="absolute"
                  src={ornament.src}
                  style={imgStyle}
                  width={ornament.width}
                  height={ornament.height}
                />
              </div>
            )
            return element
          })}
        </div>
      }
    </>
  );
};
