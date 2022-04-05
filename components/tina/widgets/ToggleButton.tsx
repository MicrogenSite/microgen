import React from 'react';

interface ToggleButtonProps {
  options: {
    label: string,
    value: string
  }[];
  onClick: Function;
  value: string;
  className?: string;
}
export default function ToggleButton(props:ToggleButtonProps) {
  const isActive = props.options[0].value === props.value && props.value != undefined;

  function handleClick() {
    const optionValue = props.options[0].value;
    const value = props.value
    const newValue = (value === optionValue) ? "" : optionValue;
    props.onClick(newValue);
  }

  const buttonClasses = `${props.className} py-1 px-2 h-10 bg-white border font-bold border-gray-100 text-gray-500 text-sm shadow rounded-md hover:text-blue-400 hover:border-gray-200 focus:shadow-outline focus:border-blue-500 focus:text-blue-500`;
  const buttonStyles = {
    borderColor: "var(--tina-color-grey-2)",
    color: isActive ? "var(--tina-color-primary)" : "var(--tina-color-grey-8)",
  }

  return (
    <button onClick={handleClick}  className={buttonClasses} style={buttonStyles}>{props.options[0].label}</button>
  )
}