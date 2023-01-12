import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import Control from './Control';
import IconGap from './icons/IconGap';
import IconGapVertical from './icons/IconGapVertical';
import IconPicker from './widgets/IconPicker';
import SelectMenu from './widgets/SelectMenu';

const layoutOptions = [
  { label: "right content", value: "flex-row"},
  { label: "left content", value: "flex-row-reverse"},
  { label: "bottom content", value: "flex-col"},
  { label: "top content", value: "flex-col-reverse"},
]
const contentAlignOptions = [
  { label: "items-start", value: "items-start"},
  { label: "items-center", value: "items-center"},
  { label: "items-end", value: "items-end"},
]
const contentAlignVerticalOptions = [
  { label: "items-start-vertical", value: "items-start"},
  { label: "items-center-vertical", value: "items-center"},
  { label: "items-end-vertical", value: "items-end"},
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
const textAlignments = [
  { label: "text-left", value: "text-left"},
  { label: "text-center", value: "text-center"},
  { label: "text-right", value: "text-right"},
]

function buildOptions(options: {label: string, value: string }[] = [{label: '', value: ''}], isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const layoutOptionsPrefixed = buildOptions(layoutOptions, isMobile)
  const contentAlignOptionsPrefixed = buildOptions(contentAlignOptions, isMobile)
  const contentAlignVerticalOptionsPrefixed = buildOptions(contentAlignVerticalOptions, isMobile)
  const gapOptionsPrefixed = buildOptions(gapOptions, isMobile)
  const textAlignmentOptions = buildOptions(textAlignments, isMobile)
  const [layout, setLayout] = useState(getStyleMatch(layoutOptionsPrefixed, inputValue) || "flex-row");
  const [contentAlign, setContentAlign] = useState(getStyleMatch(contentAlignOptionsPrefixed, inputValue) || "items-start");
  const [gap, setGap] = useState(getStyleMatch(gapOptionsPrefixed, inputValue) || "");
  const [textAlignment, setTextAlignment] = useState(getStyleMatch(textAlignmentOptions, inputValue));

  useEffect(() => {
    onUpdate(`${layout} ${contentAlign} ${gap} ${textAlignment}`)
  }, [layout, contentAlign, gap, textAlignment]);

  return (
    <>
      <div className="flex gap-2">
        <div className="flex-1">
          <SelectMenu value={layout} onChange={setLayout} options={layoutOptionsPrefixed} className="w-full" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-6 pl-2 pt-3">
            {layout.includes("row") && (
              <IconGap className="float-right" />
            )}
            {layout.includes("col") && (
              <IconGapVertical className="float-right" />
            )}
          </div>
          <SelectMenu value={gap} onChange={setGap} options={gapOptionsPrefixed} className="flex-1" />  
        </div>
        {layout.includes("row") && (
          <IconPicker value={contentAlign} onClick={value => setContentAlign(value)} options={contentAlignOptionsPrefixed} menuPosition="right" />
        )}
        {layout.includes("col") && (
          <IconPicker value={contentAlign} onClick={value => setContentAlign(value)} options={contentAlignVerticalOptionsPrefixed} menuPosition="right" />
        )}
        <IconPicker value={textAlignment} onClick={value => setTextAlignment(value)} options={textAlignmentOptions} menuPosition="right" />
      </div>
      <input type="text" defaultValue={`${layout} ${contentAlign} ${gap}`} className="hidden" />
    </>
  )
}

export default function CardAlignmentControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}
