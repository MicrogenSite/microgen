import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Buttons } from "./buttons";

const buttonAlignment = (alignment) => {
  const alignmentClass = alignment?.split(" ").find(item => item.includes("text-")) || ""
  const textAlignments = {
    "text-left": "",
    "text-center": "mx-auto",
    "text-right": "ml-auto",
  };
  return textAlignments[alignmentClass];
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
  label,
  headline,
  subhead,
  body,
  buttons,
  labelStyles,
  headlineStyles,
  subheadStyles,
  textStyles,
  alignment,
  order,
  width,
  parentField,
  className = ""
}) => {
  return (
    <div className={`flex flex-col ${width} ${className}`}>
      {label &&<h4 className={`${labelOrder(order)} ${labelStyles}`} data-tinafield={`${parentField}.label`}>{label}</h4>}
      {headline && <h2 className={`${headingOrder(order)} ${headlineStyles}`} data-tinafield={`${parentField}.headline`}>{headline}</h2>}
      {subhead && <h3 className={`${subheadOrder(order)} ${subheadStyles}`} data-tinafield={`${parentField}.subhead`}>{subhead}</h3>}
      {body?.children && (
        <div className={`markdown items-center ${bodyOrder(order)} ${textStyles}`} data-tinafield={`${parentField}.body`}>
          <TinaMarkdown content={body} />
        </div>
      )}
      {buttons && (
        <Buttons
          buttons={buttons}
          className={`${buttonAlignment(alignment)} order-4`}
          parentField={`${parentField}.buttons`}
        />
      )}
    </div>
  );
};
