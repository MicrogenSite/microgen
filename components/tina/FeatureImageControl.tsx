import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities';
import Control from './Control';
import IconPicker from './widgets/IconPicker';
import PixelField from './widgets/PixelField';

const margins = [
  { label: "margin-right", value: "mr-auto" },
  { label: "margin-center", value: "mx-auto" },
  { label: "margin-left", value: "ml-auto" },
]

function buildOptions(options: { label: string, value: string }[] = [], isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  const marginOptions = buildOptions(margins, isMobile)
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, inputValue));
  const getWidth = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}wpx-`))
  const [width, setWidth] = useState(getWidth() || "")
  const getHeight = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}hpx-`))
  const [height, setHeight] = useState(getHeight() || "")

  useEffect(() => {
    onUpdate(`${width} ${height} ${margin}`)
  }, [width, height, margin]);

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <PixelField value={width.replace(`${mobilePrefix}wpx-`, '')} label="W"  onChange={event => setWidth(`${mobilePrefix}wpx-${event.target.value}`)} className="flex-1" />
        <PixelField value={height.replace(`${mobilePrefix}hpx-`, '')} label="H" onChange={event => setHeight(`${mobilePrefix}hpx-${event.target.value}`)} className="flex-1" />
        <IconPicker value={margin} onClick={value => setMargin(value)} options={marginOptions} menuPosition="right" />
      </div>
      <input type="text" value={`${width} ${height} ${margin}`} className="hidden" />
    </div>
  )
}

export default function FeatureImageControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}