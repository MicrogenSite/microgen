import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import Control from './Control';
import IconGap from './icons/IconGap';
import IconGapVertical from './icons/IconGapVertical';
import IconPicker from './widgets/IconPicker';
import SelectMenu from './widgets/SelectMenu';

const layoutOptions = [
  { label: "left image", value: "flex-row"},
  { label: "right image", value: "flex-row-reverse"},
  { label: "top image", value: "flex-col"},
  { label: "bottom image", value: "flex-col-reverse"},
]
const contentAlignOptions = [
  { label: "items-start", value: "items-start"},
  { label: "items-center", value: "items-center"},
  { label: "items-end", value: "items-end"},
]
const contentAlignVerticalOptions = [
  { label: "items-start-vertical", value: "items-start-vertical"},
  { label: "items-center-vertical", value: "items-center-vertical"},
  { label: "items-end-vertical", value: "items-end-vertical"},
]
const gapOptions = [
  { label: "0", value: ""},
  { label: "4", value: "gap-1"},
  { label: "8", value: "gap-2"},
  { label: "16", value: "gap-4"},
  { label: "24", value: "gap-6"},
  { label: "32", value: "gap-8"},
  { label: "48", value: "gap-12"},
  { label: "80", value: "gap-20"},
  { label: "96", value: "gap-24"},
  { label: "112", value: "gap-28"},
  { label: "128", value: "gap-32"},
  { label: "160", value: "gap-40"},
  { label: "192", value: "gap-48"},
]

function buildOptions(options: {label: string, value: string }[] = [{label: '', value: ''}], isMobile: boolean = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const layoutOptionsPrefixed = buildOptions(layoutOptions, isMobile)
  const contentAlignOptionsPrefixed = buildOptions(contentAlignOptions, isMobile)
  const contentAlignVerticalOptionsPrefixed = buildOptions(contentAlignVerticalOptions, isMobile)
  const gapOptionsPrefixed = buildOptions(gapOptions, isMobile)
  const [layout, setLayout] = useState(getStyleMatch(layoutOptionsPrefixed, inputValue) || "flex-row");
  const [contentAlign, setContentAlign] = useState(getStyleMatch(contentAlignOptionsPrefixed, inputValue) || "items-start");
  const [contentAlignVertical, setContentAlignVertical] = useState(getStyleMatch(contentAlignVerticalOptionsPrefixed, inputValue) || "items-start-vertical");
  const [gap, setGap] = useState(getStyleMatch(gapOptionsPrefixed, inputValue) || "");

  useEffect(() => {
    onUpdate(`${layout} ${contentAlign} ${contentAlignVertical} ${gap}`)
  }, [layout, contentAlign, contentAlignVertical, gap]);

  return (
    <>
      <div className="flex gap-2 mb-2">
        <SelectMenu value={layout} onChange={setLayout} options={layoutOptionsPrefixed} className="w-1/2 shrink-0" />
        {layout.includes("row") && (
          <IconPicker value={contentAlign} onClick={value => setContentAlign(value)} options={contentAlignOptionsPrefixed} menuPosition="right" className="flex-1" />
        )}
        {layout.includes("col") && (
          <IconPicker value={contentAlignVertical} onClick={value => setContentAlignVertical(value)} options={contentAlignVerticalOptionsPrefixed} menuPosition="right" className="flex-1" />
        )}
        <div className="w-4 pl-2 pt-3">
          {layout.includes("row") && (
            <IconGap className="float-right" />
          )}
          {layout.includes("col") && (
            <IconGapVertical className="float-right" />
          )}
        </div>
        <SelectMenu value={gap} onChange={setGap} options={gapOptionsPrefixed} className="w-12" />
      </div>
      <input type="text" value={`${layout} ${contentAlign} ${contentAlignVertical} ${gap}`} className="hidden" />
    </>
  )
}

export default function AlignmentControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}
