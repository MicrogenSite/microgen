import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities';
import Control from './Control';
import IconPicker from './widgets/IconPicker';
import UnitField from './widgets/UnitField';

const margins = [
  { label: "object-left-top", value: "object-left-top" },
  { label: "object-top", value: "object-top" },
  { label: "object-right-top", value: "object-right-top" },
  { label: "object-left", value: "object-left" },
  { label: "object-center", value: "object-center" },
  { label: "object-right", value: "object-right" },
  { label: "object-left-bottom", value: "object-left-bottom" },
  { label: "object-bottom", value: "object-bottom" },
  { label: "object-right-bottom", value: "object-right-bottom" },
]

const fits = [
  { label: "lock", value: "object-fill" },
  { label: "crop", value: "object-cover" },
]

function buildOptions(options = [{label: '', value: ''}], isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const mobilePrefix = isMobile ? 'sm:' : ''
  const marginOptions = buildOptions(margins, isMobile)
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, inputValue));
  const fitOptions = buildOptions(fits, isMobile)
  const [fit, setFit] = useState(getStyleMatch(fitOptions, inputValue));
  const getWidth = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}w-`))
  const [width, setWidth] = useState(getWidth() || "")
  const getHeight = () => inputValue.split(' ').find(item => item.includes(`${mobilePrefix}h-`))
  const [height, setHeight] = useState(getHeight() || "")

  useEffect(() => {
    onUpdate(`${width} ${height} ${margin} ${fit}`)
  }, [width, height, margin, fit]);

  return (
    <div className="">
      <div className="flex items-center gap-2">
        <UnitField value={width.replace(`${mobilePrefix}w-`, '')} label="W"  onChange={(value) => setWidth(`${mobilePrefix}w-${value}`)} className="flex-1" />
        <UnitField value={height.replace(`${mobilePrefix}h-`, '')} label="H" onChange={(value) => setHeight(`${mobilePrefix}h-${value}`)} className="flex-1" />
        <IconPicker value={fit} onClick={value => setFit(value)} options={fitOptions} menuPosition="right" />
        <IconPicker value={margin} onClick={value => setMargin(value)} options={marginOptions} menuPosition="right" />
      </div>
      <input type="text" defaultValue={`${width} ${height} ${margin}`} className="hidden" />
    </div>
  )
}

export default function ImageControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}