import React from 'react';

interface SelectMenuProps {
  options: {
    label: string,
    value: string
  }[];
  onChange: Function;
  value: string;
  className?: string;
}
export default function SelectMenu(props:SelectMenuProps) {
  const optionElements = props.options.map((option) => {
    return <option value={option.value} key={option.value}>{option.label}</option>
  });
  
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  const selectClasses = `${props.className} border border-gray-100 text-gray-500 text-sm p-1 h-10 shadow rounded-md hover:text-blue-400 hover:border-gray-200 focus:shadow-outline focus:border-blue-500 focus:text-blue-500`;

  return (
    <select value={props.value} onChange={handleChange} className={selectClasses}>
        {optionElements}
    </select>
  )
}