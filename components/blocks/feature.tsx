import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

/* Return the string with any word containing the substring removed */
const removeSubstring = (value: string, substring: string) => {
  return value?.split(" ").filter(item => item.indexOf(substring) === -1).join(" ") || ""
}

const contentWrapClasses = (data) => {
  const widthClass: string = data.style?.featureContent?.split(" ").find(item => item.includes("w-")) || ""
  const alignmentClasses: string[] = data?.style?.alignment?.split(" ") || []
  const leftImage = alignmentClasses.includes('flex-row')
  const vertical: boolean = alignmentClasses.some(item => ["flex-col", "flex-col-reverse"].includes(item))
  const contentToEdge: boolean  = data.style?.featureContent?.split(" ").find(item => item === "to-edge")

  // Width Classes
  let widthClasses = ""
  if (vertical && contentToEdge) {
    widthClasses = `w-full`
  } else if (vertical && !contentToEdge) {
      widthClasses = `w-full max-w-site-full`
  } else if (!contentToEdge) {
    widthClasses = `${widthClass} ${widthClass.replace("w-","max-w-site-")}`
  } else if (contentToEdge) {
    widthClasses = `${widthClass} ${widthClass.replace("w-","w-edge-")}`
  }

  // Margin classes
  let marginClasses = ""
  if (vertical) {
    marginClasses = `mx-auto`
  } else if (!contentToEdge) {
    marginClasses = leftImage ? `mr-auto` : `ml-auto`
  }

  // Padding Classes
  const paddingClasses = data.style?.padding

  return `sm:w-full ${paddingClasses} ${widthClasses} ${marginClasses}`
}

const contentWidth = (data) => {
  const widthClass: string = data.style?.featureContent?.split(" ").find(item => item.includes("w-"))
  const alignmentClasses: string[] = data?.style?.alignment?.split(" ") || []
  const vertical: boolean = alignmentClasses.some(item => ["flex-col", "flex-col-reverse"].includes(item))
  const widthClasses = vertical ? widthClass : "w-full"

  return `sm:w-full ${widthClasses}`
}

const contentMargin = (data) => {
  const alignmentClasses: string[] = data?.style?.alignment?.split(" ") || []
  const alignmentClass: string = alignmentClasses.find( item => item.includes("-vertical") )
  const marginToAlignment = {
    "items-start-vertical": "mr-auto",
    "items-center-vertical": "mx-auto",
    "items-end-vertical": "ml-auto",
  }
  return marginToAlignment[alignmentClass] || ""
}

const imageWrapClasses = (data) => {
  const alignmentClasses: string[] = data.style?.alignment?.split(" ") || []
  const contentWidthClass: string = data.style?.featureContent?.split(" ").find(item => item.includes("w-"))
  const shouldStretch: boolean = data.style?.featureImage?.split(" ").some(item => ["object-cover", "object-contain"].includes(item))
  const leftImage = alignmentClasses.includes('flex-row')
  const vertical: boolean = alignmentClasses.some(item => ["flex-col", "flex-col-reverse"].includes(item))
  const imageToEdge: boolean = data.style?.featureImage?.split(" ").find(item => item === "to-edge")
  const inverseWidths = {
    "w-1/5": "w-4/5",
    "w-1/4": "w-3/4",
    "w-1/3": "w-2/3",
    "w-1/2": "w-1/2",
    "w-2/3": "w-1/3",
    "w-3/4": "w-1/4",
    "w-4/5": "w-1/5",
    "w-full": "w-0",
  }
  const widthClass = inverseWidths[contentWidthClass] || "";

  // Width classes
  let widthClasses = ""
  if (vertical && imageToEdge) {
    widthClasses = `w-full`
  } else if (vertical && !imageToEdge) {
    widthClasses = `w-full max-w-site-full`
  } else if (!imageToEdge) {
    widthClasses = `${widthClass} ${widthClass.replace("w-","max-w-site-")}`
  } else if (imageToEdge) {
    widthClasses = `${widthClass} ${widthClass.replace("w-","w-edge-")}`
  }
  
  // Margin classes
  let marginClasses = ""
  if (vertical) {
    marginClasses = `mx-auto`
  } else if (!imageToEdge) {
    marginClasses = leftImage ? `ml-auto` : `mr-auto`
  }
  
  const padding = data.style?.imagePadding
  const stretch = shouldStretch ? "self-stretch" : ""

  return `sm:w-full relative ${padding} ${stretch} ${widthClasses} ${marginClasses}`
}

const imgClasses = (data) => {
  const alignmentClasses: string[] = data.style?.alignment?.split(" ") || []
  const contentWidthClass: string = data.style?.featureContent?.split(" ").find(item => item.includes("w-"))
  const vertical: boolean = alignmentClasses.some(item => ["flex-col", "flex-col-reverse"].includes(item))
  const shouldStretch = ["object-cover", "object-contain"].some(item => data.style?.featureImage?.includes(item));
  const height = shouldStretch ? "absolute inset-0 h-full" : ""
  const horizontalLayoutWidth = shouldStretch ? "w-full" : "w-auto"
  const verticalLayoutWidth = shouldStretch ? "w-auto" : `${contentWidthClass}`
  const width = vertical ? verticalLayoutWidth : horizontalLayoutWidth
  const classes = removeSubstring(data.style.featureImage, "to-edge")

  // Margin
  const alignmentClass: string = alignmentClasses.find( item => item.includes("-vertical") )
  const marginToAlignment = {
    "items-start-vertical": "mr-auto",
    "items-center-vertical": "mx-auto",
    "items-end-vertical": "ml-auto",
  }
  const margin = marginToAlignment[alignmentClass] || ""

  return `sm:w-full ${margin} ${width} ${height} ${classes}`;
};


export const Feature = ({ data, parentField = "" }) => {
  const minHeight = data.style?.featureContent?.split(" ").find(item => item.includes("min-h-"))
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`relative flex sm:flex-col ${data.style?.alignment} ${minHeight}`}>
        <div className={imageWrapClasses(data)}>
          {data.image?.src && (
            <img
              className={`${imgClasses(data)}`}
              alt={data.image?.alt}
              src={data.image?.src}
              data-tinafield={`${parentField}.image`}
            />
          )}
        </div>
        <div className={contentWrapClasses(data)}>
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
            width = {contentWidth(data)}
            parentField = {parentField}
            className = {contentMargin(data)}
          />
        </div>
      </div>
    </Section>
  );
};
