import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

export const Banner = ({ data, parentField = "" }) => {
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`max-w-desktop-full mx-auto ${data?.style?.padding} ${data.style?.minHeight} ${data.style?.textAlignment}`}>
        <div className={`mx-auto ${data.style?.width === "narrow" ? "w-2/3 sm:w-full" : "w-full"}`}>
          {data.image && (
            <img
              className="mt-12 sm:mt-6"
              alt={data.image.alt}
              src={data.image.src}
            />
          )}
          <Content
            data = {data}
            styles = {data.style}
            alignment = {data.style?.textAlignment}            
            width = {data.style?.contentWidth}
            parentField = {parentField}
          />
        </div>
      </div>
    </Section>
  );
};
