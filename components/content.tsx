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

const labelOrder = (order) => {
  const labelOrder = {
    labelHeadingsContent: "order-1",
    labelContentHeadings: "order-1",
    headingsLabelContent: "order-2",
    headingsContentLabel: "order-3",
    contentLabelHeadings: "order-2",
    contentHeadingsLabel: "order-3",
  };
  return `${labelOrder[order]}`;
}

const headingOrder = (order) => {
  const headingOrder = {
    labelHeadingsContent: "order-2",
    labelContentHeadings: "order-3",
    headingsLabelContent: "order-1",
    headingsContentLabel: "order-1",
    contentLabelHeadings: "order-3",
    contentHeadingsLabel: "order-2",
  };
  return `${headingOrder[order]}`;
}

const subheadOrder = (order) => {
  const subheadOrder = {
    labelHeadingsContent: "order-2",
    labelContentHeadings: "order-3",
    headingsLabelContent: "order-1",
    headingsContentLabel: "order-1",
    contentLabelHeadings: "order-3",
    contentHeadingsLabel: "order-2",
  };
  return `${subheadOrder[order]}`;
}

const bodyOrder = (order) => {
  const bodyOrder = {
    labelHeadingsContent: "order-3",
    labelContentHeadings: "order-2",
    headingsLabelContent: "order-3",
    headingsContentLabel: "order-2",
    contentLabelHeadings: "order-1",
    contentHeadingsLabel: "order-1",
  };
  return `${bodyOrder[order]}`;
}

export const Content = ({
  data,
  styles,
  alignment,
  width,
  parentField,
  className = ""
}) => {
  const order = styles.contentOrder

  // The first block gets an h1, others get an h2
  const headlineElement = () => {
    if (data?.headline && parentField === 'blocks.0') {
      return <h1 className={`${headingOrder(order)} ${styles.headlineStyles}`} data-tinafield={`${parentField}.headline`}>{data.headline}</h1>
    } else if (data?.headline) {
      return <h2 className={`${headingOrder(order)} ${styles.headlineStyles}`} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>
    }
  }
  return (
    <div className={`flex flex-col ${width} ${alignment} ${className}`}>
      {data?.label &&<h4 className={`${labelOrder(order)} ${styles.labelStyles}`} data-tinafield={`${parentField}.label`}>{data.label}</h4>}
      {headlineElement()}
      {data?.subhead && <h3 className={`${subheadOrder(order)} ${styles.subheadStyles}`} data-tinafield={`${parentField}.subhead`}>{data.subhead}</h3>}
      {data?.body?.children && (
        <div className={`${bodyOrder(order)} markdown items-center ${styles.textStyles}`} data-tinafield={`${parentField}.body`}>
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
