import React, { useState, useEffect } from 'react';
import SelectMenu from './widgets/SelectMenu';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import Control from './Control';

function buildOptions(field, isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  const options = field.options.filter(item => item.value !== "")
  return prefixSelectValues(options, `${mobilePrefix}`)
}

export default function SelectField({ field, input }) {
  const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
    const options = buildOptions(field, isMobile)
    const [selected, setSelected] = useState(getStyleMatch(options, inputValue))
    
    useEffect(() => {
      onUpdate(`${selected}`)
    }, [selected]);

    return (
      <>
        <div className="flex gap-2">
          <SelectMenu value={selected} onChange={setSelected} options={options} className="w-full" />
        </div>
        <input type="text" defaultValue={`${selected}`} className="hidden" />
      </>
    )
  }

  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}