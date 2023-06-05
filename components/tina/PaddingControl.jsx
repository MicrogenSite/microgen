import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import Control from './Control';
import LabeledSelectMenu from './widgets/LabeledSelectMenu';

export const spacingOptions = [
  { label: "0", value: "0" },
  { label: "1", value: "px" },
  { label: "2", value: "0.5" },
  { label: "4", value: "1" },
  { label: "6", value: "1.5" },
  { label: "8", value: "2" },
  { label: "10", value: "2.5" },
  { label: "12", value: "3" },
  { label: "14", value: "3.5" },
  { label: "16", value: "4" },
  { label: "20", value: "5" },
  { label: "24", value: "6" },
  { label: "28", value: "7" },
  { label: "32", value: "8" },
  { label: "36", value: "9" },
  { label: "40", value: "10" },
  { label: "44", value: "11" },
  { label: "48", value: "12" },
  { label: "56", value: "14" },
  { label: "64", value: "16" },
  { label: "80", value: "20" },
  { label: "96", value: "24" },
  { label: "112", value: "28" },
  { label: "128", value: "32" },
  { label: "144", value: "36" },
  { label: "160", value: "40" },
  { label: "176", value: "44" },
  { label: "192", value: "48" },
  { label: "208", value: "52" },
  { label: "224", value: "56" },
  { label: "240", value: "60" },
  { label: "256", value: "64" },
  { label: "288", value: "72" },
  { label: "320", value: "80" },
  { label: "384", value: "96" },
]

function buildOptions(prefix = '', isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(spacingOptions, `${mobilePrefix}${prefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const topOptions = buildOptions(`pt-`, isMobile)
  const bottomOptions = buildOptions(`pb-`, isMobile)
  const rightOptions = buildOptions(`pr-`, isMobile)
  const leftOptions = buildOptions(`pl-`, isMobile)
  const [top, setTop] = useState(getStyleMatch(topOptions, inputValue))
  const [bottom, setBottom] = useState(getStyleMatch(bottomOptions, inputValue))
  const [right, setRight] = useState(getStyleMatch(rightOptions, inputValue))
  const [left, setLeft] = useState(getStyleMatch(leftOptions, inputValue))
  
  useEffect(() => {
    onUpdate(`${top} ${bottom} ${right} ${left}`)
  }, [top, bottom, right, left]);

  return (
    <>
      <div className="flex gap-2">
        <LabeledSelectMenu label="T" value={top} onChange={setTop} options={topOptions} />
        <LabeledSelectMenu label="B" value={bottom} onChange={setBottom} options={bottomOptions} />
        <LabeledSelectMenu label="L" value={left} onChange={setLeft} options={leftOptions} />
        <LabeledSelectMenu label="R" value={right} onChange={setRight} options={rightOptions} />
      </div>
      <input type="text" defaultValue={`${top} ${bottom} ${right} ${left}`} className="hidden" />
    </>
  )
}

export default function PaddingControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}