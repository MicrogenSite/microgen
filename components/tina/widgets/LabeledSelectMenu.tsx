import React from 'react';
import SelectMenu from './SelectMenu';

interface props {
  label: string
  value: string
  options: {
    label: string,
    value: string
  }[];
  onChange: Function;
  className?: string;
}

export default function LabeledSelectMenu (props:props) {
  return (
    <div className="relative flex-1 pl-5">
      <span className="absolute text-xs text-gray-300 font-bold top-3 left-0.5">{props.label}</span>
      <SelectMenu value={props.value} onChange={props.onChange} options={props.options} className="w-full" />
    </div>
  )
}