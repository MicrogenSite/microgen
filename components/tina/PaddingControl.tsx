import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import { spacingOptions } from './options/options'
import Control from './Control';
import LabeledSelectMenu from './widgets/LabeledSelectMenu';

function buildOptions(prefix: string = '', isMobile:boolean = false) {
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
      <div className="flex gap-2 mb-2">
        <LabeledSelectMenu label="T" value={top} onChange={setTop} options={topOptions} />
        <LabeledSelectMenu label="B" value={bottom} onChange={setBottom} options={bottomOptions} />
        <LabeledSelectMenu label="L" value={left} onChange={setLeft} options={leftOptions} />
        <LabeledSelectMenu label="R" value={right} onChange={setRight} options={rightOptions} />
      </div>
      <input type="text" value={`${top} ${bottom} ${right} ${left}`} className="hidden" />
    </>
  )
}

export default function PaddingControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}