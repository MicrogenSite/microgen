import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

/* Return the string with any word containing the substring removed */
const removeSubstring = (value: string, substring: string) => {
  return value?.split(" ").filter(item => item.indexOf(substring) === -1).join(" ") || ""
}
/* Return the first word containing the substring */
const getSubstring = (value: string, substring: string) => {
  const match = value?.split(" ").find(item => item.includes(substring))
  return match
}

const contentContainerCss = (data) => {
  const isFlipped = data.style?.alignment?.split(' ').includes('flex-row')
  const toEdge = data.style?.featureContent?.split(" ").find(item => item === "to-edge")
  const margin = isFlipped ? "mr-auto" : "ml-auto"
  const padding = data.style?.padding
  const width = data.style?.featureContent?.split(" ").find(item => item.includes("w-"))
  const edgeWidths = {
    "w-1/5": "w-edge-20 lg:w-1/5",
    "w-1/4": "w-edge-25 lg:w-1/4",
    "w-1/3": "w-edge-33 lg:w-1/3",
    "w-1/2": "w-edge-50 lg:w-1/2",
    "w-2/3": "w-edge-66 lg:w-2/3",
    "w-3/4": "w-edge-75 lg:w-3/4",
    "w-4/5": "w-edge-80 lg:w-4/5",
  }
  const maxWidths = {
    "w-1/5": "max-w-lg-20",
    "w-1/4": "max-w-lg-25",
    "w-1/3": "max-w-lg-33",
    "w-1/2": "max-w-lg-50",
    "w-2/3": "max-w-lg-66",
    "w-3/4": "max-w-lg-75",
    "w-4/5": "max-w-lg-80",
  }
  const classes = toEdge ? `${padding} ${edgeWidths[width]}` : `${padding} ${width} ${maxWidths[width]} ${margin}`
  return `sm:w-full ${classes}`
}

const imageContainerCss = (data) => {
  const isFlipped = data.style?.alignment?.split(' ')?.includes('flex-row')
  const toEdge = data.style?.featureImage?.split(" ").find(item => item === "to-edge")
  const margin = isFlipped ? "ml-auto" : "mr-auto"
  const padding = data.style?.imagePadding
  const contentWidth = data.style?.featureContent?.split(" ").find(item => item.includes("w-"))
  const imageWidths = {
    "w-1/5": "w-4/5",
    "w-1/4": "w-3/4",
    "w-1/3": "w-2/3",
    "w-1/2": "w-1/2",
    "w-2/3": "w-1/3",
    "w-3/4": "w-1/4",
    "w-4/5": "w-1/5",
  }
  const edgeWidths = {
    "w-1/5": "w-edge-80 lg:w-4/5",
    "w-1/4": "w-edge-75 lg:w-3/4",
    "w-1/3": "w-edge-66 lg:w-2/3",
    "w-1/2": "w-edge-50 lg:w-1/2",
    "w-2/3": "w-edge-33 lg:w-1/3",
    "w-3/4": "w-edge-25 lg:w-3/4",
    "w-4/5": "w-edge-20 lg:w-1/5",
  }
  const maxWidths = {
    "w-1/5": "max-w-lg-80",
    "w-1/4": "max-w-lg-75",
    "w-1/3": "max-w-lg-66",
    "w-1/2": "max-w-lg-50",
    "w-2/3": "max-w-lg-33",
    "w-3/4": "max-w-lg-25",
    "w-4/5": "max-w-lg-20",
  }
  const stretchStates = ["object-cover", "object-contain"]
  const shouldStretch = stretchStates.some(item => data.style?.featureImage?.includes(item));
  const height = shouldStretch ? "self-stretch" : ""
  const widthClasses = toEdge ? `${edgeWidths[contentWidth]}` : `${imageWidths[contentWidth]} ${maxWidths[contentWidth]} ${margin}`
  return `sm:w-full relative ${height} ${padding} ${widthClasses}`
}

const imageCss = (data) => {
  const padding = data.style?.imagePadding
  const stretchStates = ["object-cover", "object-contain"]
  const shouldStretch = stretchStates.some(item => data.style?.featureImage?.includes(item));
  const height = shouldStretch ? "absolute inset-0 h-full" : ""
  const imageClasses = removeSubstring(data.style.featureImage, "to-edge")
  return `w-full ${height} ${padding} ${imageClasses}`;
};

export const Feature = ({ data, parentField = "" }) => {
  const minHeight = data.style?.featureContent?.split(" ").find(item => item.includes("min-h-"))
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`flex sm:flex-col ${data.style?.alignment} ${minHeight}`}>
        <div className={imageContainerCss(data)}>
          {data.image?.src && (
            <img
              className={`${imageCss(data)}`}
              alt={data.image?.alt}
              src={data.image?.src}
              data-tinafield={`${parentField}.image`}
            />
          )}
        </div>
        <div className={contentContainerCss(data)}>
          <Content
            label = {data.label}
            headline = {data.headline}
            subhead = {data.subhead}
            body = {data.body}
            buttons = {data.buttons}
            labelStyles = {data.style?.labelStyles}
            headlineStyles = {data.style?.headlineStyles}
            subheadStyles = {data.style?.subheadStyles}
            textStyles = {data.style?.textStyles}
            alignment = {data.style?.alignment}
            order = {data.style?.contentOrder}
            width = "w-full"
            parentField={parentField}
          />
        </div>
      </div>
    </Section>
  );
};
