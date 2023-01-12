import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import Control from './Control';
import IconGap from './icons/IconGap';
import IconPicker from './widgets/IconPicker';
import SelectMenu from './widgets/SelectMenu';

const columnOptions = [
  { label: "1 Column", value: "grid-cols-1"},
  { label: "2 Columns", value: "grid-cols-2"},
  { label: "3 Columns", value: "grid-cols-3"},
  { label: "4 Columns", value: "grid-cols-4"},
  { label: "5 Columns", value: "grid-cols-5"},
  { label: "6 Columns", value: "grid-cols-6"},
  { label: "7 Columns", value: "grid-cols-7"},
  { label: "8 Columns", value: "grid-cols-8"},
]
const contentAlignOptions = [
  { label: "items-start-vertical", value: "justify-start"},
  { label: "items-center-vertical", value: "justify-center"},
  { label: "items-end-vertical", value: "justify-end"},
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

function buildOptions(options: {label: string, value: string }[] = [{label: '', value: ''}], isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const columnOptionsPrefixed = buildOptions(columnOptions, isMobile)
  const contentAlignOptionsPrefixed = buildOptions(contentAlignOptions, isMobile)
  const gapOptionsPrefixed = buildOptions(gapOptions, isMobile)
  
  const [columns, setColumns] = useState(getStyleMatch(columnOptionsPrefixed, inputValue) || "grid-cols-1");
  const [contentAlign, setContentAlign] = useState(getStyleMatch(contentAlignOptionsPrefixed, inputValue) || "items-start");
  const [gap, setGap] = useState(getStyleMatch(gapOptionsPrefixed, inputValue) || "");

  useEffect(() => {
    onUpdate(`${columns} ${contentAlign} ${gap}`)
  }, [columns, contentAlign, gap]);

  return (
    <>
      <div className="flex gap-2">
        <div className="flex-1">
          <SelectMenu value={columns} onChange={setColumns} options={columnOptionsPrefixed} className="w-full" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-6 pl-2 pt-3">
            <IconGap className="float-right" />
          </div>
          <SelectMenu value={gap} onChange={setGap} options={gapOptionsPrefixed} className="flex-1" />  
        </div>
        <IconPicker value={contentAlign} onClick={value => setContentAlign(value)} options={contentAlignOptionsPrefixed} menuPosition="right" />
      </div>
      <input type="text" defaultValue={`${columns} ${contentAlign} ${gap}`} className="hidden" />
    </>
  )
}

export default function GridControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}
