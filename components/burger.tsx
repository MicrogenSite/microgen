import React from "react";

export const Burger = ({
  color = "white",
  isOpen = false
}) => {
  const colorClass = {
    white: "bg-white",
    grayLight: "bg-gray-200",
    gray: "bg-gray-500",
    grayDark: "bg-gray-800",
    black: "bg-black",
    primary: "bg-primary",
    accent1: "bg-accent1",
    accent2: "bg-accent2",
    accent3: "bg-accent3",
    accent4: "bg-accent4",
  };

  const lineClasses = "absolute z-10 left-1 w-6 h-px";

  const stylesTop = isOpen ? {
    width: "1.5rem",
    transform: "rotate(45deg)",
    top: "1rem",
    transition: "top .2s ease-out, transform .1s .2s ease-out, width .1s .2s ease-out"
  } : {
    top: ".6rem",
    transition: "top .1s .2s ease-in, transform .2s ease-out, width .2s ease-out"
  }

  const stylesMiddle = isOpen ? {
    opacity: "0"
  } : {
    top: "1rem",
    transition: "opacity .1s .01s"
  }

  const stylesBottom = isOpen ? {
    top: "1rem",
    transform: "rotate(-45deg)",
    width: "1.5rem",
    transition: "top .2s ease-out, transform .1s .2s ease-out, width .1s .2s ease-out"
  } : {
    top: "1.4rem",
    transition: "top .1s .2s ease-in, transform .2s ease-out, width .2s ease-out"
  }

  return (
    <div className="relative w-8 h-8">
      <div className={`${lineClasses} ${colorClass[color]}`} style={stylesTop}></div>
      <div className={`${lineClasses} ${colorClass[color]}`} style={stylesMiddle}></div>
      <div className={`${lineClasses} ${colorClass[color]}`} style={stylesBottom}></div>
    </div>
  );
};
