import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities';
import Control from './Control';
import IconPicker from './widgets/IconPicker';

const NumberGroup = ({value, label="", className="", onChange}) => {
  return (
    <div className={`relative pl-6 ${className}`}>
      <span className="absolute text-xs text-gray-300 font-bold top-3 left-0.5">{label}</span>
      <input value={value} onChange={onChange} type="number" step="1" placeholder="auto" className="border border-gray-100 shadow text-gray-500 text-sm p-1 pl-2 h-10 w-full rounded-md hover:border-gray-200 focus:border-blue-500" />
    </div>
  );
};

const margins = [
  { label: "margin-right", value: "mr-auto" },
  { label: "margin-center", value: "mx-auto" },
  { label: "margin-left", value: "ml-auto" },
]

function buildOptions(options: { label: string, value: string }[] = [], isMobile: boolean = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  const marginOptions = buildOptions(margins, isMobile)
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, inputValue));
  const getWidth = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}wpx-`))
  const [width, setWidth] = useState(getWidth() || "")
  const getHeight = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}wpx-`))
  const [height, setHeight] = useState(getHeight() || "")

  useEffect(() => {
    onUpdate(`${width} ${height} ${margin}`)
  }, [width, height, margin]);

  return (
    <div className="mb-4">
      <div className="grid grid-cols-3 gap-2">
        <NumberGroup value={width.replace(`${mobilePrefix}wpx-`, '')} label="W"  onChange={event => setWidth(`${mobilePrefix}wpx-${event.target.value}`)}  />
        <NumberGroup value={height.replace(`${mobilePrefix}hpx-`, '')} label="H" onChange={event => setHeight(`${mobilePrefix}hpx-${event.target.value}`)} />
        <IconPicker value={margin} onClick={value => setMargin(value)} options={marginOptions} menuPosition="right" className="flex-none" />
      </div>
      <input type="text" value={`${width} ${height} ${margin}`} className="hidden" />
    </div>
  )
}

export default function FeatureImageControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}