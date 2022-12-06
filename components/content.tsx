import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "./buttons";

const buttonAlignment = (alignment) => {
  const alignmentClasses: string[] = alignment?.split(" ").filter(item => item.includes("text-")) || []
  const textAlignments = {
    "text-left": "",
    "text-center": "mx-auto",
    "text-right": "ml-auto",
    "sm:text-left": "sm:ml-0 sm:mr-auto",
    "sm:text-center": "sm:mx-auto",
    "sm:text-right": "sm:ml-auto sm:mr-0",
  };
  return alignmentClasses.map(item => textAlignments[item]).join(' ')
};

export const Content = ({
  data,
  styles,
  alignment,
  width,
  parentField,
  className = ""
}) => {
  // The first block gets an h1, others get an h2
  const headlineElement = () => {
    if (data?.headline && parentField === 'blocks.0') {
      return <h1 className={`${styles.headlineStyles}`} data-tinafield={`${parentField}.headline`}>{data.headline}</h1>
    } else if (data?.headline) {
      return <h2 className={`${styles.headlineStyles}`} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>
    }
  }
  return (
    <div className={`flex flex-col ${width} ${alignment} ${className}`}>
      {data?.label &&<h4 className={`${styles.labelStyles}`} data-tinafield={`${parentField}.label`}>{data.label}</h4>}
      {headlineElement()}
      {data?.subhead && <h3 className={`${styles.subheadStyles}`} data-tinafield={`${parentField}.subhead`}>{data.subhead}</h3>}
      {data?.body?.children && (
        <div className={`markdown items-center ${styles.textStyles}`} data-tinafield={`${parentField}.body`}>
          <TinaMarkdown content={data.body} />
        </div>
      )}
      {data?.buttons && (
        <Buttons
          buttons={data.buttons}
          className={`${buttonAlignment(alignment)} order-4`}
          parentField={`${parentField}.buttons`}
        />
      )}
    </div>
  );
};
