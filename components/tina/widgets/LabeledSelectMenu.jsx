import React from 'react';
import SelectMenu from './SelectMenu';

export default function LabeledSelectMenu (props) {
  return (
    <div className="relative flex-1 pl-5">
      <span className="absolute text-xs text-gray-300 font-bold" style={{top: "12px", left: "2px"}}>{props.label}</span>
      <SelectMenu value={props.value} onChange={props.onChange} options={props.options} className="w-full" />
    </div>
  )
}