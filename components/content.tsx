import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "./buttons";
import { tinaField } from "tinacms/dist/react";

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
  buttonsLayout,
  width,
  parentField,
  className = ""
}) => {
  // The first block gets an h1, others get an h2
  const headlineElement = () => {
    if (data?.headline && parentField === 'blocks.0') {
      return <h1 className={`${styles.headlineStyles}`} data-tina-field={tinaField(data, "headline")}>{data.headline}</h1>
    } else if (data?.headline) {
      return <h2 className={`${styles.headlineStyles}`} data-tina-field={tinaField(data, "headline")}>{data.headline}</h2>
    }
  }
  return (
    <div className={`flex flex-col ${width} ${alignment} ${className}`}>
      {data?.label &&<h4 className={`${styles.labelStyles}`} data-tina-field={tinaField(data, "label")}>{data.label}</h4>}
      {headlineElement()}
      {data?.subhead && <h3 className={`${styles.subheadStyles}`} data-tina-field={tinaField(data, "subhead")}>{data.subhead}</h3>}
      {data?.body?.children?.length > 0 && (
        <div className={`markdown items-center ${styles.textStyles}`} data-tina-field={tinaField(data, "body")}>
          <TinaMarkdown content={data.body} />
        </div>
      )}
      {data?.buttons && (
        <Buttons
          layout={buttonsLayout}
          buttons={data.buttons}
          className={`${buttonAlignment(alignment)}`}
        />
      )}
    </div>
  );
};
