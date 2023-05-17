import React from "react";
import { lowerDash } from "../helpers/utilities"
import { Background } from "./background";

export const Section = ({
  children,
  background = {
    fillStyles: "",
    src: "",
    position: "center",
    ornaments: []
  },
  navigationLabel = "",
  className = "",
}) => {
  const sectionId = navigationLabel ? { id: lowerDash(navigationLabel) } : {}
  return (
    <section { ...sectionId } className={`relative ${className}`}>
      <Background background={background} />
      {children}
    </section>
  );
};
